// src/pages/MentionsLegales.jsx
import "../styles/mentions-legales.css";

function MentionsLegales() {
  return (
    <section className="legal-page">
      <div className="container legal-container">
        <header className="legal-header">
          <h1 className="legal-title">Mentions légales</h1>
          <p className="legal-intro">
            Conformément aux dispositions de la loi n°2004-575 du 21 juin 2004
            pour la confiance dans l&apos;économie numérique, il est précisé aux
            utilisateurs du site les informations suivantes.
          </p>
        </header>

        {/* 1. Éditeur du site */}
        <section className="legal-section">
          <h2 className="legal-section-title">1. Éditeur du site</h2>
          <p>
            <strong>Nom de l&apos;association :</strong> Les Colis du Cœur
            <br />
            <strong>Forme :</strong> Association loi 1901 à but non lucratif
            <br />
            <strong>Adresse du siège social :</strong> 2 allée Lotus,
            93600 Aulnay-sous-Bois, France
            <br />
            <strong>RNA :</strong> W932005076
            <br />
            <strong>SIRET :</strong> 80486950100010
          </p>
          <p>
            <strong>Directeur de la publication :</strong> YAZID FOUGHAR
            <br />
            <strong>Contact :</strong>{" "}
            <a href="mailto:contact@colisducoeur.fr">
              contact@colisducoeur.fr
            </a>
            <br />
            <strong>Téléphone :</strong>{" "}
            <a href="tel:+33777381185">07&nbsp;77&nbsp;38&nbsp;11&nbsp;85</a>
          </p>
        </section>

        {/* 2. Hébergeur */}
        <section className="legal-section">
          <h2 className="legal-section-title">2. Hébergeur du site</h2>
          <p>
            Le site est hébergé par :
            <br />
            <strong>[Nom de l&apos;hébergeur]</strong>
            <br />
            <strong>Adresse :</strong> [Adresse de l&apos;hébergeur]
            <br />
            <strong>Téléphone :</strong> [Téléphone de l&apos;hébergeur]
          </p>
          <p className="legal-note">
            Ces informations sont à compléter avec les coordonnées exactes de
            votre prestataire d&apos;hébergement.
          </p>
        </section>

        {/* 3. Propriété intellectuelle */}
        <section className="legal-section">
          <h2 className="legal-section-title">3. Propriété intellectuelle</h2>
          <p>
            L&apos;ensemble des éléments présents sur ce site (textes, images,
            graphismes, logos, vidéos, icônes, mise en page, etc.) sont, sauf
            mention contraire, la propriété exclusive de l&apos;association Les
            Colis du Cœur ou font l&apos;objet d&apos;une autorisation
            d&apos;utilisation.
          </p>
          <p>
            Toute reproduction, représentation, modification, adaptation,
            distribution ou diffusion, totale ou partielle, de ces éléments, par
            quelque procédé que ce soit, sans l&apos;autorisation écrite
            préalable de l&apos;association Les Colis du Cœur est strictement
            interdite et constituerait une contrefaçon au sens des articles L.335-2
            et suivants du Code de la propriété intellectuelle.
          </p>
        </section>

        {/* 4. Données personnelles */}
        <section className="legal-section">
          <h2 className="legal-section-title">
            4. Données personnelles et vie privée
          </h2>
          <p>
            Les informations collectées via les formulaires de contact, de
            dons, d’inscription à la newsletter ou toute autre interaction sur
            le site sont utilisées exclusivement dans le cadre des missions de
            l&apos;association Les Colis du Cœur (gestion des demandes,
            communication, reçus, suivi des dons, etc.).
          </p>
          <p>
            Conformément au Règlement Général sur la Protection des Données
            (RGPD) et à la loi Informatique et Libertés, vous disposez d&apos;un
            droit d&apos;accès, de rectification, d&apos;opposition, de
            limitation et de suppression des données vous concernant. Pour
            exercer ces droits, vous pouvez nous contacter à l&apos;adresse
            suivante :
          </p>
          <p>
            <strong>Email :</strong>{" "}
            <a href="mailto:contact@colisducoeur.fr">
              contact@colisducoeur.fr
            </a>
          </p>
        </section>

        {/* 5. Cookies */}
        <section className="legal-section">
          <h2 className="legal-section-title">5. Cookies</h2>
          <p>
            Le site peut utiliser des cookies et traceurs strictement
            nécessaires à son fonctionnement (mesure d’audience, amélioration de
            l’expérience utilisateur, sécurité, etc.). Vous pouvez configurer
            votre navigateur pour accepter ou refuser les cookies, ou pour être
            informé de leur dépôt.
          </p>
          <p>
            Le refus de certains cookies peut toutefois impacter le bon
            fonctionnement de certaines fonctionnalités du site.
          </p>
        </section>

        {/* 6. Responsabilité */}
        <section className="legal-section">
          <h2 className="legal-section-title">6. Limitation de responsabilité</h2>
          <p>
            L&apos;association Les Colis du Cœur met tout en œuvre pour proposer
            sur ce site des informations exactes et à jour. Toutefois, elle ne
            saurait être tenue pour responsable des erreurs, omissions ou
            résultats qui pourraient être obtenus par un mauvais usage de ces
            informations.
          </p>
          <p>
            Les liens hypertextes présents sur le site peuvent renvoyer vers
            d&apos;autres sites sur lesquels l&apos;association n&apos;exerce
            aucun contrôle. En conséquence, Les Colis du Cœur décline toute
            responsabilité quant aux contenus de ces sites tiers.
          </p>
        </section>

        {/* 7. Contact */}
        <section className="legal-section">
          <h2 className="legal-section-title">7. Contact</h2>
          <p>
            Pour toute question relative aux présentes mentions légales, vous
            pouvez nous contacter :
          </p>
          <p>
            <strong>Association Les Colis du Cœur</strong>
            <br />
            2 allée Lotus, 93600 Aulnay-sous-Bois, France
            <br />
            Email :{" "}
            <a href="mailto:contact@colisducoeur.fr">
              contact@colisducoeur.fr
            </a>
            <br />
            Téléphone :{" "}
            <a href="tel:+33777381185">07&nbsp;77&nbsp;38&nbsp;11&nbsp;85</a>
          </p>
        </section>
      </div>
    </section>
  );
}

export default MentionsLegales;



