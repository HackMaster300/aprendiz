type LogoProps = { light?: boolean; className?: string };

export function Logo({ light = false, className = "" }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg width="34" height="26" viewBox="0 0 40 30" fill="none" aria-hidden="true">
        <path
          d="M2 6 C8 3 14 3 20 6 C26 3 32 3 38 6 L38 24 C32 21 26 21 20 24 C14 21 8 21 2 24 Z"
          stroke={light ? "#eeb319" : "#00492c"}
          strokeWidth="2.4"
          fill="none"
          strokeLinejoin="round"
        />
        <path d="M20 6 L20 24" stroke={light ? "#eeb319" : "#00492c"} strokeWidth="2.4" />
        <path d="M6 10 C10 8.6 14 8.6 17 10" stroke={light ? "#fafaee" : "#00492c"} strokeWidth="1.6" fill="none" />
        <path d="M23 10 C26 8.6 30 8.6 34 10" stroke={light ? "#fafaee" : "#00492c"} strokeWidth="1.6" fill="none" />
      </svg>
      <span className="leading-none">
        <span className={`block font-extrabold tracking-tight text-lg ${light ? "text-brand-cream" : "text-brand-ink"}`}>
          <span className={light ? "text-brand-gold" : "text-brand-green"}>A</span>PRENDIZ
        </span>
        <span className={`block text-[10px] font-semibold tracking-[0.18em] uppercase ${light ? "text-brand-cream/70" : "text-brand-green"}`}>
          Consultores SU, Lda
        </span>
      </span>
    </span>
  );
}
