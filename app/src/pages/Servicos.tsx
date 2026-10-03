import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { ArrowButton } from "../components/ArrowButton";
import { brand, servicos, waLink } from "../lib/site";

export default function Servicos() {
  return (
    <>
      <PageHero
        eyebrow="Serviços"
        title={
          <>
            Soluções educacionais{" "}
            <span className="text-brand-gold">de excelência</span>.
          </>
        }
        intro="Da conceção curricular à gestão de projetos, apoiamos instituições e comunidades em todo o ciclo do desenvolvimento educacional."
      />

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="divide-y divide-brand-ink/10 border-y border-brand-ink/10">
          {servicos.map((s, i) => (
            <Reveal key={s.title} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
              <div className="group grid gap-4 py-10 transition-colors duration-500 hover:bg-brand-green/[0.03] sm:grid-cols-12 sm:items-baseline sm:gap-8">
                <span className="text-sm font-bold text-brand-gold sm:col-span-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="text-2xl font-extrabold tracking-tight transition-transform duration-500 group-hover:translate-x-2 sm:col-span-5 sm:text-3xl">
                  {s.title}
                </h2>
                <p className="leading-relaxed text-brand-ink/70 sm:col-span-6">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-gold py-20 lg:py-28">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-8 px-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
          <Reveal>
            <h2 className="max-w-2xl text-3xl font-extrabold tracking-tight text-brand-ink sm:text-5xl">
              A sua instituição precisa de uma solução à medida?
            </h2>
          </Reveal>
          <Reveal delay={1}>
            <ArrowButton
              href={waLink(brand.phones[0].raw, "Olá! Gostaria de falar sobre os serviços de consultoria da Aprendiz.")}
              variant="ink"
            >
              Pedir proposta
            </ArrowButton>
          </Reveal>
        </div>
      </section>
    </>
  );
}
