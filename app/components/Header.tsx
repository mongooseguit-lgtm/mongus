"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navLinks = [
    { href: "/musica", label: "Música", num: "01" },
    { href: "/archivo", label: "Archivo", num: "02" },
    { href: "/diario", label: "Diario", num: "03" },
    { href: "/recursos", label: "Recursos", num: "04" },
    { href: "/contacto", label: "Contacto", num: "05" },
  ];

  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Mongus, volver al inicio">
        MONGUS<span>®</span>
      </Link>

      {/* Desktop Navigation */}
      <nav className="desktop-nav" aria-label="Navegación principal">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={pathname === link.href ? "active" : ""}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Desktop Index Pill */}
      <Link className="menu-index desktop-only" href="/musica" aria-label="Ir a música">
        INDEX / 01
      </Link>

      {/* Mobile Menu Toggle Button */}
      <button
        type="button"
        className="mobile-menu-toggle"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-expanded={mobileMenuOpen}
        aria-controls="mobile-navigation"
        aria-label={mobileMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
      >
        <span className="toggle-text">{mobileMenuOpen ? "CERRAR" : "MENÚ"}</span>
        <span className="toggle-icon">{mobileMenuOpen ? "✕" : "☰"}</span>
      </button>

      {/* Mobile Drawer Overlay */}
      <div
        id="mobile-navigation"
        className={`mobile-drawer ${mobileMenuOpen ? "is-open" : ""}`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="mobile-drawer-inner">
          <p className="mobile-drawer-kicker">ÍNDICE DE NAVEGACIÓN</p>

          <nav className="mobile-nav-list" aria-label="Menú móvil">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`mobile-nav-item ${isActive ? "active" : ""}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="mobile-nav-idx">{link.num}</span>
                  <span className="mobile-nav-label">{link.label}</span>
                  <span className="mobile-nav-arrow">↗</span>
                </Link>
              );
            })}
          </nav>

          <div className="mobile-drawer-footer">
            <div className="mobile-drawer-meta">
              <span>CDMX · MMXXVI</span>
              <a href="mailto:mongooseguit@gmail.com" className="mobile-drawer-email">
                mongooseguit@gmail.com
              </a>
            </div>
            <p className="mobile-drawer-tagline">
              Canciones para los que todavía siguen despiertos.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
