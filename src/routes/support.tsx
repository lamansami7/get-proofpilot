import { createFileRoute, Link } from "@tanstack/react-router";
import { DocPage, DocSection } from "@/components/site/SiteLayout";
import { SUPPORT_EMAIL } from "@/components/site/SiteFooter";

export const Route = createFileRoute("/support")({
  head: () => ({
    meta: [
      { title: "Support — ProofPilot" },
      {
        name: "description",
        content:
          "Get help with your ProofPilot account, sign-in problems, purchases, receipts and account deletion requests.",
      },
      { property: "og:title", content: "Support — ProofPilot" },
      {
        property: "og:description",
        content:
          "Account, sign-in, purchase and document help for ProofPilot, plus how to reach us.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Support,
});

const faqs = [
  {
    q: "Do I need a separate account for the website and the app?",
    a: "No. ProofPilot uses one account. Sign up on either the website or the mobile app and the same email and password work in both.",
  },
  {
    q: "I signed up but never received the verification email.",
    a: "Check your spam folder first, and make sure the address was typed correctly. If it still has not arrived, email us and we will look into it.",
  },
  {
    q: "I forgot my password.",
    a: "Use the forgot-password link on the sign-in screen. You will receive a reset link by email; the link expires, so request a new one if it no longer works.",
  },
  {
    q: "Which purchase details should I record?",
    a: "Merchant, product name, purchase date and price cover most situations. Serial and model numbers, the SKU and your receipt make returns, warranties and claims much easier.",
  },
  {
    q: "Does ProofPilot read my receipts automatically?",
    a: "ProofPilot can use AI to suggest purchase details from a receipt. Suggestions can be wrong or incomplete, so always review them before saving. You can also enter details by hand.",
  },
  {
    q: "Are my records visible to anyone else?",
    a: "No. Records are scoped to your account, and database access rules prevent other accounts from reading them.",
  },
  {
    q: "How do I delete my account?",
    a: 'Self-service account deletion is not yet available. Email us from the address on your account with the subject "Account deletion request" and we will confirm your identity and handle the request. Deletion is permanent.',
  },
  {
    q: "Does ProofPilot send reminders or submit claims for me?",
    a: "Not at this time. ProofPilot helps you see deadlines and prepare claims; you remain responsible for acting in time and for submitting claims to the merchant or manufacturer.",
  },
  {
    q: "Can I trust the AI assistant's answers?",
    a: "Treat them as assistance, not as verified fact. The assistant works from the purchase information in your account and can be wrong, so check anything that matters before you rely on it.",
  },
];

function Support() {
  return (
    <DocPage
      eyebrow="Support"
      title="We're here to help"
      intro="Answers to the questions we hear most, and a direct line to us when you need one. There is no ticketing system — every message goes to our support inbox and a person replies."
    >
      <DocSection title="Contact us">
        <p>
          Email{" "}
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="font-bold text-accent-foreground underline decoration-primary decoration-2 underline-offset-4"
          >
            {SUPPORT_EMAIL}
          </a>
          . Please include:
        </p>
        <ul>
          <li>the email address on your ProofPilot account</li>
          <li>whether you use the website, iPhone or Android app, and the app version if known</li>
          <li>what you were trying to do and what happened instead</li>
          <li>the purchase involved, and a screenshot if it helps</li>
        </ul>
        <p>Never send us your password, verification codes or payment card details.</p>
      </DocSection>

      <DocSection title="Common questions">
        <dl className="space-y-3">
          {faqs.map((item) => (
            <div key={item.q} className="surface-card p-5">
              <dt className="text-[0.9375rem] font-extrabold tracking-[-0.02em] text-foreground">
                {item.q}
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-ink-secondary">{item.a}</dd>
            </div>
          ))}
        </dl>
      </DocSection>

      <DocSection title="More information">
        <ul>
          <li>
            <Link
              to="/privacy"
              className="font-bold text-accent-foreground underline underline-offset-4"
            >
              Privacy Policy
            </Link>{" "}
            — what we collect and how it is handled.
          </li>
          <li>
            <Link
              to="/terms"
              className="font-bold text-accent-foreground underline underline-offset-4"
            >
              Terms of Service
            </Link>{" "}
            — the rules for using ProofPilot.
          </li>
        </ul>
      </DocSection>
    </DocPage>
  );
}
