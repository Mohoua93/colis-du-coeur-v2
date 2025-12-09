// src/pages/DistribAlim.js
import "../styles/bangladesh.css"; // base country-*
import "../styles/distribAlim.css"; // styles spécifiques Distribution

import distribHero from "../assets/images/distrib-hero.jpeg";

import distribFloat1 from "../assets/images/distrib-float-1.jpeg";
import distribFloat2 from "../assets/images/distrib-float-2.jpeg";
import distribFloat3 from "../assets/images/distrib-float-3.jpeg";
import distribFloat4 from "../assets/images/distrib-float-4.jpeg";

// ✅ Vidéo locale
// ⚠️ Ajuste le chemin/nom si ton fichier est différent
import distribVideo from "../assets/images/VideoSection.mp4";

function DistribAlim() {
  return (
    <section className="country-page distrib-page">
      <div className="container">
        {/* Hero */}
        <header className="country-hero">
          <div className="country-hero-text">
            <p className="country-eyebrow">Nos actions en France</p>
            <h1 className="country-title">Distribution Alimentaire</h1>
            <p className="country-intro">
              Depuis 2014, Les Colis du Cœur s’engagent chaque mois pour que
              chacun puisse manger dignement, avec respect, bienveillance et
              humanité.
            </p>

            <a href="/nos-actions" className="country-back-link">
              ← Retour à la carte de nos actions
            </a>
          </div>

          <div className="country-hero-image">
            <img src={distribHero} alt="Distribution alimentaire solidaire" />
          </div>
        </header>

        {/* ✅ Section texte */}
        <section className="distrib-text-section">
          <h2 className="country-section-title">
            LES COLIS DU CŒUR ❤️ – Ensemble, pour que chacun puisse manger dignement
          </h2>

          <div className="distrib-text-body">
            <p>
              Depuis 2014, Les Colis du Cœur s’engagent chaque mois auprès de
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

            <p>
              <strong>“Tu n’es pas seul.”</strong>
            </p>

            <p>
              Parce que se nourrir n’est pas un privilège. C’est un droit humain.
            </p>

            <p>
              Dans un monde où beaucoup courent, où tout va vite, certains se
              battent encore pour accéder à l’essentiel : manger, tenir debout,
              rester en santé, garder espoir. Pour eux, le moindre soutien peut
              devenir un tournant. Une lumière dans une période sombre. Un rappel
              qu’il existe encore des mains qui se tendent, des cœurs qui
              veillent, des humains qui n’ont pas oublié l’humain.
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

            <h3 className="distrib-subtitle">
              Une mission simple, mais essentielle : soulager, soutenir, redonner souffle
            </h3>

            <p>
              Chaque mois, grâce à nos bénévoles et à votre générosité, nous
              distribuons des colis alimentaires qui permettent à des centaines
              de personnes de retrouver un peu de répit. Un peu de calme dans
              leurs inquiétudes. Un peu de chaleur dans leurs journées.
            </p>

            <p>
              Un colis, c’est plus que de la nourriture. C’est un geste qui dit :
              <strong> “Ta dignité compte.”</strong>{" "}
              <strong>“Ta vie a de la valeur.”</strong>{" "}
              <strong>“Nous avançons avec toi.”</strong>
            </p>

            <h3 className="distrib-subtitle">
              L’unité : notre force la plus précieuse
            </h3>

            <p>
              Dans une société parfois fracturée, nous choisissons l’unité. Nous
              choisissons de rassembler au lieu de diviser, d’écouter au lieu de
              juger, d’aider au lieu de détourner le regard.
            </p>

            <p>
              Aux Colis du Cœur, nous sommes une seule et même communauté. Une
              communauté où chacun, quelle que soit son histoire, peut trouver
              soutien et réconfort. Parce que nous croyons profondément que
              l’être humain dépasse toutes les différences.
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
        </section>

        {/* ✅ Section vidéo locale + texte à côté */}
        <section className="video-section">
          <p className="video-eyebrow">Notre action en vidéo</p>
          <h2 className="video-title">Distribution Alimentaire en vidéo</h2>
          <p className="video-intro">
            Un aperçu de nos distributions, de nos bénévoles et de l’impact
            concret de votre solidarité.
          </p>

          <div className="video-split">
            <div className="video-wrapper">
              <video
                src={distribVideo}
                controls
                playsInline
                preload="metadata"
                className="video-native"
              />
            </div>

            <aside className="video-side-card">
              <p className="video-side-eyebrow">Soutien</p>
              <h3 className="video-side-title">
                Mohammed Amoura 🇩🇿
              </h3>
              <p className="video-side-text">
                Nous remercions chaleureusement le joueur de football,
                international Algérien <strong>Mohammed Amoura</strong>,
                pour son message de soutien et sa bienveillance envers
                <strong> Les Colis du Cœur</strong>.
              </p>
              <p className="video-side-text">
                Son encouragement renforce notre énergie collective et rappelle
                que la solidarité peut rassembler bien au-delà des terrains.
              </p>
            </aside>
          </div>
        </section>

        {/* ✅ 4 images en apesanteur */}
        <section className="distrib-floating-section">
          <h2 className="country-section-title">
            Quelques images de nos distributions
          </h2>

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
        </section>

        {/* CTA */}
        <section className="country-cta">
          <h2>Envie de soutenir la distribution alimentaire&nbsp;?</h2>
          <p>
            Votre aide nous permet de maintenir des distributions régulières,
            respectueuses et adaptées aux besoins des familles, étudiants,
            personnes isolées et amis de la rue.
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

export default DistribAlim;

