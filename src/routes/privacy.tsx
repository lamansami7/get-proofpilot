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
        content: "What ProofPilot collects, how it is stored and how to delete your account and data.",
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
        <p>ProofPilot stores only what you enter or upload, plus what is needed to run an account:</p>
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
            <strong>Documents</strong> — receipts, invoices, warranty documents, manuals and other
            files you upload, along with their file name, type and size.
          </li>
          <li>
            <strong>Deadlines and warranties</strong> — return windows, warranty dates, reminder
            preferences and deadline status.
          </li>
          <li>
            <strong>Claims and service records</strong> — the claim details and service history you
            record against a purchase.
          </li>
          <li>
            <strong>Assistant conversations</strong> — the messages you exchange with the AI
            assistant, stored against your account.
          </li>
          <li>
            <strong>Notifications</strong> — reminders generated from your deadlines.
          </li>
        </ul>
        <p>
          ProofPilot does not ask for payment card numbers, government identifiers or contact lists.
        </p>
      </DocSection>

      <DocSection title="How your information is processed">
        <p>
          ProofPilot runs on Supabase for authentication, database storage and file storage. Your
          data is held in that infrastructure on our behalf. Privileged operations — AI requests and
          account deletion — run in server-side functions rather than in your browser or on your
          phone.
        </p>
      </DocSection>

      <DocSection title="AI processing">
        <p>
          When you use the assistant, the relevant purchase information from your account and your
          message are sent to our server-side AI function, which calls an AI provider to generate a
          reply. Your browser never holds AI provider credentials. Assistant output is assistance,
          not verified fact, and should not be relied on for legal, warranty or financial decisions
          without checking the underlying documents.
        </p>
      </DocSection>

      <DocSection title="Storage and security">
        <p>
          Every purchase, document, deadline and claim is tied to the account that created it.
          Access rules are enforced in the database itself through row-level security, so records
          can only be read by their owner — or by members of a household you have explicitly shared
          a purchase with. Uploaded files are kept in private storage and are not publicly readable.
        </p>
        <p>
          No system is perfectly secure. We do not claim any certification, audit or compliance
          standard, and we do not describe our encryption as anything beyond what our infrastructure
          provides.
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
          Your records are kept while your account exists. You can delete your account from
          Settings; that request is handled by a server-side deletion function which removes your
          account and the data associated with it. Deletion is permanent and cannot be undone.
          Backups and provider-side logs may persist for a short period on our infrastructure
          provider&apos;s own schedule, which we do not control.
        </p>
      </DocSection>

      <DocSection title="Your choices">
        <p>
          You can view, edit and delete your purchases, documents, deadlines and claims at any time
          from the app, and delete your whole account from Settings. If you would like a copy of
          your information or have a request we have not covered here, email us and we will respond.
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
