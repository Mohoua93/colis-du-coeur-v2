// src/pages/Volunteer.jsx
import { useState } from "react";
import "../styles/volunteer.css";
import volunteerImage from "../assets/images/flyerVolunteer.jpeg";

function Volunteer() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    availability: "",
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
      const res = await fetch(`${API_BASE_URL}/api/volunteer`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Erreur lors de l'envoi du formulaire.");
      }

      setStatus({
        loading: false,
        success:
          "Merci pour votre engagement ! Nous vous contacterons prochainement.",
        error: null,
      });

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        availability: "",
        message: "",
        consent: false,
      });
    } catch (err) {
      console.error("❌ Erreur côté front lors de l'envoi :", err);

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
    <main className="volunteer-page">
      {/* HERO */}
      <section className="volunteer-hero">
        <div className="container volunteer-hero-layout">
          <div className="volunteer-hero-content">
            <span className="volunteer-label">Devenir bénévole</span>

            <h1>Donnez un peu de votre temps, offrez beaucoup d’espoir.</h1>

            <p>
              Chaque semaine, des familles, des étudiants et des personnes
              isolées viennent chercher un soutien auprès des Colis du Cœur.
              Derrière chaque action, il y a des bénévoles engagés qui rendent
              cette solidarité possible.
            </p>

            <div className="volunteer-hero-actions">
              <a href="#devenir-benevole" className="volunteer-btn volunteer-btn-primary">
                Remplir le formulaire
              </a>

              <a href="/nos-actions" className="volunteer-btn volunteer-btn-secondary">
                Découvrir nos actions
              </a>
            </div>
          </div>

          <div className="volunteer-hero-image">
            <img src={volunteerImage} alt="Flyer bénévolat Les Colis du Cœur" />
          </div>
        </div>
      </section>

      {/* MISSIONS */}
      <section className="volunteer-missions-section">
        <div className="container">
          <div className="volunteer-section-heading">
            <span className="volunteer-label">Pourquoi nous rejoindre ?</span>
            <h2>Une mission adaptée à chacun, selon son temps et ses envies.</h2>
          </div>

          <div className="volunteer-missions-grid">
            <article className="volunteer-mission-card">
              <div>📦</div>
              <h3>Préparer les colis</h3>
              <p>
                Aider à trier, organiser et préparer les colis alimentaires
                destinés aux familles et personnes accompagnées.
              </p>
            </article>

            <article className="volunteer-mission-card">
              <div>🤝</div>
              <h3>Distribuer & accueillir</h3>
              <p>
                Participer aux distributions, accueillir les bénéficiaires avec
                respect, écoute et bienveillance.
              </p>
            </article>

            <article className="volunteer-mission-card">
              <div>📣</div>
              <h3>Aider à l’organisation</h3>
              <p>
                Contribuer à la logistique, aux événements, à la communication
                ou aux actions solidaires ponctuelles.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* INTRO + FORM */}
      <section className="volunteer-form-section" id="devenir-benevole">
        <div className="container volunteer-form-layout">
          <aside className="volunteer-info-card">
            <span className="volunteer-label">S’engager avec nous</span>

            <h2>Votre présence peut faire la différence.</h2>

            <p>
              Que vous ayez une heure de temps en temps ou plusieurs
              demi-journées par mois, votre aide peut soutenir concrètement nos
              actions sur le terrain.
            </p>

            <div className="volunteer-info-list">
              <div>
                <strong>01</strong>
                <span>Préparation et distribution de colis</span>
              </div>

              <div>
                <strong>02</strong>
                <span>Accueil, écoute et accompagnement humain</span>
              </div>

              <div>
                <strong>03</strong>
                <span>Logistique, communication ou événements solidaires</span>
              </div>
            </div>
          </aside>

          <section className="volunteer-form-card">
            <div className="volunteer-form-heading">
              <span className="volunteer-label">Formulaire bénévole</span>

              <h2>Je souhaite m’engager</h2>

              <p>
                Indiquez-nous vos coordonnées et vos disponibilités. Nous vous
                contacterons pour vous présenter les besoins de l’association et
                voir ensemble comment vous pouvez participer.
              </p>
            </div>

            <form className="volunteer-form" onSubmit={handleSubmit}>
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

              <div className="form-two-columns">
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
                  <label htmlFor="phone">Téléphone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Optionnel"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="availability">Disponibilités principales</label>
                <select
                  id="availability"
                  name="availability"
                  value={formData.availability}
                  onChange={handleChange}
                >
                  <option value="">Sélectionner une option</option>
                  <option value="semaine">En semaine</option>
                  <option value="weekend">Le week-end</option>
                  <option value="semaine-weekend">
                    En semaine &amp; le week-end
                  </option>
                  <option value="ponctuel">De manière ponctuelle</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">
                  Message : compétences, envies, idées…
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Parlez-nous un peu de vous et de ce que vous aimeriez faire au sein de l'association."
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
                    pour me recontacter au sujet du bénévolat.
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="volunteer-submit"
                disabled={status.loading}
              >
                {status.loading ? "Envoi en cours..." : "Envoyer ma demande"}
              </button>

              {status.error && (
                <p className="volunteer-status-error">{status.error}</p>
              )}

              {status.success && (
                <p className="volunteer-status-success">{status.success}</p>
              )}
            </form>
          </section>
        </div>
      </section>
    </main>
  );
}

export default Volunteer;