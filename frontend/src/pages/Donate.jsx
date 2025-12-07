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
      if (typeof e.origin === "string" && !e.origin.includes("helloasso.com")) {
        return;
      }

      const data = e.data;
      const height =
        data && typeof data === "object" && typeof data.height === "number"
          ? data.height
          : null;

      if (!height) return;

      /**
       * ✅ On évite de gonfler le bouton :
       * - si height est petite => c'est probablement le widget bouton
       * - si height est grande => c'est probablement le formulaire
       */
      if (height <= 120 && buttonRef.current) {
        buttonRef.current.style.height = `${height}px`;
      }

      if (height > 120 && formRef.current) {
        formRef.current.style.height = `${height}px`;
      }
    };

    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, []);

  return (
    <section className="donate-page">
      <div className="container">
        <h1 className="donate-title">Faire un don</h1>

        <p className="donate-intro">
          Votre soutien nous permet de financer des actions concrètes :
          distributions alimentaires, accès à l&apos;eau, projets éducatifs et
          opérations solidaires en France et à l&apos;international.
        </p>

        <div className="donate-badges">
          <span className="donate-badge">Carte bancaire</span>
          <span className="donate-badge">Apple Pay</span>
          <span className="donate-badge">Google Pay</span>
        </div>

        {/* ✅ À quoi sert votre don ? */}
        <section className="donate-impact">
          <h2 className="donate-impact-title">À quoi sert votre don&nbsp;?</h2>
          <p className="donate-impact-intro">
            Chaque contribution finance des actions concrètes, utiles et
            immédiates sur le terrain, en France et à l&apos;international.
          </p>

          <div className="donate-impact-grid">
            <article className="donate-impact-card">
              <span className="donate-impact-icon">💧</span>
              <h3>Accès à l’eau</h3>
              <p>
                Construction et soutien de projets d&apos;eau potable,
                notamment au Sénégal et au Bangladesh.
              </p>
            </article>

            <article className="donate-impact-card">
              <span className="donate-impact-icon">🍚</span>
              <h3>Aide alimentaire</h3>
              <p>
                Distribution de colis alimentaires et de repas, avec un soutien
                renforcé pendant le Ramadan et l&apos;Aïd.
              </p>
            </article>

            <article className="donate-impact-card">
              <span className="donate-impact-icon">🎒</span>
              <h3>Éducation & solidarité</h3>
              <p>
                Projets comme <strong>Back to School</strong> et actions
                solidaires portées avec des partenaires locaux.
              </p>
            </article>
          </div>
        </section>

        {/* ✅ Transparence & confiance */}
        <section className="donate-trust">
          <div className="donate-trust-card">
            <p className="donate-trust-eyebrow">Transparence &amp; confiance</p>
            <h2 className="donate-trust-title">
              Une solidarité claire, un impact réel
            </h2>
            <p className="donate-trust-text">
              Nous privilégions des actions simples, concrètes et suivies avec
              des relais locaux de confiance. Votre don soutient des besoins
              essentiels et des projets à fort impact humain.
            </p>
            <ul className="donate-trust-list">
              <li>✅ Paiement sécurisé via HelloAsso</li>
              <li>✅ Association à but non lucratif</li>
              <li>✅ Actions de terrain</li>
            </ul>
          </div>
        </section>

        {/* ✅ Bloc bouton HelloAsso */}
        <div className="donate-button-widget">
          <iframe
            ref={buttonRef}
            id="haWidgetButton"
            title="Faire un don - bouton HelloAsso"
            allowTransparency={true}
            src={HELLOASSO_BUTTON_WIDGET_URL}
            style={{ width: "100%", height: "56px", border: "none" }}  // ✅ réduit
            loading="lazy"
            allow="payment *"
          />
        </div>

        {/* ✅ Formulaire intégré HelloAsso */}
        <div className="donate-form-widget">
          <iframe
            ref={formRef}
            id="haWidgetForm"
            title="Faire un don via HelloAsso"
            allowTransparency={true}
            src={HELLOASSO_FORM_WIDGET_URL}
            style={{ width: "100%", border: "none", minHeight: "760px" }} // ✅ un peu réduit
            loading="lazy"
            allow="payment *"
          />
        </div>

        {/* ✅ Option alternative */}
        <div className="donate-alt">
          <p>
            Si le formulaire ne s&apos;affiche pas correctement sur votre
            appareil, vous pouvez aussi faire un don directement sur HelloAsso.
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
      </div>
    </section>
  );
}

export default Donate;






