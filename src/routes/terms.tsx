import { createFileRoute, Link } from "@tanstack/react-router";
import { DocPage, DocSection } from "@/components/site/SiteLayout";
import { SUPPORT_EMAIL } from "@/lib/links";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — ProofPilot" },
      {
        name: "description",
        content:
          "The terms for using the ProofPilot mobile app and this website: your account, your content, AI limitations and acceptable use.",
      },
      { property: "og:title", content: "Terms of Service — ProofPilot" },
      {
        property: "og:description",
        content: "Plain-language terms for the ProofPilot mobile app and website.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Terms,
});

const linkClass =
  "font-bold text-accent-foreground underline decoration-primary decoration-2 underline-offset-4";

function Terms() {
  return (
    <DocPage
      eyebrow="Legal"
      title="Terms of Service"
      intro="These terms cover the ProofPilot mobile app and this informational website. They are written in plain language and make no promises the product cannot keep."
      updated="These terms have not yet been reviewed by a lawyer."
    >
      <DocSection title="The website">
        <p>
          This website provides information about ProofPilot. You can browse it without an account.
          Content is provided for general information and may change.
        </p>
      </DocSection>

      <DocSection title="Your app account">
        <p>
          You need an account to use the ProofPilot app. You are responsible for keeping your
          password safe and for activity under your account. Use an email address you can receive
          mail at, because verification and password resets depend on it.
        </p>
      </DocSection>

      <DocSection title="Your content">
        <p>
          The purchases, receipts, notes and claims you add remain yours. You give us only the
          permission needed to store, display and process them so the app can work for you. Do not
          upload content you do not have the right to store.
        </p>
      </DocSection>

      <DocSection title="Acceptable use">
        <ul>
          <li>Do not attempt to access another person&apos;s account or data.</li>
          <li>Do not probe, overload or interfere with the service or its infrastructure.</li>
          <li>Do not upload malware or unlawful material.</li>
          <li>Do not use ProofPilot to create misleading or fraudulent claims.</li>
        </ul>
        <p>We may suspend accounts that do these things.</p>
      </DocSection>

      <DocSection title="What ProofPilot is not">
        <p>
          ProofPilot is an organizing tool. It does not provide legal, financial or consumer-rights
          advice. It is not a party to your purchase, it does not submit claims for you, and it
          cannot make a merchant, manufacturer or insurer accept a return or claim. The merchant or
          manufacturer&apos;s own terms decide your actual rights, and you remain responsible for
          acting in time.
        </p>
      </DocSection>

      <DocSection title="AI assistance">
        <p>
          AI features produce suggestions from the information you provide. They can be incomplete
          or wrong and do not verify facts. Do not treat AI output as a guarantee or professional
          advice. Usage limits may apply.
        </p>
      </DocSection>

      <DocSection title="Availability and changes">
        <p>
          We work to keep ProofPilot available and reliable, but we do not promise uninterrupted
          service. Features may be added, changed or removed.
        </p>
      </DocSection>

      <DocSection title="Ending your use">
        <p>
          You can stop using ProofPilot at any time. To delete your account and its data, contact
          support from the address on your account. Deletion is permanent. We may end access to
          accounts that breach these terms.
        </p>
      </DocSection>

      <DocSection title="Liability">
        <p>
          ProofPilot is provided as-is. To the extent the law allows, we are not liable for losses
          arising from a missed deadline, a rejected claim, lost or inaccurate data, or reliance on
          AI output. Nothing here removes rights you have that cannot legally be waived.
        </p>
      </DocSection>

      <DocSection title="Privacy">
        <p>
          How we handle information is described in our{" "}
          <Link to="/privacy" className={linkClass}>
            Privacy Policy
          </Link>
          .
        </p>
      </DocSection>

      <DocSection title="Contact">
        <p>
          Questions about these terms?{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`} className={linkClass}>
            {SUPPORT_EMAIL}
          </a>
        </p>
      </DocSection>
    </DocPage>
  );
}
