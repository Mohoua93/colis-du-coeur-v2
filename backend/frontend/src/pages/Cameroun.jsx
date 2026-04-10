// src/pages/Cameroun.js
import "../styles/bangladesh.css"; // on réutilise les styles country-*
import camerounHero from "../assets/images/cameroun-hero.jpg";
import camerounColis from "../assets/images/cameroun-food.jpg";
import camerounCoran from "../assets/images/cameroun-coran.jpg";

function Cameroun() {
  return (
    <section className="country-page">
      <div className="container">
        {/* Hero */}
        <header className="country-hero">
          <div className="country-hero-text">
            <p className="country-eyebrow">Nos actions à l&apos;international</p>
            <h1 className="country-title">Cameroun</h1>
            <p className="country-intro">
              Au Cameroun, Les Colis du Cœur soutiennent les familles les plus
              vulnérables à travers des{" "}
              <strong>distributions de colis alimentaires</strong>, des{" "}
              <strong>colis spéciaux pour le Ramadan et l&apos;Aïd</strong> et,
              lorsque cela est demandé, la{" "}
              <strong>distribution de Corans</strong> dans un cadre encadré.
            </p>
            <a href="/nos-actions" className="country-back-link">
              ← Retour à la carte de nos actions
            </a>
          </div>

          <div className="country-hero-image">
            <img
              src={camerounHero}
              alt="Quartier et familles au Cameroun"
            />
          </div>
        </header>

        {/* Résumé des actions */}
        <section className="country-summary">
          <h2 className="country-section-title">Ce que nous y faisons</h2>
          <div className="country-summary-grid">
            <article className="summary-card">
              <h3>Colis alimentaires</h3>
              <p>
                Nous organisons des distributions de{" "}
                <strong>colis alimentaires</strong> pour apporter un soutien
                concret aux familles confrontées à la précarité.
              </p>
            </article>

            <article className="summary-card">
              <h3>Distribution de Coran</h3>
              <p>
                En coordination avec des relais locaux, nous réalisons des{" "}
                <strong>dons de Corans</strong> dans les mosquées, écoles et
                familles qui en expriment le besoin.
              </p>
            </article>
          </div>
        </section>

        {/* Colis alimentaires */}
        <section className="country-block">
          <div className="country-block-text">
            <h2 className="country-section-title">
              Des colis alimentaires pour soulager le quotidien
            </h2>
            <p>
              Au Cameroun, de nombreuses familles vivent dans une grande
              précarité. Les <strong>colis alimentaires</strong> que nous
              distribuons contiennent des produits de base adaptés aux
              habitudes locales (riz, huile, farine, légumineuses, etc.).
            </p>
            <p>
              Ces distributions sont organisées avec l&apos;aide de{" "}
              <strong>bénévoles et de partenaires locaux</strong> qui
              identifient les foyers les plus fragiles, afin que l&apos;aide
              parvienne là où elle est réellement nécessaire.
            </p>
          </div>

          <div className="country-hero-image">
            <img
              src={camerounColis}
              alt="Distribution de colis alimentaires au Cameroun"
            />
          </div>
        </section>


        {/* Distribution de Coran */}
        <section className="country-block">
          <div className="country-block-text">
            <h2 className="country-section-title">
              Distribution de Corans encadrée
            </h2>
            <p>
              Les <strong>dons de Corans</strong> au Cameroun se font en lien
              avec des <strong>acteurs de confiance sur place</strong> :
              responsables de mosquées, enseignants, associations locales.
            </p>
            <p>
              L&apos;objectif est de répondre à une demande existante, sans
              excès, en veillant à ce que chaque exemplaire soit remis dans un
              cadre où il sera utilisé, transmis et respecté.
            </p>
          </div>

          <div className="country-hero-image">
            <img
              src={camerounCoran}
              alt="Distribution de Corans au Cameroun"
            />
          </div>
        </section>

        {/* Appel à l'action */}
        <section className="country-cta">
          <h2>Envie de soutenir nos actions au Cameroun&nbsp;?</h2>
          <p>
            Grâce à votre soutien, nous pouvons continuer à accompagner les
            familles et à développer des actions solidaires sur le terrain.
          </p>
          <div className="country-cta-buttons">
            <a href="/contact" className="country-cta-btn primary">
              Nous contacter
            </a>
            <a href="/devenir-benevole" className="country-cta-btn ghost">
              Devenir bénévole
            </a>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Cameroun;
