import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Logo } from "./Logo";

const links = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "Sobre Nós" },
  { to: "/servicos", label: "Serviços" },
  { to: "/cursos", label: "Cursos" },
  { to: "/contacto", label: "Contacto" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const t = requestAnimationFrame(() => setActive(true));
    return () => cancelAnimationFrame(t);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const onDark = !scrolled && !open;

  return (
    <>
      <header
        className={`site-header fixed inset-x-0 top-0 z-50 ${active ? "is-active" : ""} ${scrolled ? "is-scrolled" : ""}`}
      >
        <div className="header-bg absolute inset-0 bg-brand-cream/95 backdrop-blur-sm border-b border-brand-ink/10" aria-hidden="true" />
        <div className="relative mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <Link to="/" aria-label="Aprendiz Consultores — Início" className="min-h-[44px] flex items-center">
            <Logo light={onDark} />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Navegação principal">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `text-sm font-semibold tracking-wide transition-colors duration-300 py-2 ${
                    onDark
                      ? isActive
                        ? "text-brand-gold"
                        : "text-brand-cream/80 hover:text-brand-cream"
                      : isActive
                        ? "text-brand-green"
                        : "text-brand-ink/70 hover:text-brand-ink"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <Link
              to="/contacto"
              className="btn-clip rounded-full bg-brand-gold px-5 py-2.5 text-sm font-semibold text-brand-ink hover:text-brand-cream"
            >
              <span className="btn-mask bg-brand-green" aria-hidden="true" />
              <span className="relative z-10">Fale Connosco</span>
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={`mm lg:hidden flex h-11 w-11 flex-col items-center justify-center ${open ? "is-active" : ""} ${
              onDark ? "text-brand-cream" : "text-brand-ink"
            }`}
          >
            <span className="mm-line" />
            <span className="mm-line" />
          </button>
        </div>
      </header>

      {/* Fullscreen menu overlay */}
      <div
        className={`menu-overlay fixed inset-0 z-40 bg-brand-green ${open ? "is-open" : ""}`}
        aria-hidden={!open}
      >
        <div className="flex h-full flex-col justify-center px-8 sm:px-16">
          <p className="mb-8 text-xs font-semibold uppercase tracking-[0.3em] text-brand-gold">Menu</p>
          <nav className="flex flex-col gap-2" aria-label="Menu móvel">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                tabIndex={open ? 0 : -1}
                className="menu-link w-fit py-2 text-4xl font-extrabold tracking-tight text-brand-cream hover:text-brand-gold sm:text-5xl"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <p className="mt-12 text-sm text-brand-cream/60">
            aprendizconsultores718@gmail.com
          </p>
        </div>
      </div>
    </>
  );
}
