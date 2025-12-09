// src/pages/RecolteAlimentaire.js
import "../styles/bangladesh.css"; // base country-*
import "../styles/recolte-alimentaire.css"; // styles spécifiques Récolte

import recolteHero from "../assets/images/recolte-hero.jpeg";
import recolteFlyer from "../assets/images/recolte-flyer.jpeg";

import recolteFloat1 from "../assets/images/recolte-float-1.jpeg";
import recolteFloat2 from "../assets/images/recolte-float-2.jpeg";
import recolteFloat3 from "../assets/images/recolte-float-3.jpeg";
import recolteFloat4 from "../assets/images/recolte-float-4.jpeg";

function RecolteAlimentaire() {
  return (
    <section className="country-page recolte-page">
      <div className="container">
        {/* Hero */}
        <header className="country-hero">
          <div className="country-hero-text">
            <p className="country-eyebrow">Nos actions en France</p>
            <h1 className="country-title">Récoltes Alimentaires</h1>
            <p className="country-intro">
              <strong>🥫 Récoltes Alimentaires : 10 Ans de Solidarité en Mouvement</strong>
              <br />
              Une action essentielle au cœur de notre association.
            </p>

            <a href="/nos-actions" className="country-back-link">
              ← Retour à la carte de nos actions
            </a>
          </div>

          <div className="country-hero-image">
            <img src={recolteHero} alt="Récolte alimentaire solidaire" />
          </div>
        </header>

        {/* ✅ Section Flyer (style Maroc) */}
        <section className="recolte-flyer-section">
          <div className="recolte-flyer-card">
            <div className="recolte-flyer-image">
              <img
                src={recolteFlyer}
                alt="Flyer des récoltes alimentaires"
              />
            </div>

            <div className="recolte-flyer-text">
              <p className="recolte-flyer-eyebrow">Flyer de l&apos;action</p>
              <h2 className="recolte-flyer-title">
                Récoltes Alimentaires 🥫💛
              </h2>
              <p>
                Ce flyer représente l’un de nos piliers historiques : une action
                régulière, profondément humaine, qui nous permet de collecter des
                denrées auprès de professionnels et de particuliers afin de
                soutenir chaque mois les personnes les plus fragilisées.
              </p>
            </div>
          </div>
        </section>

        {/* ✅ Section texte */}
        <section className="recolte-text-section">
          <h2 className="country-section-title">
            🥫 Récoltes Alimentaires : 10 Ans de Solidarité en Mouvement
          </h2>

          <div className="recolte-text-body">
            <p>
              <strong>Une action essentielle au cœur de notre association</strong>
            </p>

            <h3 className="recolte-subtitle">🌱 Notre Mission</h3>
            <p>
              Depuis 2014, notre association porte avec courage et compassion une
              mission simple mais vitale : collecter des denrées alimentaires auprès
              de professionnels et de particuliers, afin de soutenir les personnes
              les plus fragilisées.
            </p>
            <p>
              Ce projet est devenu au fil des années l’un des axes prioritaires de
              notre association, un véritable pilier qui nous permet d’agir chaque
              mois auprès de centaines de personnes.
            </p>

            <h3 className="recolte-subtitle">
              🤝 Une Chaîne de Solidarité Qui Grandit Chaque Année
            </h3>
            <p>Nos récoltes alimentaires sont rendues possibles grâce à :</p>
            <ul className="recolte-list">
              <li>des commerçants et entreprises partenaires,</li>
              <li>des familles,</li>
              <li>des étudiants,</li>
              <li>des citoyens engagés,</li>
              <li>qui, tous ensemble, contribuent à remplir nos paniers solidaires.</li>
            </ul>
            <p>
              Chaque collecte nous permet de constituer des colis complets et
              généreux : produits frais, conserves, féculents, produits d’hygiène,
              boissons, douceurs…
            </p>
            <p>
              Mais surtout, chaque paquet contient une part d’humanité, une preuve
              concrète qu’ensemble, on peut changer le quotidien de quelqu’un.
            </p>

            <h3 className="recolte-subtitle">❤️ À Qui Sont Destinées Nos Aides ?</h3>
            <p>Chaque mois, nous distribuons des centaines de colis alimentaires à :</p>
            <ul className="recolte-list">
              <li>des familles en difficulté,</li>
              <li>des étudiants aux ressources insuffisantes,</li>
              <li>des personnes isolées dont la précarité est souvent invisible,</li>
              <li>des personnes sans domicile, nos amis de la rue,</li>
              <li>des personnes âgées, parfois seules et oubliées.</li>
            </ul>
            <p>
              Nos actions vont bien au-delà de la nourriture.
              Elles permettent de recréer du lien, d’apporter du réconfort,
              un sourire, un moment d’écoute.
            </p>

            <h3 className="recolte-subtitle">🎗️ 10 Ans d’Engagement, 10 Ans d’Espoir</h3>
            <p>
              Depuis plus de dix ans, nous avons développé une action solide,
              régulière et profondément humaine. Ce qui n’était au départ qu’un
              petit geste est aujourd’hui une chaîne de solidarité durable, portée
              par des bénévoles passionnés et des partenaires fidèles.
            </p>
            <p>
              Nos récoltes alimentaires représentent l’âme de notre association :
            </p>
            <ul className="recolte-list">
              <li>✨ partage</li>
              <li>✨ respect</li>
              <li>✨ entraide</li>
              <li>✨ dignité</li>
            </ul>

            <h3 className="recolte-subtitle">📣 APPEL AUX DONS</h3>
            <p>Aidez-nous à continuer. Aidez-nous à aller plus loin.</p>
            <p>
              <strong>💛 En faisant un don, vous changez réellement une vie.</strong>
            </p>
            <p>
              Chaque mois, la demande augmente. Les situations de précarité se
              multiplient. Votre soutien est indispensable pour que nous puissions
              continuer à offrir des colis nourrissants, variés et adaptés aux
              besoins de chacun.
            </p>

            <p>📍 Vous pouvez contribuer de plusieurs façons :</p>
            <ul className="recolte-list">
              <li>Don alimentaire (particuliers, commerçants, entreprises)</li>
              <li>Don financier (même 1 € compte !)</li>
              <li>Partenariat professionnel</li>
              <li>Organisation de collectes dans votre quartier ou votre entreprise</li>
              <li>Bénévolat lors des distributions</li>
            </ul>

            <p><strong>👉 Pourquoi donner ?</strong></p>
            <ul className="recolte-list">
              <li>Parce qu’un colis peut éviter qu’une famille dorme le ventre vide.</li>
              <li>Parce qu’un étudiant ne devrait jamais choisir entre manger et étudier.</li>
              <li>Parce que personne ne devrait affronter la rue sans soutien.</li>
              <li>Parce que la solidarité est une force qui transforme des vies.</li>
            </ul>

            <p>❤️ Chaque don, chaque geste, chaque partage compte.</p>
            <p>
              Grâce à vous, nous offrons plus que de la nourriture.
              Nous offrons une présence.
              Nous offrons un peu d’espoir.
              Nous offrons de l’humanité.
            </p>

            <h3 className="recolte-subtitle">📌 Comment Participer ?</h3>
            <ul className="recolte-list">
              <li>
                🎁 Déposer un don alimentaire dans nos points de collecte :
                <br />
                <strong>29 rue Henri Simon à Aulnay-sous-Bois</strong>
                <br />
                Appelez-nous pour définir un jour et une heure de rendez-vous.
              </li>
              <li>💳 Faire un don en ligne</li>
              <li>
                📞 Nous contacter pour devenir partenaire ou organiser une collecte :
                <br />
                <strong>07 77 38 11 85</strong>
              </li>
              <li>👥 Rejoindre nos bénévoles lors des récoltes ou distributions</li>
            </ul>

            <p>
              Ensemble, continuons à faire battre le cœur de la solidarité.
            </p>

            <h3 className="recolte-subtitle">🙏 Merci à nos Donateurs et Partenaires</h3>
            <p>
              Depuis 2014, vous êtes des centaines à nous soutenir.
              Grâce à vous, des milliers de colis ont pu être distribués.
              Grâce à vous, des vies ont changé.
              Grâce à vous, nous continuerons… encore longtemps.
            </p>
          </div>
        </section>

        {/* ✅ 4 images en apesanteur */}
        <section className="recolte-floating-section">
          <h2 className="country-section-title">
            Quelques images de nos récoltes
          </h2>

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
        </section>

        {/* CTA */}
        <section className="country-cta">
          <h2>Envie de soutenir nos récoltes alimentaires&nbsp;?</h2>
          <p>
            Chaque don et chaque engagement renforcent directement notre capacité
            à accompagner les familles, les étudiants, les personnes isolées et
            nos amis de la rue.
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

export default RecolteAlimentaire;


