// src/pages/RecolteAlimentaire.js
import { Link } from "react-router-dom";
import "../styles/bangladesh.css";
import "../styles/recolte-alimentaire.css";

import recolteHero from "../assets/images/recolte-hero.jpeg";
import recolteFlyer from "../assets/images/flyer-recolte.jpeg";

import recolteFloat1 from "../assets/images/recolte-float-1.jpeg";
import recolteFloat2 from "../assets/images/recolte-float-2.jpeg";
import recolteFloat3 from "../assets/images/recolte-float-3.jpeg";
import recolteFloat4 from "../assets/images/recolte-float-4.jpeg";

function RecolteAlimentaire() {
  return (
    <main className="country-page recolte-page">
      {/* HERO */}
      <section className="recolte-hero">
        <div className="container recolte-hero-layout">
          <div className="recolte-hero-content">
            <span className="recolte-label">Nos actions en France</span>

            <h1>Récoltes alimentaires</h1>

            <p>
              Depuis 2014, Les Colis du Cœur organise des récoltes alimentaires
              pour collecter des denrées auprès de professionnels, particuliers
              et partenaires, afin de soutenir chaque mois les personnes les plus
              fragilisées.
            </p>

            <div className="recolte-hero-actions">
              <Link to="/nos-actions" className="recolte-btn recolte-btn-secondary">
                ← Retour aux actions
              </Link>

              <Link to="/faire-un-don" className="recolte-btn recolte-btn-primary">
                Soutenir les récoltes
              </Link>
            </div>
          </div>

          <div className="recolte-hero-image">
            <img src={recolteHero} alt="Récolte alimentaire solidaire" />
          </div>
        </div>
      </section>

      {/* FLYER */}
      <section className="recolte-flyer-section">
        <div className="container">
          <div className="recolte-flyer-card">
            <div className="recolte-flyer-image">
              <img src={recolteFlyer} alt="Flyer des récoltes alimentaires" />
            </div>

            <div className="recolte-flyer-text">
              <span className="recolte-label">Flyer de l’action</span>

              <h2>Récoltes Alimentaires 🥫💛</h2>

              <p>
                Ce flyer représente l’un de nos piliers historiques : une action
                régulière, profondément humaine, qui nous permet de collecter des
                denrées auprès de professionnels et de particuliers afin de
                soutenir chaque mois les personnes les plus fragilisées.
              </p>

              <div className="recolte-impact-card">
                <strong>10 ans</strong>
                <span>de solidarité, de collectes et d’engagement terrain</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RÉSUMÉ */}
      <section className="recolte-summary-section">
        <div className="container recolte-summary-grid">
          <article className="recolte-summary-card">
            <div>🥫</div>
            <h2>Collecter</h2>
            <p>
              Denrées alimentaires, produits d’hygiène, boissons et produits de
              première nécessité sont collectés auprès de donateurs engagés.
            </p>
          </article>

          <article className="recolte-summary-card">
            <div>📦</div>
            <h2>Distribuer</h2>
            <p>
              Les dons collectés permettent de constituer des colis complets et
              adaptés aux besoins des familles, étudiants et personnes isolées.
            </p>
          </article>

          <article className="recolte-summary-card">
            <div>❤️</div>
            <h2>Créer du lien</h2>
            <p>
              Au-delà de l’aide alimentaire, chaque récolte permet de recréer du
              lien, de l’écoute, du réconfort et de l’humanité.
            </p>
          </article>
        </div>
      </section>

      {/* TEXTE PRINCIPAL */}
      <section className="recolte-story-section">
        <div className="container recolte-story-layout">
          <aside className="recolte-story-sticky">
            <span className="recolte-label">Notre mission</span>

            <h2>10 ans de solidarité en mouvement.</h2>

            <p>
              Une action essentielle au cœur de notre association, portée par
              les bénévoles, les donateurs, les commerçants et les citoyens
              engagés.
            </p>
          </aside>

          <div className="recolte-text-body">
            <p>
              <strong>Une action essentielle au cœur de notre association.</strong>
            </p>

            <h3>Notre mission</h3>
            <p>
              Depuis 2014, notre association porte avec courage et compassion une
              mission simple mais vitale : collecter des denrées alimentaires
              auprès de professionnels et de particuliers, afin de soutenir les
              personnes les plus fragilisées.
            </p>

            <p>
              Ce projet est devenu au fil des années l’un des axes prioritaires
              de notre association, un véritable pilier qui nous permet d’agir
              chaque mois auprès de centaines de personnes.
            </p>

            <div className="recolte-highlight-box">
              <h3>Une chaîne de solidarité qui grandit chaque année</h3>
              <p>Nos récoltes alimentaires sont rendues possibles grâce à :</p>

              <ul>
                <li>des commerçants et entreprises partenaires,</li>
                <li>des familles,</li>
                <li>des étudiants,</li>
                <li>des citoyens engagés,</li>
                <li>des personnes qui contribuent à remplir nos paniers solidaires.</li>
              </ul>
            </div>

            <p>
              Chaque collecte nous permet de constituer des colis complets et
              généreux : produits frais, conserves, féculents, produits
              d’hygiène, boissons, douceurs…
            </p>

            <p>
              Mais surtout, chaque paquet contient une part d’humanité, une
              preuve concrète qu’ensemble, on peut changer le quotidien de
              quelqu’un.
            </p>

            <h3>À qui sont destinées nos aides ?</h3>

            <p>
              Chaque mois, nous distribuons des centaines de colis alimentaires à
              des personnes qui traversent des situations difficiles.
            </p>

            <ul className="recolte-list">
              <li>des familles en difficulté,</li>
              <li>des étudiants aux ressources insuffisantes,</li>
              <li>des personnes isolées dont la précarité est souvent invisible,</li>
              <li>des personnes sans domicile, nos amis de la rue,</li>
              <li>des personnes âgées, parfois seules et oubliées.</li>
            </ul>

            <p>
              Nos actions vont bien au-delà de la nourriture. Elles permettent de
              recréer du lien, d’apporter du réconfort, un sourire, un moment
              d’écoute.
            </p>

            <blockquote>
              Grâce à vous, nous offrons plus que de la nourriture. Nous offrons
              une présence, un peu d’espoir et de l’humanité.
            </blockquote>

            <h3>10 ans d’engagement, 10 ans d’espoir</h3>

            <p>
              Depuis plus de dix ans, nous avons développé une action solide,
              régulière et profondément humaine. Ce qui n’était au départ qu’un
              petit geste est aujourd’hui une chaîne de solidarité durable,
              portée par des bénévoles passionnés et des partenaires fidèles.
            </p>

            <div className="recolte-values-grid">
              <span>Partage</span>
              <span>Respect</span>
              <span>Entraide</span>
              <span>Dignité</span>
            </div>

            <h3>Appel aux dons</h3>

            <p>
              Chaque mois, la demande augmente. Les situations de précarité se
              multiplient. Votre soutien est indispensable pour que nous
              puissions continuer à offrir des colis nourrissants, variés et
              adaptés aux besoins de chacun.
            </p>

            <p>Vous pouvez contribuer de plusieurs façons :</p>

            <ul className="recolte-list">
              <li>Don alimentaire : particuliers, commerçants, entreprises</li>
              <li>Don financier, même 1 € compte</li>
              <li>Partenariat professionnel</li>
              <li>Organisation de collectes dans votre quartier ou votre entreprise</li>
              <li>Bénévolat lors des distributions</li>
            </ul>

            <div className="recolte-contact-box">
              <h3>Comment participer ?</h3>

              <p>
                Déposer un don alimentaire dans nos points de collecte :
                <br />
                <strong>29 rue Henri Simon à Aulnay-sous-Bois</strong>
              </p>

              <p>
                Appelez-nous pour définir un jour et une heure de rendez-vous :
                <br />
                <a href="tel:+33777381185">07 77 38 11 85</a>
              </p>

              <p>
                Vous pouvez aussi faire un don en ligne ou rejoindre nos
                bénévoles lors des récoltes et distributions.
              </p>
            </div>

            <p>
              Ensemble, continuons à faire battre le cœur de la solidarité.
            </p>

            <h3>Merci à nos donateurs et partenaires</h3>

            <p>
              Depuis 2014, vous êtes des centaines à nous soutenir. Grâce à
              vous, des milliers de colis ont pu être distribués. Grâce à vous,
              des vies ont changé. Grâce à vous, nous continuerons encore
              longtemps.
            </p>
          </div>
        </div>
      </section>

      {/* GALERIE */}
      <section className="recolte-gallery-section">
        <div className="container">
          <div className="recolte-section-heading">
            <span className="recolte-label">En images</span>
            <h2>Quelques images de nos récoltes.</h2>
          </div>

          <div className="recolte-floating-grid">
            <figure className="recolte-float-card float-1">
              <img src={recolteFloat1} alt="Récolte alimentaire 1" />
            </figure>

            <figure className="recolte-float-card float-2">
              <img src={recolteFloat2} alt="Récolte alimentaire 2" />
            </figure>

            <figure className="recolte-float-card float-3">
              <img src={recolteFloat3} alt="Récolte alimentaire 3" />
            </figure>

            <figure className="recolte-float-card float-4">
              <img src={recolteFloat4} alt="Récolte alimentaire 4" />
            </figure>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="recolte-final-cta">
        <div className="container recolte-final-card">
          <span>Envie de soutenir nos récoltes alimentaires ?</span>

          <h2>Chaque don renforce notre capacité d’action.</h2>

          <p>
            Chaque don et chaque engagement renforcent directement notre
            capacité à accompagner les familles, les étudiants, les personnes
            isolées et nos amis de la rue.
          </p>

          <div className="recolte-final-actions">
            <Link to="/faire-un-don" className="recolte-btn recolte-btn-primary">
              Faire un don
            </Link>

            <Link to="/contact" className="recolte-btn recolte-btn-secondary">
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default RecolteAlimentaire;