// src/pages/Home.jsx
import { Link } from "react-router-dom";
import bgHome from "../assets/images/bg-home.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <main className="home-page">
      {/* HERO */}
      <section
        className="home-hero"
        style={{ backgroundImage: `url(${bgHome})` }}
      >
        <div className="home-hero-overlay" />

        <div className="container home-hero-content">
          <span className="home-hero-badge">Association caritative</span>

          <h1 className="home-hero-title">
            Ensemble, agissons contre la précarité
          </h1>

          <p className="home-hero-subtitle">
            Les Colis du Cœur accompagne les familles et personnes en difficulté
            grâce à des actions solidaires concrètes.
          </p>


          <div className="home-hero-actions">
            <Link to="/faire-un-don" className="btn btn-primary">
              Faire un don
            </Link>

            <Link to="/devenir-benevole" className="btn btn-outline-light">
              Devenir bénévole
            </Link>
          </div>
        </div>
      </section>

      {/* CHIFFRES */}
      <section className="home-stats">
        <div className="container home-stats-grid">
          <div className="home-stat-card">
            <strong>+500</strong>
            <span>colis distribués</span>
          </div>

          <div className="home-stat-card">
            <strong>+120</strong>
            <span>familles aidées</span>
          </div>

          <div className="home-stat-card">
            <strong>100%</strong>
            <span>solidarité terrain</span>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="home-intro-section">
        <div className="container home-intro-layout">
          <div className="home-intro-content">
            <span className="section-label">Notre mission</span>

            <h2>
              Aider les plus démunis avec dignité, respect et solidarité.
            </h2>

            <p>
              Les Colis du Cœur agit auprès des personnes isolées, familles en
              difficulté, étudiants précaires et populations touchées par la
              pauvreté. Notre objectif est simple : apporter une aide concrète,
              humaine et accessible.
            </p>

            <Link to="/qui-sommes-nous" className="text-link">
              Découvrir l’association
            </Link>
          </div>

          <div className="home-highlight-card">
            <span>Notre force</span>
            <h3>C’est vous.</h3>
            <p>
              Grâce aux donateurs, bénévoles et partenaires, chaque action peut
              avoir un impact réel sur le terrain.
            </p>
          </div>
        </div>
      </section>

      {/* ACTIONS */}
      <section className="home-actions-section">
        <div className="container">
          <div className="home-section-heading">
            <span className="section-label">Nos actions</span>
            <h2>Des actions concrètes pour répondre aux besoins essentiels.</h2>
          </div>

          <div className="home-actions-grid">
            <article className="home-action-card">
              <div className="home-action-icon">🍽️</div>
              <h3>Aide alimentaire</h3>
              <p>
                Distribution de colis alimentaires aux familles et personnes en
                situation de précarité.
              </p>
            </article>

            <article className="home-action-card">
              <div className="home-action-icon">🤝</div>
              <h3>Maraudes solidaires</h3>
              <p>
                Présence sur le terrain pour apporter aide, écoute et soutien
                aux personnes les plus fragiles.
              </p>
            </article>

            <article className="home-action-card">
              <div className="home-action-icon">🌍</div>
              <h3>Actions humanitaires</h3>
              <p>
                Organisation de campagnes solidaires en France et à
                l’international selon les besoins.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* COMMENT AIDER */}
      <section className="home-help-section">
        <div className="container home-help-layout">
          <div>
            <span className="section-label section-label-light">
              Comment aider ?
            </span>

            <h2>Chaque geste compte, même le plus simple.</h2>

            <p>
              Que vous souhaitiez donner, devenir bénévole, partager nos actions
              ou soutenir une campagne précise, votre aide peut changer le
              quotidien d’une personne.
            </p>
          </div>

          <div className="home-help-list">
            <div>
              <strong>01</strong>
              <span>Faire un don</span>
            </div>

            <div>
              <strong>02</strong>
              <span>Donner des produits</span>
            </div>

            <div>
              <strong>03</strong>
              <span>Devenir bénévole</span>
            </div>

            <div>
              <strong>04</strong>
              <span>Partager l’association</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="home-final-cta">
        <div className="container home-final-card">
          <span>Un acte de foi, un geste de solidarité</span>

          <h2>Ensemble, apportons de l’espoir à ceux qui en ont besoin.</h2>

          <div className="home-final-actions">
            <Link to="/faire-un-don" className="btn btn-primary">
              Faire un don maintenant
            </Link>

            <Link to="/contact" className="btn btn-secondary">
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;