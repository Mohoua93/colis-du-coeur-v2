// src/pages/Algerie.js
import "../styles/bangladesh.css"; // base country-*
import "../styles/algerie.css";    // styles spécifiques Algérie

import algerieHero from "../assets/images/algerie-hero.jpg";
import algerieFlyer from "../assets/images/algerie-flyer.jpg";

import algerieFloat1 from "../assets/images/algerie-float-1.jpg";
import algerieFloat2 from "../assets/images/algerie-float-2.jpg";
import algerieFloat3 from "../assets/images/algerie-float-3.jpg";
import algerieFloat4 from "../assets/images/algerie-float-4.jpg";

function Algerie() {
  return (
    <section className="country-page algerie-page">
      <div className="container">
        {/* Hero */}
        <header className="country-hero">
          <div className="country-hero-text">
            <p className="country-eyebrow">Nos actions à l&apos;international</p>
            <h1 className="country-title">Algérie</h1>
            <p className="country-intro">
              En Algérie, Les Colis du Cœur s&apos;engagent auprès des enfants
              et des familles à travers des actions solidaires centrées sur
              l&apos;éducation, la dignité et la joie partagée.
            </p>
            <a href="/nos-actions" className="country-back-link">
              ← Retour à la carte de nos actions
            </a>
          </div>

          <div className="country-hero-image">
            <img
              src={algerieHero}
              alt="Paysage ou ville en Algérie"
            />
          </div>
        </header>

        {/* ✅ Section Flyer */}
        <section className="algerie-flyer-section">
          <div className="algerie-flyer-card">
            <div className="algerie-flyer-image">
              <img
                src={algerieFlyer}
                alt="Flyer du projet Back to School en Algérie"
              />
            </div>

            <div className="algerie-flyer-text">
              <p className="algerie-flyer-eyebrow">Flyer du projet</p>
              <h2 className="algerie-flyer-title">
                Back to School – Algérie 🇩🇿
              </h2>
              <p>
                Ce flyer présente notre toute première action Back to School
                réalisée en partenariat avec la Madrassa de Mazer. Une journée
                dédiée aux enfants, à la joie et à l&apos;espoir.
              </p>
            </div>
          </div>
        </section>

        {/* ✅ Section texte avec TON contenu */}
        <section className="algerie-text-section">
          <h2 className="country-section-title">
            Projet “Back to School” – Un élan de cœur en Algérie 🇩🇿
          </h2>

          <div className="algerie-text-body">
            <p>
              Le Samedi 11 mai 2024 restera pour nous un souvenir gravé avec douceur et
              émotion. En partenariat avec la Madrassa de Mazer, notre association{" "}
              <strong>Les Colis du Cœur</strong> a offert aux enfants du village une
              journée hors du temps, une journée où l’espoir avait le goût des sourires.
            </p>

            <p>
              Pour ce premier projet Back to School, nous avons distribué des cartables
              scolaires, des sandwichs, des boissons, ainsi que des bonbons qui ont
              illuminé les visages des plus petits. Entre les animations, les
              structures gonflables et les éclats de rire, un véritable souffle de joie
              a traversé tout le village.
            </p>

            <p>
              Ce que nous avons vécu ce jour-là, c’est bien plus qu’une action humanitaire :
              c’est une rencontre, un lien humain, un moment où chaque enfant a pu se sentir
              vu, aimé, soutenu.
            </p>

            <p>
              Les bénévoles ont donné de leur temps, le village a ouvert son cœur…
              Mais ce sont les enfants qui nous ont offert le plus beau cadeau :
              leurs sourires authentiques, leurs regards remplis d’innocence et de gratitude.
            </p>

            <p>Et cette aventure ne fait que commencer.</p>

            <p>
              Dès 2026, le projet “Back to School” s’étendra à plusieurs villes d’Algérie,
              avec le soutien d’artistes, de sportifs et de nombreuses personnalités locales.
              Ensemble, nous voulons bâtir quelque chose de durable, de grand, de profondément humain.
            </p>

            <p>
              <strong>❤️ Aidez-nous à continuer. Aidez-nous à changer des vies.</strong>
            </p>

            <p>Chaque don, même le plus petit, permet d’offrir :</p>

            <ul className="algerie-text-list">
              <li>un cartable à un enfant,</li>
              <li>un repas à partager,</li>
              <li>une journée de joie,</li>
              <li>un véritable souffle d’espoir pour un avenir meilleur.</li>
            </ul>

            <p>
              👉 Soutenez le projet Back to School et devenez vous aussi un artisan du sourire.
              Ensemble, offrons à ces enfants ce qu’il y a de plus précieux :
              la chance de rêver… et les moyens d’y parvenir.
            </p>
          </div>
        </section>

        {/* ✅ 4 images en apesanteur */}
        <section className="algerie-floating-section">
          <h2 className="country-section-title">
            Quelques images de nos actions
          </h2>

          <div className="algerie-floating-grid">
            <figure className="algerie-float-card float-1">
              <img src={algerieFloat1} alt="Back to School en Algérie 1" />
            </figure>

            <figure className="algerie-float-card float-2">
              <img src={algerieFloat2} alt="Back to School en Algérie 2" />
            </figure>

            <figure className="algerie-float-card float-3">
              <img src={algerieFloat3} alt="Back to School en Algérie 3" />
            </figure>

            <figure className="algerie-float-card float-4">
              <img src={algerieFloat4} alt="Back to School en Algérie 4" />
            </figure>
          </div>
        </section>

        {/* CTA */}
        <section className="country-cta">
          <h2>Envie de soutenir le projet Back to School&nbsp;?</h2>
          <p>
            Votre aide nous permet d&apos;offrir des cartables, des repas
            et des journées de joie à des enfants qui en ont besoin.
          </p>
          <div className="country-cta-buttons">
            <a href="/contact" className="country-cta-btn primary">
              Nous contacter
            </a>
            <a href="/faire-un-don" className="country-cta-btn ghost">
              Faire un don
            </a>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Algerie;
