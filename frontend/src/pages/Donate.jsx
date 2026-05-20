// src/pages/Donate.jsx
import { useEffect, useRef } from "react";
import "../styles/donate.css";

function Donate() {
  const buttonRef = useRef(null);
  const formRef = useRef(null);

  const HELLOASSO_BUTTON_WIDGET_URL =
    "https://www.helloasso.com/associations/les-colis-du-coeur-aulnay/paiements/dons/widget-bouton";

  const HELLOASSO_FORM_WIDGET_URL =
    "https://www.helloasso.com/associations/les-colis-du-coeur-aulnay/paiements/dons/widget";

  const HELLOASSO_PUBLIC_URL =
    "https://www.helloasso.com/associations/les-colis-du-coeur-aulnay/paiements/dons";

  useEffect(() => {
    const handler = (e) => {
      if (
        typeof e.origin === "string" &&
        !e.origin.includes("helloasso.com")
      ) {
        return;
      }

      const data = e.data;
      const height =
        data && typeof data === "object" && typeof data.height === "number"
          ? data.height
          : null;

      if (!height) return;

      if (height <= 120 && buttonRef.current) {
        const buttonHeight = Math.min(Math.max(height, 56), 90);
        buttonRef.current.style.height = `${buttonHeight}px`;
        return;
      }

      if (height > 120 && formRef.current) {
        const clampedHeight = Math.min(Math.max(height, 700), 1250);
        formRef.current.style.height = `${clampedHeight}px`;
      }
    };

    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, []);

  return (
    <main className="donate-page">
      {/* HERO */}
      <section className="donate-hero">
        <div className="container donate-hero-layout">
          <div className="donate-hero-content">
            <span className="donate-label">Faire un don</span>

            <h1>Votre générosité devient une action concrète.</h1>

            <p>
              Votre soutien nous permet de financer des distributions
              alimentaires, l’accès à l’eau, des projets éducatifs et des
              opérations solidaires en France et à l’international.
            </p>

            <div className="donate-badges">
              <span>Carte bancaire</span>
              <span>Apple Pay</span>
              <span>Google Pay</span>
              <span>Paiement sécurisé</span>
            </div>
          </div>

          <aside className="donate-hero-card">
            <span>Impact immédiat</span>
            <strong>Chaque don compte.</strong>
            <p>
              Même un petit montant peut financer un repas, un colis, une
              fourniture scolaire ou participer à un projet essentiel.
            </p>
          </aside>
        </div>
      </section>

      {/* IMPACT */}
      <section className="donate-impact-section">
        <div className="container">
          <div className="donate-section-heading">
            <span className="donate-label">À quoi sert votre don ?</span>
            <h2>Des actions concrètes, utiles et suivies sur le terrain.</h2>
          </div>

          <div className="donate-impact-grid">
            <article className="donate-impact-card">
              <div className="donate-impact-icon">💧</div>
              <h3>Accès à l’eau</h3>
              <p>
                Construction et soutien de projets d’eau potable, notamment au
                Sénégal et au Bangladesh, pour améliorer la santé, l’hygiène et
                la vie quotidienne.
              </p>
            </article>

            <article className="donate-impact-card">
              <div className="donate-impact-icon">🍚</div>
              <h3>Aide alimentaire</h3>
              <p>
                Distribution de colis alimentaires et de repas pour les familles
                en difficulté, avec un soutien renforcé pendant le Ramadan et
                l’Aïd.
              </p>
            </article>

            <article className="donate-impact-card">
              <div className="donate-impact-icon">🎒</div>
              <h3>Éducation & solidarité</h3>
              <p>
                Projets comme Back to School, soutien aux besoins essentiels des
                enfants et actions solidaires portées avec des partenaires
                locaux.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="donate-trust-section">
        <div className="container donate-trust-layout">
          <div className="donate-trust-card">
            <span className="donate-label donate-label-light">
              Transparence & confiance
            </span>

            <h2>Une solidarité claire, un impact réel.</h2>

            <p>
              Nous privilégions des actions simples, concrètes et suivies avec
              des relais locaux de confiance. Votre don est utilisé pour
              répondre à des besoins essentiels et soutenir des projets à fort
              impact humain.
            </p>
          </div>

          <div className="donate-trust-list">
            <div>
              <strong>01</strong>
              <span>Paiement sécurisé via HelloAsso</span>
            </div>

            <div>
              <strong>02</strong>
              <span>Association à but non lucratif</span>
            </div>

            <div>
              <strong>03</strong>
              <span>Actions en France et à l’international</span>
            </div>
          </div>
        </div>
      </section>

      {/* HELLOASSO */}
      <section className="donate-widget-section">
        <div className="container donate-widget-layout">
          <div className="donate-widget-intro">
            <span className="donate-label">Don sécurisé</span>

            <h2>Faire un don en ligne</h2>

            <p>
              Le paiement est géré par HelloAsso. Vous pouvez utiliser le bouton
              rapide ou remplir directement le formulaire de don intégré.
            </p>

            <div className="donate-button-widget">
              <iframe
                ref={buttonRef}
                id="haWidgetButton"
                title="Faire un don - bouton HelloAsso"
                allowTransparency={true}
                src={HELLOASSO_BUTTON_WIDGET_URL}
                style={{ width: "100%", height: "56px", border: "none" }}
                loading="lazy"
                allow="payment *"
              />
            </div>
          </div>

          <div className="donate-form-card">
            <div className="donate-form-widget">
              <iframe
                ref={formRef}
                id="haWidgetForm"
                title="Faire un don via HelloAsso"
                allowTransparency={true}
                src={HELLOASSO_FORM_WIDGET_URL}
                style={{ width: "100%", border: "none", height: "900px" }}
                loading="lazy"
                allow="payment *"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ALTERNATIVE */}
      <section className="donate-alt-section">
        <div className="container donate-alt-card">
          <span>Problème d’affichage ?</span>

          <p>
            Si le formulaire ne s’affiche pas correctement sur votre appareil,
            vous pouvez aussi faire un don directement sur HelloAsso.
          </p>

          <a
            className="donate-external-link"
            href={HELLOASSO_PUBLIC_URL}
            target="_blank"
            rel="noreferrer"
          >
            Ouvrir la page de don HelloAsso →
          </a>
        </div>
      </section>
    </main>
  );
}

export default Donate;