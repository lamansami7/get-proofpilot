import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Logo } from "./Logo";

const sections = [
  { label: "How it works", href: "/#how-it-works" },
  { label: "Features", href: "/#features" },
  { label: "Privacy & security", href: "/#security" },
  { label: "Support", href: "/support" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/85 backdrop-blur-md">
      <div className="container-page flex h-[4.25rem] items-center justify-between gap-4">
        <Link to="/" aria-label="ProofPilot home" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
          {sections.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-ink-secondary transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Link to="/auth" className="btn-base btn-secondary">
            Sign in
          </Link>
          <Link to="/auth" className="btn-base btn-primary">
            Protect your purchases
          </Link>
        </div>

        <button
          type="button"
          className="btn-base btn-secondary aspect-square px-0 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {open ? (
              <path
                d="M6 6l12 12M18 6 6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {open ? (
        <div id="mobile-nav" className="border-t border-border bg-card lg:hidden">
          <nav aria-label="Main" className="container-page flex flex-col py-2">
            {sections.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex min-h-11 items-center border-b border-border-subtle text-[0.9375rem] font-semibold text-ink-secondary"
              >
                {item.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 py-4">
              <Link to="/auth" className="btn-base btn-primary" onClick={() => setOpen(false)}>
                Protect your purchases
              </Link>
              <Link to="/auth" className="btn-base btn-secondary" onClick={() => setOpen(false)}>
                Sign in
              </Link>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
