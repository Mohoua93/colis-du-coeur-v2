// src/pages/Togo.js
import { Link } from "react-router-dom";
import "../styles/bangladesh.css";
import "../styles/togo.css";

import togoHero from "../assets/images/togo-hero.jpeg";
import togoFlyer from "../assets/images/togo-flyer.jpeg";

import togoFloat1 from "../assets/images/togo-float-1.jpeg";
import togoFloat2 from "../assets/images/togo-float-2.jpeg";
import togoFloat3 from "../assets/images/togo-float-3.jpeg";
import togoFloat4 from "../assets/images/togo-float-4.jpeg";

function Togo() {
  return (
    <main className="country-page togo-page">
      {/* HERO */}
      <section className="togo-hero">
        <div className="container togo-hero-layout">
          <div className="togo-hero-content">
            <span className="togo-label">Nos actions à l’international</span>

            <h1>Togo</h1>

            <p>
              En 2015, la ville de Lomé a vibré au rythme de la solidarité lors
              de l’événement Back To School, organisé par Les Colis du Cœur.
              Une journée d’émotion, de partage et d’espoir, dédiée à l’avenir
              des enfants du Togo.
            </p>

            <div className="togo-hero-actions">
              <Link to="/nos-actions" className="togo-btn togo-btn-secondary">
                ← Retour aux actions
              </Link>

              <Link to="/faire-un-don" className="togo-btn togo-btn-primary">
                Soutenir nos actions
              </Link>
            </div>
          </div>

          <div className="togo-hero-image">
            <img src={togoHero} alt="Action solidaire au Togo" />
          </div>
        </div>
      </section>

      {/* FLYER */}
      <section className="togo-flyer-section">
        <div className="container">
          <div className="togo-flyer-card">
            <div className="togo-flyer-image">
              <img
                src={togoFlyer}
                alt="Flyer de l'action Back To School au Togo"
              />
            </div>

            <div className="togo-flyer-text">
              <span className="togo-label">Flyer de l’action</span>

              <h2>Back To School – Lomé, 2015 🇹🇬</h2>

              <p>
                Un flyer qui symbolise une action forte menée à Lomé. Grâce à
                la générosité de nos partenaires et donateurs, nous avons pu
                offrir des cartables scolaires complets pour une rentrée plus
                sereine, digne et motivante.
              </p>

              <div className="togo-impact-card">
                <strong>250</strong>
                <span>cartables scolaires complets distribués aux enfants</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RÉSUMÉ */}
      <section className="togo-summary-section">
        <div className="container togo-summary-grid">
          <article className="togo-summary-card">
            <div>🎒</div>
            <h2>Cartables scolaires</h2>
            <p>
              Une distribution de cartables complets pour aider les enfants à
              commencer l’année scolaire avec confiance.
            </p>
          </article>

          <article className="togo-summary-card">
            <div>✨</div>
            <h2>Égalité des chances</h2>
            <p>
              Chaque cartable représente un encouragement à poursuivre les
              études et à croire en son avenir.
            </p>
          </article>

          <article className="togo-summary-card">
            <div>❤️</div>
            <h2>Espoir & partage</h2>
            <p>
              Une journée humaine, remplie de sourires, de gratitude et de
              moments forts avec les enfants et les familles.
            </p>
          </article>
        </div>
      </section>

      {/* TEXTE PRINCIPAL */}
      <section className="togo-story-section">
        <div className="container togo-story-layout">
          <aside className="togo-story-sticky">
            <span className="togo-label">Notre mission</span>

            <h2>Offrir les outils d’une rentrée plus digne.</h2>

            <p>
              Un cartable scolaire complet, ce n’est pas seulement du matériel :
              c’est une chance, un encouragement et un message d’espoir.
            </p>
          </aside>

          <div className="togo-text-body">
            <p>
              En 2015, la ville de Lomé a vibré au rythme de la solidarité lors
              de l’événement <strong>Back To School</strong>, organisé par Les
              Colis du Cœur. Une journée empreinte d’émotion, de partage et
              d’espoir, dédiée à l’avenir des enfants du Togo.
            </p>

            <p>
              Avec détermination et amour, notre équipe s’est engagée à soutenir
              la scolarité des plus jeunes. Grâce à la générosité de nos
              partenaires et donateurs, nous avons pu distribuer{" "}
              <strong>250 cartables scolaires complets</strong>, soigneusement
              préparés pour offrir à chaque enfant les outils nécessaires à une
              rentrée sereine et motivante.
            </p>

            <blockquote>
              Chaque cartable remis représentait bien plus que du matériel.
            </blockquote>

            <div className="togo-highlight-box">
              <h3>Chaque cartable représentait :</h3>

              <ul>
                <li>un symbole d’égalité des chances,</li>
                <li>un encouragement pour poursuivre les études,</li>
                <li>un geste d’espoir pour un avenir meilleur.</li>
              </ul>
            </div>

            <p>
              La joie dans le regard des enfants, les sourires éclatants des
              parents et la gratitude exprimée par la communauté resteront
              gravés dans nos mémoires. Cet événement a renforcé notre
              conviction que chaque acte, même modeste, peut transformer
              positivement une vie.
            </p>

            <p>
              Les Colis du Cœur continue, depuis cet instant, à mener des
              actions humanitaires pour soutenir l’éducation et le bien-être des
              familles togolaises.
            </p>

            <p>
              <strong>2015</strong> fut une année phare, un véritable point de
              départ vers de nombreux projets solidaires.
            </p>
          </div>
        </div>
      </section>

      {/* GALERIE */}
      <section className="togo-gallery-section">
        <div className="container">
          <div className="togo-section-heading">
            <span className="togo-label">En images</span>
            <h2>Quelques images de nos actions.</h2>
          </div>

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
        </div>
      </section>

      {/* CTA */}
      <section className="togo-final-cta">
        <div className="container togo-final-card">
          <span>Envie de soutenir nos actions au Togo ?</span>

          <h2>Votre soutien aide à faire vivre de nouveaux projets éducatifs.</h2>

          <p>
            Vos dons et partages nous aident à faire vivre des initiatives
            éducatives et solidaires au plus près des enfants et des familles
            qui en ont besoin.
          </p>

          <div className="togo-final-actions">
            <Link to="/faire-un-don" className="togo-btn togo-btn-primary">
              Faire un don
            </Link>

            <Link to="/contact" className="togo-btn togo-btn-secondary">
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Togo;