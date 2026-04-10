// src/pages/Angola.js
import "../styles/bangladesh.css"; // réutilise les styles country-*
import ougandaHero from "../assets/images/ouganda-hero.jpg";
import ougandaColis from "../assets/images/ouganda-food.jpg";
import ougandaOrphelinat from "../assets/images/ouganda-orphelinat.jpg";
import ougandaRamadanAid from "../assets/images/ouganda-ramadan-aïd.jpg";
import ougandaCoran from "../assets/images/ouganda-coran.jpg";

function Ouganda() {
  return (
    <section className="country-page">
      <div className="container">
        {/* Hero */}
        <header className="country-hero">
          <div className="country-hero-text">
            <p className="country-eyebrow">Nos actions à l&apos;international</p>
            <h1 className="country-title">Ouganda</h1>
            <p className="country-intro">
              En Angola, Les Colis du Cœur se mobilisent auprès des plus
              vulnérables à travers des{" "}
              <strong>colis alimentaires</strong>, un soutien aux{" "}
              <strong>orphelinats</strong>, des{" "}
              <strong>distributions de Corans</strong> et des{" "}
              <strong>actions solidaires pendant le Ramadan et l&apos;Aïd</strong>.
            </p>
            <a href="/nos-actions" className="country-back-link">
              ← Retour à la carte de nos actions
            </a>
          </div>

          <div className="country-hero-image">
            <img
              src={ougandaHero}
              alt="Paysage ou quartier en Angola"
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
                Organisation de distributions de{" "}
                <strong>colis alimentaires</strong> pour soutenir les familles
                frappées par la précarité.
              </p>
            </article>

            <article className="summary-card">
              <h3>Orphelinat</h3>
              <p>
                Soutien matériel et alimentaire à des{" "}
                <strong>orphelinats</strong>, pour améliorer le quotidien
                d&apos;enfants sans soutien familial.
              </p>
            </article>

            <article className="summary-card">
              <h3>Ramadan &amp; Aïd</h3>
              <p>
                Mise en place de <strong>colis spéciaux</strong> pour le
                Ramadan et l&apos;Aïd, afin que ces moments restent des temps
                de joie et de partage.
              </p>
            </article>

            <article className="summary-card">
              <h3>Distribution de Coran</h3>
              <p>
                <strong>Distribution de Corans</strong> dans un cadre encadré,
                en lien avec des partenaires et responsables locaux.
              </p>
            </article>
          </div>
        </section>

        {/* Colis alimentaires */}
        <section className="country-block">
          <div className="country-block-text">
            <h2 className="country-section-title">
              Des colis alimentaires pour soutenir les familles
            </h2>
            <p>
              Une partie importante de nos actions en Angola consiste à
              distribuer des <strong>colis alimentaires</strong> aux familles
              qui peinent à couvrir leurs besoins essentiels.
            </p>
            <p>
              Ces colis contiennent des produits de base adaptés aux
              habitudes locales et sont remis en priorité aux foyers les plus
              fragiles, identifiés avec l&apos;aide de{" "}
              <strong>relais de confiance sur place</strong>.
            </p>
          </div>

          <div className="country-hero-image">
            <img
              src={ougandaColis}
              alt="Distribution de colis alimentaires en Angola"
            />
          </div>
        </section>

        {/* Orphelinat */}
        <section className="country-block country-block-reverse">
          <div className="country-block-text">
            <h2 className="country-section-title">
              Soutien aux orphelinats
            </h2>
            <p>
              En Angola, nous intervenons également auprès d&apos;
              <strong>orphelinats</strong> qui manquent souvent de ressources
              pour assurer le quotidien des enfants : nourriture, hygiène,
              fournitures, petits équipements.
            </p>
            <p>
              Nos actions visent à <strong>améliorer le confort et la
              sécurité</strong> de ces enfants, tout en travaillant main dans
              la main avec les équipes locales qui les accompagnent au
              quotidien.
            </p>
          </div>

          <div className="country-hero-image">
            <img
              src={ougandaOrphelinat}
              alt="Soutien à un orphelinat en Angola"
            />
          </div>
        </section>

        {/* Ramadan & Aïd */}
        <section className="country-block">
          <div className="country-block-text">
            <h2 className="country-section-title">
              Colis spéciaux pour le Ramadan &amp; l&apos;Aïd
            </h2>
            <p>
              Pendant le <strong>mois de Ramadan</strong> et à
              l&apos;occasion de l&apos;<strong>Aïd</strong>, nous mettons en
              place des <strong>colis spéciaux</strong> qui permettent aux
              familles de préparer des repas plus complets pour ces moments
              de spiritualité et de fête.
            </p>
            <p>
              C&apos;est une manière de <strong>partager la joie de ces
              occasions</strong> avec celles et ceux qui, sans cela, ne
              pourraient pas en profiter pleinement.
            </p>
          </div>

          <div className="country-hero-image">
            <img
              src={ougandaRamadanAid}
              alt="Colis spéciaux pour le Ramadan et l'Aïd en Angola"
            />
          </div>
        </section>

        {/* Distribution de Coran */}
        <section className="country-block country-block-reverse">
          <div className="country-block-text">
            <h2 className="country-section-title">
              Distribution de Corans encadrée
            </h2>
            <p>
              Lorsque cela est demandé par les communautés locales, nous
              participons à la <strong>distribution de Corans</strong> en
              Angola, en particulier dans les mosquées, écoles et foyers qui
              n&apos;ont pas les moyens d&apos;en acquérir.
            </p>
            <p>
              Ces dons sont réalisés avec prudence, en lien avec des{" "}
              <strong>acteurs locaux de confiance</strong>, pour veiller à ce
              que chaque Coran soit remis dans un cadre respectueux et
              adapté.
            </p>
          </div>

          <div className="country-hero-image">
            <img
              src={ougandaCoran}
              alt="Distribution de Corans en Angola"
            />
          </div>
        </section>

        {/* Appel à l'action */}
        <section className="country-cta">
          <h2>Envie de soutenir nos actions en Ouganda&nbsp;?</h2>
          <p>
            Vos dons et votre engagement nous permettent d&apos;être présents
            auprès de ceux qui en ont le plus besoin, en Ouganda comme ailleurs.
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

export default Ouganda;
