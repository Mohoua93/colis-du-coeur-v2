// src/pages/Maroc.jsx
import { Link } from "react-router-dom";
import "../styles/bangladesh.css";
import "../styles/maroc.css";

import marocHero from "../assets/images/maroc-hero.jpeg";
import marocFlyer from "../assets/images/maroc-flyer.jpeg";

import marocFloat1 from "../assets/images/maroc-float-1.jpeg";
import marocFloat2 from "../assets/images/maroc-float-2.jpeg";
import marocFloat3 from "../assets/images/maroc-float-3.jpeg";
import marocFloat4 from "../assets/images/maroc-float-4.jpeg";

function Maroc() {
  const videoId = "wUlqvvmTxBw";

  return (
    <main className="country-page maroc-page">
      {/* HERO */}
      <section className="maroc-hero">
        <div className="container maroc-hero-layout">
          <div className="maroc-hero-content">
            <span className="maroc-label">Nos actions à l’international</span>

            <h1>Maroc</h1>

            <p>
              Du 25 avril au 2 mai 2016, nous avons mené une mission solidaire
              au Maroc auprès d’enfants vivant dans des villages isolés près de
              Marrakech, avec la distribution de cartables scolaires complets et
              des moments de partage inoubliables.
            </p>

            <div className="maroc-hero-actions">
              <Link to="/nos-actions" className="maroc-btn maroc-btn-secondary">
                ← Retour aux actions
              </Link>

              <Link to="/faire-un-don" className="maroc-btn maroc-btn-primary">
                Soutenir nos actions
              </Link>
            </div>
          </div>

          <div className="maroc-hero-image">
            <img src={marocHero} alt="Action solidaire au Maroc" />
          </div>
        </div>
      </section>

      {/* FLYER */}
      <section className="maroc-flyer-section">
        <div className="container">
          <div className="maroc-flyer-card">
            <div className="maroc-flyer-image">
              <img src={marocFlyer} alt="Flyer de l'action au Maroc" />
            </div>

            <div className="maroc-flyer-text">
              <span className="maroc-label">Flyer de l’action</span>

              <h2>Projets solidaires au Maroc 🇲🇦</h2>

              <p>
                Ce flyer accompagne le souvenir d’une action menée auprès
                d’enfants de villages isolés autour de Marrakech. Il illustre
                notre volonté d’agir au plus près des besoins essentiels et de
                créer des instants de partage durables.
              </p>

              <div className="maroc-impact-card">
                <strong>200</strong>
                <span>cartables scolaires complets distribués aux enfants</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RÉSUMÉ */}
      <section className="maroc-summary-section">
        <div className="container maroc-summary-grid">
          <article className="maroc-summary-card">
            <div>🎒</div>
            <h2>Cartables scolaires</h2>
            <p>
              Une aide concrète pour encourager les enfants à poursuivre leur
              scolarité avec dignité et confiance.
            </p>
          </article>

          <article className="maroc-summary-card">
            <div>🎨</div>
            <h2>Ateliers & jeux</h2>
            <p>
              Des activités pensées pour offrir aux enfants un moment de joie,
              de créativité et de partage.
            </p>
          </article>

          <article className="maroc-summary-card">
            <div>🤝</div>
            <h2>Partage humain</h2>
            <p>
              Une mission marquée par les rencontres, les sourires et la force
              des liens humains.
            </p>
          </article>
        </div>
      </section>

      {/* TEXTE PRINCIPAL */}
      <section className="maroc-story-section">
        <div className="container maroc-story-layout">
          <aside className="maroc-story-sticky">
            <span className="maroc-label">Notre mission</span>

            <h2>Un voyage de cœur : offrir, partager, transmettre.</h2>

            <p>
              Chaque cartable remis représentait plus qu’un objet : une porte
              ouverte vers l’apprentissage, la confiance et l’avenir.
            </p>
          </aside>

          <div className="maroc-text-body">
            <p>
              Du 25 avril au 2 mai 2016, nous avons choisi de poser nos pas au
              Maroc, non pas en simples visiteurs, mais en porteurs d’espoir, de
              soutien et d’écoute.
            </p>

            <p>
              Durant cette semaine intense et inoubliable, nous avons eu le
              privilège d’offrir 200 cartables scolaires complets à des enfants
              vivant dans des villages isolés, loin des routes touristiques,
              loin du bruit des grandes villes, mais tout près de l’essentiel :
              la simplicité, la dignité, la beauté des liens humains.
            </p>

            <p>
              Nos rencontres nous ont menés à Douar Tagndouche, Douar Ait
              Oumazir, Douar Anmiter et Douar Ighounane, dans les environs de
              Marrakech.
            </p>

            <blockquote>
              Pour eux, nous avons voulu créer un moment qui dise : “Vous
              comptez. Votre avenir compte.”
            </blockquote>

            <p>
              Alors nous avons imaginé un véritable événement : une grande
              structure d’accueil pour les réunir en toute sécurité, des
              ateliers de peinture où les couleurs ont donné vie à leurs rêves,
              des jeux où leurs rires résonnaient comme la plus belle des
              musiques, et un immense goûter partagé, symbole de convivialité et
              de joie simple.
            </p>

            <p>
              Chaque cartable remis n’était pas un simple objet : il représentait
              une porte ouverte vers la connaissance, un encouragement à
              continuer l’école, un message de soutien venu de loin.
            </p>

            <div className="maroc-highlight-box">
              <h3>Une mission remplie d’humanité</h3>
              <p>
                Nous avons reçu autant — sinon plus — que ce que nous avons
                donné. Ces journées nous ont appris la modestie, la force des
                sourires silencieux, la valeur du partage et l’importance de
                tendre la main.
              </p>
            </div>

            <p>
              Ce voyage restera inscrit dans notre histoire comme un moment de
              pure humanité. Parce qu’en offrant du matériel scolaire, c’est un
              peu d’avenir que nous avons tenté d’éclairer.
            </p>

            <p>
              Que ces souvenirs continuent de nous guider, et que chaque action
              future porte en elle la même passion : celle d’aider, d’aimer, et
              de croire en la force des enfants, partout dans le monde.
            </p>
          </div>
        </div>
      </section>

      {/* GALERIE */}
      <section className="maroc-gallery-section">
        <div className="container">
          <div className="maroc-section-heading">
            <span className="maroc-label">En images</span>
            <h2>Quelques images de nos actions.</h2>
          </div>

          <div className="maroc-floating-grid">
            <figure className="maroc-float-card float-1">
              <img src={marocFloat1} alt="Action au Maroc 1" />
            </figure>

            <figure className="maroc-float-card float-2">
              <img src={marocFloat2} alt="Action au Maroc 2" />
            </figure>

            <figure className="maroc-float-card float-3">
              <img src={marocFloat3} alt="Action au Maroc 3" />
            </figure>

            <figure className="maroc-float-card float-4">
              <img src={marocFloat4} alt="Action au Maroc 4" />
            </figure>
          </div>
        </div>
      </section>

      {/* VIDÉO */}
      <section className="maroc-video-section">
        <div className="container">
          <div className="maroc-section-heading">
            <span className="maroc-label">Notre action vidéo</span>
            <h2>Nos actions au Maroc en vidéo.</h2>
            <p>
              Un aperçu de cette mission solidaire et des moments de partage
              vécus auprès des enfants et des familles.
            </p>
          </div>

          <div className="maroc-video-card">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${videoId}`}
              title="Nos actions au Maroc en vidéo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="maroc-final-cta">
        <div className="container maroc-final-card">
          <span>Envie de soutenir nos actions au Maroc ?</span>

          <h2>Vos dons nous aident à faire vivre de nouvelles initiatives.</h2>

          <p>
            Votre soutien permet de financer des projets éducatifs et solidaires
            au plus près des enfants et des familles qui en ont besoin.
          </p>

          <div className="maroc-final-actions">
            <Link to="/faire-un-don" className="maroc-btn maroc-btn-primary">
              Faire un don
            </Link>

            <Link to="/contact" className="maroc-btn maroc-btn-secondary">
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Maroc;