import { Link } from "@tanstack/react-router";
import { SUPPORT_EMAIL } from "@/lib/links";
import { Logo } from "./Logo";

export { SUPPORT_EMAIL };

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container-page grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="max-w-sm">
          <Logo />
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            ProofPilot is a mobile app that helps you keep track of purchases, receipts, return
            windows and warranties. Launching first on Android.
          </p>
          <a
            href="/#download"
            className="mt-5 inline-flex text-sm font-bold text-accent-foreground underline decoration-primary decoration-2 underline-offset-4"
          >
            Get ProofPilot
          </a>
        </div>

        <nav aria-label="Product">
          <h2 className="eyebrow">Product</h2>
          <ul className="mt-4 space-y-3 text-sm font-semibold text-ink-secondary">
            <li>
              <a href="/#how-it-works" className="hover:text-foreground">
                How it works
              </a>
            </li>
            <li>
              <a href="/#features" className="hover:text-foreground">
                Features
              </a>
            </li>
            <li>
              <a href="/#download" className="hover:text-foreground">
                Download
              </a>
            </li>
          </ul>
        </nav>

        <nav aria-label="Company">
          <h2 className="eyebrow">Company</h2>
          <ul className="mt-4 space-y-3 text-sm font-semibold text-ink-secondary">
            <li>
              <Link to="/support" className="hover:text-foreground">
                Support
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-foreground">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-foreground">
                Terms of Service
              </Link>
            </li>
            <li>
              <a href={`mailto:${SUPPORT_EMAIL}`} className="break-all hover:text-foreground">
                {SUPPORT_EMAIL}
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="border-t border-border-subtle">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} ProofPilot. All rights reserved.</p>
          <p>ProofPilot helps you stay organized. It does not provide legal advice.</p>
        </div>
      </div>
    </footer>
  );
}
