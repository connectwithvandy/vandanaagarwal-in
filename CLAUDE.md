# CLAUDE.md — vandanaagarwal.in build brief

Instructions for building Vandana Agarwal Nik's personal website with Claude Code. Read this file first, then read `About-Vandana-and-Services.md` for all the content, facts, services, assets, and links. Build only what is specified here. Ask before adding scope.

---

## Status: BUILT & LIVE (last updated 2026-06-02)

The site is built, deployed, and live with HTTPS at **https://vandanaagarwal.in**. See `PROGRESS.md` for the full build/deploy/DNS record. This brief is kept as the source of intent; where the as-built site has evolved past the original v1 spec, this file has been updated inline (sections 0, 2, 5, 6) and the changes are flagged "as built". Key evolutions from the original v1 spec:

- **Tech stack is Astro (static)**, deployed on Vercel (not Netlify/Squarespace hosting). DNS A record to `76.76.21.21`.
- **All 10 live Topmate services are listed** on the site (not just 4 offer cards), grouped into Sessions / Packages / Async tabs.
- **No prices anywhere on the site.** Pricing lives only on Topmate. Confirmed preference, do not add prices.
- **Personal-coach feel, not corporate.** Removed company-logo marquees and count-up stat bands. Added a first-person "Why I coach" story with a handwritten signature.

---

## How to build (read before you write any code)

This is a hard rule. Do not skip it.

1. **Ask 5 questions first.** Before building anything, ask Vandy 5 sharp, specific questions to make sure you understand exactly what she needs built. Cover the real forks: tech stack and hosting, look and feel and color direction, must-have versus nice-to-have sections, how she wants to update and deploy it, and anything ambiguous in this brief. Do not ask vague questions. Make them count.
2. **Show your plan, then stop.** After her answers, lay out a clear plan: the approach, the file structure, the sections you will build, and the order you will build them in. Present the plan and wait.
3. **Do not build until she approves.** No code, no files, until Vandy says go. If she changes something, update the plan and re-confirm before building.
4. **Build in reviewable steps.** Once approved, build in clear stages so she can see progress and redirect early, rather than dropping a finished site all at once.

---

## 0) Decisions to confirm before coding

Defaults are marked. Confirm with Vandy, then proceed.

1. **Tech stack (as built: Astro, static output, no client framework).** Source in `src/pages/index.astro` + `src/styles/global.css`, vanilla JS for the mobile menu, service tabs, sticky nav, and scroll reveal. Build with `npm run build` to `dist/`. (The original default was plain HTML/CSS; Astro was chosen for easier data-driven sections. Do not add React or Next.)
2. **Hosting (as built: Vercel, project `vandanaagarwal-in`).** Deploy with `npx vercel@latest deploy --prod --yes`. Custom domain `vandanaagarwal.in` (apex primary, www attached). DNS lives at Google Domains / Squarespace nameservers, with an **A record to `76.76.21.21`**. HTTPS is live. See `PROGRESS.md`.
3. **Monetization scope (confirmed: Topmate now, packages later).** Every CTA points to Topmate. **No prices on the site** (confirmed preference): all 10 live Topmate services are listed by title and description only, with booking on Topmate. Do not build pricing tables, a subscription flow, or a team-coaching package page.

---

## 1) The job

Build a clean, warm, credible **one-page** site that positions Vandana as a global SDR coach with APAC-built execution, and routes every visitor to book on Topmate.

All copy, facts, services, and links live in `About-Vandana-and-Services.md`. Pull from that file. Do not invent details.

### About Vandana (use this for the About section and the overall tone)

Vandana Agarwal Nik is a Sales Development Leader and SDR coach who builds and scales BDR teams from zero to pipeline across APAC, EMEA, and AMER, for SaaS, identity, and cybersecurity companies. She has done it from an early-stage startup (Clickpost) through to scale (Rubrik, JumpCloud). She is the Founder of SDR Leaders of APAC (250+ members), was named to the 100 Powerful Women in Sales (2025), and is a GrowthX Fellow.

Why she coaches: to give the next generation of SDRs the kind of support she did not have early in her own career. That pay-it-forward motive is the heart of the brand and should come through in the About copy, warmly and without overhyping.

What makes her current: she is AI-forward, running and coaching on real tools (Gong, Hyperbound, Orum, 6sense, Salesforce), so she coaches SDRs to win in an AI-shaped sales world, not around it.

Keep all private life out (family, health, finances). This is a public coaching site.

---

## 2) Page structure (one page) — as built

1. **Header / Nav.** Logo is a small round headshot + "Vandana Agarwal Nik" (not the old "Vandana." wordmark). Links: My story, Work with me, Featured, About, FAQ. Primary button: Book on Topmate. Sticky, reacts on scroll, collapses to a menu on mobile.
2. **Hero.** Handwritten "Hi, I'm Vandana 👋" eyebrow, H1 ("Ramp faster. Book more meetings. Build outbound systems that actually stick."), warm first-person subhead, two CTAs (Book on Topmate, See how I can help), three proof chips (8+ yrs; APAC · EMEA · AMER; 100 Powerful Women in Sales, Demandbase & WIS '25), headshot with a "Founder, SDR Leaders of APAC" tag. Dark violet hero with soft animated blobs.
3. **My story (Why I coach).** First-person, pay-it-forward motive, closed with a handwritten "Vandana" signature. This is the warmth anchor that keeps the site personal, not corporate.
4. **Who I help.** Four audience cards: new/ramping SDRs, breaking into SaaS, founders & SDR leaders, feeling stuck.
5. **Work with me (services).** All 10 live Topmate services, grouped in tabs: Sessions (6), Packages (3), Async (1). Each is a card with title, format/duration, and description, NO price. Whole card links to Topmate ("Book on Topmate →"). Cross-check titles/durations against the live Topmate page when editing.
6. **Process.** Three steps: Diagnose, Playbook, Coach and iterate.
7. **Photo banner.** Full-bleed dark LinkedIn banner ("Helping SDRs Perform Better and Prepare Smarter for Interviews"), `public/assets/banner.jpg`, lazy-loaded. (Do NOT use `linkedin BG.jpeg`, it says "10+ years" which breaks the writing rule.)
8. **Featured video podcasts.** Exactly three embedded YouTube video podcasts, lazy-loaded, with real captions.
9. **About.** Short bio, AI-forward note, credibility bullets, and 3-4 hard results from the proof bank (57% to 91% SAL, 0% to 105% ramp, 17% to 49% SQL-to-S1, 2x SQLs). Two CTAs (Book on Topmate, Email me).
10. **Testimonials.** Six real, attributed 5-star reviews from her Topmate page, with the "5/5 on Topmate" note.
11. **FAQ.** How to book, do you work globally, how to pick a session, can the booking link change later.
12. **Final CTA.** Dark band, strong close, Book on Topmate plus the email.
13. **Footer.** Nav links, LinkedIn, SDR Leaders of APAC, copyright.

---

## 3) CTAs and contact

- Primary CTA everywhere: Book on Topmate, https://topmate.io/vandana_agarwal, open in a new tab.
- Secondary CTA: "See coaching offers", anchored to the Offers section.
- Display email: coaching@vandanaagarwal.in, as a `mailto:` link.
- No other forms or schedulers in v1.

---

## Key links (all relevant URLs)

On the site:
- Topmate (booking, every primary CTA): https://topmate.io/vandana_agarwal
- LinkedIn profile (footer and About): https://www.linkedin.com/in/meet-vandana/
- Contact email: coaching@vandanaagarwal.in
- SDR Leaders of APAC (LinkedIn page, optional link in About or footer): https://www.linkedin.com/company/sdr-leaders-of-apac/
- Featured videos (3 YouTube embeds): see the About file.

Reference only (do not put on the site unless asked):
- Website domain (owned, DNS at Squarespace): https://vandanaagarwal.in
- Google Drive (brand and content root): https://drive.google.com/drive/u/1/folders/0APG0gVRByAMGUk9PVA
- Lunacal (alternate scheduler, not used in v1): https://lunacal.ai/vandana/10min
- Template inspiration: Coacher, Personal Coach, Coachify (full links in section 5).

---

## 4) Writing rules (apply to all copy)

1. **No overhyping.** Experience is **8+ years**, never "10+". Lead with real outcomes and recognition (100 Powerful Women in Sales, Founder of SDR Leaders of APAC, GrowthX Fellow, hard pipeline numbers) alongside the 8+ years figure. Use only the figures in the proof bank in the About file. Do not invent or round up.
2. **No em dashes in sentences.** Use commas, periods, or restructure. Hyphenated compounds are fine.
3. Voice: confident operator plus supportive coach. Direct, practical, positive. The reader should leave having learned something and feeling lighter.

---

## 5) Design direction

- **Visual template to match: `inspiration-mockup.html`** in this folder. It is a purple-brand, one-page mockup with the exact sections, layout, and feel to build toward. Treat it as the color and feel target.
- **Real template inspiration (for layout and structure), these three only:**
  - Coacher (primary): https://www.framer.com/marketplace/templates/coacher/
  - Personal Coach, one-page: https://personalcoach.framer.website/
  - Coachify: https://coachify.framer.website/
  Build the Coacher-style offer-led structure, colored with the purple palette below.
- Warm operator blend: approachable and human, but sharp and outcome-driven. Stay grounded as a GTM and sales-development leader, avoid generic life-coach visuals.
- Dark violet-black hero and final CTA (echoing her LinkedIn interview banner), light lavender and white sections in between.
- Clean type, generous spacing, strong and obvious CTA buttons.
- Brand colors (purple, from her LinkedIn and Topmate thumbnails): primary violet #7C2FD4, light lavender background #F4ECFB, deep violet-black #140A1E for high-contrast sections, deep purple-charcoal text #241934, light violet accent #B98BEA. Lead with violet on a light base, use the deep violet-black for the hero or footer.
- **As built (personal-coach feel, confirmed preference):** it must read as a solo coach's personal site, NOT a company/SaaS page. Do not add company-logo marquees, count-up stat bands, or pricing-table grids. Lead with her face and voice, first-person story, and the pay-it-forward motive. Fonts: Fraunces (headings), Inter (body), Caveat (handwritten signature and "Hi, I'm Vandana" eyebrow). Soft rounded cards, gentle scroll-reveal animations that respect `prefers-reduced-motion`. See the `site-design-preferences` memory.

---

## 6) Definition of done

- One-page site with all sections from section 2, in order.
- Every CTA points to Topmate (https://topmate.io/vandana_agarwal), opening in a new tab.
- All 10 live Topmate services listed (Sessions/Packages/Async), titles and durations matching the live Topmate page, with **no prices shown anywhere**.
- Contact email is coaching@vandanaagarwal.in via `mailto:`.
- Exactly three featured video podcasts embedded with the provided links, `loading="lazy"`.
- A testimonials section with real, attributed reviews from the About file (currently six).
- Experience stated as 8+ years, used consistently. No "10+". No overhyping anywhere.
- No em dashes in any sentence of the copy.
- Fully responsive. Test at 375px, 768px, and 1280px.
- Positioning is unmistakable on first scroll: global SDR coach, APAC-built execution.
- Headshot downloaded and hosted locally, not hotlinked.
- Accessibility basics: real `alt` text, sufficient contrast, one H1, semantic headings, keyboard-focusable links and buttons.
- No backend, no auth, no analytics in v1 unless Vandy asks.

---

## 7) Out of scope for v1 (roadmap)

1. A larger testimonials wall with quantified case studies (v1 already includes a short testimonials section).
2. Lead magnet plus newsletter sign-up.
3. Paid packages with pricing: mentorship subscription and a 1 to 2 day team coaching package.
4. Dedicated pages: /coaching, /consulting, /resources.
5. Substack, X, and a separate personal Instagram. These live outside this site.
