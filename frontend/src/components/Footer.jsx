// src/components/Footer.jsx
import { Link } from "react-router-dom";
import "../styles/footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-brand">
          <Link to="/" className="footer-logo">
            <span>Les Colis du</span>
            <strong>Cœur</strong>
          </Link>

          <p>
            Association caritative engagée contre la précarité, à travers la
            distribution de colis alimentaires, d’aide matérielle et d’actions
            solidaires.
          </p>
        </div>

        <div className="site-footer-column">
          <h3>Navigation</h3>

          <nav className="site-footer-links">
            <Link to="/">Accueil</Link>
            <Link to="/qui-sommes-nous">Qui sommes-nous</Link>
            <Link to="/nos-actions">Nos actions</Link>
            <Link to="/partenariat">Partenariat</Link>
          </nav>
        </div>

        <div className="site-footer-column">
          <h3>Agir avec nous</h3>

          <nav className="site-footer-links">
            <Link to="/faire-un-don">Faire un don</Link>
            <Link to="/devenir-benevole">Devenir bénévole</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/mentionslegales">Mentions légales</Link>
          </nav>
        </div>
      </div>

      <div className="site-footer-bottom">
        <p>© {currentYear} Les Colis du Cœur. Tous droits réservés.</p>
      </div>
    </footer>
  );
}

export default Footer;
