import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { brand, waLink } from "../lib/site";

const waMsg = encodeURIComponent("Olá! Gostaria de falar com a Aprendiz Consultores.");

const contactCards = [
  {
    title: "WhatsApp",
    items: brand.phones.map((p) => ({
      label: p.label,
      href: waLink(p.raw, decodeURIComponent(waMsg)),
      external: true,
    })),
    icon: (
      <path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.7-1.2A9 9 0 1 0 12 3zm4.3 12.3c-.2.5-1 .9-1.4 1-.4 0-.8.2-2.6-.6-2.2-.9-3.6-3.2-3.7-3.3-.1-.2-.9-1.2-.9-2.3s.6-1.6.8-1.9c.2-.2.5-.3.6-.3h.5c.2 0 .4 0 .6.4l.8 2c.1.2.1.4 0 .6l-.4.6c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.4 1.5.3.1.5.1.6-.1l.8-1c.2-.2.4-.2.6-.1l1.9.9c.2.1.4.2.4.3 0 .1 0 .6-.2 1.5z" />
    ),
  },
  {
    title: "E-mail",
    items: [{ label: brand.email, href: `mailto:${brand.email}`, external: false }],
    icon: (
      <path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm9 7.4L4.2 7.3v10.2h15.6V7.3L12 12.4z" />
    ),
  },
  {
    title: "Telefone",
    items: brand.phones.map((p) => ({
      label: p.label,
      href: `tel:+${p.raw}`,
      external: false,
    })),
    icon: (
      <path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24 11.4 11.4 0 0 0 3.6.58 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .57 3.6 1 1 0 0 1-.25 1z" />
    ),
  },
];

export default function Contacto() {
  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title={
          <>
            Vamos <span className="text-brand-gold">conversar</span>.
          </>
        }
        intro="Estamos disponíveis por WhatsApp, e-mail e telefone. Escolha o canal que preferir — respondemos com clareza e rapidez."
      />

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-6 md:grid-cols-3">
          {contactCards.map((c, i) => (
            <Reveal key={c.title} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
              <div className="flex h-full flex-col rounded-2xl border border-brand-ink/10 bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:border-brand-green/40">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-green">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="#eeb319" aria-hidden="true">
                    {c.icon}
                  </svg>
                </span>
                <h2 className="mt-6 text-xl font-extrabold tracking-tight">{c.title}</h2>
                <ul className="mt-4 space-y-2.5">
                  {c.items.map((it) => (
                    <li key={it.label}>
                      <a
                        href={it.href}
                        {...(it.external ? { target: "_blank", rel: "noreferrer" } : {})}
                        className="inline-flex min-h-[44px] items-center font-semibold text-brand-green underline decoration-brand-gold decoration-2 underline-offset-4 transition-colors hover:text-brand-ink"
                      >
                        {it.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Endereços + redes — split */}
      <section className="grid lg:grid-cols-2">
        <div className="bg-brand-green px-6 py-20 text-brand-cream sm:px-12 lg:py-28">
          <Reveal>
            <h2 className="text-3xl font-extrabold uppercase tracking-tight text-brand-gold">Onde estamos</h2>
          </Reveal>
          <ul className="mt-8 space-y-6">
            {brand.addresses.map((a, i) => (
              <Reveal key={a} delay={((i % 4) + 1) as 1 | 2}>
                <li className="flex items-start gap-4">
                  <svg className="mt-1 shrink-0 text-brand-gold" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M12 21s-7-5.1-7-11a7 7 0 1 1 14 0c0 5.9-7 11-7 11z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">
                      {i === 0 ? "Sede — Pemba" : "Sucursal — Maputo"}
                    </p>
                    <p className="mt-1 font-semibold leading-relaxed">{a}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={3}>
            <p className="mt-8 text-xs tracking-wider text-brand-cream/50">NUIT: {brand.nuit}</p>
          </Reveal>
        </div>

        <div className="flex flex-col justify-center bg-brand-gold px-6 py-20 text-brand-ink sm:px-12 lg:py-28">
          <Reveal>
            <h2 className="text-3xl font-extrabold uppercase tracking-tight">Siga-nos</h2>
          </Reveal>
          <Reveal delay={1}>
            <p className="mt-4 max-w-md font-medium leading-relaxed text-brand-ink/75">
              Acompanhe o nosso trabalho, projetos e próximas edições dos cursos
              vocacionais nas redes sociais.
            </p>
          </Reveal>
          <Reveal delay={2}>
            <div className="mt-8 flex flex-wrap gap-3">
              {brand.social.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="link-outline rounded-full bg-brand-ink px-5 py-3 text-sm font-bold text-brand-cream transition-colors duration-300 hover:bg-brand-green"
                >
                  {s.name}
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
