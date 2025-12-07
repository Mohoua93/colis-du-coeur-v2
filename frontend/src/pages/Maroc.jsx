// src/pages/Maroc.js
import "../styles/bangladesh.css"; // base country-*
import "../styles/maroc.css";      // styles spécifiques Maroc

import marocHero from "../assets/images/maroc-hero.jpeg";
import marocFlyer from "../assets/images/maroc-flyer.jpeg";

import marocFloat1 from "../assets/images/maroc-float-1.jpeg";
import marocFloat2 from "../assets/images/maroc-float-2.jpeg";
import marocFloat3 from "../assets/images/maroc-float-3.jpeg";
import marocFloat4 from "../assets/images/maroc-float-4.jpeg";

function Maroc() {
  return (
    <section className="country-page maroc-page">
      <div className="container">
        {/* Hero */}
        <header className="country-hero">
          <div className="country-hero-text">
            <p className="country-eyebrow">Nos actions à l&apos;international</p>
            <h1 className="country-title">Maroc</h1>
            <p className="country-intro">
              Au Maroc, Les Colis du Cœur souhaitent développer des actions
              solidaires au plus près des besoins locaux. Cette page te permet
              de présenter tes projets actuels et à venir, avec un espace
              dédié à ton flyer et à quelques images de terrain.
            </p>
            <a href="/nos-actions" className="country-back-link">
              ← Retour à la carte de nos actions
            </a>
          </div>

          <div className="country-hero-image">
            <img
              src={marocHero}
              alt="Paysage ou ville au Maroc"
            />
          </div>
        </header>

        {/* ✅ Section Flyer */}
        <section className="maroc-flyer-section">
          <div className="maroc-flyer-card">
            <div className="maroc-flyer-image">
              <img
                src={marocFlyer}
                alt="Flyer de l'action au Maroc"
              />
            </div>

            <div className="maroc-flyer-text">
              <p className="maroc-flyer-eyebrow">Flyer de l&apos;action</p>
              <h2 className="maroc-flyer-title">
                Projets solidaires au Maroc 🇲🇦
              </h2>
              <p>
                Ici tu peux présenter ton flyer officiel lié au Maroc.
                Tu peux remplacer ce texte par un descriptif plus précis
                de l&apos;événement ou du projet dès que tu es prêt.
              </p>
            </div>
          </div>
        </section>

        {/* ✅ Section texte */}
        <section className="maroc-text-section">
          <h2 className="country-section-title">
            Une présence solidaire en construction
          </h2>

          <div className="maroc-text-body">
            <p>
              Le Maroc fait partie des zones que nous souhaitons accompagner
              à travers des initiatives solidaires ciblées et durables. Notre
              ambition est de construire des actions en lien avec des relais
              locaux de confiance, afin de répondre efficacement aux besoins
              identifiés sur le terrain.
            </p>
            <p>
              Cette page évoluera avec l&apos;avancement des projets : campagnes
              de soutien, distributions ponctuelles, actions éducatives,
              ou toute autre initiative à fort impact humain.
            </p>
            <p>
              Nous croyons à une solidarité concrète, respectueuse et
              profondément ancrée dans les réalités locales.
            </p>
          </div>
        </section>

        {/* ✅ 4 images en apesanteur */}
        <section className="maroc-floating-section">
          <h2 className="country-section-title">
            Quelques images de nos actions
          </h2>

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
        </section>

        {/* CTA */}
        <section className="country-cta">
          <h2>Envie de soutenir nos actions au Maroc&nbsp;?</h2>
          <p>
            Vos dons et partages nous aideront à structurer et développer
            des actions solidaires durables sur place.
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

export default Maroc;
