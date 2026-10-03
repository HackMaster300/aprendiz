import { Link } from "react-router-dom";
import type { ReactNode } from "react";

type ArrowButtonProps = {
  to?: string;
  href?: string;
  children: ReactNode;
  variant?: "gold" | "outline-light" | "outline-dark" | "ink";
  className?: string;
};

const Arrow = () => (
  <svg
    className="btn-arrow"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export function ArrowButton({ to, href, children, variant = "gold", className = "" }: ArrowButtonProps) {
  const base = "btn-clip px-7 py-3.5 rounded-full text-sm tracking-wide";
  const styles = {
    gold: "bg-brand-gold text-brand-ink hover:text-brand-cream",
    "outline-light": "border border-white/40 text-white hover:text-brand-ink",
    "outline-dark": "border border-brand-ink/30 text-brand-ink hover:text-brand-cream",
    ink: "bg-brand-ink text-brand-cream",
  } as const;
  const mask = {
    gold: "bg-brand-green",
    "outline-light": "bg-brand-gold",
    "outline-dark": "bg-brand-green",
    ink: "bg-brand-green",
  } as const;

  const cls = `${base} ${styles[variant]} ${className}`;
  const inner = (
    <>
      <span className={`btn-mask ${mask[variant]}`} aria-hidden="true" />
      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
        <Arrow />
      </span>
    </>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={cls}>
        {inner}
      </a>
    );
  }
  return (
    <Link to={to ?? "/"} className={cls}>
      {inner}
    </Link>
  );
}
