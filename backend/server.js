// backend/server.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://cdc-frontend-v2-c3sy.vercel.app"
    ]
  })
);

app.use(express.json());

// === CONFIG SMTP IONOS ===
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,                  // smtp.ionos.fr
  port: Number(process.env.SMTP_PORT),          // 587
  secure: Number(process.env.SMTP_PORT) === 465, // false pour 587
  auth: {
    user: process.env.SMTP_USER,                // contact@colisducoeur.fr
    pass: process.env.SMTP_PASS                 // mot de passe de la boîte IONOS
  },
  logger: true,
  debug: true
});

console.log("SMTP config utilisée :", {
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  user: process.env.SMTP_USER,
});

transporter.verify((error, success) => {
  if (error) {
    console.error("❌ Erreur SMTP lors du verify:", error);
  } else {
    console.log("✅ SMTP prêt pour l'envoi d'emails");
  }
});

const RECEIVER_EMAIL =
  process.env.VOLUNTEER_RECEIVER_EMAIL || process.env.SMTP_USER;

/* ===================== ROUTE FORMULAIRE BÉNÉVOLE ===================== */

app.post("/api/volunteer", async (req, res) => {
  const { fullName, email, phone, availability, message, consent } = req.body;

  console.log("📥 Données reçues du formulaire bénévole :", {
    fullName,
    email,
    phone,
    availability,
    consent,
    messagePreview: message?.slice(0, 80) || ""
  });

  if (!fullName || !email) {
    console.warn("⚠️ Requête bénévole invalide : nom ou email manquant");
    return res.status(400).json({
      error: "Nom et e-mail sont obligatoires."
    });
  }

  if (!consent) {
    console.warn("⚠️ Requête bénévole sans consentement");
    return res.status(400).json({
      error: "Le consentement est obligatoire."
    });
  }

  const htmlBody = `
    <h2>Nouvelle demande de bénévolat</h2>
    <p><strong>Nom :</strong> ${fullName}</p>
    <p><strong>Email :</strong> ${email}</p>
    <p><strong>Téléphone :</strong> ${phone || "Non renseigné"}</p>
    <p><strong>Disponibilités :</strong> ${availability || "Non renseigné"}</p>
    <p><strong>Message :</strong></p>
    <p>${message || "—"}</p>
  `;

  try {
    console.log("➡️ Envoi email bénévole vers :", RECEIVER_EMAIL);

    const info = await transporter.sendMail({
      from: `"Les Colis du Cœur" <${process.env.SMTP_USER}>`,
      to: RECEIVER_EMAIL,
      replyTo: email,
      subject: `Nouvelle demande de bénévole - ${fullName}`,
      html: htmlBody
    });

    console.log("✅ Résultat envoi bénévole :", {
      messageId: info.messageId,
      accepted: info.accepted,
      rejected: info.rejected,
      response: info.response
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("❌ Erreur lors de l'envoi du mail bénévole:", err);
    return res.status(500).json({
      error: "Erreur lors de l'envoi du mail, veuillez réessayer plus tard."
    });
  }
});

/* ===================== ROUTE FORMULAIRE CONTACT ===================== */

app.post("/api/contact", async (req, res) => {
  const { fullName, email, subject, message, consent } = req.body;

  console.log("📥 Données reçues du formulaire contact :", {
    fullName,
    email,
    subject,
    consent,
    messagePreview: message?.slice(0, 80) || ""
  });

  if (!fullName || !email || !subject) {
    console.warn("⚠️ Requête contact invalide : champ requis manquant");
    return res.status(400).json({
      error: "Nom, e-mail et sujet sont obligatoires."
    });
  }

  if (!consent) {
    console.warn("⚠️ Requête contact sans consentement");
    return res.status(400).json({
      error: "Le consentement est obligatoire."
    });
  }

  const htmlBody = `
    <h2>Nouveau message via le formulaire de contact</h2>
    <p><strong>Nom :</strong> ${fullName}</p>
    <p><strong>Email :</strong> ${email}</p>
    <p><strong>Sujet :</strong> ${subject}</p>
    <p><strong>Message :</strong></p>
    <p>${message || "—"}</p>
  `;

  try {
    console.log("➡️ Envoi email contact vers :", RECEIVER_EMAIL);

    const info = await transporter.sendMail({
      from: `"Les Colis du Cœur" <${process.env.SMTP_USER}>`,
      to: RECEIVER_EMAIL,
      replyTo: email,
      subject: `[Contact site] ${subject}`,
      html: htmlBody
    });

    console.log("✅ Résultat envoi contact :", {
      messageId: info.messageId,
      accepted: info.accepted,
      rejected: info.rejected,
      response: info.response
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("❌ Erreur lors de l'envoi du mail contact:", err);
    return res.status(500).json({
      error: "Erreur lors de l'envoi du message, veuillez réessayer plus tard."
    });
  }
});

/* ===================== LANCEMENT SERVEUR ===================== */

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`API bénévole démarrée sur http://localhost:${PORT}`);
});


