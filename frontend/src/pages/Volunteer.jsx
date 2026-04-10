<<<<<<< HEAD
import { useState } from "react";
import "../styles/volunteer.css";
import volunteerImage from "../assets/images/flyerVolunteer.jpeg";
=======
// src/pages/Volunteer.js
import { useState } from "react";
import "../styles/volunteer.css";
>>>>>>> f0dc4c9c671d1d144342d6adafc0cdf0ffbaaf90

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

<<<<<<< HEAD
=======
  // ✅ URL du backend :
  // - en local : REACT_APP_API_URL=http://localhost:4000
  // - en prod : REACT_APP_API_URL=https://ton-backend-render.onrender.com
>>>>>>> f0dc4c9c671d1d144342d6adafc0cdf0ffbaaf90
  const API_BASE_URL =
    process.env.REACT_APP_API_URL || "http://localhost:4000";

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("📤 Soumission du formulaire avec :", formData);

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
      const url = `${API_BASE_URL}/api/volunteer`;
      console.log("➡️ Envoi de la requête vers :", url);

      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log("📥 Réponse brute du backend :", res);

      const data = await res.json();
      console.log("📥 Body JSON du backend :", data);

      if (!res.ok) {
        throw new Error(data.error || "Erreur lors de l'envoi du formulaire.");
      }

      setStatus({
        loading: false,
        success:
          "Merci pour votre engagement ! Nous vous contacterons prochainement.",
        error: null,
      });

<<<<<<< HEAD
=======
      // Reset du formulaire
>>>>>>> f0dc4c9c671d1d144342d6adafc0cdf0ffbaaf90
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
<<<<<<< HEAD
    <section className="volunteer-page">
      <div className="container">
        <div className="volunteer-hero">
          <div className="volunteer-hero-image">
            <img src={volunteerImage} alt="Bénévoles de l'association" />
          </div>

          <div className="volunteer-hero-text">
            <h1 className="about-title">Devenez bénévole</h1>

            <div className="about-body">
              <p>
                Chaque semaine, des familles, des étudiants, des personnes
                isolées viennent chercher un soutien auprès des{" "}
                <strong>Colis du Cœur</strong>. Derrière chaque colis distribué,
                il y a des bénévoles qui donnent un peu de leur temps pour
                offrir beaucoup d&apos;espoir.
              </p>

              <p>
                Que vous ayez une heure de temps en temps ou plusieurs
                demi-journées par mois, votre présence peut faire la
                différence&nbsp;: préparer et distribuer les colis, accueillir
                les personnes, aider à la logistique, participer à la
                communication ou à l&apos;organisation d&apos;évènements
                solidaires… Il y a une mission adaptée à chacun.
              </p>

              <p>
                Rejoindre l&apos;équipe, c&apos;est faire partie d&apos;une
                aventure humaine, chaleureuse et concrète, au plus près du
                terrain. Ensemble, nous luttons contre la précarité et
                l&apos;isolement, avec bienveillance et dignité. Si vous avez
                envie d&apos;agir et de vous sentir utile, remplissez le
                formulaire ci-dessous&nbsp;: nous serons ravis
                d&apos;échanger avec vous.
              </p>
            </div>
          </div>
=======
    <section className="about-page">
      <div className="container">
        <h1 className="about-title">Devenez bénévole</h1>

        <div className="about-body">
          <p>
            Chaque semaine, des familles, des étudiants, des personnes isolées
            viennent chercher un soutien auprès des{" "}
            <strong>Colis du Cœur</strong>. Derrière chaque colis distribué, il
            y a des bénévoles qui donnent un peu de leur temps pour offrir
            beaucoup d&apos;espoir.
          </p>

          <p>
            Que vous ayez une heure de temps en temps ou plusieurs
            demi-journées par mois, votre présence peut faire la
            différence&nbsp;: préparer et distribuer les colis, accueillir les
            personnes, aider à la logistique, participer à la communication ou à
            l&apos;organisation d&apos;évènements solidaires… Il y a une mission
            adaptée à chacun.
          </p>

          <p>
            Rejoindre l&apos;équipe, c&apos;est faire partie d&apos;une aventure
            humaine, chaleureuse et concrète, au plus près du terrain. Ensemble,
            nous luttons contre la précarité et l&apos;isolement, avec
            bienveillance et dignité. Si vous avez envie d&apos;agir et de vous
            sentir utile, remplissez le formulaire ci-dessous&nbsp;: nous serons
            ravis d&apos;échanger avec vous.
          </p>
>>>>>>> f0dc4c9c671d1d144342d6adafc0cdf0ffbaaf90
        </div>

        <section className="volunteer-section" id="devenir-benevole">
          <h2 className="volunteer-title">Je souhaite m&apos;engager</h2>
          <p className="volunteer-intro">
            Indiquez-nous vos coordonnées et vos disponibilités. Nous vous
            contacterons pour vous présenter plus en détail les besoins de
            l&apos;association et voir ensemble comment vous pouvez participer.
          </p>

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
                Message (compétences, envies, idées…)
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
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
                  J&apos;accepte que Les Colis du Cœur utilise mes informations
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
              <p style={{ color: "red", marginTop: "0.5rem" }}>
                {status.error}
              </p>
            )}
<<<<<<< HEAD

=======
>>>>>>> f0dc4c9c671d1d144342d6adafc0cdf0ffbaaf90
            {status.success && (
              <p style={{ color: "green", marginTop: "0.5rem" }}>
                {status.success}
              </p>
            )}
          </form>
        </section>
      </div>
    </section>
  );
}

<<<<<<< HEAD
export default Volunteer;
=======
export default Volunteer;
>>>>>>> f0dc4c9c671d1d144342d6adafc0cdf0ffbaaf90
