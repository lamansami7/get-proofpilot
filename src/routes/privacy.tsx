import { createFileRoute } from "@tanstack/react-router";
import { DocPage, DocSection } from "@/components/site/SiteLayout";
import { SUPPORT_EMAIL } from "@/components/site/SiteFooter";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — ProofPilot" },
      {
        name: "description",
        content:
          "How ProofPilot handles your account information, purchase records, documents, deadlines, claims and AI requests.",
      },
      { property: "og:title", content: "Privacy Policy — ProofPilot" },
      {
        property: "og:description",
        content:
          "What ProofPilot collects, how it is stored and how to delete your account and data.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <DocPage
      eyebrow="Legal"
      title="Privacy Policy"
      intro="This policy describes what ProofPilot stores, where it is stored and what you can do about it. It describes the product as built. Where a detail is not yet established, we say so rather than inventing one."
      updated="This document has not been reviewed by a lawyer. It is a plain description of the product's data handling."
    >
      <DocSection title="Information we collect">
        <p>
          ProofPilot stores only what you enter or upload, plus what is needed to run an account:
        </p>
        <ul>
          <li>
            <strong>Account information</strong> — your email address and authentication details,
            held by our authentication provider, plus an optional display name.
          </li>
          <li>
            <strong>Purchase information</strong> — merchant, product name, category, purchase date,
            price and currency, serial number, model number, SKU and your notes.
          </li>
          <li>
            <strong>Receipt images</strong> — photos or files of receipts you capture so purchase
            details can be suggested. Whether these are kept only on your device or also stored
            online depends on the app version. [Operator input required: confirm storage.]
          </li>
          <li>
            <strong>Deadlines and warranties</strong> — return windows, warranty dates and deadline
            status.
          </li>
          <li>
            <strong>Claims</strong> — the claim details you record against a purchase.
          </li>
          <li>
            <strong>Assistant messages</strong> — the text you send to the AI assistant and its
            replies.
          </li>
        </ul>
        <p>
          ProofPilot does not ask for payment card numbers, government identifiers or contact lists.
        </p>
      </DocSection>

      <DocSection title="How your information is processed">
        <p>
          ProofPilot uses a hosted backend for authentication and database storage. AI requests run
          in server-side functions rather than directly from your browser or phone. [Operator/legal
          input required: list of service providers and hosting region.]
        </p>
      </DocSection>

      <DocSection title="AI processing">
        <p>
          When you use AI features — such as suggesting details from a receipt or asking the
          assistant a question — the relevant content is sent to a server-side function, which calls
          an AI provider to generate a response. Your device never holds AI provider credentials. AI
          output can be wrong or incomplete and should be checked before you rely on it.
        </p>
      </DocSection>

      <DocSection title="Storage and security">
        <p>
          Every purchase, deadline and claim is tied to the account that created it. Access rules
          are enforced in the database itself through row-level security, so records can only be
          read by their owner.
        </p>
        <p>
          No system is perfectly secure. We do not claim any certification, audit or compliance
          standard.
        </p>
      </DocSection>

      <DocSection title="Sharing">
        <p>
          We do not sell your information. It is shared only with the infrastructure and AI
          providers needed to operate the features described above, and where we are legally
          required to do so.
        </p>
      </DocSection>

      <DocSection title="Retention and deletion">
        <p>
          Your records are kept while your account exists. Self-service account deletion is not yet
          available; to request deletion, email us from the address on your account and we will
          handle the request. [Operator/legal input required: retention periods and backup
          handling.]
        </p>
      </DocSection>

      <DocSection title="Your choices">
        <p>
          You can view, edit and delete your purchases, deadlines and claims in the app. If you
          would like a copy of your information, account deletion, or have a request not covered
          here, email us.
        </p>
      </DocSection>

      <DocSection title="Children's privacy">
        <p>
          ProofPilot is not intended for children. Please do not create an account if you are under
          the age required for consent where you live.
        </p>
      </DocSection>

      <DocSection title="Changes to this policy">
        <p>
          If the product changes in a way that affects this policy, we will update this page. We
          will not describe practices here that the product does not actually follow.
        </p>
      </DocSection>

      <DocSection title="Contact">
        <p>
          Questions about privacy?{" "}
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
