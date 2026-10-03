import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { ArrowButton } from "../components/ArrowButton";
import { brand } from "../lib/site";
import about from "../assets/about.jpg";

const valores = [
  {
    title: "Inovação",
    desc: "Promovemos novas abordagens e soluções para responder aos desafios da educação.",
  },
  {
    title: "Integridade e Transparência",
    desc: "Agimos com ética, responsabilidade e clareza em todas as nossas relações.",
  },
  {
    title: "Excelência",
    desc: "Procuramos elevar continuamente a qualidade do nosso trabalho e o impacto que geramos.",
  },
];

export default function Sobre() {
  return (
    <>
      <PageHero
        eyebrow="Sobre nós"
        title={
          <>
            Quem somos e o que nos{" "}
            <span className="text-brand-gold">move</span>.
          </>
        }
        intro="A Aprendiz Consultores, SU, Lda é uma consultoria educacional sediada em Pemba, com sucursal em Maputo. Atuamos na promoção de uma educação de qualidade e no desenvolvimento sustentável das comunidades."
      />

      {/* Missão / Visão — split */}
      <section className="grid lg:grid-cols-2">
        <div className="flex flex-col justify-center bg-brand-cream px-6 py-20 sm:px-12 lg:py-28">
          <Reveal>
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-brand-green">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00492c" strokeWidth="2" aria-hidden="true">
                <circle cx="12" cy="12" r="9" />
                <circle cx="12" cy="12" r="4.5" />
                <circle cx="12" cy="12" r="1" fill="#00492c" />
              </svg>
              A nossa missão
            </p>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
              Desenvolver e fornecer soluções educacionais inclusivas e de
              excelência, estabelecendo parcerias estratégicas com instituições
              para fortalecer pessoas, organizações e comunidades.
            </h2>
          </Reveal>
        </div>
        <div className="relative min-h-[320px]">
          <img
            src={about}
            alt="Sessão de formação da Aprendiz Consultores"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="grid lg:grid-cols-2">
        <div className="flex flex-col justify-center bg-brand-green px-6 py-20 text-brand-cream sm:px-12 lg:order-2 lg:py-28">
          <Reveal>
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-brand-gold">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#eeb319" strokeWidth="2" aria-hidden="true">
                <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              A nossa visão
            </p>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
              Ser uma referência em consultoria educacional inclusiva,
              reconhecida pelo impacto e pela qualidade das suas soluções no
              desenvolvimento da sociedade.
            </h2>
          </Reveal>
        </div>
        <div className="flex flex-col justify-center bg-brand-gold px-6 py-20 sm:px-12 lg:order-1 lg:py-28">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-brand-ink/70">
              A nossa voz
            </p>
          </Reveal>
          <Reveal delay={1}>
            <p className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-brand-ink sm:text-4xl">
              “{brand.slogan}.”
            </p>
          </Reveal>
          <Reveal delay={2}>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {["Profissional", "Humana", "Clara", "Inspiradora"].map((v) => (
                <span
                  key={v}
                  className="rounded-full border border-brand-ink/25 px-4 py-2 text-xs font-bold uppercase tracking-wider text-brand-ink"
                >
                  {v}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Valores */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-green">Os nossos valores</p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Princípios que orientam cada projeto
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-brand-ink/10 md:grid-cols-3">
          {valores.map((v, i) => (
            <Reveal key={v.title} delay={((i % 4) + 1) as 1 | 2 | 3 | 4} className="bg-brand-cream">
              <div className="flex h-full flex-col p-8 lg:p-10">
                <span className="text-4xl font-extrabold text-brand-gold">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-6 text-xl font-extrabold tracking-tight">{v.title}</h3>
                <p className="mt-3 leading-relaxed text-brand-ink/70">{v.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Presença */}
      <section className="bg-brand-green py-24 text-brand-cream">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2">
          <div>
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-gold">Onde estamos</p>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
                Pemba <span className="text-brand-gold">·</span> Maputo
              </h2>
            </Reveal>
            <Reveal delay={2}>
              <ul className="mt-8 space-y-4 text-brand-cream/80">
                {brand.addresses.map((a) => (
                  <li key={a} className="flex items-start gap-3">
                    <svg className="mt-1 shrink-0 text-brand-gold" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M12 21s-7-5.1-7-11a7 7 0 1 1 14 0c0 5.9-7 11-7 11z" />
                      <circle cx="12" cy="10" r="2.5" />
                    </svg>
                    {a}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={3}>
              <p className="mt-6 text-xs tracking-wider text-brand-cream/50">NUIT: {brand.nuit}</p>
            </Reveal>
          </div>
          <div className="flex flex-col justify-center">
            <Reveal delay={1}>
              <p className="max-w-md text-lg leading-relaxed text-brand-cream/85">
                Quer seja uma instituição à procura de parceria estratégica ou um
                jovem à procura de formação, estamos prontos para conversar.
              </p>
            </Reveal>
            <Reveal delay={2}>
              <div className="mt-8">
                <ArrowButton to="/contacto">Fale connosco</ArrowButton>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
