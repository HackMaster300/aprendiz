import { Link } from "react-router-dom";
import { brand, waLink } from "../lib/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-brand-ink text-brand-cream">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo light />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-brand-cream/70">
              {brand.slogan}. Consultoria educacional em Pemba, com sucursal em Maputo.
            </p>
            <p className="mt-4 text-xs tracking-wider text-brand-cream/50">NUIT: {brand.nuit}</p>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">Navegação</p>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                { to: "/", label: "Início" },
                { to: "/sobre", label: "Sobre Nós" },
                { to: "/servicos", label: "Serviços" },
                { to: "/cursos", label: "Cursos Vocacionais" },
                { to: "/contacto", label: "Contacto" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="inline-block py-1 text-brand-cream/75 transition-colors hover:text-brand-gold">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">Contacto</p>
            <ul className="mt-5 space-y-3 text-sm text-brand-cream/75">
              {brand.phones.map((p) => (
                <li key={p.raw}>
                  <a href={waLink(p.raw)} target="_blank" rel="noreferrer" className="transition-colors hover:text-brand-gold">
                    {p.label} (WhatsApp)
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${brand.email}`} className="transition-colors hover:text-brand-gold">
                  {brand.email}
                </a>
              </li>
              {brand.addresses.map((a) => (
                <li key={a} className="leading-relaxed">{a}</li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              {brand.social.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="link-outline rounded-full px-4 py-2 text-xs font-semibold text-brand-cream/80"
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-brand-cream/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Aprendiz Consultores, SU, Lda. Todos os direitos reservados.</p>
          <p>Pemba · Maputo — Moçambique</p>
        </div>
      </div>
    </footer>
  );
}
