// src/pages/Maraudes.js
import "../styles/bangladesh.css"; // base country-*
import "../styles/maraudes.css";   // styles spécifiques Maraudes

import maraudesHero from "../assets/images/maraudes-hero.jpeg";

import maraudesFloat1 from "../assets/images/maraudes-float-1.jpeg";
import maraudesFloat2 from "../assets/images/maraudes-float-2.jpeg";
import maraudesFloat3 from "../assets/images/maraudes-float-3.jpeg";
import maraudesFloat4 from "../assets/images/maraudes-float-4.jpeg";

function Maraudes() {
  return (
    <section className="country-page maraudes-page">
      <div className="container">
        {/* Hero */}
        <header className="country-hero">
          <div className="country-hero-text">
            <p className="country-eyebrow">Nos actions en France</p>
            <h1 className="country-title">Les Marquisades</h1>
            <p className="country-intro">
              Depuis 2014, notre association intervient en Île-de-France pour
              soutenir les personnes en situation de précarité. À travers
              <strong> Les Colis du Cœur❤️</strong> et notre projet fondateur
              <strong> LES MARQUISADES</strong>, nous offrons une aide matérielle
              essentielle et une présence humaine au plus près de nos amis de la rue.
            </p>
            <a href="/nos-actions" className="country-back-link">
              ← Retour à la carte de nos actions
            </a>
          </div>

          <div className="country-hero-image">
            <img
              src={maraudesHero}
              alt="Maraudes solidaires en région parisienne"
            />
          </div>
        </header>

        {/* ✅ Section texte */}
        <section className="maraudes-text-section">
          <h2 className="country-section-title">
            Les Colis du Cœur❤️ – Les Marquisades : un engagement humain au cœur
            de notre mission 🫶
          </h2>

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
              <strong> LES MARQUISADES</strong>, menées en hommage à Monsieur
              Alain Marquiset, initiateur des premières maraudes en France.
              Plus qu’une distribution alimentaire, une Marquisade représente
              un espace d’écoute, d’échange et d’accompagnement. Elle incarne
              notre volonté d’offrir non seulement une aide matérielle, mais
              également une présence bienveillante auprès de nos amis de la rue.
            </p>

            <p>
              Ce projet, le premier porté par notre association, constitue le
              socle de notre engagement. Il reflète les valeurs qui nous
              animent : solidarité, respect, dignité et proximité humaine.
              Depuis sa création, il demeure un pilier essentiel de notre
              action, et nous continuons à le développer avec la même
              conviction qu’au premier jour.
            </p>

            <p>
              Pour poursuivre cette mission, le soutien du public et de nos
              partenaires est indispensable. Chaque don – qu’il s’agisse de
              denrées alimentaires, de vêtements, de matériel ou d’un appui
              financier – contribue directement à renforcer nos capacités
              d’intervention et à améliorer le quotidien des personnes que nous
              accompagnons.
            </p>

            <p>
              Nous remercions chaleureusement tous ceux qui, par leur générosité
              et leur engagement, permettent aux Marquisades et aux Colis du
              Cœur de perdurer et d’apporter un soutien concret et humain à
              celles et ceux qui en ont le plus besoin.
            </p>
          </div>
        </section>

        {/* ✅ Section Vidéo */}
        <section className="maraudes-video-section">
          <h2 className="country-section-title">
            Distribution de boissons chaudes
          </h2>

          <p className="maraudes-video-intro">
            Découvrez une vidéo de présentation de notre engagement et de nos
            actions sur le terrain.
          </p>

          <div className="maraudes-video-wrapper">
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
        </section>

        {/* ✅ 4 images en apesanteur */}
        <section className="maraudes-floating-section">
          <h2 className="country-section-title">
            Quelques images de nos actions
          </h2>

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
        </section>

        {/* CTA */}
        <section className="country-cta">
          <h2>Envie de soutenir les Marquisades&nbsp;?</h2>
          <p>
            Chaque don – alimentaire, vestimentaire, matériel ou financier –
            renforce directement nos capacités d’intervention et améliore le
            quotidien des personnes que nous accompagnons en Île-de-France.
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

export default Maraudes;



