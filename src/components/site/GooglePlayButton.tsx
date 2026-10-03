import { GOOGLE_PLAY_URL } from "@/lib/links";

function PlayIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M4.2 2.4a1.4 1.4 0 0 0-.7 1.2v16.8c0 .5.3 1 .7 1.2l9.6-9.6-9.6-9.6Zm10.9 10.9 2.6 2.6-11 6.3 8.4-8.9Zm0-2.6L6.7 1.8l11 6.3-2.6 2.6Zm3.8-1.9 2.8 1.6c.9.5.9 1.8 0 2.3l-2.8 1.6-2.8-2.8 2.8-2.7Z" />
    </svg>
  );
}

/**
 * Google Play call to action. Until GOOGLE_PLAY_URL is set it renders a clearly
 * labelled "coming soon" badge instead of a dead link.
 */
export function GooglePlayButton({
  tone = "primary",
  className = "",
}: {
  tone?: "primary" | "onhero" | "secondary";
  className?: string;
}) {
  const toneClass =
    tone === "onhero" ? "btn-onhero" : tone === "secondary" ? "btn-secondary" : "btn-primary";

  if (GOOGLE_PLAY_URL) {
    return (
      <a
        href={GOOGLE_PLAY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`btn-base ${toneClass} gap-2 ${className}`}
      >
        <PlayIcon />
        Get it on Google Play
      </a>
    );
  }

  return (
    <span
      role="note"
      aria-label="ProofPilot is coming soon to Google Play"
      className={`btn-base ${toneClass} cursor-default gap-2 ${className}`}
    >
      <PlayIcon />
      Coming soon to Google Play
    </span>
  );
}
