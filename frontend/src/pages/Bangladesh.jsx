// src/pages/Bangladesh.js
import "../styles/bangladesh.css";
import bangladeshHero from "../assets/images/bangladesh-hero.jpg";
import bangladeshPuits from "../assets/images/bangladesh-puits.jpg";
import bangladeshColisAlimentaires from "../assets/images/bangladesh-food.jpg";
import bangladeshRamadan from "../assets/images/bangladesh-ramadan.jpg";
import bangladeshAid from "../assets/images/bangladesh-aid.jpg";
import bangladeshCoran from "../assets/images/bangladesh-coran.jpg"; // 📖 nouvelle image

function Bangladesh() {
  return (
    <section className="country-page">
      <div className="container">
        {/* Hero */}
        <header className="country-hero">
          <div className="country-hero-text">
            <p className="country-eyebrow">Nos actions à l&apos;international</p>
            <h1 className="country-title">Bangladesh</h1>
            <p className="country-intro">
              Au Bangladesh, Les Colis du Cœur agissent aux côtés des familles
              les plus vulnérables pour répondre à des besoins essentiels&nbsp;:
              <strong> accès à l&apos;eau potable</strong>,{" "}
              <strong>sécurité alimentaire</strong> et{" "}
              <strong>solidarité pendant le Ramadan et l&apos;Aïd</strong>.
            </p>
            <a href="/nos-actions" className="country-back-link">
              ← Retour à la carte de nos actions
            </a>
          </div>

          <div className="country-hero-image">
            <img
              src={bangladeshHero}
              alt="Paysage et village au Bangladesh"
            />
          </div>
        </header>

        {/* Résumé des actions */}
        <section className="country-summary">
          <h2 className="country-section-title">Ce que nous y faisons</h2>
          <div className="country-summary-grid">
            <article className="summary-card">
              <h3>Construction de puits d&apos;eau</h3>
              <p>
                Dans plusieurs villages, nous finançons la construction de
                puits afin de garantir un accès durable à une{" "}
                <strong>eau potable</strong>, à proximité des habitations.
                Chaque puits profite à de nombreuses familles au quotidien.
              </p>
            </article>

            <article className="summary-card">
              <h3>Colis alimentaires</h3>
              <p>
                Nous distribuons des colis composés de denrées de base
                (riz, huile, lentilles, produits de première nécessité)
                pour soulager les familles en situation de{" "}
                <strong>précarité alimentaire</strong>.
              </p>
            </article>

            <article className="summary-card">
              <h3>Ramadan &amp; Aïd</h3>
              <p>
                Pendant le <strong>Ramadan</strong> et à l&apos;occasion de
                l&apos;<strong>Aïd</strong>, nous renforçons les distributions
                avec des colis spéciaux afin de permettre aux familles de
                vivre ces moments importants dans la dignité.
              </p>
            </article>
          </div>
        </section>

        {/* Focus puits d'eau */}
        <section className="country-block">
          <div className="country-block-text">
            <h2 className="country-section-title">
              Des puits pour changer le quotidien
            </h2>
            <p>
              Dans certaines zones rurales du Bangladesh, l&apos;accès à l&apos;eau
              potable reste un défi quotidien. Les puits construits grâce à vos
              dons permettent de{" "}
              <strong>réduire les trajets</strong>, d&apos;éviter les
              contaminations liées à une eau insalubre et de{" "}
              <strong>sécuriser l&apos;hygiène des familles</strong>.
            </p>
            <p>
              Chaque puits est implanté en concertation avec les habitants
              et les relais locaux, pour répondre à un besoin réel et durable.
            </p>
          </div>

          <div className="country-hero-image">
            <img
              src={bangladeshPuits}
              alt="Puits d&apos;eau construit au Bangladesh"
            />
          </div>
        </section>

        {/* Focus colis alimentaires */}
        <section className="country-block country-block-reverse">
          <div className="country-block-text">
            <h2 className="country-section-title">
              Des colis alimentaires pour les familles
            </h2>
            <p>
              Les colis alimentaires distribués au Bangladesh donnent un coup de
              pouce concret aux familles en difficulté&nbsp;: ils contiennent
              des produits adaptés aux habitudes locales et permettent de tenir
              plusieurs jours.
            </p>
            <p>
              Nos distributions se font avec l&apos;aide de partenaires et de
              bénévoles sur place, dans le respect de la dignité de chaque
              bénéficiaire.
            </p>
          </div>

          <div className="country-hero-image">
            <img
              src={bangladeshColisAlimentaires}
              alt="Distribution de colis alimentaires au Bangladesh"
            />
          </div>
        </section>

        {/* 🕌 Focus Ramadan */}
        <section className="country-block">
          <div className="country-block-text">
            <h2 className="country-section-title">
              Un élan de solidarité pendant le Ramadan
            </h2>
            <p>
              Le mois de <strong>Ramadan</strong> est une période clé pour la
              solidarité. Au Bangladesh, de nombreuses familles n&apos;ont pas
              les moyens de préparer des repas complets pour l&apos;iftar et le
              suhoor.
            </p>
            <p>
              Grâce à vos dons, nous distribuons des{" "}
              <strong>colis spéciaux Ramadan</strong> contenant des denrées
              adaptées aux repas de rupture du jeûne, afin que chaque famille
              puisse vivre ce mois béni avec plus de sérénité et de dignité.
            </p>
          </div>

          <div className="country-hero-image">
            <img
              src={bangladeshRamadan}
              alt="Distribution de colis spéciaux Ramadan au Bangladesh"
            />
          </div>
        </section>

        {/* 🎉 Focus Fête de l'Aïd */}
        <section className="country-block country-block-reverse">
          <div className="country-block-text">
            <h2 className="country-section-title">
              Fête de l&apos;Aïd : partager la joie
            </h2>
            <p>
              À l&apos;occasion de l&apos;<strong>Aïd</strong>, nous
              intensifions nos actions pour que la fête soit un moment de joie
              partagée, même pour les familles les plus fragiles.
            </p>
            <p>
              Selon les projets et les besoins locaux, cela peut passer par des{" "}
              <strong>colis alimentaires renforcés</strong>, des distributions
              spécifiques ou des gestes symboliques qui permettent à chacun de
              célébrer l&apos;Aïd dans le respect et la dignité.
            </p>
          </div>

          <div className="country-hero-image">
            <img
              src={bangladeshAid}
              alt="Familles célébrant l&apos;Aïd au Bangladesh"
            />
          </div>
        </section>

        {/* 📖 Focus distribution de Corans */}
        <section className="country-block">
          <div className="country-block-text">
            <h2 className="country-section-title">
              Distribution de Corans
            </h2>
            <p>
              Au Bangladesh, nous répondons également à des demandes
              spirituelles locales en participant à la{" "}
              <strong>distribution de Corans</strong>, en priorité dans les
              mosquées, les écoles et auprès de familles qui n&apos;ont pas les
              moyens d&apos;en acquérir.
            </p>
            <p>
              Ces distributions se font toujours en lien avec des{" "}
              <strong>partenaires de confiance sur place</strong>, afin de
              respecter les besoins réels et de s&apos;assurer que chaque
              exemplaire est remis dans un cadre approprié et bienveillant.
            </p>
          </div>

          <div className="country-hero-image">
            <img
              src={bangladeshCoran}
              alt="Distribution de Corans au Bangladesh"
            />
          </div>
        </section>

        {/* Appel à l'action */}
        <section className="country-cta">
          <h2>Envie de soutenir nos actions au Bangladesh&nbsp;?</h2>
          <p>
            Que ce soit par un don, un partage ou un engagement régulier,
            chaque geste nous permet d&apos;aller plus loin sur le terrain.
          </p>
          <div className="country-cta-buttons">
            <a href="/contact" className="country-cta-btn primary">
              Nous contacter
            </a>
            <a href="/devenir-benevole" className="country-cta-btn ghost">
              Devenir bénévole
            </a>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Bangladesh;
