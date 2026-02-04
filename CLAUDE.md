# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

MyDineroSite is a landing page for MyDinero, a privacy-first iOS expense tracking app. Built with Astro 5.x, it ships zero JavaScript by default for optimal performance.

**Site URL**: https://mydinero.app

## Development Commands

```bash
npm run dev      # Start dev server at localhost:4321
npm run build    # Build production site to ./dist/
npm run preview  # Preview production build locally
npm run check    # Run Astro type checking
```

## Architecture

### Component Organization
- `src/components/global/` - Site-wide components (Header, Footer, SEOHead)
- `src/components/sections/` - Page sections (Hero, Features, Testimonials, Values, CTA)
- `src/components/ui/` - Atomic reusable components (Button, Card, Badge, etc.)

### Data-Driven Content
Feature data, pricing, navigation, and testimonials are defined in TypeScript files under `src/data/`. Modify these files to update site content rather than editing components directly.

### Content Collections
Release notes use Astro content collections in `src/content/releases/`. Schema is defined in `src/content/config.ts` using Zod validation.

### Path Aliases
The project uses TypeScript path aliases for clean imports:
- `@components/*` → `src/components/*`
- `@layouts/*` → `src/layouts/*`
- `@data/*` → `src/data/*`
- `@utils/*` → `src/utils/*`
- `@styles/*` → `src/styles/*`

### Key Files
- `src/layouts/BaseLayout.astro` - Main page wrapper with SEO, scroll animations
- `src/components/global/SEOHead.astro` - SEO metadata, OG tags, structured data
- `src/utils/seo.ts` - SEO utilities with schema.org structured data
- `astro.config.mjs` - Site configuration, integrations (sitemap, MDX, Sharp)

## Styling

Global CSS variables and styles are in `src/styles/global.css`. Scroll-triggered animations use Intersection Observer (configured in BaseLayout). The header uses a liquid glass effect with CSS backdrop-filter when scrolled.

## Deployment

Two GitHub Actions workflows are configured:
- `.github/workflows/deploy.yml` - GitHub Pages (primary)
- `.github/workflows/deploy-netlify.yml` - Netlify (alternative)
