// src/pages/Algerie.js
import { Link } from "react-router-dom";
import "../styles/bangladesh.css";
import "../styles/algerie.css";

import algerieHero from "../assets/images/flyer-back-to-school.jpeg";
import algerieFlyer from "../assets/images/algerie-flyer.jpg";

import algerieFloat1 from "../assets/images/algerie-float-1.jpg";
import algerieFloat2 from "../assets/images/algerie-float-2.jpg";
import algerieFloat3 from "../assets/images/algerie-float-3.jpg";
import algerieFloat4 from "../assets/images/algerie-float-4.jpg";

function Algerie() {
  return (
    <main className="country-page algerie-page">
      {/* HERO */}
      <section className="algerie-hero">
        <div className="container algerie-hero-layout">
          <div className="algerie-hero-content">
            <span className="algerie-label">Nos actions à l’international</span>

            <h1>Back to School en Algérie</h1>

            <p>
              En Algérie, Les Colis du Cœur s’engage auprès des enfants et des
              familles à travers des actions solidaires centrées sur
              l’éducation, la dignité et l’espoir.
            </p>

            <div className="algerie-hero-actions">
              <Link to="/nos-actions" className="algerie-btn algerie-btn-secondary">
                ← Retour aux actions
              </Link>

              <Link to="/faire-un-don" className="algerie-btn algerie-btn-primary">
                Soutenir le projet
              </Link>
            </div>
          </div>

          <div className="algerie-hero-image">
            <img src={algerieHero} alt="Projet Back to School en Algérie" />
          </div>
        </div>
      </section>

      {/* FLYER */}
      <section className="algerie-flyer-section">
        <div className="container">
          <div className="algerie-flyer-card">
            <div className="algerie-flyer-image">
              <img
                src={algerieFlyer}
                alt="Flyer du projet Back to School en Algérie"
              />
            </div>

            <div className="algerie-flyer-text">
              <span className="algerie-label">Flyer du projet</span>

              <h2>Back to School – Algérie 🇩🇿</h2>

              <p>
                Ce flyer présente notre toute première action Back to School,
                réalisée en partenariat avec la Madrassa de Mazer. Une journée
                dédiée aux enfants, à la joie et à l’espoir.
              </p>

              <div className="algerie-price-card">
                <strong>25 €</strong>
                <span>pour offrir un cartable scolaire complet à un enfant</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJET */}
      <section className="algerie-project-section">
        <div className="container algerie-project-layout">
          <aside className="algerie-project-sticky">
            <span className="algerie-label">Le projet</span>

            <h2>Pour que l’école soit un départ, jamais un obstacle.</h2>

            <p>
              Un cartable, des cahiers, des stylos et des fournitures peuvent
              redonner confiance à un enfant pour commencer son année scolaire
              dignement.
            </p>
          </aside>

          <div className="algerie-text-body">
            <p>
              Aller à l’école devrait être un droit simple, naturel, évident. Et
              pourtant, pour de nombreux enfants, ce droit commence par quelque
              chose de très concret : avoir un cartable.
            </p>

            <p>
              Le projet Back to School, mis en place par l’Association de
              l’École Éduqueur, est né d’un constat profondément humain :
              comment demander à un enfant de croire en son avenir s’il n’a même
              pas de quoi commencer son année scolaire dignement ?
            </p>

            <p>
              Back to School, c’est offrir à un enfant en Algérie un cartable
              scolaire complet : un cartable, des cahiers, des stylos, des
              fournitures essentielles… Tout ce dont il a besoin pour franchir
              les portes de l’école avec fierté, confiance et espoir.
            </p>

            <p>
              Derrière chaque cartable, il y a une histoire. Un enfant qui rêve
              d’apprendre. Un enfant qui veut réussir. Un enfant qui mérite les
              mêmes chances que les autres.
            </p>

            <p>
              Ce projet n’est pas un geste ponctuel. C’est un engagement sur le
              long terme. Un chemin que nous avons choisi d’emprunter avec
              patience, détermination et cœur.
            </p>

            <div className="algerie-support-box">
              <h3>Nous avons besoin de tout le monde</h3>

              <ul>
                <li>des bénévoles</li>
                <li>des donateurs et donatrices</li>
                <li>des artistes</li>
                <li>des sportifs</li>
                <li>des personnalités locales</li>
                <li>des citoyens engagés</li>
              </ul>
            </div>

            <p>
              En France, en Algérie, et partout dans le monde. Chacun peut
              apporter sa pierre à l’édifice. Chacun peut faire la différence.
            </p>

            <p>
              Et parfois, la différence est plus accessible qu’on ne l’imagine :
              un cartable scolaire complet pour un enfant ne coûte que{" "}
              <strong>25 euros</strong>.
            </p>

            <p>
              25 euros pour une année scolaire plus sereine. 25 euros pour
              redonner de la dignité. 25 euros pour semer une graine d’avenir.
            </p>

            <p>
              Ce projet, ce n’est pas seulement des fournitures. C’est un
              message que nous envoyons à ces enfants :{" "}
              <strong>“Tu comptes. Ton éducation compte. Ton avenir compte.”</strong>
            </p>

            <p>
              En soutenant Back to School, vous ne faites pas qu’un don. Vous
              offrez une chance. Vous offrez un sourire. Vous offrez de
              l’espoir.
            </p>

            <div className="algerie-contact-card">
              <h3>Contact projet</h3>

              <p>
                WhatsApp 🇫🇷 : <a href="tel:+33777381185">07 77 38 11 85</a>
              </p>

              <p>
                Mail :{" "}
                <a href="mailto:Colisducoeurfr.projet@gmail.com">
                  Colisducoeurfr.projet@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GALERIE */}
      <section className="algerie-gallery-section">
        <div className="container">
          <div className="algerie-section-heading">
            <span className="algerie-label">En images</span>
            <h2>Quelques images de nos actions.</h2>
          </div>

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
        </div>
      </section>

      {/* CTA */}
      <section className="algerie-final-cta">
        <div className="container algerie-final-card">
          <span>Envie de soutenir le projet ?</span>

          <h2>Votre aide peut offrir une rentrée digne à un enfant.</h2>

          <p>
            Votre soutien nous permet d’offrir des cartables, des fournitures et
            des moments de joie à des enfants qui en ont besoin.
          </p>

          <div className="algerie-final-actions">
            <Link to="/faire-un-don" className="algerie-btn algerie-btn-primary">
              Faire un don
            </Link>

            <Link to="/contact" className="algerie-btn algerie-btn-secondary">
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Algerie;