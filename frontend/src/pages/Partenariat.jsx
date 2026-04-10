// src/pages/Partenariat.jsx
import "../styles/partenariat.css";

// ✅ Tu pourras remplacer ces imports par les vrais logos de tes partenaires
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
    tag: "E-commerce Esthétique",
  },
  {
    name: "LISSAGE CAVIAR",
    logo: partner5Logo,
    website: "https://www.partenaire5.fr",
    tag: "Salon de coiffure",
  },
  {
    name: "MAIRIE D'AULNAY SOUS BOIS",
    logo: partner6Logo,
    website: "https://www.aulnay-sous-bois.fr/",
    tag: "Hôtel de ville",
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
    tag: "Agence de communication digitale",
  },
  {
    name: "DEVOM",
    logo: partner9Logo,
    website: "https://www.devom.fr/",
    tag: "Créateur de site web",
  },

  
];

function Partenariat() {
  return (
    <section className="partners-page">
      <div className="container">
        <header className="partners-hero">
          <p className="partners-eyebrow">Ils marchent à nos côtés</p>
          <h1 className="partners-title">Nos partenaires</h1>
          <p className="partners-intro">
            Les Colis du Cœur peuvent agir grâce au soutien de partenaires
            engagés&nbsp;: commerçants, associations, institutions et entreprises
            qui choisissent de mettre leurs moyens au service de la solidarité.
          </p>
        </header>

        <section className="partners-grid-section">
          <h2 className="partners-section-title">
            Une chaîne de solidarité construite ensemble
          </h2>

          <div className="partners-grid">
            {partners.map((partner) => (
              <article key={partner.name} className="partner-card">
                <div className="partner-logo-wrapper">
                  <img
                    src={partner.logo}
                    alt={`Logo de ${partner.name}`}
                    className="partner-logo"
                  />
                </div>
                <div className="partner-content">
                  <p className="partner-name">{partner.name}</p>
                  {partner.tag && (
                    <p className="partner-tag">{partner.tag}</p>
                  )}
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
        </section>

        <section className="partners-cta">
          <h2>Devenir partenaire des Colis du Cœur</h2>
          <p>
            Vous êtes une entreprise, un commerce, une association ou une
            institution et vous souhaitez soutenir nos actions&nbsp;? Ensemble,
            nous pouvons construire des projets sur-mesure, adaptés à vos
            valeurs et à vos capacités.
          </p>
          <div className="partners-cta-buttons">
            <a href="/contact" className="partners-cta-btn primary">
              Nous contacter
            </a>
            <a href="/faire-un-don" className="partners-cta-btn ghost">
              Faire un don
            </a>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Partenariat;
