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
              Du 25 avril au 2 mai 2016, nous avons choisi de poser nos pas au
              Maroc, non pas en simples visiteurs, mais en porteurs d’espoir,
              de soutien et d’écoute. Durant cette semaine intense et
              inoubliable, nous avons eu le privilège d’offrir 200 cartables
              scolaires complets à des enfants vivant dans des villages isolés,
              près de Marrakech.
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
                Ce flyer accompagne le souvenir d’une action menée auprès
                d’enfants de villages isolés autour de Marrakech. Il illustre
                notre volonté d’agir au plus près des besoins essentiels et de
                créer des instants de partage durables.
              </p>
            </div>
          </div>
        </section>

        {/* ✅ Section texte */}
        <section className="maroc-text-section">
          <h2 className="country-section-title">
            Un voyage de cœur : offrir, partager, transmettre
          </h2>

          <div className="maroc-text-body">
            <p>
              Du 25 avril au 2 mai 2016, nous avons choisi de poser nos pas au
              Maroc, non pas en simples visiteurs, mais en porteurs d’espoir, de
              soutien et d’écoute. Durant cette semaine intense et inoubliable,
              nous avons eu le privilège d’offrir 200 cartables scolaires
              complets à des enfants vivant dans des villages isolés, loin des
              routes touristiques, loin du bruit des grandes villes, mais tout
              près de l’essentiel : la simplicité, la dignité, la beauté des
              liens humains.
            </p>

            <p>
              Nos rencontres nous ont menés à Douar Tagndouche, Douar Ait
              Oumazir, Douar Anmiter et Douar Ighounane, dans les environs de
              Marrakech. Ces villages, nichés entre montagnes et paysages
              authentiques, nous ont accueillis avec une chaleur silencieuse,
              celle qui se lit dans les regards, dans les gestes, dans les
              sourires timides mais sincères des enfants.
            </p>

            <p>
              Pour eux, nous avons voulu créer un moment à part. Un moment qui
              resterait, même après notre départ. Un moment qui dise : « Vous
              comptez. Votre avenir compte. »
            </p>

            <p>
              Alors nous avons imaginé un véritable événement : une grande
              structure d’accueil pour les réunir en toute sécurité, des
              ateliers de peinture où les couleurs ont donné vie à leurs rêves,
              des jeux où leurs rires résonnaient comme la plus belle des
              musiques, et un immense goûter partagé, symbole de convivialité
              et de joie simple.
            </p>

            <p>
              Chaque cartable remis n’était pas un simple objet : il
              représentait une porte ouverte vers la connaissance, un
              encouragement à continuer l’école, un message de soutien venu de
              loin. Et à chaque fois qu’une petite main se tendait pour attraper
              son sac, nos cœurs se remplissaient un peu plus.
            </p>

            <p>
              Mais la vérité, c’est que nous avons reçu autant – sinon plus –
              que ce que nous avons donné. Ces journées nous ont appris la
              modestie, la force des sourires silencieux, la valeur du partage,
              et l’importance de tendre la main, même à ceux que l’on ne connaît
              pas encore.
            </p>

            <p>
              Ce voyage restera inscrit dans notre histoire comme un moment de
              pure humanité. Parce qu’en offrant du matériel scolaire, c’est un
              peu d’avenir que nous avons tenté d’éclairer. Et parce qu’en
              retour, ce sont leurs regards – remplis de gratitude, de curiosité
              et d’espoir – qui ont illuminé le nôtre.
            </p>

            <p>
              Que ces souvenirs continuent de nous guider, et que chaque action
              future porte en elle la même passion : celle d’aider, d’aimer, et
              de croire en la force des enfants, partout dans le monde.
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

export default Maroc;
