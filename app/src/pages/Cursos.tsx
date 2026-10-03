import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { ArrowButton } from "../components/ArrowButton";
import { brand, cursos, cursosEspeciais, edicao, waLink } from "../lib/site";
import courses from "../assets/courses.jpg";

export default function Cursos() {
  return (
    <>
      <PageHero
        eyebrow={`Cursos Vocacionais Gratuitos · ${edicao.numero}`}
        title={
          <>
            Atenção, <span className="text-brand-gold">futuro profissional!</span>
          </>
        }
        intro="A Aprendiz Consultores convoca todos os jovens e adultos que procuram o sucesso profissional a aderirem aos Cursos Vocacionais Gratuitos."
      />

      {/* Lista de cursos + imagem */}
      <section className="grid lg:grid-cols-2">
        <div className="flex flex-col justify-center bg-brand-cream px-6 py-20 sm:px-12 lg:py-28">
          <Reveal>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Cursos disponíveis</h2>
          </Reveal>
          <ul className="mt-10 space-y-4">
            {cursos.map((c, i) => (
              <Reveal key={c} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                <li className="flex items-center gap-4 text-lg font-bold text-brand-ink">
                  <svg className="shrink-0" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M4 2l8 6-8 6V2z" fill="#eeb319" />
                  </svg>
                  {c}
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
        <div className="relative min-h-[360px]">
          <img
            src={courses}
            alt="Formação prática em eletricidade instaladora"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/40 to-transparent" aria-hidden="true" />
        </div>
      </section>

      {/* Tratamento especial */}
      <section className="bg-brand-deep px-6 py-20 text-brand-cream sm:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-brand-gold">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#eeb319" aria-hidden="true">
                <path d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.2 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8L12 2z" />
              </svg>
              Cursos com tratamento especial (sem estágio)
            </p>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {cursosEspeciais.map((c, i) => (
              <Reveal key={c.title} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                <div className="h-full rounded-2xl border border-white/15 p-8 transition-colors duration-500 hover:border-brand-gold/60">
                  <h3 className="text-2xl font-extrabold uppercase tracking-tight text-brand-gold">{c.title}</h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-brand-cream/60">({c.note})</p>
                  <dl className="mt-6 space-y-3 text-sm">
                    <div className="flex justify-between gap-4 border-b border-white/10 pb-3">
                      <dt className="text-brand-cream/70">Uniforme</dt>
                      <dd className="font-bold">{c.uniforme}</dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt className="text-brand-cream/70">Certificado</dt>
                      <dd className="font-bold">{c.certificado}</dd>
                    </div>
                  </dl>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Informações práticas — split verde/ouro */}
      <section className="grid lg:grid-cols-2">
        <div className="bg-brand-green px-6 py-20 text-brand-cream sm:px-12 lg:py-28">
          <Reveal>
            <h2 className="text-3xl font-extrabold uppercase tracking-tight text-brand-gold sm:text-4xl">
              Informações importantes
            </h2>
          </Reveal>
          <Reveal delay={1}>
            <ul className="mt-8 space-y-5 text-brand-cream/85">
              {[
                ["Inscrições", edicao.inscricoes],
                ["Início das aulas", edicao.inicioAulas],
                ["Dias", edicao.dias],
                ["Duração", edicao.duracao],
                ["Local", edicao.local],
                ["Vagas", "Limitadas! Garanta já a sua."],
              ].map(([k, v]) => (
                <li key={k} className="flex flex-col gap-1 border-b border-white/10 pb-4 sm:flex-row sm:items-baseline sm:justify-between">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">{k}</span>
                  <span className="font-semibold sm:text-right">{v}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="bg-brand-gold px-6 py-20 text-brand-ink sm:px-12 lg:py-28">
          <Reveal>
            <h2 className="text-3xl font-extrabold uppercase tracking-tight sm:text-4xl">Investimento</h2>
            <p className="mt-2 text-sm font-semibold text-brand-ink/70">(Inscrição e mensalidade mahala!)</p>
          </Reveal>
          <Reveal delay={1}>
            <ul className="mt-8 space-y-4">
              {edicao.investimento.map((i) => (
                <li key={i.item} className="flex items-baseline justify-between gap-4 border-b border-brand-ink/15 pb-4">
                  <span className="font-semibold">
                    {i.item}
                    {i.note && <span className="block text-xs font-medium text-brand-ink/60">{i.note}</span>}
                  </span>
                  <span className="text-lg font-extrabold">{i.valor}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={2}>
            <h3 className="mt-12 text-xl font-extrabold uppercase tracking-tight">Requisitos para inscrição</h3>
            <ol className="mt-5 list-decimal space-y-3 pl-5 text-sm leading-relaxed text-brand-ink/85">
              {edicao.requisitos.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* CTA inscrição */}
      <section className="bg-brand-cream py-20 text-center lg:py-28">
        <Reveal>
          <h2 className="mx-auto max-w-2xl px-5 text-3xl font-extrabold tracking-tight sm:text-5xl">
            Garanta já a sua vaga na {edicao.numero}
          </h2>
        </Reveal>
        <Reveal delay={1}>
          <div className="mt-10 flex flex-wrap justify-center gap-4 px-5">
            <ArrowButton href={waLink(brand.phones[0].raw, "Olá! Quero inscrever-me nos Cursos Vocacionais (2.ª Edição).")}>
              Inscrever via WhatsApp
            </ArrowButton>
            <ArrowButton href={`tel:+${brand.phones[0].raw}`} variant="outline-dark">
              Ligar {brand.phones[0].label}
            </ArrowButton>
          </div>
        </Reveal>
      </section>
    </>
  );
}
