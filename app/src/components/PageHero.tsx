import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  invert?: boolean; // gold panel instead of green
};

export function PageHero({ eyebrow, title, intro, invert = false }: PageHeroProps) {
  return (
    <section
      className={`relative overflow-hidden px-6 pb-20 pt-36 sm:px-12 lg:pb-28 lg:pt-44 ${
        invert ? "bg-brand-gold text-brand-ink" : "bg-brand-green text-brand-cream"
      }`}
    >
      <div
        aria-hidden="true"
        className={`absolute -right-10 top-0 hidden h-full w-40 -skew-x-12 lg:block ${
          invert ? "bg-brand-green/10" : "bg-brand-gold/15"
        }`}
      />
      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <p
            className={`text-xs font-semibold uppercase tracking-[0.35em] ${
              invert ? "text-brand-green" : "text-brand-gold"
            }`}
          >
            {eyebrow}
          </p>
        </Reveal>
        <Reveal delay={1}>
          <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl">
            {title}
          </h1>
        </Reveal>
        {intro && (
          <Reveal delay={2}>
            <p
              className={`mt-6 max-w-2xl text-base leading-relaxed sm:text-lg ${
                invert ? "text-brand-ink/75" : "text-brand-cream/80"
              }`}
            >
              {intro}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
