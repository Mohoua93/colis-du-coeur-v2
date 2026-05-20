// src/pages/Bangladesh.js
import { Link } from "react-router-dom";
import "../styles/bangladesh.css";

import bangladeshHero from "../assets/images/bangladesh-hero.jpg";
import bangladeshPuits from "../assets/images/bangladesh-puits.jpg";
import bangladeshColisAlimentaires from "../assets/images/bangladesh-food.jpg";
import bangladeshRamadan from "../assets/images/bangladesh-ramadan.jpg";
import bangladeshAid from "../assets/images/bangladesh-aid.jpg";
import bangladeshCoran from "../assets/images/bangladesh-coran.jpg";

const summaryCards = [
  {
    title: "Construction de puits d’eau",
    text: "Dans plusieurs villages, nous finançons la construction de puits afin de garantir un accès durable à une eau potable, à proximité des habitations.",
    icon: "💧",
  },
  {
    title: "Colis alimentaires",
    text: "Nous distribuons des colis composés de denrées de base pour soulager les familles en situation de précarité alimentaire.",
    icon: "📦",
  },
  {
    title: "Ramadan & Aïd",
    text: "Pendant le Ramadan et à l’occasion de l’Aïd, nous renforçons les distributions avec des colis spéciaux adaptés aux besoins des familles.",
    icon: "🌙",
  },
];

const actionBlocks = [
  {
    title: "Des puits pour changer le quotidien",
    image: bangladeshPuits,
    alt: "Puits d'eau construit au Bangladesh",
    reverse: false,
    paragraphs: [
      "Dans certaines zones rurales du Bangladesh, l’accès à l’eau potable reste un défi quotidien. Les puits construits grâce à vos dons permettent de réduire les trajets, d’éviter les contaminations liées à une eau insalubre et de sécuriser l’hygiène des familles.",
      "Chaque puits est implanté en concertation avec les habitants et les relais locaux, pour répondre à un besoin réel et durable.",
    ],
  },
  {
    title: "Des colis alimentaires pour les familles",
    image: bangladeshColisAlimentaires,
    alt: "Distribution de colis alimentaires au Bangladesh",
    reverse: true,
    paragraphs: [
      "Les colis alimentaires distribués au Bangladesh donnent un coup de pouce concret aux familles en difficulté : ils contiennent des produits adaptés aux habitudes locales et permettent de tenir plusieurs jours.",
      "Nos distributions se font avec l’aide de partenaires et de bénévoles sur place, dans le respect de la dignité de chaque bénéficiaire.",
    ],
  },
  {
    title: "Un élan de solidarité pendant le Ramadan",
    image: bangladeshRamadan,
    alt: "Distribution de colis spéciaux Ramadan au Bangladesh",
    reverse: false,
    paragraphs: [
      "Le mois de Ramadan est une période clé pour la solidarité. Au Bangladesh, de nombreuses familles n’ont pas les moyens de préparer des repas complets pour l’iftar et le suhoor.",
      "Grâce à vos dons, nous distribuons des colis spéciaux Ramadan contenant des denrées adaptées aux repas de rupture du jeûne, afin que chaque famille puisse vivre ce mois béni avec plus de sérénité et de dignité.",
    ],
  },
  {
    title: "Fête de l’Aïd : partager la joie",
    image: bangladeshAid,
    alt: "Familles célébrant l'Aïd au Bangladesh",
    reverse: true,
    paragraphs: [
      "À l’occasion de l’Aïd, nous intensifions nos actions pour que la fête soit un moment de joie partagée, même pour les familles les plus fragiles.",
      "Selon les projets et les besoins locaux, cela peut passer par des colis alimentaires renforcés, des distributions spécifiques ou des gestes symboliques qui permettent à chacun de célébrer l’Aïd dans le respect et la dignité.",
    ],
  },
  {
    title: "Distribution de Corans",
    image: bangladeshCoran,
    alt: "Distribution de Corans au Bangladesh",
    reverse: false,
    paragraphs: [
      "Au Bangladesh, nous répondons également à des demandes spirituelles locales en participant à la distribution de Corans, en priorité dans les mosquées, les écoles et auprès de familles qui n’ont pas les moyens d’en acquérir.",
      "Ces distributions se font toujours en lien avec des partenaires de confiance sur place, afin de respecter les besoins réels et de s’assurer que chaque exemplaire est remis dans un cadre approprié et bienveillant.",
    ],
  },
];

function Bangladesh() {
  return (
    <main className="country-page bangladesh-page">
      {/* HERO */}
      <section className="country-hero-section">
        <div className="container country-hero-layout">
          <div className="country-hero-content">
            <span className="country-label">Nos actions à l’international</span>

            <h1>Bangladesh</h1>

            <p>
              Au Bangladesh, Les Colis du Cœur agit aux côtés des familles les
              plus vulnérables pour répondre à des besoins essentiels : accès à
              l’eau potable, sécurité alimentaire et solidarité pendant le
              Ramadan et l’Aïd.
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

          <div className="country-hero-image">
            <img src={bangladeshHero} alt="Paysage et village au Bangladesh" />
          </div>
        </div>
      </section>

      {/* SUMMARY */}
      <section className="country-summary-section">
        <div className="container">
          <div className="country-section-heading">
            <span className="country-label">Ce que nous faisons</span>
            <h2>Des actions essentielles pour améliorer le quotidien.</h2>
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
          <span>Envie de soutenir nos actions au Bangladesh ?</span>

          <h2>Chaque don permet d’agir concrètement sur le terrain.</h2>

          <p>
            Que ce soit par un don, un partage ou un engagement régulier, chaque
            geste nous permet d’aller plus loin auprès des familles vulnérables.
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

export default Bangladesh;