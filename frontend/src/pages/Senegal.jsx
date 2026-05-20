// src/pages/Senegal.js
import { Link } from "react-router-dom";
import "../styles/bangladesh.css";
import "../styles/senegal.css";

import senegalHero from "../assets/images/Senegal-hero.jpg";
import senegalPuits from "../assets/images/Senegal-puits.jpg";
import senegalColis from "../assets/images/Senegal-food.jpg";
import senegalCoran from "../assets/images/Senegal-coran.jpg";
import senegalMadrasa from "../assets/images/Madrasa-Sen.jpg";

const summaryCards = [
  {
    title: "Construction de puits d’eau",
    text: "Dans plusieurs localités, nous participons à la construction de puits d’eau potable pour rapprocher l’eau des habitations.",
    icon: "💧",
  },
  {
    title: "Colis alimentaires",
    text: "Nous distribuons des colis alimentaires contenant des denrées de base adaptées aux habitudes locales.",
    icon: "📦",
  },
  {
    title: "Dons de Corans",
    text: "En lien avec les acteurs locaux, nous organisons des dons de Corans lorsque le besoin est exprimé.",
    icon: "📖",
  },
  {
    title: "Soutien de madrassa",
    text: "Nous accompagnons des projets de construction, rénovation ou aménagement de salles de classe.",
    icon: "🏫",
  },
];

const actionBlocks = [
  {
    title: "Des puits pour un accès durable à l’eau",
    image: senegalPuits,
    alt: "Puits d'eau construit au Sénégal",
    reverse: false,
    paragraphs: [
      "Dans plusieurs villages du Sénégal, l’accès à l’eau demeure un enjeu quotidien. Les puits réalisés grâce à vos dons permettent de rapprocher l’eau des habitations et de réduire la fatigue liée aux trajets répétés.",
      "Ces infrastructures d’eau potable améliorent la vie quotidienne : hygiène, cuisine, lessive, mais aussi santé des enfants et des personnes les plus fragiles.",
    ],
  },
  {
    title: "Des colis alimentaires pour soutenir les familles",
    image: senegalColis,
    alt: "Distribution de colis alimentaires au Sénégal",
    reverse: true,
    paragraphs: [
      "Les colis alimentaires distribués au Sénégal contiennent des produits de base comme le riz, l’huile, le sucre ou encore des légumineuses, en fonction des besoins identifiés.",
      "Ils sont remis à des familles repérées par nos relais locaux, avec l’objectif de réduire l’insécurité alimentaire et d’apporter un soutien concret dans les périodes difficiles.",
    ],
  },
  {
    title: "Construction et soutien de madrassa",
    image: senegalMadrasa,
    alt: "Construction de madrassa au Sénégal",
    reverse: false,
    paragraphs: [
      "Au-delà de l’aide alimentaire et de l’accès à l’eau, nous accompagnons également des projets de construction, rénovation ou aménagement de salles de classe dans certaines localités du Sénégal.",
      "Ces lieux d’enseignement et d’apprentissage jouent un rôle central dans la vie communautaire : ils sont des espaces de transmission, de rencontre et de cohésion sociale.",
      "Chaque projet est mené en lien étroit avec les habitants, les responsables locaux et nos partenaires sur place, afin de répondre à des besoins réels et de garantir un impact durable.",
    ],
  },
  {
    title: "Dons de Corans dans un cadre encadré",
    image: senegalCoran,
    alt: "Distribution de Corans au Sénégal",
    reverse: true,
    paragraphs: [
      "Les dons de Corans au Sénégal sont réalisés avec prudence et responsabilité, en coordination avec des partenaires de confiance et des responsables locaux : mosquées, écoles ou associations.",
      "L’objectif est de répondre à des besoins exprimés sur place, sans sur-distribution, en veillant à ce que chaque Coran soit remis dans un environnement approprié, où il sera utilisé et respecté.",
    ],
  },
];

function Senegal() {
  return (
    <main className="country-page senegal-page">
      {/* HERO */}
      <section className="senegal-hero">
        <div className="container senegal-hero-layout">
          <div className="senegal-hero-content">
            <span className="senegal-label">Nos actions à l’international</span>

            <h1>Sénégal</h1>

            <p>
              Au Sénégal, Les Colis du Cœur agit aux côtés des familles en
              situation de précarité à travers des projets d’accès à l’eau, des
              distributions de colis alimentaires, des dons de Corans encadrés
              et des projets de soutien éducatif.
            </p>

            <div className="senegal-hero-actions">
              <Link to="/nos-actions" className="senegal-btn senegal-btn-secondary">
                ← Retour aux actions
              </Link>

              <Link to="/faire-un-don" className="senegal-btn senegal-btn-primary">
                Soutenir cette action
              </Link>
            </div>
          </div>

          <div className="senegal-hero-image">
            <img src={senegalHero} alt="Paysage et village au Sénégal" />
          </div>
        </div>
      </section>

      {/* RÉSUMÉ */}
      <section className="senegal-summary-section">
        <div className="container">
          <div className="senegal-section-heading">
            <span className="senegal-label">Ce que nous faisons</span>
            <h2>Des actions concrètes pour répondre aux besoins essentiels.</h2>
          </div>

          <div className="senegal-summary-grid">
            {summaryCards.map((card) => (
              <article className="senegal-summary-card" key={card.title}>
                <div>{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ACTIONS */}
      <section className="senegal-actions-section">
        <div className="container senegal-actions-list">
          {actionBlocks.map((block) => (
            <article
              className={`senegal-block ${
                block.reverse ? "senegal-block-reverse" : ""
              }`}
              key={block.title}
            >
              <div className="senegal-block-text">
                <span className="senegal-label">Action terrain</span>

                <h2>{block.title}</h2>

                {block.paragraphs.map((paragraph, index) => (
                  <p key={`${block.title}-${index}`}>{paragraph}</p>
                ))}
              </div>

              <div className="senegal-block-image">
                <img src={block.image} alt={block.alt} />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="senegal-final-cta">
        <div className="container senegal-final-card">
          <span>Envie de soutenir nos actions au Sénégal ?</span>

          <h2>Votre soutien permet de poursuivre ces projets sur le terrain.</h2>

          <p>
            Vos dons, vos partages et votre engagement nous permettent
            d’amplifier nos actions autour de l’eau, de l’aide alimentaire, de
            l’éducation et du soutien aux communautés locales.
          </p>

          <div className="senegal-final-actions">
            <Link to="/faire-un-don" className="senegal-btn senegal-btn-primary">
              Faire un don
            </Link>

            <Link to="/devenir-benevole" className="senegal-btn senegal-btn-secondary">
              Devenir bénévole
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Senegal;