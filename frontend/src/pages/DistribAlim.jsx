// src/pages/DistribAlim.js
import { Link } from "react-router-dom";
import "../styles/bangladesh.css";
import "../styles/distribAlim.css";

import distribHero from "../assets/images/distrib-hero.jpeg";

import distribFloat1 from "../assets/images/distrib-float-1.jpeg";
import distribFloat2 from "../assets/images/distrib-float-2.jpeg";
import distribFloat3 from "../assets/images/distrib-float-3.jpeg";
import distribFloat4 from "../assets/images/distrib-float-4.jpeg";

function DistribAlim() {
  return (
    <main className="country-page distrib-page">
      {/* HERO */}
      <section className="distrib-hero">
        <div className="container distrib-hero-layout">
          <div className="distrib-hero-content">
            <span className="distrib-label">Nos actions en France</span>

            <h1>Distribution alimentaire</h1>

            <p>
              Depuis 2014, Les Colis du Cœur s’engage chaque mois pour que
              chacun puisse manger dignement, avec respect, bienveillance et
              humanité.
            </p>

            <div className="distrib-hero-actions">
              <Link to="/nos-actions" className="distrib-btn distrib-btn-secondary">
                ← Retour aux actions
              </Link>

              <Link to="/faire-un-don" className="distrib-btn distrib-btn-primary">
                Soutenir cette action
              </Link>
            </div>
          </div>

          <div className="distrib-hero-image">
            <img src={distribHero} alt="Distribution alimentaire solidaire" />
          </div>
        </div>
      </section>

      {/* INTRO CARDS */}
      <section className="distrib-summary-section">
        <div className="container distrib-summary-grid">
          <article className="distrib-summary-card">
            <div>📦</div>
            <h2>Colis alimentaires</h2>
            <p>
              Des distributions régulières pour apporter une aide concrète aux
              familles, étudiants, personnes isolées et amis de la rue.
            </p>
          </article>

          <article className="distrib-summary-card">
            <div>🤝</div>
            <h2>Respect & dignité</h2>
            <p>
              Chaque personne est accueillie sans jugement, avec écoute,
              bienveillance et respect de son parcours.
            </p>
          </article>

          <article className="distrib-summary-card">
            <div>❤️</div>
            <h2>Solidarité terrain</h2>
            <p>
              Une chaîne humaine portée par les bénévoles, les donateurs et les
              personnes engagées autour de l’association.
            </p>
          </article>
        </div>
      </section>

      {/* TEXTE PRINCIPAL */}
      <section className="distrib-story-section">
        <div className="container distrib-story-layout">
          <aside className="distrib-story-sticky">
            <span className="distrib-label">Notre engagement</span>

            <h2>Ensemble, pour que chacun puisse manger dignement.</h2>

            <p>
              Un colis, c’est plus que de la nourriture. C’est un message de
              soutien, de dignité et d’espoir.
            </p>
          </aside>

          <div className="distrib-text-body">
            <p>
              Depuis 2014, Les Colis du Cœur s’engage chaque mois auprès de
              celles et ceux pour qui le quotidien est devenu un combat : des
              familles qui n’arrivent plus à joindre les deux bouts, des
              étudiants isolés qui sautent des repas pour économiser, des
              personnes qui vivent dans une grande précarité et qui, souvent en
              silence, luttent simplement pour remplir leur frigidaire.
            </p>

            <p>
              Nous avons choisi d’être là, à leurs côtés. Choisi d’agir, sans
              jugement, sans conditions, sans distinction.
            </p>

            <p>
              Car derrière chaque appel à l’aide, il y a une histoire. Derrière
              chaque visage, il y a une dignité qui doit être préservée. Et
              derrière chaque colis que nous remettons, il y a un message simple
              mais essentiel :
            </p>

            <blockquote>“Tu n’es pas seul.”</blockquote>

            <p>
              Parce que se nourrir n’est pas un privilège. C’est un droit humain.
            </p>

            <p>
              Dans un monde où beaucoup courent, où tout va vite, certains se
              battent encore pour accéder à l’essentiel : manger, tenir debout,
              rester en santé, garder espoir. Pour eux, le moindre soutien peut
              devenir un tournant. Une lumière dans une période sombre.
            </p>

            <p>
              Chez Les Colis du Cœur, nous croyons que la solidarité n’a pas de
              frontières. Pas de couleur. Pas d’étiquette. Pas de religion.
            </p>

            <p>
              Nous accueillons chaque personne comme elle est, là où elle en est.
              Avec respect, bienveillance et humanité. Car nous n’aidons pas des
              “bénéficiaires”. Nous accompagnons des personnes. Des êtres humains
              qui pourraient être nos voisins, nos amis, nos proches — ou même
              nous-mêmes.
            </p>

            <div className="distrib-highlight-box">
              <h3>Une mission simple, mais essentielle</h3>
              <p>
                Soulager, soutenir, redonner souffle. Chaque mois, grâce à nos
                bénévoles et à votre générosité, nous distribuons des colis
                alimentaires qui permettent à des centaines de personnes de
                retrouver un peu de répit.
              </p>
            </div>

            <p>
              Un colis, c’est plus que de la nourriture. C’est un geste qui dit :
              <strong> “Ta dignité compte.”</strong>{" "}
              <strong>“Ta vie a de la valeur.”</strong>{" "}
              <strong>“Nous avançons avec toi.”</strong>
            </p>

            <div className="distrib-highlight-box distrib-highlight-pink">
              <h3>L’unité : notre force la plus précieuse</h3>
              <p>
                Dans une société parfois fracturée, nous choisissons l’unité.
                Nous choisissons de rassembler au lieu de diviser, d’écouter au
                lieu de juger, d’aider au lieu de détourner le regard.
              </p>
            </div>

            <p>
              Aux Colis du Cœur, nous sommes une seule et même communauté. Une
              communauté où chacun, quelle que soit son histoire, peut trouver
              soutien et réconfort.
            </p>

            <p>
              <strong>
                Nous sommes les Colis du Cœur. Nous sommes votre soutien.
                <br />
                Et tant qu’il y aura des besoins, nous continuerons.
              </strong>
            </p>

            <p>
              À vous qui recevez, à vous qui donnez, à vous qui vous engagez :
              merci de faire de cette mission une réalité.
            </p>

            <p>
              Ensemble, nous formons une chaîne de solidarité qui ne rompt
              jamais. Une chaîne qui porte, qui aide, qui aime. Une chaîne qui
              rappelle que le cœur reste, et restera toujours, notre plus belle
              force.
            </p>
          </div>
        </div>
      </section>

      {/* GALERIE */}
      <section className="distrib-gallery-section">
        <div className="container">
          <div className="distrib-section-heading">
            <span className="distrib-label">En images</span>
            <h2>Quelques images de nos distributions.</h2>
          </div>

          <div className="distrib-floating-grid">
            <figure className="distrib-float-card float-1">
              <img src={distribFloat1} alt="Distribution alimentaire 1" />
            </figure>

            <figure className="distrib-float-card float-2">
              <img src={distribFloat2} alt="Distribution alimentaire 2" />
            </figure>

            <figure className="distrib-float-card float-3">
              <img src={distribFloat3} alt="Distribution alimentaire 3" />
            </figure>

            <figure className="distrib-float-card float-4">
              <img src={distribFloat4} alt="Distribution alimentaire 4" />
            </figure>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="distrib-final-cta">
        <div className="container distrib-final-card">
          <span>Envie de soutenir la distribution alimentaire ?</span>

          <h2>Votre aide permet de maintenir des distributions régulières.</h2>

          <p>
            Chaque don nous aide à répondre aux besoins des familles, étudiants,
            personnes isolées et amis de la rue avec dignité et humanité.
          </p>

          <div className="distrib-final-actions">
            <Link to="/faire-un-don" className="distrib-btn distrib-btn-primary">
              Faire un don
            </Link>

            <Link to="/contact" className="distrib-btn distrib-btn-secondary">
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default DistribAlim;