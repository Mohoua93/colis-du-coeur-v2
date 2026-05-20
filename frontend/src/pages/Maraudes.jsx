// src/pages/Maraudes.js
import { Link } from "react-router-dom";
import "../styles/bangladesh.css";
import "../styles/maraudes.css";

import maraudesHero from "../assets/images/maraudes-hero.jpeg";

import maraudesFloat1 from "../assets/images/maraudes-float-1.jpeg";
import maraudesFloat2 from "../assets/images/maraudes-float-2.jpeg";
import maraudesFloat3 from "../assets/images/maraudes-float-3.jpeg";
import maraudesFloat4 from "../assets/images/maraudes-float-4.jpeg";

function Maraudes() {
  return (
    <main className="country-page maraudes-page">
      {/* HERO */}
      <section className="maraudes-hero">
        <div className="container maraudes-hero-layout">
          <div className="maraudes-hero-content">
            <span className="maraudes-label">Nos actions en France</span>

            <h1>Les Marquisades</h1>

            <p>
              Depuis 2014, notre association intervient en Île-de-France pour
              soutenir les personnes en situation de précarité. À travers Les
              Colis du Cœur et notre projet fondateur Les Marquisades, nous
              offrons une aide matérielle essentielle et une présence humaine au
              plus près de nos amis de la rue.
            </p>

            <div className="maraudes-hero-actions">
              <Link to="/nos-actions" className="maraudes-btn maraudes-btn-secondary">
                ← Retour aux actions
              </Link>

              <Link to="/faire-un-don" className="maraudes-btn maraudes-btn-primary">
                Soutenir les Marquisades
              </Link>
            </div>
          </div>

          <div className="maraudes-hero-image">
            <img
              src={maraudesHero}
              alt="Maraudes solidaires en région parisienne"
            />
          </div>
        </div>
      </section>

      {/* RÉSUMÉ */}
      <section className="maraudes-summary-section">
        <div className="container maraudes-summary-grid">
          <article className="maraudes-summary-card">
            <div>☕</div>
            <h2>Boissons chaudes</h2>
            <p>
              Des distributions pour apporter chaleur, réconfort et présence
              humaine aux personnes rencontrées dans la rue.
            </p>
          </article>

          <article className="maraudes-summary-card">
            <div>🍽️</div>
            <h2>Repas & produits essentiels</h2>
            <p>
              Repas, vêtements, confiseries, kits d’hygiène et aide matérielle
              selon les besoins du terrain.
            </p>
          </article>

          <article className="maraudes-summary-card">
            <div>🤝</div>
            <h2>Écoute & accompagnement</h2>
            <p>
              Plus qu’une distribution, chaque Marquisade est un moment
              d’échange, de dignité et de proximité humaine.
            </p>
          </article>
        </div>
      </section>

      {/* TEXTE PRINCIPAL */}
      <section className="maraudes-story-section">
        <div className="container maraudes-story-layout">
          <aside className="maraudes-story-sticky">
            <span className="maraudes-label">Notre mission</span>

            <h2>Un engagement humain au cœur de notre action.</h2>

            <p>
              Les Marquisades incarnent notre volonté d’offrir une aide
              matérielle, mais aussi une présence bienveillante auprès des
              personnes les plus fragiles.
            </p>
          </aside>

          <div className="maraudes-text-body">
            <p>
              Depuis 2014, notre association intervient en Île-de-France pour
              soutenir les personnes en situation de précarité. Grâce à
              l’initiative Les Colis du Cœur, nous distribuons des repas, des
              vêtements, des boissons chaudes, des confiseries, ainsi que des
              produits essentiels à la vie quotidienne.
            </p>

            <p>
              Nos actions s’articulent autour d’un projet fondateur :
              <strong> Les Marquisades</strong>, menées en hommage à Monsieur
              Alain Marquiset, initiateur des premières maraudes en France.
            </p>

            <blockquote>
              Plus qu’une distribution alimentaire, une Marquisade représente un
              espace d’écoute, d’échange et d’accompagnement.
            </blockquote>

            <p>
              Elle incarne notre volonté d’offrir non seulement une aide
              matérielle, mais également une présence bienveillante auprès de nos
              amis de la rue.
            </p>

            <p>
              Ce projet, le premier porté par notre association, constitue le
              socle de notre engagement. Il reflète les valeurs qui nous
              animent : solidarité, respect, dignité et proximité humaine.
            </p>

            <div className="maraudes-highlight-box">
              <h3>Un pilier essentiel depuis 2014</h3>
              <p>
                Depuis sa création, le projet demeure un pilier de notre action,
                et nous continuons à le développer avec la même conviction qu’au
                premier jour.
              </p>
            </div>

            <p>
              Pour poursuivre cette mission, le soutien du public et de nos
              partenaires est indispensable. Chaque don — qu’il s’agisse de
              denrées alimentaires, de vêtements, de matériel ou d’un appui
              financier — contribue directement à renforcer nos capacités
              d’intervention.
            </p>

            <p>
              Nous remercions chaleureusement tous ceux qui, par leur générosité
              et leur engagement, permettent aux Marquisades et aux Colis du Cœur
              de perdurer et d’apporter un soutien concret et humain à celles et
              ceux qui en ont le plus besoin.
            </p>
          </div>
        </div>
      </section>

      {/* VIDÉO */}
      <section className="maraudes-video-section">
        <div className="container">
          <div className="maraudes-section-heading">
            <span className="maraudes-label">Sur le terrain</span>
            <h2>Distribution de boissons chaudes.</h2>
            <p>
              Découvrez une vidéo de présentation de notre engagement et de nos
              actions auprès de nos amis de la rue.
            </p>
          </div>

          <div className="maraudes-video-card">
            <iframe
              src="https://www.youtube-nocookie.com/embed/MtFTKd76er8"
              title="Présentation de l'association Les Colis du Cœur"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </section>

      {/* GALERIE */}
      <section className="maraudes-gallery-section">
        <div className="container">
          <div className="maraudes-section-heading">
            <span className="maraudes-label">En images</span>
            <h2>Quelques images de nos actions.</h2>
          </div>

          <div className="maraudes-floating-grid">
            <figure className="maraudes-float-card float-1">
              <img src={maraudesFloat1} alt="Marquisade 1" />
            </figure>

            <figure className="maraudes-float-card float-2">
              <img src={maraudesFloat2} alt="Marquisade 2" />
            </figure>

            <figure className="maraudes-float-card float-3">
              <img src={maraudesFloat3} alt="Marquisade 3" />
            </figure>

            <figure className="maraudes-float-card float-4">
              <img src={maraudesFloat4} alt="Marquisade 4" />
            </figure>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="maraudes-final-cta">
        <div className="container maraudes-final-card">
          <span>Envie de soutenir les Marquisades ?</span>

          <h2>Chaque don renforce notre présence sur le terrain.</h2>

          <p>
            Don alimentaire, vêtement, matériel ou soutien financier : chaque
            geste améliore concrètement le quotidien des personnes que nous
            accompagnons en Île-de-France.
          </p>

          <div className="maraudes-final-actions">
            <Link to="/faire-un-don" className="maraudes-btn maraudes-btn-primary">
              Faire un don
            </Link>

            <Link to="/contact" className="maraudes-btn maraudes-btn-secondary">
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Maraudes;