// Vercel serverless function — POST /api/contact
// Variables d'environnement (dashboard Vercel → Settings → Environment Variables) :
//   RESEND_API_KEY   clé sur https://resend.com/api-keys
//   CONTACT_TO_EMAIL email qui reçoit les demandes
//   CONTACT_FROM     (optionnel, après vérification du domaine sur Resend)
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Méthode non autorisée." });
  }

  const { name, email, project, site, options, total, message, _gotcha } = req.body || {};

  // Honeypot : les bots remplissent le champ invisible → faux succès
  if (_gotcha) return res.status(200).json({ ok: true });

  if (!name || !email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: "Nom et email valide requis." });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !to) {
    return res.status(500).json({ error: "Envoi non configuré." });
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
      from: process.env.CONTACT_FROM || "huitquatre <onboarding@resend.dev>",
      to: [to],
      reply_to: email,
      subject: `Nouveau projet : ${project} (${name})`,
      text,
    }),
  });

  if (!r.ok) {
    return res.status(502).json({ error: "Échec de l'envoi, réessayez." });
  }
  return res.status(200).json({ ok: true });
}
