# Blue Heaven Hostel — Website

Production-ready marketing site for Blue Heaven Hostel, built with Next.js 15 (App
Router), TypeScript, Tailwind CSS and Framer Motion. Statically exported — deploys to
any static host.

## Stack

- **Next.js 15** (App Router, static export — `output: "export"`)
- **TypeScript** (strict mode)
- **Tailwind CSS 3**
- **Framer Motion** — scroll-reveal only (`FadeIn`); hover/zoom is plain CSS
- **Lucide React** — icons
- **next/image** — used once real photos are added (see below)
- Fonts self-hosted via `@fontsource/manrope` + `@fontsource/inter` (no Google Fonts
  network call at build or runtime)

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # outputs static site to /out
npm run lint
```

## What's a placeholder right now

This was built without a logo file initially (one arrived mid-build — see "Brand
mark" below) and without real photography, addresses, phone numbers or testimonials.
Everything is wired up and fully functional, but the following need real data before
launch:

| What | Where | Notes |
|---|---|---|
| Photography | `src/components/shared/SmartImage.tsx` usages, `public/images/README.md` | Every image currently renders as a labeled placeholder box. Add a `src` prop once you have real photos — no other code changes needed. |
| Branch addresses, phone/WhatsApp numbers, Maps search queries | `src/data/hostels.ts` | Marked with `// TODO` comments. Numbers are dummy placeholders. |
| Central phone/WhatsApp/email/domain | `src/data/site.ts` | Marked with `// TODO` comments. |
| Testimonials | `src/data/content.ts` (`TESTIMONIALS`) | Sample/representative quotes — replace with real, consented testimonials before publishing them as customer reviews. |
| Stats (years in business, students served, etc.) | `src/data/content.ts` (`STATS`) | Representative placeholders. |

## Brand mark

No logo file was available when the build started; a heritage-style crest (ornate
scrollwork, serif monogram, royal blue) arrived partway through. Per the brief's own
instruction to **modernize** the brand rather than reproduce a traditional look, the
build:

- Sampled the brand blue from the crest (`#1A56C4`, set as `primary-600` in
  `tailwind.config.ts`, with a full 50–950 scale generated around it).
- Carried forward the **circular badge** concept as a simple solid-color circle mark.
- Dropped the ornate scrollwork and serif detailing entirely, replacing it with a
  clean geometric "B" mark set in Manrope — see `src/components/layout/Logo.tsx`.

If you'd rather use the original artwork (or a professionally redrawn version of it)
as-is, drop the file in `public/` and swap the mark in `Logo.tsx`, `src/app/icon.svg`
and `src/app/opengraph-image.tsx` for an `<Image>`/`<img>` pointing at it.

## Contact form

The site is a static export, so there's no backend to receive form submissions.
`src/components/contact/ContactForm.tsx` currently opens the visitor's email client
via a `mailto:` link pre-filled with their answers — it works with zero setup, but
isn't analytics-friendly or guaranteed across every mobile browser.

To wire up real form delivery instead, swap the `handleSubmit` body for a fetch call
to a form backend such as Formspree, Web3Forms, or Getform (all accept POSTs from a
static site without a server of your own), or move the site off static export onto a
host that runs Next.js server functions (e.g. Vercel) and add a Route Handler.

## Project structure

```
src/
  app/                  Routes (App Router) — one folder per page, plus
                        layout.tsx, globals.css, sitemap.ts, robots.ts,
                        icon.svg, opengraph-image.tsx, not-found.tsx
  components/
    layout/             Header, Footer, mobile nav, mobile sticky CTA, logo
    shared/             Container, SectionHeading, CTAButton, SmartImage,
                        FadeIn, Badge, StatCard — reused across every page
    home/               One file per homepage section
    hostels/            HostelCard (compact variant on Home, full on /hostels)
    gallery/            Masonry grid + built-in lightbox
    about/              Stats grid, values grid
    contact/            Form, quick-contact cards, branch directory
    faq/                Accordion primitive
  data/                 All content — hostels.ts, content.ts, site.ts
  lib/utils.ts           tel:/wa.me/maps/mailto link builders, cn()
  types/index.ts         Shared TypeScript interfaces
```

Every page pulls its content from `src/data/*` rather than hardcoding strings, so
adding a 6th branch, a new FAQ, or another testimonial is a data change, not a
markup change.

## Deployment

`npm run build` produces a fully static site in `/out` — upload that folder to any
static host (Netlify, Cloudflare Pages, S3 + CloudFront, GitHub Pages, cPanel, etc.)
or run it through Vercel as a static project. `trailingSlash: true` is set in
`next.config.ts` so routes export as `/about/index.html`-style folders, which is the
most broadly compatible format for generic static hosts.

Before going live:

1. Replace every `// TODO` in `src/data/site.ts` and `src/data/hostels.ts`.
2. Add real photography (see table above).
3. Update `SITE.url` and rebuild so `sitemap.xml`, `robots.txt` and Open Graph tags
   point at the real domain.
4. Decide on a contact-form backend (see "Contact form" above).
