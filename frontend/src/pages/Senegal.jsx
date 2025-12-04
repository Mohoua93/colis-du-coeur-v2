// src/pages/Senegal.js
import "../styles/bangladesh.css"; // mêmes styles "country-*"
import senegalHero from "../assets/images/Senegal-hero.jpg";
import senegalPuits from "../assets/images/Senegal-puits.jpg";
import senegalColis from "../assets/images/Senegal-food.jpg";
import senegalCoran from "../assets/images/Senegal-coran.jpg";

function Senegal() {
  return (
    <section className="country-page">
      <div className="container">
        {/* Hero */}
        <header className="country-hero">
          <div className="country-hero-text">
            <p className="country-eyebrow">Nos actions à l&apos;international</p>
            <h1 className="country-title">Sénégal</h1>
            <p className="country-intro">
              Au Sénégal, Les Colis du Cœur agissent aux côtés des familles en
              situation de précarité à travers des{" "}
              <strong>projets d&apos;accès à l&apos;eau</strong>, des{" "}
              <strong>distributions de colis alimentaires</strong> et, lorsque
              cela est demandé, des{" "}
              <strong>dons de Corans</strong> dans un cadre respectueux et
              encadré.
            </p>
            <a href="/nos-actions" className="country-back-link">
              ← Retour à la carte de nos actions
            </a>
          </div>

          <div className="country-hero-image">
            <img
              src={senegalHero}
              alt="Paysage et village au Sénégal"
            />
          </div>
        </header>

        {/* Résumé des actions */}
        <section className="country-summary">
          <h2 className="country-section-title">Ce que nous y faisons</h2>
          <div className="country-summary-grid">
            <article className="summary-card">
              <h3>Construction de puits d&apos;eau</h3>
              <p>
                Dans plusieurs localités, nous participons à la construction
                de <strong>puits d&apos;eau potable</strong> pour soulager les
                familles qui devaient parcourir de longues distances pour
                s&apos;approvisionner.
              </p>
            </article>

            <article className="summary-card">
              <h3>Colis alimentaires</h3>
              <p>
                Nous distribuons régulièrement des{" "}
                <strong>colis alimentaires</strong> contenant des denrées de
                base adaptées aux habitudes locales, afin de soutenir les
                foyers les plus vulnérables.
              </p>
            </article>

            <article className="summary-card">
              <h3>Dons de Corans</h3>
              <p>
                En lien avec les acteurs locaux, nous organisons des{" "}
                <strong>dons de Corans</strong> pour les mosquées, les
                écoles et certaines familles, lorsque le besoin est exprimé.
              </p>
            </article>
          </div>
        </section>

        {/* Puits d'eau */}
        <section className="country-block">
          <div className="country-block-text">
            <h2 className="country-section-title">
              Des puits pour un accès durable à l&apos;eau
            </h2>
            <p>
              Dans plusieurs villages du Sénégal, l&apos;accès à l&apos;eau
              demeure un enjeu quotidien. Les puits réalisés grâce à vos dons
              permettent de <strong>rapprocher l&apos;eau des habitations</strong>
              et de réduire la fatigue liée aux trajets répétés.
            </p>
            <p>
              Ces infrastructures d&apos;eau potable améliorent la vie
              quotidienne&nbsp;: hygiène, cuisine, lessive, mais aussi santé
              des enfants et des personnes les plus fragiles.
            </p>
          </div>

          <div className="country-hero-image">
            <img
              src={senegalPuits}
              alt="Puits d&apos;eau construit au Sénégal"
            />
          </div>
        </section>

        {/* Colis alimentaires */}
        <section className="country-block country-block-reverse">
          <div className="country-block-text">
            <h2 className="country-section-title">
              Des colis alimentaires pour soutenir les familles
            </h2>
            <p>
              Les colis alimentaires distribués au Sénégal contiennent des
              produits de base comme le riz, l&apos;huile, le sucre ou encore
              des légumineuses, en fonction des besoins identifiés.
            </p>
            <p>
              Ils sont remis à des familles repérées par nos relais locaux,
              avec l&apos;objectif de <strong>réduire l&apos;insécurité
              alimentaire</strong> et d&apos;apporter un soutien concret
              dans les périodes difficiles.
            </p>
          </div>

          <div className="country-hero-image">
            <img
              src={senegalColis}
              alt="Distribution de colis alimentaires au Sénégal"
            />
          </div>
        </section>

        {/* Dons de Corans */}
        <section className="country-block">
          <div className="country-block-text">
            <h2 className="country-section-title">
              Dons de Corans dans un cadre encadré
            </h2>
            <p>
              Les <strong>dons de Corans</strong> au Sénégal sont réalisés
              avec prudence et responsabilité, en coordination avec des{" "}
              <strong>partenaires de confiance</strong> et des responsables
              locaux (mosquées, écoles, associations).
            </p>
            <p>
              L&apos;objectif est de répondre à des besoins exprimés sur place,
              sans sur-distribution, en veillant à ce que chaque Coran soit
              remis dans un environnement approprié, où il sera utilisé et
              respecté.
            </p>
          </div>

          <div className="country-hero-image">
            <img
              src={senegalCoran}
              alt="Distribution de Corans au Sénégal"
            />
          </div>
        </section>

        {/* Appel à l'action */}
        <section className="country-cta">
          <h2>Envie de soutenir nos actions au Sénégal&nbsp;?</h2>
          <p>
            Vos dons, vos partages et votre engagement nous permettent de
            poursuivre et d&apos;amplifier ces projets sur le terrain.
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

export default Senegal;
