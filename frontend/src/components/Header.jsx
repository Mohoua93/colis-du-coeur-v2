// src/components/Header.jsx
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/header.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setIsOpen(false);
  const toggleMenu = () => setIsOpen((v) => !v);

  // Ferme le menu à chaque changement de route
  useEffect(() => {
    closeMenu();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  // Bloque le scroll du body quand le menu est ouvert
  useEffect(() => {
    if (isOpen) document.body.classList.add("no-scroll");
    else document.body.classList.remove("no-scroll");

    return () => document.body.classList.remove("no-scroll");
  }, [isOpen]);

  // Ferme au clavier (Esc)
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") closeMenu();
    };

    if (isOpen) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  const handleLinkClick = () => closeMenu();

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <div className="site-logo">
          <Link to="/" className="site-logo-link">
            Les Colis du Cœur
          </Link>
        </div>

        {/* NAV DESKTOP */}
        <nav className="site-nav desktop-nav">
          <Link to="/">Accueil</Link>
          <Link to="/qui-sommes-nous">Qui sommes-nous</Link>
          <Link to="/nos-actions">Nos actions</Link>
          <Link to="/partenariat">Partenariat</Link>
          <Link to="/devenir-benevole">Devenir bénévole</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/faire-un-don" className="nav-donate">
            Faire un don
          </Link>
        </nav>

        {/* BOUTON MOBILE TEXTE UNIQUEMENT */}
        <button
          className={`menu-btn ${isOpen ? "is-open" : ""}`}
          type="button"
          onClick={toggleMenu}
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? "Fermer" : "Menu"}
        </button>
      </div>

      {/* MENU MOBILE FULLSCREEN */}
      <div
        className={`mobile-menu ${isOpen ? "open" : ""}`}
        role="dialog"
        aria-modal="true"
        id="mobile-menu"
      >
        <div className="mobile-menu-header">
          <span className="mobile-menu-logo">Les Colis du Cœur</span>

          <button
            className="mobile-close-btn"
            type="button"
            onClick={closeMenu}
            aria-label="Fermer le menu"
          >
            ✕
          </button>
        </div>

        <nav className="mobile-menu-nav">
          <Link to="/" onClick={handleLinkClick}>
            Accueil
          </Link>
          <Link to="/qui-sommes-nous" onClick={handleLinkClick}>
            Qui sommes-nous
          </Link>
          <Link to="/nos-actions" onClick={handleLinkClick}>
            Nos actions
          </Link>
          {/* ✅ Nouveau lien Partenariat (mobile) */}
          <Link to="/partenariat" onClick={handleLinkClick}>
            Partenariat
          </Link>
          <Link to="/devenir-benevole" onClick={handleLinkClick}>
            Devenir bénévole
          </Link>
          <Link to="/contact" onClick={handleLinkClick}>
            Contact
          </Link>
          <Link
            to="/faire-un-don"
            className="nav-donate"
            onClick={handleLinkClick}
          >
            Faire un don
          </Link>
        </nav>
      </div>

      {/* Backdrop */}
      <div
        className={`mobile-backdrop ${isOpen ? "show" : ""}`}
        onClick={closeMenu}
        aria-hidden="true"
      />
    </header>
  );
}

export default Header;





