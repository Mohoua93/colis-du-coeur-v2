// src/components/Header.jsx
import { NavLink, Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/header.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setIsOpen(false);
  const toggleMenu = () => setIsOpen((v) => !v);

  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  useEffect(() => {
    if (isOpen) document.body.classList.add("no-scroll");
    else document.body.classList.remove("no-scroll");

    return () => document.body.classList.remove("no-scroll");
  }, [isOpen]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") closeMenu();
    };

    if (isOpen) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  const navLinks = [
    { to: "/", label: "Accueil" },
    { to: "/qui-sommes-nous", label: "Qui sommes-nous" },
    { to: "/nos-actions", label: "Nos actions" },
    { to: "/partenariat", label: "Partenariat" },
    { to: "/devenir-benevole", label: "Devenir bénévole" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link to="/" className="site-logo-link" aria-label="Accueil">
          <span className="site-logo-main">Les Colis du</span>
          <span className="site-logo-heart">Cœur</span>
        </Link>

        {/* NAV DESKTOP */}
        <nav className="site-nav desktop-nav" aria-label="Navigation principale">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                isActive ? "site-nav-link active" : "site-nav-link"
              }
            >
              {link.label}
            </NavLink>
          ))}

          <NavLink to="/faire-un-don" className="nav-donate">
            Faire un don
          </NavLink>
        </nav>

        {/* BOUTON MOBILE */}
        <button
          className={`menu-btn ${isOpen ? "is-open" : ""}`}
          type="button"
          onClick={toggleMenu}
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* MENU MOBILE */}
      <div
        className={`mobile-menu ${isOpen ? "open" : ""}`}
        role="dialog"
        aria-modal="true"
        id="mobile-menu"
      >
        <div className="mobile-menu-header">
          <Link to="/" className="mobile-menu-logo" onClick={closeMenu}>
            <span>Les Colis du</span>
            <strong>Cœur</strong>
          </Link>

          <button
            className="mobile-close-btn"
            type="button"
            onClick={closeMenu}
            aria-label="Fermer le menu"
          >
            ✕
          </button>
        </div>

        <nav className="mobile-menu-nav" aria-label="Navigation mobile">
          {navLinks.map((link, index) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? "mobile-link active" : "mobile-link"
              }
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              {link.label}
            </NavLink>
          ))}

          <NavLink
            to="/faire-un-don"
            className="mobile-donate-btn"
            onClick={closeMenu}
          >
            Faire un don
          </NavLink>
        </nav>
      </div>

      <div
        className={`mobile-backdrop ${isOpen ? "show" : ""}`}
        onClick={closeMenu}
        aria-hidden="true"
      />
    </header>
  );
}

export default Header;