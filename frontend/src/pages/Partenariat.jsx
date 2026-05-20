// src/pages/Partenariat.jsx
import { Link } from "react-router-dom";
import "../styles/partenariat.css";

import partner1Logo from "../assets/images/partner1-logo.jpeg";
import partner2Logo from "../assets/images/partner2-logo.jpeg";
import partner3Logo from "../assets/images/partner3-logo.jpeg";
import partner4Logo from "../assets/images/partner4-logo.jpeg";
import partner5Logo from "../assets/images/partner5-logo.jpeg";
import partner6Logo from "../assets/images/partner6-logo.jpeg";
import partner7Logo from "../assets/images/partner7-logo.png";
import partner8Logo from "../assets/images/partner8-logo.jpg";
import partner9Logo from "../assets/images/partner9-logo.png";

const partners = [
  {
    name: "DAR MOCCO",
    logo: partner1Logo,
    website: "https://www.instagram.com/p/DSAI7rwjN_I/",
    tag: "Restaurant marocain",
  },
  {
    name: "BILLY THERAPY",
    logo: partner2Logo,
    website: "https://www.partenaire2.fr",
    tag: "Salon bien-être",
  },
  {
    name: "HOME'LETTE",
    logo: partner3Logo,
    website: "https://homelette.commandes.io/home",
    tag: "Fast-food",
  },
  {
    name: "BEAUTY BY SAB",
    logo: partner4Logo,
    website: "https://www.instagram.com/beautybysab_paris/",
    tag: "E-commerce esthétique",
  },
  {
    name: "LISSAGE CAVIAR",
    logo: partner5Logo,
    website: "https://www.partenaire5.fr",
    tag: "Salon de coiffure",
  },
  {
    name: "MAIRIE D'AULNAY-SOUS-BOIS",
    logo: partner6Logo,
    website: "https://www.aulnay-sous-bois.fr/",
    tag: "Institution publique",
  },
  {
    name: "EASY JACUZZI",
    logo: partner7Logo,
    website: "https://www.facebook.com/easy.jacuzzi/",
    tag: "Location de jacuzzi à domicile",
  },
  {
    name: "ADSIS ACADEMY",
    logo: partner8Logo,
    website: "https://www.adsisacademy.fr/",
    tag: "Communication digitale",
  },
  {
    name: "DEVOM",
    logo: partner9Logo,
    website: "https://www.devom.fr/",
    tag: "Création de site web",
  },
];

function Partenariat() {
  return (
    <main className="partners-page">
      {/* HERO */}
      <section className="partners-hero">
        <div className="container partners-hero-layout">
          <div className="partners-hero-content">
            <span className="partners-label">Ils marchent à nos côtés</span>

            <h1>Nos partenaires solidaires</h1>

            <p>
              Les Colis du Cœur peuvent agir grâce au soutien de partenaires
              engagés : commerçants, associations, institutions et entreprises
              qui choisissent de mettre leurs moyens au service de la solidarité.
            </p>

            <div className="partners-hero-actions">
              <Link to="/contact" className="partners-btn partners-btn-primary">
                Devenir partenaire
              </Link>

              <Link to="/faire-un-don" className="partners-btn partners-btn-secondary">
                Faire un don
              </Link>
            </div>
          </div>

          <aside className="partners-hero-card">
            <span>Une chaîne humaine</span>
            <strong>{partners.length}</strong>
            <p>
              partenaires engagés qui contribuent, chacun à leur manière, à
              renforcer nos actions solidaires.
            </p>
          </aside>
        </div>
      </section>

      {/* INTRO */}
      <section className="partners-intro-section">
        <div className="container partners-intro-grid">
          <article className="partners-intro-card">
            <div>🤝</div>
            <h2>Agir ensemble</h2>
            <p>
              Chaque partenariat permet de renforcer nos actions et d’apporter
              une aide plus concrète aux personnes accompagnées.
            </p>
          </article>

          <article className="partners-intro-card">
            <div>🏢</div>
            <h2>Entreprises & commerces</h2>
            <p>
              Les structures locales peuvent contribuer par des dons, services,
              collectes, relais ou mises à disposition de moyens.
            </p>
          </article>

          <article className="partners-intro-card">
            <div>❤️</div>
            <h2>Impact solidaire</h2>
            <p>
              Un partenariat, c’est une action utile, visible et porteuse de
              sens pour les familles et personnes en difficulté.
            </p>
          </article>
        </div>
      </section>

      {/* PARTNERS GRID */}
      <section className="partners-grid-section">
        <div className="container">
          <div className="partners-section-heading">
            <span className="partners-label">Notre réseau</span>
            <h2>Une chaîne de solidarité construite ensemble.</h2>
          </div>

          <div className="partners-grid">
            {partners.map((partner) => (
              <article key={partner.name} className="partner-card">
                <a
                  href={partner.website}
                  target="_blank"
                  rel="noreferrer"
                  className="partner-logo-wrapper"
                  aria-label={`Visiter ${partner.name}`}
                >
                  <img
                    src={partner.logo}
                    alt={`Logo de ${partner.name}`}
                    className="partner-logo"
                  />
                </a>

                <div className="partner-content">
                  <span className="partner-tag">{partner.tag}</span>
                  <h3 className="partner-name">{partner.name}</h3>

                  {partner.website && (
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noreferrer"
                      className="partner-link"
                    >
                      Visiter le site →
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="partners-final-cta">
        <div className="container partners-final-card">
          <span>Devenir partenaire des Colis du Cœur</span>

          <h2>Construisons ensemble des actions solidaires utiles.</h2>

          <p>
            Vous êtes une entreprise, un commerce, une association ou une
            institution et vous souhaitez soutenir nos actions ? Ensemble, nous
            pouvons créer des projets sur-mesure, adaptés à vos valeurs et à vos
            capacités.
          </p>

          <div className="partners-final-actions">
            <Link to="/contact" className="partners-btn partners-btn-primary">
              Nous contacter
            </Link>

            <Link to="/faire-un-don" className="partners-btn partners-btn-secondary">
              Faire un don
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Partenariat;