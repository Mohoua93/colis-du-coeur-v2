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

  // backend local (à remplacer par REACT_APP_API_URL en prod)
  const API_BASE_URL = "http://localhost:4000";

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
    <section className="contact-page">
      <div className="container">
        <h1 className="contact-title">Contact</h1>

        <div className="contact-body">
          <p>
            Vous avez une question, une suggestion, une proposition de
            partenariat ou vous souhaitez simplement en savoir plus sur les{" "}
            <strong>Colis du Cœur</strong> ? N&apos;hésitez pas à nous écrire
            via ce formulaire. Nous essayons de répondre à chaque message dans
            les meilleurs délais.
          </p>
        </div>

        <section className="contact-section">
          <h2 className="contact-subtitle">Nous écrire</h2>
          <p className="contact-intro">
            Remplissez les informations ci-dessous, et nous reviendrons vers
            vous rapidement.
          </p>

          <form className="contact-form" onSubmit={handleSubmit}>
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
                rows="4"
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
                  J&apos;accepte que Les Colis du Cœur utilise mes informations
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
  );
}

export default Contact;


