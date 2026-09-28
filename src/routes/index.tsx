import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ProofPilot — Protect your purchases after checkout" },
      {
        name: "description",
        content:
          "ProofPilot keeps purchase records organized, tracks return and warranty deadlines, stores your receipts and documents, and helps you prepare claims.",
      },
      { property: "og:title", content: "ProofPilot — Protect your purchases after checkout" },
      {
        property: "og:description",
        content:
          "Keep purchase records organized, track return and warranty deadlines, store documents securely and get help preparing claims.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

const problems = [
  "Where the receipt ended up",
  "When the return period closes",
  "When the warranty expires",
  "Which documents belong to which purchase",
  "What information a claim actually needs",
];

const steps = [
  {
    step: "01",
    title: "Add a purchase",
    body: "Record the merchant, product, price, purchase date, serial and model numbers — everything you need later.",
  },
  {
    step: "02",
    title: "Store your documents",
    body: "Keep receipts, invoices, warranty documents and manuals attached to the purchase they belong to.",
  },
  {
    step: "03",
    title: "Track deadlines",
    body: "Return windows and warranty end dates are tracked with reminders at 30 days, 7 days and 1 day.",
  },
  {
    step: "04",
    title: "Get help when it goes wrong",
    body: "Use your stored details to prepare a claim, and ask the assistant questions about your own purchases.",
  },
];

const features = [
  {
    title: "Purchase tracking",
    body: "Merchant, product name, category, purchase date, price and currency, serial number, model number, SKU and notes — one organized record per purchase.",
    points: ["Receipts and invoices", "Product details", "Service records"],
  },
  {
    title: "Return & warranty deadlines",
    body: "Return windows and warranties are kept as dated deadlines with active, completed and dismissed states, so nothing quietly expires.",
    points: ["Return deadlines", "Warranty end dates", "30 / 7 / 1 day reminders"],
  },
  {
    title: "Document Vault",
    body: "Receipts, invoices, warranty documents and manuals stay attached to the right purchase, with file type and size shown clearly.",
    points: ["Receipts & invoices", "Warranty documents", "Manuals and other files"],
  },
  {
    title: "Claims",
    body: "Pull the purchase details, dates and documents you already stored into a claim you can prepare and send yourself.",
    points: ["Linked to a purchase", "Related documents", "Prepared from your records"],
  },
];

export default function LandingPage() {
  return <Landing />;
}

function Landing() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero text-hero-foreground">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-40 h-[32rem] w-[32rem] rounded-full bg-hero-muted/50 blur-3xl"
        />
        <div className="container-page relative grid gap-12 py-16 md:py-24 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <div>
            <p className="eyebrow text-primary">After-checkout protection</p>
            <h1 className="mt-4 text-[2.25rem] leading-[1.08] text-hero-foreground sm:text-5xl lg:text-[3.4rem]">
              ProofPilot protects your purchases after checkout.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-hero-foreground/80 sm:text-lg">
              Keep purchase records organized, track return and warranty deadlines, store the
              documents that prove what you bought, manage claims, get reminders, and ask an
              assistant about your own purchases.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/auth" className="btn-base btn-primary">
                Protect your purchases
              </Link>
              <Link to="/auth" className="btn-base btn-onhero">
                Sign in
              </Link>
            </div>
            <p className="mt-6 text-sm text-hero-foreground/70">
              One account for web and the ProofPilot mobile app.
            </p>
          </div>

          {/* Product visual */}
          <div className="relative">
            <div className="rounded-3xl border border-white/15 bg-white/10 p-3 shadow-floating backdrop-blur-sm">
              <div className="rounded-2xl bg-card p-5 text-foreground">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="eyebrow">Dashboard</p>
                    <p className="mt-1 text-lg font-extrabold tracking-[-0.03em]">Your purchases</p>
                  </div>
                  <span className="rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">
                    12 protected
                  </span>
                </div>

                <div className="mt-5 grid grid-cols-3 gap-3">
                  {[
                    { label: "Purchases", value: "12" },
                    { label: "Returns open", value: "3" },
                    { label: "Warranties", value: "8" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-xl border border-border-subtle bg-secondary p-3"
                    >
                      <p className="text-xl font-extrabold tracking-[-0.03em]">{stat.value}</p>
                      <p className="mt-0.5 text-[0.6875rem] font-semibold text-muted-foreground">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 space-y-2.5">
                  {[
                    {
                      name: "Espresso machine",
                      meta: "Kitchen Co. · $489.00",
                      status: "Return ends in 6 days",
                      tone: "warning" as const,
                    },
                    {
                      name: 'OLED TV 55"',
                      meta: "Volt Electronics · $1,099.00",
                      status: "Warranty to Mar 2028",
                      tone: "success" as const,
                    },
                    {
                      name: "Cordless drill",
                      meta: "Buildmart · $149.00",
                      status: "Claim in progress",
                      tone: "info" as const,
                    },
                  ].map((row) => (
                    <div
                      key={row.name}
                      className="flex items-center justify-between gap-3 rounded-xl border border-border-subtle p-3"
                    >
                      <div className="min-w-0">
                        <p className="truncate text-sm font-bold">{row.name}</p>
                        <p className="truncate text-xs text-muted-foreground">{row.meta}</p>
                      </div>
                      <span
                        className={`shrink-0 rounded-full border px-2.5 py-1 text-[0.6875rem] font-bold ${
                          row.tone === "warning"
                            ? "border-warning-border bg-warning-surface text-warning"
                            : row.tone === "success"
                              ? "border-success-border bg-success-surface text-success"
                              : "border-info-border bg-info-surface text-info"
                        }`}
                      >
                        {row.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <p className="mt-3 text-center text-xs text-hero-foreground/60">
              Illustration of the ProofPilot dashboard.
            </p>
          </div>
        </div>
      </section>

      {/* VALUE PROPOSITION */}
      <section className="border-b border-border py-16 md:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="eyebrow">The problem</p>
            <h2 className="mt-3 text-3xl md:text-4xl">
              Buying is easy. Proving what you bought is the hard part.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-secondary">
              Weeks after checkout, the receipt is in an inbox, the box is gone and the return
              window is nearly closed. ProofPilot keeps the record instead of you having to.
            </p>
          </div>
          <ul className="space-y-3">
            {problems.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4 shadow-soft"
              >
                <span
                  aria-hidden="true"
                  className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-extrabold text-accent-foreground"
                >
                  ?
                </span>
                <span className="text-[0.9375rem] font-semibold">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="scroll-mt-24 bg-canvas-deep py-16 md:py-24">
        <div className="container-page">
          <p className="eyebrow">How it works</p>
          <h2 className="mt-3 max-w-2xl text-3xl md:text-4xl">
            Four steps, and your purchase is on record.
          </h2>
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((item) => (
              <li key={item.step} className="border-t-2 border-primary pt-5">
                <p className="text-xs font-extrabold tracking-[0.115em] text-muted-foreground">
                  {item.step}
                </p>
                <h3 className="mt-2 text-lg">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-secondary">{item.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="scroll-mt-24 py-16 md:py-24">
        <div className="container-page">
          <p className="eyebrow">Features</p>
          <h2 className="mt-3 max-w-2xl text-3xl md:text-4xl">
            Everything that matters after the purchase.
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {features.map((feature) => (
              <article key={feature.title} className="surface-card p-6">
                <h3 className="text-xl">{feature.title}</h3>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-secondary">
                  {feature.body}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {feature.points.map((point) => (
                    <li
                      key={point}
                      className="rounded-full border border-brand-border bg-brand-subtle px-3 py-1 text-xs font-bold text-accent-foreground"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          {/* AI assistant */}
          <article className="mt-6 rounded-3xl border border-border bg-hero p-6 text-hero-foreground md:p-10">
            <p className="eyebrow text-primary">AI assistant</p>
            <h3 className="mt-3 max-w-2xl text-2xl text-hero-foreground md:text-3xl">
              Answers based on the purchase information you stored.
            </h3>
            <p className="mt-4 max-w-2xl text-[0.9375rem] leading-relaxed text-hero-foreground/80">
              The assistant works from your own purchase records — dates, merchants, documents and
              deadlines — to help you understand a return window, get a claim ready or find the
              details of an older purchase. Requests are handled by ProofPilot&apos;s server-side
              function, never by your browser talking to an AI provider directly.
            </p>
            <ul className="mt-6 grid gap-3 text-sm text-hero-foreground/80 sm:grid-cols-3">
              <li className="rounded-xl border border-white/15 bg-white/10 p-4">
                It can only use information available in your account.
              </li>
              <li className="rounded-xl border border-white/15 bg-white/10 p-4">
                Answers are assistance, not verified fact — check anything important.
              </li>
              <li className="rounded-xl border border-white/15 bg-white/10 p-4">
                Usage limits apply so the assistant stays available to everyone.
              </li>
            </ul>
          </article>
        </div>
      </section>

      {/* SECURITY */}
      <section id="security" className="scroll-mt-24 border-y border-border bg-card py-16 md:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="eyebrow">Privacy &amp; security</p>
            <h2 className="mt-3 text-3xl md:text-4xl">Your records stay yours.</h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-secondary">
              ProofPilot is built on Supabase authentication with row-level security, so the
              database itself enforces that a record can only be read by the account that owns it —
              or by household members you explicitly share with.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              We describe only what the product actually does. No certification claims, no
              marketing language about encryption we have not implemented.
            </p>
          </div>
          <dl className="grid gap-4 sm:grid-cols-2">
            {[
              {
                t: "Supabase authentication",
                d: "One account across web and mobile, with email verification and password reset.",
              },
              {
                t: "Row Level Security",
                d: "Access rules live in the database, applied to every read and write.",
              },
              {
                t: "Account ownership",
                d: "Purchases, documents, deadlines and claims are scoped to your user account.",
              },
              {
                t: "Server-side functions",
                d: "Privileged work, including AI requests and account deletion, runs on the server.",
              },
              {
                t: "Private document storage",
                d: "Files are stored in a private bucket; nothing is made publicly readable.",
              },
              {
                t: "Account deletion",
                d: "You can delete your account and its data from Settings.",
              },
            ].map((item) => (
              <div key={item.t} className="rounded-2xl border border-border bg-background p-5">
                <dt className="text-[0.9375rem] font-extrabold tracking-[-0.02em]">{item.t}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-ink-secondary">{item.d}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container-narrow text-center">
          <h2 className="text-3xl md:text-4xl">Start protecting your next purchase.</h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-ink-secondary">
            Create one ProofPilot account and use it on the web and in the mobile app.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/auth" className="btn-base btn-primary">
              Protect your purchases
            </Link>
            <Link to="/support" className="btn-base btn-secondary">
              Talk to support
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
