// src/pages/Actions.jsx
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/actions.css";
import worldMap from "../assets/images/world-map1.jpg";

const locations = [
  {
    id: "senegal",
    country: "Sénégal",
    flag: "🇸🇳",
    top: "62%",
    left: "40%",
    actions: [
      "Colis alimentaires",
      "Colis spéciaux Ramadan & Aïd",
      "Construction de puits d'eau",
      "Distribution de Corans",
    ],
    link: "/actions/senegal",
  },
  {
    id: "cameroun",
    country: "Cameroun",
    flag: "🇨🇲",
    top: "60%",
    left: "45%",
    actions: [
      "Colis alimentaires",
      "Colis spéciaux Ramadan & Aïd",
      "Distribution de Corans",
    ],
    link: "/actions/cameroun",
  },
  {
    id: "ouganda",
    country: "Ouganda",
    flag: "🇺🇬",
    top: "58%",
    left: "49%",
    actions: [
      "Colis alimentaires",
      "Distribution de Coran",
      "Repas en orphelinat",
      "Repas spécial Ramadan & Aïd",
    ],
    link: "/actions/ouganda",
  },
  {
    id: "bangladesh",
    country: "Bangladesh",
    flag: "🇧🇩",
    top: "55%",
    left: "65%",
    actions: [
      "Construction de puits d'eau",
      "Colis alimentaires",
      "Colis spéciaux Ramadan & Aïd",
    ],
    link: "/actions/bangladesh",
  },
  {
    id: "maroc",
    country: "Maroc",
    flag: "🇲🇦",
    top: "52%",
    left: "38%",
    actions: ["Projets solidaires en préparation"],
    link: "/actions/maroc",
  },
  {
    id: "togo",
    country: "Togo",
    flag: "🇹🇬",
    top: "60%",
    left: "43%",
    actions: ["Back To School"],
    link: "/actions/togo",
  },
  {
    id: "algerie",
    country: "Algérie",
    flag: "🇩🇿",
    top: "54%",
    left: "41%",
    actions: ["Back to School - Distribution de fournitures scolaires"],
    link: "/actions/algerie",
  },
];

const actionCards = [
  {
    title: "Maraudes en région parisienne",
    text: "En Île-de-France, nos bénévoles vont à la rencontre des personnes sans-abri ou en grande précarité : distribution de repas, boissons chaudes, kits d’hygiène et écoute bienveillante.",
    link: "/actions/maraudes",
    icon: "🤝",
  },
  {
    title: "Récoltes alimentaires",
    text: "Nous organisons des récoltes alimentaires pour collecter des denrées essentielles destinées aux familles en difficulté et renforcer nos distributions sur le terrain.",
    link: "/actions/recolte-alimentaire",
    icon: "🛒",
  },
  {
    title: "Distribution alimentaire",
    text: "Grâce aux dons et aux récoltes, nous organisons des distributions régulières pour soutenir les familles, étudiants et personnes isolées en situation de précarité.",
    link: "/actions/distribution-alimentaire",
    icon: "🍽️",
  },
  {
    title: "Colis alimentaires",
    text: "Au Sénégal, au Cameroun, en Ouganda et au Bangladesh, nous distribuons des colis alimentaires aux familles vulnérables : riz, huile, denrées de base et produits essentiels.",
    icon: "📦",
  },
  {
    title: "Colis Ramadan & Aïd",
    text: "Pendant le Ramadan et à l’occasion de l’Aïd, nous renforçons les distributions avec des colis adaptés pour permettre aux familles de vivre ces moments dans la dignité.",
    icon: "🌙",
  },
  {
    title: "Construction de puits d’eau",
    text: "Au Sénégal et au Bangladesh, nous finançons la construction de puits pour garantir un accès durable à une eau potable et sûre, à proximité des villages.",
    icon: "💧",
  },
  {
    title: "Fournitures scolaires",
    text: "En Afrique, nous distribuons des kits scolaires pour aider les enfants à poursuivre leur scolarité dans de meilleures conditions : cahiers, stylos, sacs et matériel de base.",
    icon: "🎒",
  },
  {
    title: "Distribution de Corans",
    text: "Au Cameroun et au Sénégal, nous offrons des exemplaires du Coran aux mosquées, écoles et familles, dans le respect des demandes locales et des besoins constatés.",
    icon: "📖",
  },
];

function Actions() {
  const [activeLocationId, setActiveLocationId] = useState("senegal");
  const activeLocation = locations.find((loc) => loc.id === activeLocationId);

  const flagsScrollRef = useRef(null);
  const [fadeState, setFadeState] = useState({
    atStart: true,
    atEnd: true,
    hasOverflow: false,
  });

  useEffect(() => {
    const el = flagsScrollRef.current;
    if (!el) return;

    const update = () => {
      const { scrollLeft, scrollWidth, clientWidth } = el;
      const hasOverflow = scrollWidth > clientWidth + 2;

      if (!hasOverflow) {
        setFadeState({ atStart: true, atEnd: true, hasOverflow: false });
        return;
      }

      const atStart = scrollLeft <= 1;
      const atEnd = scrollLeft + clientWidth >= scrollWidth - 1;

      setFadeState({ atStart, atEnd, hasOverflow: true });
    };

    update();

    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const flagsWrapperClass = [
    "map-flags-list-wrapper",
    fadeState.atStart ? "at-start" : "",
    fadeState.atEnd ? "at-end" : "",
    !fadeState.hasOverflow ? "no-scroll" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <main className="actions-page">
      {/* HERO */}
      <section className="actions-hero">
        <div className="container actions-hero-layout">
          <div className="actions-hero-content">
            <span className="actions-label">Nos actions</span>

            <h1>Une solidarité active, en France et à l’international.</h1>

            <p>
              Les Colis du Cœur agit en région parisienne et dans plusieurs pays
              du monde pour lutter contre la précarité, l’insécurité alimentaire
              et l’accès limité à l’eau potable.
            </p>

            <div className="actions-hero-buttons">
              <Link to="/faire-un-don" className="actions-btn actions-btn-primary">
                Soutenir nos actions
              </Link>

              <Link
                to="/devenir-benevole"
                className="actions-btn actions-btn-secondary"
              >
                Devenir bénévole
              </Link>
            </div>
          </div>

          <div className="actions-hero-card">
            <span>Impact terrain</span>
            <strong>7 pays</strong>
            <p>
              Des actions solidaires adaptées aux besoins locaux : colis,
              maraudes, puits, fournitures scolaires et campagnes spécifiques.
            </p>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="actions-map-section">
        <div className="container">
          <div className="actions-section-heading">
            <span className="actions-label">Carte des actions</span>
            <h2>Choisissez un pays pour découvrir nos interventions.</h2>
          </div>

          <div className="actions-map-card">
            <div className="world-map">
              <img
                src={worldMap}
                alt="Carte du monde des actions de l'association Les Colis du Cœur"
              />

              {activeLocation && (
                <div
                  key={activeLocation.id}
                  className="map-postit map-postit-pop"
                >
                  <p className="map-postit-eyebrow">Nos actions sur place</p>

                  <h3 className="map-postit-title">
                    <span>{activeLocation.flag}</span>
                    {activeLocation.country}
                  </h3>

                  <ul className="map-postit-list">
                    {activeLocation.actions.map((act, index) => (
                      <li key={`${activeLocation.id}-${index}`}>{act}</li>
                    ))}
                  </ul>

                  <Link to={activeLocation.link} className="map-postit-link">
                    Découvrir les actions en détail →
                  </Link>
                </div>
              )}
            </div>

            <div className="map-flags-overlay">
              <p className="map-flags-label">Choisir un pays</p>

              <div ref={flagsScrollRef} className={flagsWrapperClass}>
                <div className="map-flags-list">
                  {locations.map((loc) => (
                    <button
                      key={loc.id}
                      type="button"
                      className={`map-flag-btn ${
                        loc.id === activeLocationId ? "active" : ""
                      }`}
                      onClick={() => setActiveLocationId(loc.id)}
                      aria-label={`Voir les actions au ${loc.country}`}
                      title={loc.country}
                    >
                      <span>{loc.flag}</span>
                      <small>{loc.country}</small>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACTIONS CARDS */}
      <section className="actions-cards-section">
        <div className="container">
          <div className="actions-section-heading">
            <span className="actions-label">Domaines d’intervention</span>
            <h2>Des actions concrètes pour répondre aux besoins essentiels.</h2>
          </div>

          <div className="actions-grid">
            {actionCards.map((card) => (
              <article className="action-card" key={card.title}>
                <div className="action-card-icon">{card.icon}</div>

                <h3>{card.title}</h3>

                <p>{card.text}</p>

                {card.link && (
                  <Link to={card.link} className="action-card-link">
                    Découvrir en détail →
                  </Link>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="actions-final-cta">
        <div className="container actions-final-card">
          <span>Chaque geste compte</span>

          <h2>Votre soutien nous permet d’aller plus loin.</h2>

          <p>
            Un don, du temps, un partage ou un partenariat peut transformer une
            action locale en aide concrète pour des familles entières.
          </p>

          <div className="actions-final-buttons">
            <Link to="/faire-un-don" className="actions-btn actions-btn-primary">
              Faire un don
            </Link>

            <Link to="/contact" className="actions-btn actions-btn-secondary">
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Actions;