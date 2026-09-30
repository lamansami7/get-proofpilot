import { createFileRoute, Link } from "@tanstack/react-router";
import { DocPage, DocSection } from "@/components/site/SiteLayout";
import { SUPPORT_EMAIL } from "@/components/site/SiteFooter";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — ProofPilot" },
      {
        name: "description",
        content:
          "The rules for using ProofPilot: your account, your content, acceptable use, AI limitations and how the service may change.",
      },
      { property: "og:title", content: "Terms of Service — ProofPilot" },
      {
        property: "og:description",
        content: "Your account, your content, acceptable use and the limits of ProofPilot's service.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Terms,
});

function Terms() {
  return (
    <DocPage
      eyebrow="Legal"
      title="Terms of Service"
      intro="These terms describe how ProofPilot may be used and what you can expect from it. They are written in plain language and make no guarantees the product cannot keep."
      updated="This document has not been reviewed by a lawyer and requires legal review before it should be relied on as a contract."
    >
      <DocSection title="Your account">
        <p>
          You need an account to use ProofPilot. One account works across the website and the mobile
          app. You are responsible for keeping your password safe and for activity under your
          account. Please give an email address you can actually receive mail at — verification and
          password resets depend on it.
        </p>
      </DocSection>

      <DocSection title="Your content">
        <p>
          The purchases, documents, notes and claims you add remain yours. You give us only the
          permission needed to store, display and process them so the product can work for you. Do
          not upload content you do not have the right to store.
        </p>
      </DocSection>

      <DocSection title="Acceptable use">
        <ul>
          <li>Do not attempt to access another person&apos;s account or data.</li>
          <li>Do not probe, overload or interfere with the service or its infrastructure.</li>
          <li>Do not upload malware or unlawful material.</li>
          <li>Do not use the assistant to generate misleading or fraudulent claims.</li>
        </ul>
        <p>We may suspend accounts that do these things.</p>
      </DocSection>

      <DocSection title="What ProofPilot is not">
        <p>
          ProofPilot is an organizing tool. It does not provide legal, financial or consumer-rights
          advice, it is not a party to your purchase, and it cannot make a merchant, manufacturer or
          insurer accept a return or a claim, and it does not submit claims for you. Deadline tracking is a convenience: the merchant or
          manufacturer&apos;s own terms decide your actual rights, and you remain responsible for
          acting in time.
        </p>
      </DocSection>

      <DocSection title="AI assistance">
        <p>
          The assistant produces text from the purchase information in your account. It can be
          incomplete or wrong, and it does not verify facts. Do not treat its output as a guarantee
          or as professional advice. Usage limits may apply.
        </p>
      </DocSection>

      <DocSection title="Availability and changes">
        <p>
          We work to keep ProofPilot available and reliable, but we do not promise uninterrupted
          service. Features may be added, changed or removed. If a change materially affects how you
          use the product, we will try to make that clear in the app.
        </p>
      </DocSection>

      <DocSection title="Ending your use">
        <p>
          You can stop using ProofPilot at any time. To delete your account, contact support;
          self-service deletion is not yet available. Deletion is permanent. We may end access to
          accounts that breach these terms.
        </p>
      </DocSection>

      <DocSection title="Operator and governing law">
        <p>
          [Legal input required: legal name and address of the operator, governing law, and dispute
          resolution.] These terms require legal review before launch.
        </p>
      </DocSection>

      <DocSection title="Liability">
        <p>
          ProofPilot is provided as-is. To the extent the law allows, we are not liable for losses
          arising from a missed deadline, a rejected claim, lost or inaccurate data, or reliance on
          assistant output. Nothing here removes rights you have that cannot legally be waived.
        </p>
      </DocSection>

      <DocSection title="Privacy">
        <p>
          How we handle your information is described in our{" "}
          <Link
            to="/privacy"
            className="font-bold text-accent-foreground underline decoration-primary decoration-2 underline-offset-4"
          >
            Privacy Policy
          </Link>
          .
        </p>
      </DocSection>

      <DocSection title="Contact">
        <p>
          Questions about these terms?{" "}
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="font-bold text-accent-foreground underline decoration-primary decoration-2 underline-offset-4"
          >
            {SUPPORT_EMAIL}
          </a>
        </p>
      </DocSection>
    </DocPage>
  );
}
