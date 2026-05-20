// src/pages/Ouganda.js
import { Link } from "react-router-dom";
import "../styles/bangladesh.css";
import "../styles/ouganda.css";

import ougandaHero from "../assets/images/ouganda-hero.jpg";
import ougandaColis from "../assets/images/ouganda-food.jpg";
import ougandaOrphelinat from "../assets/images/ouganda-orphelinat.jpg";
import ougandaRamadanAid from "../assets/images/ouganda-ramadan-aïd.jpg";
import ougandaCoran from "../assets/images/ouganda-coran.jpg";

const summaryCards = [
  {
    title: "Colis alimentaires",
    text: "Organisation de distributions de colis alimentaires pour soutenir les familles frappées par la précarité.",
    icon: "📦",
  },
  {
    title: "Orphelinats",
    text: "Soutien matériel et alimentaire à des orphelinats pour améliorer le quotidien d’enfants sans soutien familial.",
    icon: "🏠",
  },
  {
    title: "Ramadan & Aïd",
    text: "Mise en place de colis spéciaux pour le Ramadan et l’Aïd afin que ces moments restent des temps de joie et de partage.",
    icon: "🌙",
  },
  {
    title: "Distribution de Corans",
    text: "Distribution de Corans dans un cadre encadré, en lien avec des partenaires et responsables locaux.",
    icon: "📖",
  },
];

const actionBlocks = [
  {
    title: "Des colis alimentaires pour soutenir les familles",
    image: ougandaColis,
    alt: "Distribution de colis alimentaires en Ouganda",
    reverse: false,
    paragraphs: [
      "Une partie importante de nos actions en Ouganda consiste à distribuer des colis alimentaires aux familles qui peinent à couvrir leurs besoins essentiels.",
      "Ces colis contiennent des produits de base adaptés aux habitudes locales et sont remis en priorité aux foyers les plus fragiles, identifiés avec l’aide de relais de confiance sur place.",
    ],
  },
  {
    title: "Soutien aux orphelinats",
    image: ougandaOrphelinat,
    alt: "Soutien à un orphelinat en Ouganda",
    reverse: true,
    paragraphs: [
      "En Ouganda, nous intervenons également auprès d’orphelinats qui manquent souvent de ressources pour assurer le quotidien des enfants : nourriture, hygiène, fournitures et petits équipements.",
      "Nos actions visent à améliorer le confort et la sécurité de ces enfants, tout en travaillant main dans la main avec les équipes locales qui les accompagnent au quotidien.",
    ],
  },
  {
    title: "Colis spéciaux pour le Ramadan & l’Aïd",
    image: ougandaRamadanAid,
    alt: "Colis spéciaux pour le Ramadan et l'Aïd en Ouganda",
    reverse: false,
    paragraphs: [
      "Pendant le mois de Ramadan et à l’occasion de l’Aïd, nous mettons en place des colis spéciaux qui permettent aux familles de préparer des repas plus complets pour ces moments de spiritualité et de fête.",
      "C’est une manière de partager la joie de ces occasions avec celles et ceux qui, sans cela, ne pourraient pas en profiter pleinement.",
    ],
  },
  {
    title: "Distribution de Corans encadrée",
    image: ougandaCoran,
    alt: "Distribution de Corans en Ouganda",
    reverse: true,
    paragraphs: [
      "Lorsque cela est demandé par les communautés locales, nous participons à la distribution de Corans en Ouganda, en particulier dans les mosquées, écoles et foyers qui n’ont pas les moyens d’en acquérir.",
      "Ces dons sont réalisés avec prudence, en lien avec des acteurs locaux de confiance, pour veiller à ce que chaque Coran soit remis dans un cadre respectueux et adapté.",
    ],
  },
];

function Ouganda() {
  return (
    <main className="country-page ouganda-page">
      {/* HERO */}
      <section className="ouganda-hero">
        <div className="container ouganda-hero-layout">
          <div className="ouganda-hero-content">
            <span className="ouganda-label">Nos actions à l’international</span>

            <h1>Ouganda</h1>

            <p>
              En Ouganda, Les Colis du Cœur se mobilise auprès des plus
              vulnérables à travers des colis alimentaires, un soutien aux
              orphelinats, des distributions de Corans et des actions solidaires
              pendant le Ramadan et l’Aïd.
            </p>

            <div className="ouganda-hero-actions">
              <Link to="/nos-actions" className="ouganda-btn ouganda-btn-secondary">
                ← Retour aux actions
              </Link>

              <Link to="/faire-un-don" className="ouganda-btn ouganda-btn-primary">
                Soutenir cette action
              </Link>
            </div>
          </div>

          <div className="ouganda-hero-image">
            <img src={ougandaHero} alt="Paysage ou quartier en Ouganda" />
          </div>
        </div>
      </section>

      {/* RÉSUMÉ */}
      <section className="ouganda-summary-section">
        <div className="container">
          <div className="ouganda-section-heading">
            <span className="ouganda-label">Ce que nous faisons</span>
            <h2>Une aide concrète auprès des familles et des enfants.</h2>
          </div>

          <div className="ouganda-summary-grid">
            {summaryCards.map((card) => (
              <article className="ouganda-summary-card" key={card.title}>
                <div>{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ACTIONS */}
      <section className="ouganda-actions-section">
        <div className="container ouganda-actions-list">
          {actionBlocks.map((block) => (
            <article
              className={`ouganda-block ${
                block.reverse ? "ouganda-block-reverse" : ""
              }`}
              key={block.title}
            >
              <div className="ouganda-block-text">
                <span className="ouganda-label">Action terrain</span>

                <h2>{block.title}</h2>

                {block.paragraphs.map((paragraph, index) => (
                  <p key={`${block.title}-${index}`}>{paragraph}</p>
                ))}
              </div>

              <div className="ouganda-block-image">
                <img src={block.image} alt={block.alt} />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="ouganda-final-cta">
        <div className="container ouganda-final-card">
          <span>Envie de soutenir nos actions en Ouganda ?</span>

          <h2>Votre aide nous permet d’être présents auprès des plus fragiles.</h2>

          <p>
            Vos dons et votre engagement nous permettent de soutenir des
            familles, des enfants et des structures locales qui ont besoin d’une
            aide concrète et durable.
          </p>

          <div className="ouganda-final-actions">
            <Link to="/faire-un-don" className="ouganda-btn ouganda-btn-primary">
              Faire un don
            </Link>

            <Link to="/devenir-benevole" className="ouganda-btn ouganda-btn-secondary">
              Devenir bénévole
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Ouganda;