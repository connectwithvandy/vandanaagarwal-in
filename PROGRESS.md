# Build & Deploy Progress — vandanaagarwal.in

_Last updated: 2026-06-27. Single consolidated log (v1 + v2 redesign + deploy)._

## Summary

One-page SDR-coaching site for Vandana Agarwal Nik. Astro (static), deployed on Vercel, custom
domain `vandanaagarwal.in` live with HTTPS, auto-deploying from GitHub on push to `main`. The site
is the **dark "Anima" theme with Lusion-grade motion** (the v2 redesign), not the original light v1.

## URLs & infra

- **Custom domain:** https://vandanaagarwal.in (live, HTTPS)
- **Vercel alias:** https://vandanaagarwal-in.vercel.app
- **Vercel project:** `vandanaagarwal-in`
- **GitHub:** `connectwithvandy/vandanaagarwal-in` (branch `main`) → auto-deploys to Vercel
- **DNS** (Google/Squarespace nameservers): A `@` → `76.76.21.21`; CNAME `www` → `cname.vercel-dns.com`.
  Google Workspace email records (MX, SPF, DKIM) left intact.

## Source layout

- `src/pages/index.astro` — page markup + data (services, audiences, steps, videos, results, testimonials, faqs) + the inline motion JS
- `src/styles/global.css` — all styles (theme, layout, motion layer, aurora)
- `public/assets/va-square.jpg` — nav avatar
- `public/assets/va-portrait.jpg` — Meet-me portrait
- `public/assets/banner.jpg` — full-bleed photo banner
- `public/favicon.svg` — favicon
- `extras/` — spare photos + raw source images + design reference (not used by the site)
- Build: `npm run build` → `dist/`

## Page structure (as built, pain-first)

Nav → Hero (Anima, pain headline, no photo) → Marquee → Who I help (4 pains) → Meet me ("Hi, I'm
Vandana", portrait) → Numbers that moved → Process (3 steps) → Photo banner → Reviews (6, 5/5) →
Featured (3 podcasts) → FAQ → Services (all 10, tabbed Sessions/Packages/Async, no prices) → Final CTA → Footer.

---

## Build log

### v1 — initial build (2026-06-02)
- Astro static project, all sections; purple brand palette; Fraunces + Inter + Caveat fonts.
- All 10 live Topmate services, tabbed Sessions (6) / Packages (3) / Async (1); **no prices**; every card → Topmate.
- Logo: round headshot + "Vandana Agarwal Nik". Hero recognition chip spelled out.
- 3 YouTube podcasts (lazy); 6 attributed 5-star testimonials; Topmate CTAs throughout; `mailto:coaching@vandanaagarwal.in`.
- Copy rules enforced: no em dashes, no "10+", "8+ years" consistent.
- Accessibility: one H1, alt text, skip link, focus styles, keyboard mobile menu. Responsive 375/768/1280.
- **Topmate cross-check:** all 10 services matched the live page; fixed Mentorship to "6 to 8 weeks".
- **Deployed** to Vercel project `vandanaagarwal-in`; custom domain + www attached; DNS + HTTPS verified (apex + www → 200).

### v2 redesign — dark Anima + Lusion motion (2026-06-26)
Driven by two references (lusion.co/about, animaapp.com) and peer feedback (lead with pain, name second, offer last).
- **Pain-first reorder**: services moved to the end; new pain-led hero ("Booking meetings shouldn't feel this hard.");
  "Hi, I'm Vandana" moved to the Meet-me section; duplicated name removed.
- **Dark Anima retheme**: charcoal `#181818` base, purple glow accent, serif headings, dark cards. The earlier
  light/white theme attempt was discarded (Anima's real page is dark).
- **Centered Anima hero**, no large hero photo (Anima-faithful + pain-first).
- **Professional AI headshots** replaced v1 selfies (edited via ImageMagick): `va-portrait.jpg` (Meet me),
  `va-square.jpg` (nav avatar); spares `va-about.jpg`, `va-candid.jpg`.
- **Lusion motion layer**: preloader, custom cursor, film grain, masked word reveal, magnetic buttons,
  parallax glows, 3D card tilt, button shine, marquee, scroll-progress bar. Reduced-motion safe.

#### Session 2 — speed, reliability, more motion (2026-06-26)
- **Root-cause fixes**: reveals switched to standalone `translate`/`scale`/`rotate` (no longer fought the hover
  `transform`); reliable IntersectionObserver; **service-tab bug fixed** (Packages/Async cards no longer stuck at
  `opacity:0`); **separate-script failsafe** + try/catch around masked-heading DOM surgery so an error can't blank the page.
- **Faster** preloader and reveal timings.
- **More motion**: masked word-rise on every heading; 3D `card3d` entrance on Services + Who-I-help cards (replays on tab switch).
- **Photo**: kept `va-portrait.jpg`, removed the border, reduced to max-width 410px, rebalanced framing.

#### Session 3 — robustness for the owner's browser (2026-06-26)
- **Removed the Lenis CDN smooth-scroll** (slow feel + hang risk); native scroll + CSS `scroll-margin-top`. Now self-contained except Google Fonts.
- **Simplified the preloader** to a spinner + "Loading" (owner asked for simple).
- **Reveals run even under `prefers-reduced-motion`** (gentle fade), so motion is visible even if macOS "Reduce Motion" is on.
- Killed stale preview servers; hard-refresh advised for stale cache.

### Session 4 — portrait merge, aurora, deploy + cleanup (2026-06-27)
- **Portrait merge**: the Meet-me studio headshot read as a pasted-on "poster" on the dark theme. Fixed the blend
  (not the file): edge-feathered radial mask so the grey backdrop dissolves into the page, a violet duotone wash
  (tint up top, melt-to-background below), and a breathing halo behind it.
- **Site-wide aurora background**: three large violet light-blobs slowly drift/breathe behind every section
  (sections made transparent so the light flows through the whole page). The headline "something running in the background".
- **Living card rings**: animated rotating gradient borders on the Who-I-help, Services, and Process cards (brighter on hover).
- Hero glow breathes; all new motion respects `prefers-reduced-motion`. Build verified; screenshots checked at 1280px.
- **Content audit** against the brief: 10 services (6/3/1) ✓, "8+ yrs" / no "10+" ✓, no em dashes in copy ✓,
  3 videos, 6 testimonials, correct email/banner ✓.
- **Repo cleanup**: consolidated `CLAUDE.md` + `CLAUDE-v2.md` → one `CLAUDE.md`, and `PROGRESS.md` + `PROGRESS-v2.md` →
  this single log. Moved spare photos, raw source images, and design references into `extras/` (kept, not deleted).
  Committed the previously-untracked `va-portrait.jpg` / `va-square.jpg` (the site needs them).
- **Deployed**: pushed to GitHub `main` → Vercel auto-deploy.

---

## How to update & redeploy

1. Edit `src/pages/index.astro` and/or `src/styles/global.css`.
2. `npm run build` (optional local sanity check; Vercel also builds).
3. Commit and **push to GitHub `main`** — the GitHub → Vercel integration auto-deploys to production.
   (CI: auto-deploy on push verified via the GitHub → Vercel integration.)

## Open / optional follow-ups

- Optional: `www` → apex 308 redirect for a single canonical URL.
- Optional: place spare `extras/va-candid.jpg` (JumpCloud working shot) in the Process or Results area.
- Roadmap (out of scope for now): pricing/packages pages, lead magnet + newsletter, dedicated
  /coaching /consulting /resources pages, larger case-study testimonial wall.
