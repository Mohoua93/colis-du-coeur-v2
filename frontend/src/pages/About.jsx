// src/pages/About.jsx
import { Link } from "react-router-dom";
import teamPhoto from "../assets/images/pics-QSM-1.jpeg";
import "../styles/about.css";

function About() {
  return (
    <main className="about-page">
      {/* HERO */}
      <section className="about-hero-section">
        <div className="container about-hero-layout">
          <div className="about-hero-content">
            <span className="about-label">Qui sommes-nous ?</span>

            <h1>
              Une association engagée contre la précarité et l’isolement.
            </h1>

            <p>
              Les Colis du Cœur agit chaque jour pour accompagner les personnes
              et familles en difficulté à travers des distributions alimentaires,
              des actions solidaires et une présence humaine sur le terrain.
            </p>

            <div className="about-hero-actions">
              <Link to="/nos-actions" className="about-btn about-btn-primary">
                Découvrir nos actions
              </Link>

              <Link to="/faire-un-don" className="about-btn about-btn-secondary">
                Faire un don
              </Link>
            </div>
          </div>

          <div className="about-hero-image">
            <img
              src={teamPhoto}
              alt="Équipe des Colis du Cœur lors d'une distribution"
            />
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="about-intro-section">
        <div className="container about-intro-grid">
          <article className="about-intro-card">
            <span>01</span>
            <h2>Notre mission</h2>
            <p>
              Soutenir les personnes en situation de précarité en leur apportant
              une aide concrète, digne et accessible : colis alimentaires,
              produits essentiels, écoute et accompagnement.
            </p>
          </article>

          <article className="about-intro-card">
            <span>02</span>
            <h2>Notre engagement</h2>
            <p>
              Être présents au plus près des besoins du terrain, auprès des
              familles, étudiants, personnes isolées, retraités ou travailleurs
              précaires.
            </p>
          </article>

          <article className="about-intro-card">
            <span>03</span>
            <h2>Notre force</h2>
            <p>
              Une mobilisation collective portée par les bénévoles, donateurs,
              entreprises, partenaires et toutes les personnes qui souhaitent
              agir avec le cœur.
            </p>
          </article>
        </div>
      </section>

      {/* HISTOIRE */}
      <section className="about-story-section">
        <div className="container about-story-layout">
          <div className="about-story-content">
            <span className="about-label">Notre histoire</span>

            <h2>Une aide de terrain, humaine et directe.</h2>

            <p>
              <strong>Les Colis du Cœur</strong> est une association à but non
              lucratif qui agit pour soutenir les personnes et familles en
              situation de précarité, au travers de distributions alimentaires
              et d’actions solidaires tout au long de l’année.
            </p>

            <p>
              Implantée sur le terrain, l’association a pour objectif d’être au
              plus près des publics les plus fragiles, en proposant une aide
              concrète mais aussi une présence humaine, dans les moments les plus
              difficiles.
            </p>

            <p>
              Au-delà de l’aide alimentaire, Les Colis du Cœur s’inscrit dans
              une démarche globale d’accompagnement et de lien social, en
              travaillant avec un réseau de partenaires et de bénévoles engagés.
            </p>
          </div>

          <aside className="about-quote-card">
            <span>“</span>
            <p>
              Chaque colis distribué représente plus qu’une aide alimentaire :
              c’est un message de soutien, de dignité et d’espoir.
            </p>
          </aside>
        </div>
      </section>

      {/* VALEURS */}
      <section className="about-values-section">
        <div className="container">
          <div className="about-section-heading">
            <span className="about-label about-label-light">Nos valeurs</span>
            <h2>Agir avec le cœur, mais aussi avec respect et responsabilité.</h2>
          </div>

          <div className="about-values-grid">
            <article className="about-value-card">
              <div>🤝</div>
              <h3>Solidarité</h3>
              <p>
                Créer une chaîne d’entraide entre ceux qui peuvent donner et
                ceux qui traversent une période difficile.
              </p>
            </article>

            <article className="about-value-card">
              <div>❤️</div>
              <h3>Dignité</h3>
              <p>
                Accompagner chaque personne avec respect, sans jugement, en
                tenant compte de son histoire et de sa situation.
              </p>
            </article>

            <article className="about-value-card">
              <div>🌍</div>
              <h3>Impact</h3>
              <p>
                Mettre en place des actions concrètes, utiles et adaptées aux
                besoins réels des personnes accompagnées.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* TEXTE FINAL */}
      <section className="about-final-section">
        <div className="container about-final-card">
          <h2>Une association construite autour de l’humain.</h2>

          <p>
            Au fil des années, l’association a adapté ses actions aux besoins
            des personnes accueillies : familles avec enfants, étudiants,
            personnes isolées, retraités, travailleurs précaires… Chaque
            situation est unique et nécessite une écoute attentive.
          </p>

          <p>
            Les distributions de colis sont complétées par des temps d’échange,
            d’orientation et, lorsque c’est possible, par la mise en relation
            avec des structures partenaires pour l’accès aux droits, au logement,
            à l’emploi ou aux soins.
          </p>

          <p>
            Les Colis du Cœur repose entièrement sur la mobilisation de ses
            bénévoles et le soutien de donateurs, d’entreprises et de
            collectivités. Ensemble, nous travaillons à lutter contre
            l’isolement, la faim et la pauvreté, en plaçant la dignité des
            personnes au cœur de notre action.
          </p>

          <div className="about-final-actions">
            <Link to="/devenir-benevole" className="about-btn about-btn-primary">
              Devenir bénévole
            </Link>

            <Link to="/contact" className="about-btn about-btn-secondary">
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;