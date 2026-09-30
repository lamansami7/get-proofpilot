# ProofPilot public website — audit (2026-09-30)

Repo: `lamansami7/get-proofpilot` (Lovable-managed TanStack Start site).
Auditor: Arena AI session on branch `arena/01a0f20b-get-proofpilot`.

This file records **actual** evidence only. Nothing here is marked verified
unless the check was actually run and passed in this session.

## 1. Checks run and results (this session)

| Check | Command | Result |
|---|---|---|
| Lint | `npm run lint` | Initially **18 errors / 6 warnings**. All 18 were `prettier/prettier` formatting errors introduced in the page rewrite; fixed with `npm run lint -- --fix` (formatting only — rewrapping lines, quote style; no semantic changes, verified by diff). Remaining: 6 `react-refresh/only-export-components` **warnings** in stock shadcn/ui files (`navigation-menu.tsx`, `sidebar.tsx`, `toggle.tsx` + 3 others) — inherent to shadcn/ui component files, not product defects. Lint now: **0 errors**. |
| TypeScript | `npx tsc --noEmit` | Passed (strict mode, exactOptionalPropertyTypes). |
| Production build | `npm run build` (nitro/Cloudflare) | Passed, `.output/` generated. |
| SSR route render | dev server, `curl` on each route | `/` `/auth` `/support` `/privacy` `/terms` → 200 with full server-rendered content; unknown route → 404. |
| Meta titles | `curl` + `<title>` | All five pages + 404 carry ProofPilot titles (root default fixed from Lovable template default "Lovable App" — see §3). |
| Unsupported-claim scan | `grep` on SSR output | **0** occurrences of: "30 / 7 / 1 day reminders", "reminders at 30", household sharing, fake dashboard counts ("12 protected"). Present (as required): "Illustration with example data — not real users or purchases", "does not submit claims for you", "review and correct", "not guaranteed", "not verified fact". |
| Accessible-structure basics | HTML inspection | `<html lang="en">`, skip-to-content link, `aria-label` on navs, `:focus-visible` styles in `styles.css`, labeled header/footer landmarks. (Not a full a11y audit — no headless browser available in this sandbox; see §6.) |
| Navigation | HTML inspection | Header/footer links resolve to existing routes; anchor targets `#how-it-works`, `#features`, `#security` exist on `/`. Sign-in buttons link to `/auth`. |

## 2. Website → backend state (section 15 of the tasking)

**The website is NOT connected to Supabase authentication.** There is no
Supabase client in this repo; `/auth` is an explicit placeholder that says web
sign-in is being connected. This is an honest state, not a broken one.

Wiring it requires a **human decision + production credentials** (do not point
the public site at the disposable staging project unless explicitly intended):

1. Decide the web-client origin strategy: the app repo's `.env.example` names
   `https://get-proofpilot.lovable.app` as the intended production web origin
   (`EXPO_PUBLIC_AUTH_REDIRECT_URL`), but that origin currently serves this
   marketing site, which has no auth callback route. Either (a) add a real
   Supabase auth UI + PKCE callback route to this site, or (b) serve the Expo
   web build on that origin, or (c) pick a different origin and point both
   `EXPO_PUBLIC_AUTH_REDIRECT_URL` and the Supabase redirect allowlist at it.
2. Supply the **public** Supabase project URL + **publishable/anon** key
   (never a service-role key) and the exact allowed-redirect configuration in
   Supabase Auth.

Until then, `/auth` must remain the honest placeholder. Do not advertise web
sign-in as available.

## 3. Fixes applied in this session

- `src/routes/__root.tsx` — root default `<head>` still carried the Lovable
  template defaults ("Lovable App" title, "Lovable Generated Project"
  description, `twitter:site @Lovable`), which leaked into the 404 page. Now
  ProofPilot branding.
- `README.md` — replaced the leftover Lovable task prompt ("Pixel Perfect
  Replica / Implement exactly the screenshot and nothing else") with an
  accurate project description. The Lovable sync block is preserved.
- `src/routes/{index,support,privacy,terms}.tsx` — prettier formatting fixes
  only (via `npm run lint -- --fix`).
- `vite.config.ts` — `server.allowedHosts`/`preview.allowedHosts: [".e2b.app"]`
  so the Arena sandbox preview host can load the dev/preview server.
  Dev/preview only; the production nitro/Cloudflare build is unaffected.
  Note: `vite preview` does not work with this template's nitro build (it
  expects `dist/server/server.js`, but the build outputs `.output/`); use
  `npm run dev` for a local preview.

## 4. CRITICAL: deployed site is STALE

As of 2026-09-30 ~11:30 UTC, `https://get-proofpilot.lovable.app` was still
serving the **pre-rewrite** copy (verified with a cache-busting query string):

- Home: "get reminders", "reminders at 30 days, 7 days and 1 day", a
  "30 / 7 / 1 day reminders" feature chip, fake dashboard counts
  ("12 protected", "3 Returns open", "8 Warranties"), household sharing
  ("or by household members you explicitly share with"), "Private document
  storage — Files are stored in a private bucket", and "Account deletion — You
  can delete your account and its data from Settings".
- Support: "Files are kept in private storage tied to your account",
  "Household members can only see purchases you have explicitly shared",
  "Open Settings and choose to delete your account".

The GitHub repo (commit `6cd818d` "Rewrote public pages & routes", pushed
2026-09-30 00:56 UTC) contains the **corrected** copy; the deployment has not
picked it up. **Human action:** open the Lovable project, confirm the deploy
status for the connected branch, force a republish if needed, then re-verify
the live Home/Support/Privacy/Terms pages against this audit.

## 5. Legal placeholders (kept intentionally — human input required)

- Privacy: receipt storage location ("[Operator input required: confirm
  storage.]"), service providers + hosting region, retention/backup handling.
- Terms: operator legal name/address, governing law, dispute resolution.
- Both pages already state clearly that they have not been reviewed by a
  lawyer. Do not mark legal review complete without a human review.
- `SUPPORT_EMAIL = support.proofpilot@gmail.com` — operator must confirm
  mailbox ownership and the reply workflow before launch.

## 6. Not verifiable in this sandbox (no headless browser / no network to some hosts)

Browser-level QA (console errors, keyboard tab order in a live browser,
responsive screenshots at 320/768/1280, axe scan) could not be run here:
Chromium/Deno/Supabase-CLI download hosts are blocked from this sandbox. The
production build passes and SSR output is verified as above, but browser-level
verification should be repeated in an environment with a browser (e.g. a
manual pass on the deployed site after republish, or CI with Playwright).
