# Fire Safety Supply House (FSSH)

## Stack
- Astro 4 static site — `output: 'static'`
- Tailwind CSS with custom colors (see `tailwind.config.mjs`)
- Deployed to Netlify (site ID: aa439924)
- GitHub: https://github.com/alowe2434-debug/fssh-astro.git
- Domain: firesafetysupplyhouse.com

## Key colors (Tailwind)
- `red-brand: #c0392b` — primary CTA color
- `red-dark: #a93226` — hover state
- `red-light: #fdf2f1` — light background tint

## Key classes
- `.btn-primary` — red pill button
- `.btn-secondary` — ghost button
- `.section` — max-w-7xl centered container
- `.card` — white card with hover shadow
- `.tag` — small uppercase label

## Layout
- All pages use `src/layouts/Base.astro`
- Base includes: nav, mobile menu, footer, RFQ modal
- Modal trigger: `openRFQ(mfr, sku, desc)` — use `desc` arg for Reg 4 pages
- Page schema goes through Base's `schema` prop (object, not string)

## Structure
- `src/pages/` — all Astro page files
- `src/layouts/Base.astro` — site shell (nav, footer, modal)
- `src/data/products.js` — product catalog
- `src/data/regions.js` — region data for dynamic pages
- `src/styles/global.css` — Tailwind + component classes
- `public/images/products/` — all product images (PNG)
- `public/sitemap.xml` — static sitemap (update manually on new pages)

## Build
- `npm run dev` — local dev server (port 4321)
- `npm run build` — production build to `/dist`
- Push to main → Netlify auto-deploys (no manual deploy needed)
- GitHub auth: embed PAT in remote URL if needed

## Current campaigns
### LAFD Regulation 4 (April 2026)
- Hub: `/lafd-regulation-4/` — full compliance guide, frequency table, tester categories
- DTLA: `/lafd-regulation-4/downtown-los-angeles/` — geo-targeted neighborhood page
- Remaining neighborhoods to build: Hollywood, Koreatown, Century City, Mid-Wilshire, Arts District, Boyle Heights, Westwood, Chinatown, Playa Vista
- Building-type pages planned: /restaurants/, /high-rises/
- Nav already updated (LAFD Reg 4 link in red)
- LA County region page has conditional Reg 4 callout for `region.id === 'los-angeles-county'`

## Sitemap
- Located at `public/sitemap.xml`
- Static file — add new URLs manually
- Priority: 0.9 for hub, 0.8 for neighborhood pages
- Submitted to Google Search Console (already verified)

## SEO notes
- DR: 0 (new domain), targeting zero-competition local compliance keywords
- Target: "LAFD Regulation 4", "fire alarm inspection Los Angeles", "commercial fire alarm inspection"
- FAQ schema on all Reg 4 pages for rich results
- LocalBusiness schema on DTLA page
