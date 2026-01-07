// src/pages/Algerie.js
import "../styles/bangladesh.css"; // base country-*
import "../styles/algerie.css"; // styles spécifiques Algérie

import algerieHero from "../assets/images/flyer-back-to-school.jpeg";
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
            <img src={algerieHero} alt="Paysage ou ville en Algérie" />
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
              <h2 className="algerie-flyer-title">Back to School – Algérie 🇩🇿</h2>
              <p>
                Ce flyer présente notre toute première action Back to School
                réalisée en partenariat avec la Madrassa de Mazer. Une journée
                dédiée aux enfants, à la joie et à l&apos;espoir.
              </p>
            </div>
          </div>
        </section>

        {/* ✅ Section texte (mise à jour) */}
        <section className="algerie-text-section">
          <h2 className="country-section-title">🎒 Projet Back to School Algérie 🇩🇿</h2>

          <div className="algerie-text-body">
            <p>
              Aller à l’école devrait être un droit simple, naturel, évident. Et
              pourtant, pour de nombreux enfants, ce droit commence par quelque
              chose de très concret : avoir un cartable.
            </p>

            <p>
              Le projet Back to School, mis en place par l’Association de l’École
              Éduqueur, est né d’un constat profondément humain : comment demander
              à un enfant de croire en son avenir s’il n’a même pas de quoi
              commencer son année scolaire dignement ?
            </p>

            <p>
              👉 Back to School, c’est offrir à un enfant en Algérie un cartable
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
              patience, détermination et cœur. Parce que changer les choses
              durablement prend du temps… mais surtout, cela demande d’être
              ensemble.
            </p>

            <p>💛 Nous avons besoin de tout le monde :</p>

            <ul className="algerie-text-list">
              <li>des bénévoles</li>
              <li>des donateurs et donatrices</li>
              <li>des artistes</li>
              <li>des sportifs</li>
              <li>des personnalités locales</li>
              <li>des citoyens engagés</li>
            </ul>

            <p>
              En France, en Algérie, et partout dans le monde. Chacun peut
              apporter sa pierre à l’édifice. Chacun peut faire la différence.
            </p>

            <p>
              ✨ Et parfois, la différence est plus accessible qu’on ne l’imagine :
              <br />
              👉 Un cartable scolaire complet pour un enfant ne coûte que{" "}
              <strong>25 euros</strong>.
              <br />
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
              offrez une chance. Vous offrez un sourire. Vous offrez de l’espoir.
            </p>

            <p>
              🙏 Merci à toutes celles et ceux qui croiront en ce projet, qui le
              partageront, qui le soutiendront, et qui marcheront à nos côtés.
              Parce qu’ensemble, nous pouvons permettre à chaque enfant d’aller à
              l’école dignement.
            </p>

            <p>
              🎒{" "}
              <strong>
                Back to School – Pour que l’école soit un départ, jamais un obstacle.
              </strong>
            </p>

            <p>
              WhatsApp 🇫🇷 : <a href="tel:+33777381185">07 77 38 11 85</a>
              <br />
              Mail :{" "}
              <a href="mailto:Colisducoeurfr.projet@gmail.com">
                Colisducoeurfr.projet@gmail.com
              </a>
            </p>
          </div>
        </section>

        {/* ✅ 4 images en apesanteur */}
        <section className="algerie-floating-section">
          <h2 className="country-section-title">Quelques images de nos actions</h2>

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
            Votre aide nous permet d&apos;offrir des cartables, des repas et des
            journées de joie à des enfants qui en ont besoin.
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

