# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

MyDineroSite is a landing page for MyDinero, a privacy-first iOS expense tracking app. Built with Astro 5.x, it ships zero JavaScript by default for optimal performance.

**Site URL**: https://mydinero.app
**Support Email**: aboyahyadev@icloud.com
**App Store ID**: 6758524652

## Development Commands

```bash
npm run dev      # Start dev server at localhost:4321 (may use 4322/4323 if busy)
npm run build    # Build production site to ./dist/
npm run preview  # Preview production build locally
npm run check    # Run Astro type checking
```

No test runner or linter is configured.

## Architecture

### Data-Driven Content Pattern

This is the most important pattern in the codebase: **site content lives in `src/data/*.ts` files, not in components**. To update text, features, testimonials, etc., modify the data files:

- `navigation.ts` — nav links, footer links, social links
- `features.ts` — feature cards
- `testimonials.ts` — testimonial carousel (component exists but currently removed from homepage — testimonials are not real yet)
- `roadmap.ts` — timeline phases and milestones
- `values.ts` — core values/principles
- `pricing.ts` — subscription plan details (display only — actual pricing/purchases are handled in the iOS app)

Section components in `src/components/sections/` consume these data files and render them. Don't hardcode content in components. **Do not add purchase flows or pricing logic to the website** — the iOS app handles all transactions via the App Store.

### Content Collections

Release notes use Astro content collections in `src/content/releases/` (Markdown files with Zod-validated frontmatter). Schema in `src/content/config.ts` requires: `version`, `title`, `date`, `highlights[]`, and `changes[]` (each with `type: 'feature'|'improvement'|'fix'` and `description`).

Dynamic routes at `src/pages/releases/[slug].astro` generate individual release pages.

### Component Organization

- `src/components/global/` — Header, Footer, SEOHead (site-wide)
- `src/components/sections/` — Hero, Features, Values, FinalCTA (active on homepage); Testimonials, Pricing, AppShowcase (built but not currently rendered)
- `src/components/ui/` — Atomic components (Button, Card, Icon, Logo, PhoneMockup, AppStoreBadge, PricingCard, etc.)

### Layout & SEO Pipeline

All pages use `src/layouts/BaseLayout.astro`, which:
1. Wraps content with SEOHead, Header, Footer
2. Imports global CSS (`src/styles/global.css`) and animations (`src/styles/animations.css`)
3. Provides `<noscript>` fallback so `.scroll-animate` elements remain visible without JS
4. Injects Intersection Observer script for `.scroll-animate` elements
5. Adds header scroll effect (`.nav-scrolled` class at 50px)

SEO defaults and structured data (schema.org SoftwareApplication) are in `src/utils/seo.ts`. The `SEOHead` component handles meta tags, OG tags, Twitter Cards, and JSON-LD. The contact page also includes FAQPage structured data for rich results.

### Path Aliases

Use `@/*` → `src/*` (preferred). More specific aliases (`@components/*`, `@layouts/*`, `@data/*`, `@utils/*`, `@styles/*`, `@assets/*`) also exist but `@/` is used consistently.

## Design System

- **Theme**: Dark mode only, liquid glass effects throughout
- **Colors**: Green accent (`--color-green-500: #34C759`), dark backgrounds (`--color-gray-900: #1a1a1a`), white text with opacity variants (`--color-white-70`, `-50`, `-10`, etc.)
- **Glass pattern**: `linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02), rgba(255,255,255,0.05))` + `border: 1px solid rgba(255,255,255,0.1)`
- **Typography**: System font stack (`-apple-system, SF Pro`), `-0.03em` letter-spacing on headings
- **Spacing/radius/transitions**: All via CSS custom properties in `global.css` (e.g., `--space-4`, `--radius-lg`, `--transition-fast`)

### Image Handling

- Source images are high-res (1419×2796px for screenshots)
- Always include `width` and `height` attributes on `<img>` tags to prevent CLS
- Use `image-rendering: auto` (NOT `crisp-edges` — causes pixelation)
- GPU acceleration: `transform: translateZ(0); backface-visibility: hidden;`

### Icon Component

`src/components/ui/Icon.astro` contains inline SVG paths for 20+ icons (recurring, categories, budgets, rocket, lock, etc.). Pass `name` prop to select icon. Add new icons by adding entries to the `icons` Record in that file.

## SEO

### Keywords
Integrate naturally (without `<strong>` wrapping): expense tracker, expense manager, budget planner, budget tracker, budget app, money manager, spending tracker, bill tracker.

### Important SEO Rules
- **No fake social proof**: Do not add fabricated ratings, review counts, or "loved by thousands" type claims. Only use real data.
- **No fabricated testimonials**: The Testimonials component exists but is removed from the homepage because the reviews are not real. Only re-enable with genuine user reviews.
- **Structured data must match page content**: Don't claim ratings or pricing in JSON-LD that aren't visible on the page.
- **Keywords in privacy/legal pages**: Use keywords naturally in the text but do NOT wrap them in `<strong>` tags — it looks like keyword stuffing.
- **OG image**: A 1200×630px `public/og-image.png` is still needed — social shares currently have no preview image.

## Contact Integration

```typescript
const mailtoLink = `mailto:aboyahyadev@icloud.com?subject=${encodeURIComponent('[MyDinero] Subject Here')}`;
```

## Deployment

- **Primary**: GitHub Pages via `.github/workflows/deploy.yml`
- **Alternative**: Netlify via `.github/workflows/deploy-netlify.yml`
- Custom domain `mydinero.app` configured in `public/CNAME`, served from root path (`/`)
- `trailingSlash: 'never'` in Astro config — all URLs without trailing slashes
- Sitemap filters out `/404` and `/terms` (terms 301-redirects to Apple EULA)
