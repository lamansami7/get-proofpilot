import type { ReactNode } from "react";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-card focus:px-4 focus:py-2 focus:text-sm focus:font-bold"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main" className="flex-1">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}

/** Shared shell for the long-form legal / support pages. */
export function DocPage({
  eyebrow,
  title,
  intro,
  updated,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  updated?: string;
  children: ReactNode;
}) {
  return (
    <SiteLayout>
      <div className="border-b border-border bg-canvas-deep">
        <div className="container-narrow py-14 md:py-20">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-3 text-3xl md:text-4xl">{title}</h1>
          <p className="mt-4 text-base leading-relaxed text-ink-secondary">{intro}</p>
          {updated ? <p className="mt-4 text-xs text-muted-foreground">{updated}</p> : null}
        </div>
      </div>
      <div className="container-narrow py-12 md:py-16">
        <div className="space-y-10">{children}</div>
      </div>
    </SiteLayout>
  );
}

export function DocSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="space-y-3">
      <h2 className="text-xl">{title}</h2>
      <div className="space-y-3 text-[0.9375rem] leading-relaxed text-ink-secondary [&_li]:leading-relaxed [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
        {children}
      </div>
    </section>
  );
}
