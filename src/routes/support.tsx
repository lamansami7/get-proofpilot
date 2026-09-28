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
          "Get help with your ProofPilot account, sign-in problems, purchases, documents and account deletion.",
      },
      { property: "og:title", content: "Support — ProofPilot" },
      {
        property: "og:description",
        content: "Account, sign-in, purchase and document help for ProofPilot, plus how to reach us.",
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
    q: "What documents can I store?",
    a: "Receipts, invoices, warranty documents, manuals and other purchase-related files, up to 20 MB each. Files are kept in private storage tied to your account.",
  },
  {
    q: "Are my documents visible to anyone else?",
    a: "No. Documents are scoped to your account, and database access rules prevent other accounts from reading them. Household members can only see purchases you have explicitly shared with a household.",
  },
  {
    q: "How do I delete my account?",
    a: "Open Settings and choose to delete your account. Deletion is permanent: your purchases, documents, deadlines and claims are removed and cannot be restored.",
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
          . Please include the email address on your account and, if it helps, the name of the
          purchase involved. Never send us your password.
        </p>
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
            <Link to="/privacy" className="font-bold text-accent-foreground underline underline-offset-4">
              Privacy Policy
            </Link>{" "}
            — what we collect and how it is handled.
          </li>
          <li>
            <Link to="/terms" className="font-bold text-accent-foreground underline underline-offset-4">
              Terms of Service
            </Link>{" "}
            — the rules for using ProofPilot.
          </li>
        </ul>
      </DocSection>
    </DocPage>
  );
}
