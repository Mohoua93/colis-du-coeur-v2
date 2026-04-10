// src/pages/Togo.js
import "../styles/bangladesh.css"; // base country-*
import "../styles/togo.css";       // styles spécifiques Togo

import togoHero from "../assets/images/togo-hero.jpeg";
import togoFlyer from "../assets/images/togo-flyer.jpeg";

import togoFloat1 from "../assets/images/togo-float-1.jpeg";
import togoFloat2 from "../assets/images/togo-float-2.jpeg";
import togoFloat3 from "../assets/images/togo-float-3.jpeg";
import togoFloat4 from "../assets/images/togo-float-4.jpeg";

function Togo() {
  return (
    <section className="country-page togo-page">
      <div className="container">
        {/* Hero */}
        <header className="country-hero">
          <div className="country-hero-text">
            <p className="country-eyebrow">Nos actions à l&apos;international</p>
            <h1 className="country-title">Togo</h1>
            <p className="country-intro">
              🎒✨ En 2015, la ville de Lomé a vibré au rythme de la solidarité lors
              de l’événement <strong>BACK TO SCHOOL</strong>, organisé par notre
              association <strong>LES COLIS DU CŒUR</strong>. Une journée
              empreinte d’émotion, de partage et d’espoir, dédiée à l’avenir des
              enfants du Togo.
            </p>
            <a href="/nos-actions" className="country-back-link">
              ← Retour à la carte de nos actions
            </a>
          </div>

          <div className="country-hero-image">
            <img
              src={togoHero}
              alt="Paysage ou ville au Togo"
            />
          </div>
        </header>

        {/* ✅ Section Flyer */}
        <section className="togo-flyer-section">
          <div className="togo-flyer-card">
            <div className="togo-flyer-image">
              <img
                src={togoFlyer}
                alt="Flyer de l'action Back To School au Togo"
              />
            </div>

            <div className="togo-flyer-text">
              <p className="togo-flyer-eyebrow">Flyer de l&apos;action</p>
              <h2 className="togo-flyer-title">
                🎒 Back To School – Lomé, 2015 🇹🇬
              </h2>
              <p>
                Un flyer qui symbolise une action forte menée à Lomé.
                Grâce à la générosité de nos partenaires et donateurs,
                nous avons pu offrir des cartables scolaires complets
                pour une rentrée plus sereine et motivante.
              </p>
            </div>
          </div>
        </section>

        {/* ✅ Section texte */}
        <section className="togo-text-section">
          <h2 className="country-section-title">
            🎒✨ Événement BACK TO SCHOOL – Lomé, 2015 ✨🇹🇬
          </h2>

          <div className="togo-text-body">
            <p>
              En 2015, la ville de Lomé a vibré au rythme de la solidarité lors
              de l’événement BACK TO SCHOOL, organisé par notre association
              LES COLIS DU CŒUR. Une journée empreinte d’émotion, de partage et
              d’espoir, dédiée à l’avenir des enfants du Togo.
            </p>

            <p>
              Avec détermination et amour, notre équipe s’est engagée à soutenir
              la scolarité des plus jeunes. Grâce à la générosité de nos
              partenaires et donateurs, nous avons pu distribuer
              <strong> 250 cartables scolaires complets</strong>, soigneusement
              préparés pour offrir à chaque enfant les outils nécessaires à une
              rentrée sereine et motivante.
            </p>

            <p>Chaque cartable remis représentait bien plus que du matériel :</p>

            <ul className="togo-bullets">
              <li>✨ Un symbole d’égalité des chances</li>
              <li>✨ Un encouragement pour poursuivre les études</li>
              <li>✨ Un geste d’espoir pour un avenir meilleur</li>
            </ul>

            <p>
              La joie dans le regard des enfants, les sourires éclatants des
              parents et la gratitude exprimée par la communauté resteront
              gravés dans nos mémoires. Cet événement a renforcé notre
              conviction que chaque acte, même modeste, peut transformer
              positivement une vie.
            </p>

            <p>
              LES COLIS DU CŒUR continue, depuis cet instant, à mener des actions
              humanitaires pour soutenir l’éducation et le bien-être des
              familles togolaises.
            </p>

            <p>
              <strong>2015</strong> fut une année phare, un véritable point de
              départ vers de nombreux projets solidaires.
            </p>
          </div>
        </section>

        {/* ✅ 4 images en apesanteur */}
        <section className="togo-floating-section">
          <h2 className="country-section-title">
            Quelques images de nos actions
          </h2>

          <div className="togo-floating-grid">
            <figure className="togo-float-card float-1">
              <img src={togoFloat1} alt="Action au Togo 1" />
            </figure>

            <figure className="togo-float-card float-2">
              <img src={togoFloat2} alt="Action au Togo 2" />
            </figure>

            <figure className="togo-float-card float-3">
              <img src={togoFloat3} alt="Action au Togo 3" />
            </figure>

            <figure className="togo-float-card float-4">
              <img src={togoFloat4} alt="Action au Togo 4" />
            </figure>
          </div>
        </section>

        {/* CTA */}
        <section className="country-cta">
          <h2>Envie de soutenir nos actions au Togo&nbsp;?</h2>
          <p>
            Vos dons et partages nous aideront à faire vivre des initiatives
            éducatives et solidaires au plus près des enfants et des familles
            qui en ont besoin.
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

export default Togo;


