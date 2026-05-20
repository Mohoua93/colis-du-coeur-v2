// src/pages/Contact.js
import { useState } from "react";
import "../styles/contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
    consent: false,
  });

  const [status, setStatus] = useState({
    loading: false,
    success: null,
    error: null,
  });

  const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:4000";

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.consent) {
      setStatus({
        loading: false,
        success: null,
        error:
          "Merci de cocher la case d'autorisation de contact avant d'envoyer.",
      });
      return;
    }

    setStatus({ loading: true, success: null, error: null });

    try {
      const res = await fetch(`${API_BASE_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Erreur lors de l'envoi du message.");
      }

      setStatus({
        loading: false,
        success:
          "Merci pour votre message ! Nous reviendrons vers vous dès que possible.",
        error: null,
      });

      setFormData({
        fullName: "",
        email: "",
        subject: "",
        message: "",
        consent: false,
      });
    } catch (err) {
      console.error("❌ Erreur côté front (contact) :", err);

      setStatus({
        loading: false,
        success: null,
        error:
          err.message ||
          "Une erreur est survenue. Merci de réessayer dans quelques instants.",
      });
    }
  };

  return (
    <main className="contact-page">
      {/* HERO */}
      <section className="contact-hero">
        <div className="container contact-hero-layout">
          <div className="contact-hero-content">
            <span className="contact-label">Contact</span>

            <h1>Écrivez-nous, nous sommes à votre écoute.</h1>

            <p>
              Une question, une proposition de partenariat, une demande de don ou
              l’envie de rejoindre nos bénévoles ? Contactez Les Colis du Cœur,
              nous vous répondrons dans les meilleurs délais.
            </p>
          </div>

          <aside className="contact-hero-card">
            <span>Notre force</span>
            <strong>C’est vous.</strong>
            <p>
              Chaque message peut devenir une action, un partenariat ou un geste
              concret pour aider davantage de personnes.
            </p>
          </aside>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact-main-section">
        <div className="container contact-main-layout">
          <aside className="contact-info-card">
            <span className="contact-label">Informations</span>

            <h2>Comment nous joindre ?</h2>

            <p>
              Vous pouvez nous écrire via le formulaire. Pour une demande urgente
              ou une action terrain, privilégiez WhatsApp.
            </p>

            <div className="contact-info-list">
              <a href="tel:+33777381185" className="contact-info-item">
                <span>📞</span>
                <div>
                  <strong>Téléphone / WhatsApp</strong>
                  <small>07 77 38 11 85</small>
                </div>
              </a>

              <a
                href="mailto:Colisducoeurfr.projet@gmail.com"
                className="contact-info-item"
              >
                <span>✉️</span>
                <div>
                  <strong>Email</strong>
                  <small>contact@colisducoeur.fr</small>
                </div>
              </a>

              <div className="contact-info-item">
                <span>🤝</span>
                <div>
                  <strong>Motifs fréquents</strong>
                  <small>Don, bénévolat, partenariat, action solidaire</small>
                </div>
              </div>
            </div>
          </aside>

          <section className="contact-form-card">
            <div className="contact-form-heading">
              <span className="contact-label">Nous écrire</span>

              <h2>Envoyer un message</h2>

              <p>
                Remplissez les informations ci-dessous, et nous reviendrons vers
                vous rapidement.
              </p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="fullName">Nom &amp; prénom *</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Ex : Marie Dupont"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Adresse e-mail *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="vous@example.com"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Sujet *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Ex : Question sur les distributions"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Écrivez votre message ici."
                />
              </div>

              <div className="form-consent">
                <label>
                  <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                  />
                  <span>
                    J’accepte que Les Colis du Cœur utilise mes informations
                    pour répondre à ma demande de contact.
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="contact-submit"
                disabled={status.loading}
              >
                {status.loading ? "Envoi en cours..." : "Envoyer mon message"}
              </button>

              {status.error && (
                <p className="contact-status-error">{status.error}</p>
              )}

              {status.success && (
                <p className="contact-status-success">{status.success}</p>
              )}
            </form>
          </section>
        </div>
      </section>
    </main>
  );
}

export default Contact;