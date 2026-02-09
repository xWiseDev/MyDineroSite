# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

MyDineroSite is a landing page for MyDinero, a privacy-first iOS expense tracking app. Built with Astro 5.x, it ships zero JavaScript by default for optimal performance.

**Site URL**: https://xwisedev.github.io/MyDineroSite/
**Support Email**: aboyahyadev@icloud.com
**App Launch**: February 2026 (v1)

## Development Commands

```bash
npm run dev      # Start dev server at localhost:4321
npm run build    # Build production site to ./dist/
npm run preview  # Preview production build locally
npm run check    # Run Astro type checking
```

Note: The dev server may use ports 4322/4323 if 4321 is busy. The site is served at `/MyDineroSite/` path for GitHub Pages.

## Architecture

### Component Organization
- `src/components/global/` - Site-wide components (Header, Footer, SEOHead)
- `src/components/sections/` - Page sections (Hero, Features, Testimonials, Values, CTA)
- `src/components/ui/` - Atomic reusable components (Button, Card, Badge, Icon, Logo, etc.)

### Pages
- `src/pages/index.astro` - Main landing page
- `src/pages/roadmap.astro` - Timeline-style roadmap
- `src/pages/contact.astro` - Contact page with single email CTA
- `src/pages/privacy.astro` - Privacy policy (8 sections, SEO-optimized)
- `src/pages/terms.astro` - Terms of service
- `src/pages/404.astro` - Custom 404 error page

### Data-Driven Content
Content is defined in TypeScript files under `src/data/`:
- `navigation.ts` - Nav links, footer links, social links
- `features.ts` - Feature cards data
- `testimonials.ts` - Testimonial carousel content
- `roadmap.ts` - Timeline phases and milestones
- `values.ts` - Core values/principles content

Modify these files to update site content rather than editing components directly.

### Content Collections
Release notes use Astro content collections in `src/content/releases/`. Schema is defined in `src/content/config.ts` using Zod validation.

### Path Aliases
```typescript
@/*           → src/*            // Preferred shorthand (used in BaseLayout and most files)
@components/* → src/components/*
@layouts/*    → src/layouts/*
@data/*       → src/data/*
@utils/*      → src/utils/*
@styles/*     → src/styles/*
@assets/*     → src/assets/*
```

### Key Files
- `src/layouts/BaseLayout.astro` - Main page wrapper with SEO, scroll animations
- `src/components/global/SEOHead.astro` - SEO metadata, OG tags, structured data
- `src/components/ui/Icon.astro` - SVG icon component (16+ icons available)
- `src/components/ui/Logo.astro` - App logo with configurable sizes (sm/md/lg)
- `src/utils/seo.ts` - SEO utilities with schema.org structured data
- `astro.config.mjs` - Site configuration, integrations (sitemap, MDX, Sharp)

## Design System

### Visual Style
- **Theme**: Dark mode with liquid glass effects
- **Background**: Floating orbs with blur, subtle grid overlays
- **Cards**: Glass-morphism with gradient borders, subtle hover states
- **Typography**: Clean, high contrast, -0.03em letter-spacing on headings

### Glass Effect Pattern
```css
background: linear-gradient(
  145deg,
  rgba(255, 255, 255, 0.08) 0%,
  rgba(255, 255, 255, 0.02) 50%,
  rgba(255, 255, 255, 0.05) 100%
);
border: 1px solid rgba(255, 255, 255, 0.1);
```

### Image Handling
- Source images are high-res (1419×2796px for screenshots)
- Use `image-rendering: auto` (NOT `crisp-edges` which causes pixelation)
- Add GPU acceleration: `transform: translateZ(0); backface-visibility: hidden;`

### Logo Sizes
```typescript
sm: { icon: 35px }  // Small contexts
md: { icon: 46px }  // Header/toolbar
lg: { icon: 70px }  // Large displays
```

## SEO Keywords

Integrate these keywords naturally throughout content:
- expense tracker, expense manager
- budget planner, budget tracker, budget app
- money manager, money tracker
- spending tracker, track spending
- bill tracker

## Styling

Global CSS variables and styles are in `src/styles/global.css`, with animation keyframes in `src/styles/animations.css` (both imported by BaseLayout). Key patterns:

- **Scroll animations**: Intersection Observer (configured in BaseLayout)
- **Header**: Liquid glass effect with backdrop-filter when scrolled
- **Footer**: Solid dark with gradient top border and soft inner glow
- **Hover states**: Subtle border brightening and lift effects

### Accessibility
- `prefers-reduced-motion` support on all animations
- Skip links and proper focus states
- ARIA labels on interactive elements

## Contact Integration

Email links use this format:
```typescript
const supportEmail = 'aboyahyadev@icloud.com';
const emailSubject = encodeURIComponent('[MyDinero] Subject Here');
const mailtoLink = `mailto:${supportEmail}?subject=${emailSubject}`;
```

## Deployment

Two GitHub Actions workflows are configured:
- `.github/workflows/deploy.yml` - GitHub Pages (primary)
- `.github/workflows/deploy-netlify.yml` - Netlify (alternative)

Base path is set to `/MyDineroSite/` for GitHub Pages subdirectory deployment.
