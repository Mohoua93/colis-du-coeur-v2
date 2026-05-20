// src/pages/Cameroun.js
import { Link } from "react-router-dom";
import "../styles/bangladesh.css";
import "../styles/cameroun.css";

import camerounHero from "../assets/images/cameroun-hero.jpg";
import camerounColis from "../assets/images/cameroun-food.jpg";
import camerounCoran from "../assets/images/cameroun-coran.jpg";

const summaryCards = [
  {
    title: "Colis alimentaires",
    text: "Nous organisons des distributions de colis alimentaires pour apporter un soutien concret aux familles confrontées à la précarité.",
    icon: "📦",
  },
  {
    title: "Ramadan & Aïd",
    text: "Nous préparons des colis spéciaux pour permettre aux familles de vivre ces périodes importantes avec plus de sérénité et de dignité.",
    icon: "🌙",
  },
  {
    title: "Distribution de Corans",
    text: "En coordination avec des relais locaux, nous réalisons des dons de Corans dans les mosquées, écoles et familles qui en expriment le besoin.",
    icon: "📖",
  },
];

const actionBlocks = [
  {
    title: "Des colis alimentaires pour soulager le quotidien",
    image: camerounColis,
    alt: "Distribution de colis alimentaires au Cameroun",
    reverse: false,
    paragraphs: [
      "Au Cameroun, de nombreuses familles vivent dans une grande précarité. Les colis alimentaires que nous distribuons contiennent des produits de base adaptés aux habitudes locales : riz, huile, farine, légumineuses et autres produits essentiels.",
      "Ces distributions sont organisées avec l’aide de bénévoles et de partenaires locaux qui identifient les foyers les plus fragiles, afin que l’aide parvienne là où elle est réellement nécessaire.",
    ],
  },
  {
    title: "Distribution de Corans encadrée",
    image: camerounCoran,
    alt: "Distribution de Corans au Cameroun",
    reverse: true,
    paragraphs: [
      "Les dons de Corans au Cameroun se font en lien avec des acteurs de confiance sur place : responsables de mosquées, enseignants et associations locales.",
      "L’objectif est de répondre à une demande existante, dans un cadre respectueux, en veillant à ce que chaque exemplaire soit remis là où il sera utilisé, transmis et préservé.",
    ],
  },
];

function Cameroun() {
  return (
    <main className="country-page cameroun-page">
      {/* HERO */}
      <section className="country-hero-section">
        <div className="container country-hero-layout">
          <div className="country-hero-content">
            <span className="country-label">Nos actions à l’international</span>

            <h1>Cameroun</h1>

            <p>
              Au Cameroun, Les Colis du Cœur soutient les familles les plus
              vulnérables à travers des distributions de colis alimentaires, des
              colis spéciaux pour le Ramadan et l’Aïd, ainsi que la distribution
              de Corans lorsque le besoin est exprimé localement.
            </p>

            <div className="country-hero-actions">
              <Link to="/nos-actions" className="country-btn country-btn-secondary">
                ← Retour aux actions
              </Link>

              <Link to="/faire-un-don" className="country-btn country-btn-primary">
                Soutenir cette action
              </Link>
            </div>
          </div>

          <div className="country-hero-image country-hero-image-cameroun">
            <img src={camerounHero} alt="Quartier et familles au Cameroun" />
          </div>
        </div>
      </section>

      {/* SUMMARY */}
      <section className="country-summary-section">
        <div className="container">
          <div className="country-section-heading">
            <span className="country-label">Ce que nous faisons</span>
            <h2>Des actions solidaires pour accompagner les familles.</h2>
          </div>

          <div className="country-summary-grid">
            {summaryCards.map((card) => (
              <article className="summary-card" key={card.title}>
                <div className="summary-card-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ACTION BLOCKS */}
      <section className="country-actions-section">
        <div className="container country-actions-list">
          {actionBlocks.map((block) => (
            <article
              className={`country-block ${block.reverse ? "country-block-reverse" : ""}`}
              key={block.title}
            >
              <div className="country-block-text">
                <span className="country-label">Action terrain</span>
                <h2>{block.title}</h2>

                {block.paragraphs.map((paragraph, index) => (
                  <p key={`${block.title}-${index}`}>{paragraph}</p>
                ))}
              </div>

              <div className="country-block-image">
                <img src={block.image} alt={block.alt} />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="country-final-cta">
        <div className="container country-final-card">
          <span>Envie de soutenir nos actions au Cameroun ?</span>

          <h2>Votre soutien permet d’aider davantage de familles.</h2>

          <p>
            Grâce à votre aide, nous pouvons continuer à accompagner les familles
            vulnérables et développer des actions solidaires utiles sur le
            terrain.
          </p>

          <div className="country-final-actions">
            <Link to="/faire-un-don" className="country-btn country-btn-primary">
              Faire un don
            </Link>

            <Link to="/devenir-benevole" className="country-btn country-btn-secondary">
              Devenir bénévole
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Cameroun;