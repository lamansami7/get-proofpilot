import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SUPPORT_EMAIL } from "@/components/site/SiteFooter";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Sign in to ProofPilot" },
      {
        name: "description",
        content:
          "Sign in to ProofPilot on the web with the same account you use in the ProofPilot mobile app.",
      },
      { property: "og:title", content: "Sign in to ProofPilot" },
      {
        property: "og:description",
        content: "One ProofPilot account for the web and the mobile app.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AuthPlaceholder;
});

function AuthPlaceholder() {
  return (
    <SiteLayout>
      <div className="container-narrow py-20 text-center md:py-28">
        <p className="eyebrow">Accounts</p>
        <h1 className="mt-3 text-3xl md:text-4xl">Web sign-in is being connected</h1>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-ink-secondary">
          ProofPilot uses one account for the web and the mobile app. Web sign-up, sign-in, email
          verification and password reset go live here as soon as the ProofPilot backend is
          connected to this site — nothing here creates a second account system.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/" className="btn-base btn-secondary">
            Back to home
          </Link>
          <a href={`mailto:${SUPPORT_EMAIL}`} className="btn-base btn-primary">
            Email support
          </a>
        </div>
      </div>
    </SiteLayout>
  );
}
