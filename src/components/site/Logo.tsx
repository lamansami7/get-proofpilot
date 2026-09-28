type LogoProps = {
  /** Use "hero" on dark green surfaces. */
  tone?: "default" | "hero";
  className?: string;
};

export function Logo({ tone = "default", className }: LogoProps) {
  const wordmark = tone === "hero" ? "text-hero-foreground" : "text-foreground";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
      <svg
        width="30"
        height="30"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <path
          d="M16 2.5 27 6.2v9.1c0 6.8-4.4 12.4-11 14.2-6.6-1.8-11-7.4-11-14.2V6.2L16 2.5Z"
          fill="var(--hero)"
        />
        <path
          d="M10.4 16.2 14.4 20l7.4-7.6"
          stroke="var(--primary)"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className={`text-[1.0625rem] font-extrabold tracking-[-0.03em] ${wordmark}`}>
        ProofPilot
      </span>
    </span>
  );
}
