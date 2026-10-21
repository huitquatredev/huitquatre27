// Vercel serverless function — POST /api/contact
// Variables d'environnement (dashboard Vercel → Settings → Environment Variables) :
//   RESEND_API_KEY   clé sur https://resend.com/api-keys
//   CONTACT_TO_EMAIL email qui reçoit les demandes
//   CONTACT_FROM     expéditeur (ex. "huitquatre <contact@huitquatre.fr>")
//                    → le domaine doit être vérifié sur resend.com/domains
// ⚠️ Tester en local avec `vercel dev` (pas `astro dev`) : le dev server Astro
//    ne sert pas /api/*.  En prod : astro build + vercel deploy.
// ⚠️ Sans CONTACT_FROM on retombe sur onboarding@resend.dev, que Resend
//    n'autorise QUE vers la boîte du propriétaire du compte → 403 sinon.
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Méthode non autorisée." });
  }

  let body = req.body || {};
  if (typeof body === "string") {
    try { body = JSON.parse(body || "{}"); } catch { body = {}; }
  }
  const { name, email, project, site, options, total, message, _gotcha } = body;

  // Honeypot : les bots remplissent le champ invisible → faux succès
  if (_gotcha) return res.status(200).json({ ok: true });

  if (!name || !email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: "Nom et email valide requis." });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !to) {
    console.error("[contact] config Vercel manquante", {
      RESEND_API_KEY: Boolean(apiKey),
      CONTACT_TO_EMAIL: Boolean(to),
    });
    return res.status(500).json({ error: "Envoi non configuré." });
  }

  const from = process.env.CONTACT_FROM;
  if (!from) {
    console.warn("[contact] CONTACT_FROM absent → repli sur onboarding@resend.dev (domaine non vérifié, envoi limité à la boîte du compte)");
  }

  const text = [
    `Projet : ${project || "—"}`,
    `Site actuel : ${site || "—"}`,
    `Options : ${options || "—"}`,
    `Total estimé : ${total || "—"}`,
    `Contact : ${name} — ${email}`,
    ``,
    `Message :`,
    message || "—",
  ].join("\n");

  const r = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: from || "huitquatre <onboarding@resend.dev>",
      to: [to],
      reply_to: email,
      subject: `Nouveau projet : ${project} (${name})`,
      text,
    }),
  });

  if (!r.ok) {
    const detail = await r.text().catch(() => "");
    console.error("[contact] Resend a refusé l'envoi", r.status, detail);
    return res.status(502).json({ error: "Échec de l'envoi, réessayez." });
  }
  console.log("[contact] demande envoyée", { to, project, total });
  return res.status(200).json({ ok: true });
}
