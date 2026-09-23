# CLAUDE.md — vandanaagarwal.in build brief

The single source of intent for Vandana Agarwal Nik's personal website. Read this first, then
`About-Vandana-and-Services.md` for all content, facts, services, assets, and links. Build only
what is specified here. Ask before adding scope.

> This brief was consolidated from the original v1 spec and the v2 redesign notes into one
> document. Where the as-built site evolved past the original spec, this file describes **what is
> actually built** (a dark "Anima" theme with Lusion-grade motion), not the discarded light-theme v1.

---

## Status: BUILT, DEPLOYED & LIVE

Live with HTTPS at **https://vandanaagarwal.in**, deployed on Vercel, auto-deploying from GitHub
(`connectwithvandy/vandanaagarwal-in`, branch `main`). See `PROGRESS.md` for the full build/deploy/DNS record.

---

## How to build (read before you write any code)

This is a hard rule. Do not skip it.

1. **Ask sharp questions first.** Before building anything new, ask Vandy specific questions on the
   real forks (look and feel, must-have vs nice-to-have, how she updates/deploys, anything ambiguous).
   Make them count. No vague questions.
2. **Show your plan, then stop.** Lay out the approach, file structure, sections, and build order. Wait.
3. **Do not build until she approves.** If she changes something, update the plan and re-confirm.
4. **Build in reviewable steps** so she can see progress and redirect early.

---

## Tech stack & deploy (as built)

- **Astro, static output, no client framework.** Source is `src/pages/index.astro` (the one-page site,
  markup + data), `src/pages/resources.astro` (the `/resources` page) backed by `src/data/visuals.js`
  (the SDR Playbook Visuals list + each one's `substackUrl`), and `src/styles/global.css` (all styles,
  shared by both pages). Vanilla JS in each page handles the mobile menu, service tabs, sticky nav,
  scroll reveal, custom cursor, and motion. Do not add React/Next/Tailwind.
  - **`/resources` routes everything to Substack** (owner decision: keep the site light, no article
    reading on-site). It has two compact numbered-list cards: the **SDR Field Guide · APAC Edition**
    (10 posts) and **SDR Playbook Visuals** (8 posts, drawn from the Drive infographics). Every row
    links out to its Substack post (`src/data/visuals.js` `substackUrl`; empty falls back to the
    Substack homepage until that post is published). There is no on-site article/breakdown page
    (an earlier `/resources/sdr-playbook-visuals` bundle page was removed). Infographics in
    `public/assets/resources/*.webp` are the media for the Substack posts, not shown on the site.
- **Build** `npm run build` → `dist/`. **Preview** `npm run preview`. **Dev** `npm run dev`.
- **Hosting: Vercel**, project `vandanaagarwal-in`. Auto-deploys on push to GitHub `main`
  (GitHub → Vercel integration). Custom domain `vandanaagarwal.in` (apex primary, www attached),
  DNS at Google/Squarespace nameservers with an **A record to `76.76.21.21`**. See the `vercel-deploy` memory.
- Self-contained except Google Fonts. No backend, auth, or analytics unless Vandy asks.
- **SEO + AI discoverability (GEO) is a standing priority** (owner wants AI answer engines and Google to
  cite her). Keep these in sync when content changes: JSON-LD `@graph` in `index.astro` (Person, WebSite,
  ProfessionalService, FAQPage), `public/llms.txt`, `public/robots.txt` (explicitly allows AI crawlers:
  GPTBot, ClaudeBot, PerplexityBot, Google-Extended, etc.), and `public/sitemap.xml`. Plus the usual head
  tags (title, meta description, canonical, Open Graph, Twitter card, absolute `og:image`).

---

## 1) The job

A clean, warm, credible **one-page** site that positions Vandana as a global SDR coach with
APAC-built execution, and routes every visitor to book on Topmate.

All copy, facts, services, and links live in `About-Vandana-and-Services.md`. Pull from that file.
Do not invent details.

### About Vandana (for the About/Meet-me section and overall tone)

Vandana Agarwal Nik is a Sales Development Leader and SDR coach who builds and scales BDR teams from
zero to pipeline across APAC, EMEA, and AMER, for SaaS, identity, and cybersecurity companies. She
has done it from an early-stage startup (ClickPost) through to scale (Rubrik, JumpCloud). She is the
Founder of SDR Leaders of APAC (250+ members), was named to the 100 Powerful Women in Sales (2025),
and is a GrowthX Fellow.

Why she coaches: to give the next generation of SDRs the support she did not have early in her own
career. That pay-it-forward motive is the heart of the brand and should come through warmly, without overhyping.

What makes her current: she is AI-forward, coaching on real tools (Gong, Hyperbound, Orum, 6sense,
Salesforce), so she coaches SDRs to win in an AI-shaped sales world, not around it.

Keep all private life out (family, health, finances). This is a public coaching site.

---

## 2) Page structure (one page, pain-first flow as built)

The flow leads with the reader's pain, introduces Vandana second, builds trust with results and
process, then presents the offer, and closes with social proof and FAQ (do not revert to name-first).
Note: the offer (Services) was moved up to sit right after the trust-build (Numbers/Process/banner)
and before Reviews/FAQ at owner request, so it is no longer dead last.

1. **Header / Nav.** Round avatar (`va-square.jpg`) + "Vandana Agarwal Nik". Links: Who I help, Meet
   me, Services, Reviews, FAQ, Resources (Resources last, as it is the only link to a separate page). Primary button: Book on Topmate. Sticky, reacts on scroll, mobile menu.
2. **Hero (Anima style).** Dark, centered, big serif headline with an accent-gradient highlight word
   ("Booking meetings shouldn't feel this *hard*."), centered pain-led subhead, two CTAs, three proof
   chips (8+ yrs; APAC · EMEA · AMER; 100 Powerful Women in Sales). Large purple glow blooming from the
   bottom. **No large photo in the hero** (Anima-faithful + keeps the pain-first promise).
3. **Marquee ribbon.** Scrolling brand phrases.
4. **Who I help.** Four audience cards, each led with the pain then the outcome.
5. **Meet me (intro).** Where "Hi, I'm Vandana 👋" lives. First-person, pay-it-forward story, AI-forward
   note, credibility bullets, two CTAs. Portrait (`va-portrait.jpg`), edge-feathered into the page.
   (The handwritten "Vandana" signature card was removed at owner request as repetitive.)
6. **Numbers that moved (results band).** 3–4 hard results from the proof bank (57%→91% SAL, 0%→105%
   ramp, 17%→49% SQL-to-S1, 2x SQLs).
7. **Process.** Three steps that fit every offer: Understand, Build, Put it to work.
8. **Photo banner.** Full-bleed dark LinkedIn banner, `public/assets/banner.jpg`, lazy-loaded.
   (Do NOT use the old `linkedin BG.jpeg` — it says "10+ years", which breaks the writing rule.)
9. **Services ("Work with me").** Exactly four offers in a two-by-two grid, names and durations
    matching the live Topmate listings: Mentorship Discovery Call (15 min, `/69117`), 1:1 Mentorship
    Program (6 to 8 weeks, package `/2132282`), Build Your First AI-Powered SDR Workflow (60 min,
    `/69118`), and Build Your SDR Function & GTM Blueprint (60 min, `/2131945`). Each card has a title,
    format/duration, and description. Prices live on Topmate only; no offer displays a price on the
    website. The discovery and mentorship cards both route to the discovery-call booking page (owner
    choice: mentorship starts with a discovery call). The AI and Blueprint cards deep-link to their own
    booking pages. Topmate is the source of truth: if a name or duration changes there, update the site. The Blueprint call also has a follow-on Topmate package, "SDR Engine Build, Founders and Leaders" (`/2132024`), built from that call; the founder card mentions it only as "continue across a series of working sessions" (no session count, no price, no separate card). The package covers guidance, planning, and review, not hands-on implementation, so never promise hands-on building on the site. Audience cards
    use inline lavender **stroke line-icons** (no emoji).
10. **Reviews.** Six real, attributed 5-star testimonials from her Topmate page, "5/5 on Topmate".
11. **Featured.** Exactly three embedded YouTube video podcasts, lazy-loaded, with real captions.
12. **FAQ.** Objection-led (worth it at my stage, am I ready, will you get my market outside APAC) plus
    how to pick a session. Pure logistics like "how to book" were dropped as they belong in a booking email.
13. **Final CTA.** Dark band, strong close. Eyebrow "In your corner". Primary Book on Topmate + a
    secondary "Connect on LinkedIn" (low-commitment), with the email on a quiet line below.
14. **Footer.** Nav links, LinkedIn, SDR Leaders of APAC, copyright.

---

## 3) Design direction (as built)

- **Theme = "Anima" dark.** Charcoal base `#181818`, near-white text `#F5F3F8`, vivid purple glow
  accent (`--violet #7C3AED`, highlight `#9B6BFF`, lavender `#B9A3FF`). Fonts: **Fraunces** (display
  headings), **Inter** (body), **Caveat** (handwritten "Hi, I'm Vandana" + signature). Soft rounded
  cards with subtle borders. The earlier warm light-lavender theme was discarded — it fought both the
  photos and the references.
- **Motion = "Lusion" grade**, tuned for speed + reliability:
  - Simple "Loading" preloader (spinner + word), fades ~200ms after load, hard-capped, never locks scroll long.
  - **Flowing aurora ribbons (signature constant background)**: wide blurred violet light bands that
    wave and drift across the whole page non-stop (sections are transparent so the light flows behind
    everything). Owner-confirmed direction. It is bold and clearly in motion, and it keeps a gentle,
    slow, non-flashing version running **even when macOS "Reduce Motion" is on**, so the background is
    never fully static (the heavier effects below still respect reduce-motion).
  - Reveal-on-scroll via IntersectionObserver, using the standalone `translate`/`scale`/`rotate`
    properties (not `transform`) so reveals never fight the hover/tilt transform.
  - Masked word-rise on every major heading; 3D `card3d` entrance on the Who-I-help + Services cards
    (re-fires on tab switch); **animated gradient rings** on cards; custom cursor; film grain;
    magnetic buttons; scroll-progress bar; parallax glows; marquee; subtle 3D card tilt; button shine.
  - The **Meet-me portrait** is edge-feathered with a mask + violet duotone wash + breathing halo so the
    studio backdrop dissolves into the dark page instead of reading as a pasted-on poster.
  - **No external scroll library** (Lenis was removed — slow feel + CDN hang risk). Native scroll + CSS
    `scroll-behavior: smooth` + `scroll-margin-top` for anchor offset.
  - **Robustness:** masked-heading DOM surgery wrapped in try/catch; a separate-script failsafe
    force-reveals everything + clears the preloader after 2.2s so a thrown error can never leave a blank page.
  - **`prefers-reduced-motion` safe, but not dead:** big movement (3D, parallax, marquee, cursor,
    aurora drift, card rings) is suppressed under reduce-motion, yet reveals keep a gentle opacity fade.
- It must read as a **solo coach's personal site**, not a company/SaaS page. No company-logo marquees,
  count-up stat bands, or pricing-table grids. Lead with her face, voice, and the pay-it-forward motive.
- Design references (for feel only): **lusion.co/about** (kinetic, full-bleed, premium motion) and
  **animaapp.com** (dark charcoal, big serif, purple glow, centered hero). Layout structure follows the
  Coacher-style offer-led one-pager. The original purple light mockup is kept in `extras/inspiration-mockup.html`.

---

## 4) CTAs, contact & key links

- **Primary CTA everywhere:** Book on Topmate, `https://topmate.io/vandana_agarwal`, new tab.
- **Display email:** `coaching@vandanaagarwal.in`, as a `mailto:` link.
- LinkedIn (footer + Meet me): `https://www.linkedin.com/in/meet-vandana/`
- SDR Leaders of APAC: `https://www.linkedin.com/company/sdr-leaders-of-apac/`
- Substack (content hub, linked from `/resources`, nav, and footer): `https://coachingbyvandy.substack.com`
- Featured videos (3 YouTube embeds): see `About-Vandana-and-Services.md`.
- No other forms or schedulers.

Reference only (do not put on the site unless asked): domain `https://vandanaagarwal.in`; Topmate
service setup notes in `extras/Topmate-Services-Setup.md`; alternate scheduler Lunacal (unused).

---

## 5) Writing rules (apply to all copy)

1. **No overhyping.** Experience is **8+ years**, never "10+". Lead with real outcomes and recognition
   (100 Powerful Women in Sales, Founder of SDR Leaders of APAC, GrowthX Fellow, hard pipeline numbers)
   alongside the 8+ years figure. Use only the figures in the proof bank. Do not invent or round up.
2. **No em dashes in sentences.** Use commas, periods, or restructure. Hyphenated compounds are fine.
3. Voice: confident operator plus supportive coach. Direct, practical, positive. The reader should
   leave having learned something and feeling lighter.

---

## 6) Definition of done

- One-page site with all sections from section 2, in order (pain-first flow).
- Every CTA → Topmate, new tab. The main/hero/nav CTAs point at the profile
  (`https://topmate.io/vandana_agarwal`); each **service card** deep-links to its own booking page
  (`https://topmate.io/vandana_agarwal/<id>`).
- Exactly four Topmate offers listed: Mentorship Discovery Call, 1:1 Mentorship Program,
  Build Your First AI-Powered SDR Workflow, and Build Your SDR Function & GTM Blueprint.
  No prices on the website.
- Contact email `coaching@vandanaagarwal.in` via `mailto:`.
- Exactly three featured video podcasts embedded with `loading="lazy"`.
- Six real, attributed testimonials.
- Experience stated as 8+ years, consistently. No "10+". No overhyping. No em dashes in copy.
- One H1, semantic headings, real `alt` text, sufficient contrast, keyboard-focusable controls.
- Fully responsive. Test at 375px, 768px, 1280px.
- Positioning unmistakable on first scroll: global SDR coach (APAC, EMEA, AMER). Note: the literal
  "APAC-built" label was removed from the visible hero/title at owner request; the cross-border
  positioning still comes through via the proof chip and the Meet-me copy. Do not re-add "APAC-built".
- All images hosted locally in `public/assets/` (not hotlinked).

---

## 7) Out of scope (roadmap)

1. Larger testimonials wall with quantified case studies.
2. Lead magnet plus newsletter sign-up.
3. Paid packages with pricing (mentorship subscription, 1–2 day team coaching).
4. Dedicated pages: /coaching, /consulting. (**/resources is now BUILT** — `src/pages/resources.astro`,
   two list cards: the APAC Field Guide series and SDR Playbook Visuals, every item linking out to its
   Substack post. Substack is the canonical content hub; the site only routes to it, no on-site reading.)
5. Substack, X, separate personal Instagram (these live outside this site).

---

## Assets in use

- `public/assets/va-square.jpg` — nav avatar.
- `public/assets/va-portrait.jpg` — Meet-me portrait (studio headshot).
- `public/assets/banner.jpg` — full-bleed photo banner.
- `public/favicon.svg` — favicon.
- Spares and raw source images are parked in `extras/` (not used by the site).
