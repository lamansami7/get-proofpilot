import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { GooglePlayButton } from "@/components/site/GooglePlayButton";

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
    title: "Capture the receipt",
    body: "Photograph or upload a receipt. AI-assisted extraction can suggest the merchant, product, date and price — always for you to review and correct.",
  },
  {
    step: "02",
    title: "Confirm the details",
    body: "Check the purchase record and add what matters later: serial and model numbers, SKU and notes.",
  },
  {
    step: "03",
    title: "Track deadlines",
    body: "Record return windows and warranty end dates so you can see what is coming up and what has passed.",
  },
  {
    step: "04",
    title: "Prepare a claim",
    body: "Use the details and documents you stored to prepare a return or warranty claim you send yourself.",
  },
];

const features = [
  {
    title: "Receipt capture",
    body: "Add a purchase from a receipt photo or file. AI-assisted extraction proposes the key fields; results are not guaranteed, so you confirm every value before it is saved.",
    points: ["Suggested fields", "You review everything", "Manual entry always available"],
  },
  {
    title: "Purchase records",
    body: "Merchant, product name, category, purchase date, price and currency, serial number, model number, SKU and notes — one organized record per purchase.",
    points: ["Product details", "Serial & model numbers", "Notes"],
  },
  {
    title: "Return & warranty deadlines",
    body: "Return windows and warranties are kept as dated deadlines with active, completed and dismissed states, so you can see what needs attention.",
    points: ["Return deadlines", "Warranty end dates", "Deadline status"],
  },
  {
    title: "Claims help",
    body: "Pull the purchase details, dates and documents you already stored into a claim you prepare and submit to the merchant yourself. ProofPilot does not submit claims for you.",
    points: ["Linked to a purchase", "Related documents", "You stay in control"],
  },
];

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
              Capture receipts, keep purchase records organized, track return and warranty
              deadlines, and get AI help preparing claims — using the details you have confirmed
              about your own purchases.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <GooglePlayButton />
              <a href="#how-it-works" className="btn-base btn-onhero">
                See how it works
              </a>
            </div>
            <p className="mt-6 text-sm text-hero-foreground/70">
              A mobile app for Android, launching first on Google Play.
            </p>
          </div>

          {/* Product visual */}
          <div className="relative">
            <div className="rounded-3xl border border-white/15 bg-white/10 p-3 shadow-floating backdrop-blur-sm">
              <div className="rounded-2xl bg-card p-5 text-foreground">
                <div>
                  <p className="eyebrow">Example</p>
                  <p className="mt-1 text-lg font-extrabold tracking-[-0.03em]">Purchase records</p>
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
              Illustration with example data — not real users or purchases.
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
              function, never by your phone talking to an AI provider directly.
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
              In the ProofPilot app, your purchase records are tied to your own account, and access
              rules are designed so that only you can read them.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              We describe only what the product actually does. No certification claims and no
              security guarantees.
            </p>
          </div>
          <dl className="grid gap-4 sm:grid-cols-2">
            {[
              {
                t: "Your own account",
                d: "Purchases, deadlines and claims in the app belong to your account.",
              },
              {
                t: "Server-side AI",
                d: "AI requests run through a server-side function; your phone never holds AI provider keys.",
              },
              {
                t: "No selling of data",
                d: "Your purchase information is not sold to anyone.",
              },
              {
                t: "This website stays simple",
                d: "This site has no sign-in and does not store your purchase data.",
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

      {/* DOWNLOAD */}
      <section id="download" className="scroll-mt-24 py-16 md:py-24">
        <div className="container-page">
          <div className="relative overflow-hidden rounded-3xl bg-hero px-6 py-12 text-center text-hero-foreground md:px-12 md:py-16">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-40 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-hero-muted/60 blur-3xl"
            />
            <div className="relative">
              <p className="eyebrow text-primary">Get ProofPilot</p>
              <h2 className="mx-auto mt-3 max-w-2xl text-3xl text-hero-foreground md:text-4xl">
                Start protecting your next purchase.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-hero-foreground/80">
                ProofPilot is launching first on Android through Google Play. The download link will
                appear here as soon as the app is published.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <GooglePlayButton />
                <Link to="/support" className="btn-base btn-onhero">
                  Contact support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
