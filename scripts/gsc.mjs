#!/usr/bin/env node
// Données Search Console via l'API, sans dépendance (JWT service account signé par Node).
// Usage : node scripts/gsc.mjs [dimensions] [jours]
//   dimensions : query | page | country | device, combinables avec une virgule (défaut : query)
//   jours      : période analysée (défaut : 90)
//   sites      : liste les propriétés accessibles (diagnostic 403)
// Env : GSC_SITE (ex. https://www.huitquatre.fr/ ou sc-domain:huitquatre.fr)
//       GSC_CREDENTIALS (chemin du JSON du service account)
// Sortie : gsc-<dimensions>-<jours>j.csv à la racine.

import { createPrivateKey, sign, generateKeyPairSync, verify } from "node:crypto";
import { readFileSync, writeFileSync } from "node:fs";

const SCOPE = "https://www.googleapis.com/auth/webmasters.readonly";
const TOKEN_URL = "https://oauth2.googleapis.com/token";
const DIMENSIONS = ["query", "page", "country", "device"];

const b64url = (value) =>
  Buffer.from(value).toString("base64url");

function buildJwt(clientEmail, privateKey, now = Math.floor(Date.now() / 1000)) {
  const header = b64url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const claims = b64url(
    JSON.stringify({
      iss: clientEmail,
      scope: SCOPE,
      aud: TOKEN_URL,
      iat: now,
      exp: now + 3600,
    })
  );
  const unsigned = `${header}.${claims}`;
  const signature = sign("RSA-SHA256", Buffer.from(unsigned), privateKey).toString("base64url");
  return `${unsigned}.${signature}`;
}

async function accessToken(creds) {
  const assertion = buildJwt(creds.client_email, createPrivateKey(creds.private_key));
  const res = await fetch(TOKEN_URL, {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion,
    }),
  });
  const body = await res.json();
  if (!res.ok) throw new Error(`Token refusé (${res.status}) : ${body.error_description ?? body.error}`);
  return body.access_token;
}

async function searchAnalytics(site, token, dimensions, days) {
  const end = new Date();
  const start = new Date(end.getTime() - days * 86_400_000);
  const iso = (date) => date.toISOString().slice(0, 10);

  const res = await fetch(
    `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(site)}/searchAnalytics/query`,
    {
      method: "POST",
      headers: { authorization: `Bearer ${token}`, "content-type": "application/json" },
      body: JSON.stringify({
        startDate: iso(start),
        endDate: iso(end),
        dimensions,
        rowLimit: 25_000,
      }),
    }
  );
  const body = await res.json();
  if (!res.ok) {
    const hint = res.status === 403
      ? ` Vérifiez que ${site} est bien une propriété du compte, et que le service account y a accès. Lancez « npm run gsc -- sites » pour lister les propriétés accessibles.`
      : "";
    throw new Error(`API ${res.status} : ${body.error?.message ?? res.statusText}.${hint}`);
  }
  return body.rows ?? [];
}

// Propriétés visibles par le service account : diagnostic d'un 403 de permission.
async function listSites(token, clientEmail) {
  const res = await fetch("https://www.googleapis.com/webmasters/v3/sites", {
    headers: { authorization: `Bearer ${token}` },
  });
  const body = await res.json();
  if (!res.ok) throw new Error(`API ${res.status} : ${body.error?.message ?? res.statusText}.`);

  const sites = body.siteEntry ?? [];
  if (sites.length === 0) {
    console.log(`Aucune propriété accessible pour ${clientEmail}.`);
    console.log("Ajoutez cette adresse dans Search Console → Paramètres → Utilisateurs et permissions.");
    return;
  }
  for (const site of sites) console.log(`${site.siteUrl}  (${site.permissionLevel})`);
  console.log(`\nGSC_SITE=… à utiliser pour l'une de ces propriétés.`);
}

const csvCell = (value) => {
  const text = String(value);
  return /[",\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
};

function toCsv(rows, dimensions) {
  const lines = [[...dimensions, "clics", "impressions", "ctr", "position"].join(",")];
  for (const row of rows) {
    lines.push(
      [
        ...row.keys.map(csvCell),
        row.clicks,
        row.impressions,
        row.ctr,
        row.position.toFixed(1),
      ].join(",")
    );
  }
  return "\uFEFF" + lines.join("\n") + "\n";
}

async function main() {
  const [rawCommand = "query", rawDays = "90"] = process.argv.slice(2);

  if (rawCommand === "--self-test") return selfTest();

  const credentialsPath = process.env.GSC_CREDENTIALS;
  if (!credentialsPath) throw new Error("GSC_CREDENTIALS manquant : indiquez le chemin du JSON du service account.");

  const creds = JSON.parse(readFileSync(credentialsPath, "utf8"));
  if (!creds.client_email || !creds.private_key) {
    throw new Error("JSON invalide : client_email et private_key attendus (clé de service account).");
  }

  const token = await accessToken(creds);
  if (rawCommand === "sites") return listSites(token, creds.client_email);

  const dimensions = rawCommand.split(",");
  const days = Number(rawDays);
  if (!dimensions.every((dimension) => DIMENSIONS.includes(dimension))) {
    throw new Error(`Commande inconnue « ${rawCommand} ». Choix : ${DIMENSIONS.join(", ")}, sites`);
  }
  if (!Number.isInteger(days) || days < 1) throw new Error(`Jours invalide « ${rawDays} ».`);

  const site = process.env.GSC_SITE ?? "https://www.huitquatre.fr/";
  const rows = await searchAnalytics(site, token, dimensions, days);
  const out = `gsc-${dimensions.join("-")}-${days}j.csv`;
  writeFileSync(out, toCsv(rows, dimensions));

  const clicks = rows.reduce((sum, row) => sum + row.clicks, 0);
  const impressions = rows.reduce((sum, row) => sum + row.impressions, 0);
  console.log(`${rows.length} lignes · ${site} · ${days} jours`);
  console.log(`${clicks} clics · ${impressions} impressions`);
  console.log(`→ ${out}`);
}

// Signe un JWT avec une clé jetable et vérifie la signature : valide le chemin risqué sans credentials.
function selfTest() {
  const { privateKey, publicKey } = generateKeyPairSync("rsa", { modulusLength: 2048 });
  const jwt = buildJwt("test@example.iam.gserviceaccount.com", privateKey, 1_700_000_000);
  const [header, claims, signature] = jwt.split(".");
  const unsigned = `${header}.${claims}`;
  const ok = verify("RSA-SHA256", Buffer.from(unsigned), publicKey, Buffer.from(signature, "base64url"));

  if (!ok) throw new Error("self-test : signature JWT invalide");
  if (JSON.parse(Buffer.from(header, "base64url")).alg !== "RS256") throw new Error("self-test : alg");
  if (JSON.parse(Buffer.from(claims, "base64url")).exp !== 1_700_003_600) throw new Error("self-test : exp");
  if (toCsv([{ keys: ['devis "site", avignon'], clicks: 1, impressions: 2, ctr: 0.5, position: 3.21 }], ["query"])
    .split("\n")[1] !== '"devis ""site"", avignon",1,2,0.5,3.2') throw new Error("self-test : csv");
  console.log("self-test ok");
}

main().catch((error) => {
  console.error(`Erreur : ${error.message}`);
  process.exitCode = 1;
});
