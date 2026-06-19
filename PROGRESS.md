# Build & Deploy Progress — vandanaagarwal.in

_Last updated: 2026-06-02_

## Summary
One-page SDR-coaching site for Vandana Agarwal Nik. Built with Astro (static), deployed on
Vercel, custom domain `vandanaagarwal.in` connected. The site is **live with working HTTPS**.
Most recent work: a redesign to a warmer **personal-coach** feel (away from a corporate/SaaS
look), with **all 10 live Topmate services listed and no prices shown**.

## URLs
- **Custom domain:** https://vandanaagarwal.in  (live, HTTPS working)
- **Vercel alias:** https://vandanaagarwal-in.vercel.app
- **Vercel project:** `vandanaagarwal-in` (team `connectwithvandanaa-9943s-projects`)

## Source layout
- `src/pages/index.astro` — page markup + data (services, audiences, steps, videos, results, testimonials, faqs)
- `src/styles/global.css` — all styles
- `public/assets/headshot.jpg` — violet-bg headshot (nav avatar, hero, About)
- `public/assets/banner.jpg` — dark LinkedIn banner ("Helping SDRs Perform Better...")
- Build: `npm run build` → `dist/`

## Current page structure (as built)
Nav (avatar + full name) → Hero (first-person, "Hi, I'm Vandana") → My story / Why I coach
(handwritten signature) → Who I help (4 audiences) → Work with me (all 10 services, tabbed
Sessions/Packages/Async, no prices) → Process (3 steps) → Photo banner → Featured (3 podcasts)
→ About (bio, AI-forward note, creds, 4 results) → Testimonials (6, 5/5) → FAQ → Final CTA → Footer.

## Status checklist

### Build & design — DONE
- [x] Astro static project, all sections above
- [x] Purple brand palette; Fraunces + Inter + Caveat (signature) fonts
- [x] Personal-coach redesign: removed company-logo marquee and count-up stat band; added
      first-person "Why I coach" story with handwritten "Vandana" signature
- [x] All 10 live Topmate services listed, grouped in Sessions (6) / Packages (3) / Async (1) tabs
- [x] **No prices anywhere** (confirmed preference); every service card links to Topmate
- [x] Logo fixed: round headshot + "Vandana Agarwal Nik" (replaced the old "Vandana." wordmark)
- [x] Hero recognition chip spelled out: "100 Powerful Women in Sales, Demandbase & WIS '25"
- [x] 3 YouTube podcasts embedded, lazy-loaded, real captions
- [x] 6 attributed 5-star testimonials
- [x] Topmate CTAs throughout (https://topmate.io/vandana_agarwal, new tab); email mailto:coaching@vandanaagarwal.in
- [x] Copy rules: no em dashes, no "10+", "8+ years" + "Founder" consistent
- [x] Dynamic touches: scroll-reveal, sticky nav scroll state, service tabs, soft animated blobs
      (all respect `prefers-reduced-motion`)
- [x] Accessibility: one H1, alt text, skip link, focus styles, keyboard mobile menu
- [x] Responsive at 375 / 768 / 1280

### Topmate cross-check (2026-06-02) — DONE
- [x] All 10 services match the live Topmate page; counts 6 / 3 / 1 correct; 5/5, 10 ratings accurate
- [x] Fixed: Mentorship Program now "6 to 8 weeks" (was "8 weeks") to match Topmate
- Note: live Topmate prices exist but are intentionally NOT shown on the site.

### Deploy — DONE
- [x] Linked to Vercel project `vandanaagarwal-in`
- [x] Production deploys via `npx vercel@latest deploy --prod --yes` (CLI not global, use npx)
- [x] Custom domain + www attached (apex primary)

### DNS — DONE (Google Domains / Squarespace nameservers)
- [x] A  `@`   -> `76.76.21.21`
- [x] CNAME `www` -> `cname.vercel-dns.com`
- [x] Google Workspace email records left intact (MX smtp.google.com, SPF, DKIM)
- [x] Verified: apex and www resolve correctly via public resolvers

### HTTPS — DONE
- [x] SSL certs issued for `vandanaagarwal.in` and `www.vandanaagarwal.in` (90d, auto-renew)
      - Issued after a production redeploy nudged provisioning; DNS was already correct.
      - Verified: https apex -> 200, https www -> 200.
      - Note: www serves the site directly (200) rather than 308-redirecting to apex. Both work;
        set a www->apex redirect on the Vercel project if a canonical redirect is wanted.

## How to redeploy after edits
```
cd "~/Documents/Vandy's Website"
npm run build              # optional sanity build; Vercel also builds
npx vercel@latest deploy --prod --yes
```

## Open / optional follow-ups
- Optional: www -> apex 308 redirect for a single canonical URL.
- Optional: higher-res headshot (current 400x400).
- `linkedin BG.jpeg` (light "I Build Consistent Quota Hitting SDR Teams" banner) is NOT used:
  it reads "10+ years", which breaks the 8+ rule. Swap in only if a corrected version is provided.
- Decide whether to keep short duration labels (e.g. "30 min") on service cards. Kept for now
  (they are not prices and help people choose).
- Out of scope for v1 (roadmap): pricing/packages pages, lead magnet + newsletter, dedicated
  /coaching /consulting /resources pages, larger case-study testimonial wall.

_CI: auto-deploy on push verified via GitHub → Vercel integration._
