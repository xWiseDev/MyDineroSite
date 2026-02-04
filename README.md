# MyDinero Landing Page

A conversion-optimized landing page for MyDinero, the privacy-first expense tracking iOS app.

Built with [Astro](https://astro.build) for optimal performance and SEO.

## Features

- **Zero JS by default** — Ships pure HTML/CSS for fast load times
- **Dark theme** inspired by [Ripples.day](https://ripples.day)
- **Scroll-triggered animations** using Intersection Observer
- **SEO optimized** with structured data, meta tags, and sitemap
- **Content collections** ready for programmatic SEO expansion
- **Mobile-first responsive design**

## Project Structure

```
/
├── .github/workflows/     # GitHub Actions deployment
├── public/
│   ├── images/           # App screenshots (add your images here)
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── global/       # Header, Footer, SEOHead
│   │   ├── sections/     # Hero, Features, Pricing, etc.
│   │   └── ui/           # Button, Card, PhoneMockup, etc.
│   ├── content/
│   │   └── releases/     # Release notes (Markdown)
│   ├── data/             # Features, testimonials, pricing data
│   ├── layouts/          # BaseLayout
│   ├── pages/            # All routes
│   ├── styles/           # Global CSS, animations
│   └── utils/            # SEO helpers
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser.

### Build

```bash
npm run build
```

Output will be in `./dist/`.

### Preview Production Build

```bash
npm run preview
```

## Adding Images

Replace the placeholder images in `public/images/` with actual app screenshots:

| File | Dimensions | Description |
|------|-----------|-------------|
| `hero-iphone.png` | ~400px wide | iPhone 15 Pro mockup showing Add Transaction screen |
| `feature-recurring.png` | ~300px wide | Recurring transactions list |
| `feature-categories.png` | ~300px wide | Categories with subcategories |
| `feature-budgets.png` | ~300px wide | Budget progress cards |
| `feature-daily-totals.png` | ~300px wide | Transaction list with daily totals |
| `feature-accounts.png` | ~300px wide | Multiple accounts view |
| `feature-sync.png` | ~300px wide | Cloud sync illustration |
| `og-image.png` | 1200x630 | Social sharing preview |
| `apple-touch-icon.png` | 180x180 | iOS home screen bookmark |

## Deployment

### GitHub Pages

The site is configured for GitHub Pages deployment. Push to the `main` branch to trigger automatic deployment via GitHub Actions.

Before deploying:
1. Enable GitHub Pages in repository settings
2. Set source to "GitHub Actions"

### Netlify (Alternative)

A Netlify workflow is also included. To use it:
1. Add `NETLIFY_AUTH_TOKEN` and `NETLIFY_SITE_ID` to repository secrets
2. The workflow will deploy on push to `main`

## Configuration

### Site URL

Update the site URL in `astro.config.mjs`:

```js
export default defineConfig({
  site: 'https://yourdomain.com',
  // ...
});
```

### App Store URL

Update the App Store link in `src/data/navigation.ts` and component files.

### SEO

Edit default SEO values in `src/utils/seo.ts`:
- Site name
- Default description
- App Store ID
- Social handles

## Adding Release Notes

Create a new file in `src/content/releases/`:

```markdown
---
version: "1.1.0"
title: "New Features"
date: 2025-02-01
highlights:
  - "Added feature X"
  - "Improved feature Y"
changes:
  - type: feature
    description: "Description of new feature"
  - type: improvement
    description: "Description of improvement"
  - type: fix
    description: "Description of bug fix"
---

Detailed release notes content here...
```

## Commands

| Command | Action |
| :------ | :----- |
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview build locally |
| `npm run check` | Run Astro type checking |

## Tech Stack

- [Astro](https://astro.build) — Static site generator
- [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/) — Automatic sitemap
- [@astrojs/mdx](https://docs.astro.build/en/guides/integrations-guide/mdx/) — MDX support for content
- [Sharp](https://sharp.pixelplumbing.com/) — Image optimization

## License

Copyright 2025 MyDinero. All rights reserved.
