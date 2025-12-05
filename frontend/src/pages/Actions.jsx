// src/pages/Actions.js
import { useState } from "react";
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
      "Repas en Orphelinat",
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
    id: "algerie",
    country: "Algérie",
    flag: "🇩🇿",
    top: "54%",
    left: "41%",
    actions: ["Back to School - Distribution de fournitures scolaires"],
    link: "/actions/algerie",
  },
];

function Actions() {
  const [activeLocationId, setActiveLocationId] = useState("senegal");

  const activeLocation = locations.find((loc) => loc.id === activeLocationId);

  return (
    <section className="actions-page">
      <div className="container">
        <h1 className="actions-title">Nos actions</h1>
        <p className="actions-intro">
          Les Colis du Cœur agissent à la fois en{" "}
          <strong>région parisienne</strong> et dans plusieurs pays du monde
          pour lutter contre la précarité, l&apos;insécurité alimentaire et
          l&apos;accès limité à l&apos;eau.
        </p>

        {/* Bloc carte + post-it dessus */}
        <div className="actions-layout">
          <div className="actions-map-wrapper">
            <div className="world-map">
              <img
                src={worldMap}
                alt="Carte du monde des actions de l'association"
              />

              {/* ✅ Drapeaux sur la carte (desktop) */}
              {locations.map((loc) => (
                <button
                  key={loc.id}
                  type="button"
                  className={`map-pin ${
                    loc.id === activeLocationId ? "active" : ""
                  }`}
                  style={{ top: loc.top, left: loc.left }}
                  onClick={() => setActiveLocationId(loc.id)}
                >
                  <span
                    className="pin-label"
                    aria-label={loc.country}
                    title={loc.country}
                  >
                    {loc.flag}
                  </span>
                </button>
              ))}

              {/* 📝 Post-it */}
              {activeLocation && (
                <div className="map-postit">
                  <p className="map-postit-eyebrow">Nos actions sur place</p>

                  <h2 className="map-postit-title">
                    <span className="postit-flag">{activeLocation.flag}</span>
                    {activeLocation.country}
                  </h2>

                  <ul className="map-postit-list">
                    {activeLocation.actions.map((act, index) => (
                      <li key={index}>{act}</li>
                    ))}
                  </ul>

                  {/* ✅ Le seul lien vers la page pays */}
                  <Link to={activeLocation.link} className="map-postit-link">
                    Découvrir les actions en détail →
                  </Link>
                </div>
              )}
            </div>

            {/* ✅ Rangée mobile : met à jour le post-it (pas de navigation) */}
            <div className="map-flags-row">
              {locations.map((loc) => (
                <button
                  key={`mobile-${loc.id}`}
                  type="button"
                  className={`map-flag-btn ${
                    loc.id === activeLocationId ? "active" : ""
                  }`}
                  onClick={() => setActiveLocationId(loc.id)}
                  aria-label={loc.country}
                  title={loc.country}
                >
                  {loc.flag}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Cartes texte en bas */}
        <section className="actions-grid">
          <article className="action-card">
            <h3>Maraudes en région parisienne</h3>
            <p>
              En Île-de-France, nos bénévoles vont à la rencontre des personnes
              sans-abri ou en grande précarité&nbsp;: distribution de repas,
              boissons chaudes, kits d&apos;hygiène et écoute bienveillante.
            </p>
          </article>

          <article className="action-card">
            <h3>Colis alimentaires</h3>
            <p>
              Au Sénégal, au Cameroun, en Ouganda et au Bangladesh, nous
              distribuons des colis alimentaires aux familles vulnérables&nbsp;:
              riz, huile, denrées de base et produits essentiels du quotidien.
            </p>
          </article>

          <article className="action-card">
            <h3>Colis alimentaires spéciaux Ramadan &amp; Aïd</h3>
            <p>
              Pendant le mois de Ramadan et à l&apos;occasion de l&apos;Aïd,
              nous renforçons les distributions avec des colis adaptés pour
              permettre aux familles de vivre ces moments dans la dignité.
            </p>
          </article>

          <article className="action-card">
            <h3>Construction de puits d&apos;eau</h3>
            <p>
              Au Sénégal et au Bangladesh, nous finançons la construction de
              puits pour garantir un accès durable à une eau potable et sûre, à
              proximité des villages.
            </p>
          </article>

          <article className="action-card">
            <h3>Fournitures scolaires</h3>
            <p>
              En Afrique, nous distribuons des kits scolaires pour aider les
              enfants à poursuivre leur scolarité dans de meilleures
              conditions&nbsp;: cahiers, stylos, sacs et matériel de base.
            </p>
          </article>

          <article className="action-card">
            <h3>Distribution de Coran</h3>
            <p>
              Au Cameroun et au Sénégal, nous offrons des exemplaires du Coran
              aux mosquées, écoles et familles, dans le respect des demandes
              locales et des besoins constatés sur le terrain.
            </p>
          </article>
        </section>
      </div>
    </section>
  );
}

export default Actions;
