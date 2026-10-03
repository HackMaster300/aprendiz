import { Link } from "react-router-dom";
import { ArrowButton } from "../components/ArrowButton";
import { Reveal } from "../components/Reveal";
import { brand, cursos, edicao, servicos, waLink } from "../lib/site";
import hero from "../assets/hero.jpg";
import about from "../assets/about.jpg";

const marqueeItems = ["Inovação", "Integridade", "Transparência", "Excelência", "Inclusão", "Desenvolvimento"];

export default function Home() {
  return (
    <>
      {/* ================= HERO SPLIT-SCREEN ================= */}
      <section className="grid min-h-screen lg:grid-cols-2">
        {/* Left — deep green panel */}
        <div className="relative flex flex-col justify-center overflow-hidden bg-brand-green px-6 pb-16 pt-32 sm:px-12 lg:order-1 lg:pt-24">
          {/* gold slash motif */}
          <div
            aria-hidden="true"
            className="absolute -right-10 top-0 hidden h-full w-40 -skew-x-12 bg-brand-gold/15 lg:block"
          />
          <div className="relative max-w-xl">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-gold">
                Consultoria Educacional · Pemba — Maputo
              </p>
            </Reveal>
            <Reveal delay={1}>
              <h1 className="mt-6 text-5xl font-extrabold leading-[0.98] tracking-tight text-brand-cream sm:text-6xl xl:text-7xl">
                Educação que{" "}
                <span className="text-brand-gold">transforma</span> vidas.
              </h1>
            </Reveal>
            <Reveal delay={2}>
              <p className="mt-6 max-w-md text-base leading-relaxed text-brand-cream/80 sm:text-lg">
                {brand.slogan}. Soluções educacionais inclusivas e de excelência
                para pessoas, organizações e comunidades.
              </p>
            </Reveal>
            <Reveal delay={3}>
              <div className="mt-10 flex flex-wrap gap-4">
                <ArrowButton to="/cursos">Ver Cursos Vocacionais</ArrowButton>
                <ArrowButton to="/sobre" variant="outline-light">
                  Conhecer a Aprendiz
                </ArrowButton>
              </div>
            </Reveal>
          </div>

          <Reveal delay={4}>
            <div className="relative mt-14 flex items-center gap-3 text-sm text-brand-cream/70">
              <span className="inline-block h-2 w-2 rounded-full bg-brand-gold" aria-hidden="true" />
              Inscrições abertas — {edicao.numero} dos Cursos Vocacionais
            </div>
          </Reveal>
        </div>

        {/* Right — full-bleed image */}
        <div className="relative min-h-[46vh] lg:order-2 lg:min-h-screen">
          <img
            src={hero}
            alt="Jovens profissionais moçambicanos confiantes, com materiais de estudo"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-brand-green/50 via-transparent to-transparent"
          />
          <div className="absolute bottom-6 right-6 rounded-full bg-brand-cream px-5 py-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-green shadow-lg">
            {edicao.numero} · 2026
          </div>
        </div>
      </section>

      {/* ================= MARQUEE ================= */}
      <div className="overflow-hidden border-y border-brand-ink/10 bg-brand-gold py-4" aria-hidden="true">
        <div className="marquee-track flex w-max items-center gap-10 whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="flex items-center gap-10 text-sm font-bold uppercase tracking-[0.3em] text-brand-ink">
              {item}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <rect x="3" y="3" width="8" height="8" transform="rotate(45 7 7)" fill="#00492c" />
              </svg>
            </span>
          ))}
        </div>
      </div>

      {/* ================= SOBRE PREVIEW (split assimétrico) ================= */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-green">Sobre nós</p>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
                Parceiros estratégicos no desenvolvimento de{" "}
                <span className="text-brand-green">pessoas e comunidades</span>.
              </h2>
            </Reveal>
            <Reveal delay={2}>
              <p className="mt-6 leading-relaxed text-brand-ink/75">
                A Aprendiz Consultores, SU, Lda é uma consultoria educacional
                sediada em Pemba, com sucursal em Maputo. Atuamos na promoção de
                uma educação de qualidade e no desenvolvimento sustentável das
                comunidades, através de soluções educacionais inclusivas e
                orientadas para resultados.
              </p>
            </Reveal>
            <Reveal delay={3}>
              <div className="mt-8">
                <ArrowButton to="/sobre" variant="outline-dark">
                  A nossa história
                </ArrowButton>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal delay={2} className="relative">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={about}
                  alt="Formação vocacional em sala de aula"
                  className="aspect-[3/2] w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-4 hidden rounded-xl bg-brand-green px-6 py-5 text-brand-cream shadow-xl sm:block">
                <p className="text-3xl font-extrabold text-brand-gold">10+</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-brand-cream/80">
                  Cursos vocacionais
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================= SERVIÇOS (lista editorial) ================= */}
      <section className="bg-brand-green py-24 text-brand-cream lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Reveal>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-gold">Serviços</p>
              </Reveal>
              <Reveal delay={1}>
                <h2 className="mt-5 max-w-xl text-4xl font-extrabold tracking-tight sm:text-5xl">
                  O que fazemos
                </h2>
              </Reveal>
            </div>
            <Reveal delay={2}>
              <ArrowButton to="/servicos" variant="outline-light">
                Todos os serviços
              </ArrowButton>
            </Reveal>
          </div>

          <div className="mt-14 divide-y divide-white/10 border-y border-white/10">
            {servicos.slice(0, 4).map((s, i) => (
              <Reveal key={s.title} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                <Link
                  to="/servicos"
                  className="group flex items-baseline gap-6 py-7 transition-colors duration-500 hover:bg-white/5 sm:gap-10"
                >
                  <span className="text-sm font-bold text-brand-gold">{String(i + 1).padStart(2, "0")}</span>
                  <span className="flex-1 text-xl font-bold tracking-tight transition-transform duration-500 group-hover:translate-x-2 sm:text-2xl">
                    {s.title}
                  </span>
                  <svg
                    className="shrink-0 text-brand-gold opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M7 17L17 7M9 7h8v8" />
                  </svg>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROJETO EM DESTAQUE (split verde/ouro) ================= */}
      <section className="grid lg:grid-cols-2">
        <div className="flex flex-col justify-center bg-brand-deep px-6 py-20 sm:px-12 lg:py-28">
          <Reveal>
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-brand-gold">
              <svg width="26" height="20" viewBox="0 0 40 30" fill="none" aria-hidden="true">
                <path
                  d="M2 6 C8 3 14 3 20 6 C26 3 32 3 38 6 L38 24 C32 21 26 21 20 24 C14 21 8 21 2 24 Z"
                  stroke="#eeb319"
                  strokeWidth="2.4"
                  fill="none"
                />
                <path d="M20 6 L20 24" stroke="#eeb319" strokeWidth="2.4" />
              </svg>
              Projeto em destaque
            </p>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-6 text-4xl font-extrabold uppercase tracking-tight text-brand-gold sm:text-5xl">
              Fortalecimento Juvenil
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-6 max-w-md leading-relaxed text-brand-cream/80">
              Iniciativa pioneira em implementação na cidade de Pemba, focada na
              resiliência e autonomia da juventude através de cursos vocacionais
              práticos.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <div className="mt-9">
              <ArrowButton to="/cursos">Saber mais</ArrowButton>
            </div>
          </Reveal>
        </div>
        <div className="flex flex-col justify-center bg-brand-gold px-6 py-20 sm:px-12 lg:py-28">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-brand-ink/70">
              Áreas de formação atual
            </p>
          </Reveal>
          <ul className="mt-8 space-y-5">
            {cursos.slice(0, 6).map((c, i) => (
              <Reveal key={c} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                <li className="flex items-center gap-4 text-lg font-bold text-brand-ink">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M4 2l8 6-8 6V2z" fill="#00492c" />
                  </svg>
                  {c}
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ================= CTA CONTACTO ================= */}
      <section className="relative overflow-hidden bg-brand-cream py-24 lg:py-32">
        <div
          aria-hidden="true"
          className="absolute -left-16 top-1/2 hidden h-[120%] w-56 -skew-x-12 -translate-y-1/2 bg-brand-green/5 lg:block"
        />
        <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
          <Reveal>
            <h2 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
              O mercado de trabalho{" "}
              <span className="text-brand-green">não espera por si.</span>
            </h2>
          </Reveal>
          <Reveal delay={1}>
            <p className="mx-auto mt-6 max-w-xl leading-relaxed text-brand-ink/70">
              Fale connosco hoje — por WhatsApp, e-mail ou telefone — e dê o
              primeiro passo rumo ao seu futuro profissional.
            </p>
          </Reveal>
          <Reveal delay={2}>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <ArrowButton href={waLink(brand.phones[0].raw, "Olá! Gostaria de saber mais sobre os cursos da Aprendiz Consultores.")}>
                WhatsApp
              </ArrowButton>
              <ArrowButton href={`mailto:${brand.email}`} variant="outline-dark">
                Enviar e-mail
              </ArrowButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
