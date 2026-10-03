import { createFileRoute } from "@tanstack/react-router";
import { DocPage, DocSection } from "@/components/site/SiteLayout";
import { SUPPORT_EMAIL } from "@/lib/links";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — ProofPilot" },
      {
        name: "description",
        content:
          "How the ProofPilot website and the ProofPilot mobile app handle information, explained in plain language.",
      },
      { property: "og:title", content: "Privacy Policy — ProofPilot" },
      {
        property: "og:description",
        content:
          "What the ProofPilot website and mobile app collect, and what you can do about it.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Privacy,
});

const linkClass =
  "font-bold text-accent-foreground underline decoration-primary decoration-2 underline-offset-4";

function Privacy() {
  return (
    <DocPage
      eyebrow="Legal"
      title="Privacy Policy"
      intro="This policy covers two things: this public website, and the ProofPilot mobile app. They are separate. The website only explains ProofPilot; the app is where your purchase information lives."
      updated="Plain-language description of current practices. This policy has not yet been reviewed by a lawyer."
    >
      <DocSection title="The ProofPilot website">
        <p>
          This website is informational. It has no sign-in, no forms that store your details, and it
          does not collect or store purchase records, receipts or any other app data.
        </p>
        <ul>
          <li>
            Like most websites, the hosting provider may process standard technical information
            (such as IP address, browser type and the pages requested) to deliver and protect the
            site.
          </li>
          <li>The website does not use advertising trackers.</li>
          <li>
            If you email us, we receive your email address and whatever you choose to include in
            your message, and use it only to reply.
          </li>
        </ul>
      </DocSection>

      <DocSection title="The ProofPilot mobile app">
        <p>
          When you use the app, it stores what you enter or capture, plus what it needs to run your
          account:
        </p>
        <ul>
          <li>
            <strong>Account information</strong> — your email address and sign-in details.
          </li>
          <li>
            <strong>Purchase information</strong> — merchant, product, purchase date, price, serial
            and model numbers, SKU and your notes.
          </li>
          <li>
            <strong>Receipt images</strong> — photos or files of receipts you capture so purchase
            details can be suggested.
          </li>
          <li>
            <strong>Deadlines and claims</strong> — return windows, warranty dates and claim details
            you record.
          </li>
          <li>
            <strong>Assistant messages</strong> — what you send to the AI assistant and its replies.
          </li>
        </ul>
        <p>
          The app does not ask for payment card numbers, government identifiers or contact lists.
        </p>
      </DocSection>

      <DocSection title="AI processing in the app">
        <p>
          When you use AI features — such as suggesting details from a receipt or asking the
          assistant a question — the relevant content is sent to a server-side function, which calls
          an AI provider to generate a response. AI output can be wrong or incomplete; check it
          before relying on it.
        </p>
      </DocSection>

      <DocSection title="Sharing">
        <p>
          We do not sell your information. It is shared only with the service providers needed to
          run the website and the app (such as hosting, database and AI providers), and where we are
          legally required to do so.
        </p>
      </DocSection>

      <DocSection title="Security">
        <p>
          App records are tied to the account that created them, with access rules designed so that
          only the owner can read them. No system is perfectly secure, and we do not claim any
          certification or compliance standard.
        </p>
      </DocSection>

      <DocSection title="Your choices">
        <p>
          You can view, edit and delete your purchases, deadlines and claims in the app. To request
          a copy of your information or deletion of your account and its data, email us from the
          address on your account.
        </p>
      </DocSection>

      <DocSection title="Children">
        <p>
          ProofPilot is not intended for children. Please do not create an account if you are under
          the age required for consent where you live.
        </p>
      </DocSection>

      <DocSection title="Changes">
        <p>
          If our practices change, we will update this page. We will not describe practices here
          that the product does not actually follow.
        </p>
      </DocSection>

      <DocSection title="Contact">
        <p>
          Questions about privacy?{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`} className={linkClass}>
            {SUPPORT_EMAIL}
          </a>
        </p>
      </DocSection>
    </DocPage>
  );
}
