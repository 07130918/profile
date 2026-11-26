# AGENTS.md

This file provides guidance to coding agents working in this repository.

## Commands

### Development
- `npm run dev` - Start the Next.js development server (http://localhost:3000)
- `npm run build` - Build the production application
- `npm start` - Start the production server

### Code Quality & Tests
- `npm run lint` - Run Biome linter with auto-fix on `./src`
- `npm run format` - Format code with Biome on `./src`
- `npm run check` - Run both lint and format with Biome on `./src`
- `npm run ci:check` - Run Biome in read-only CI mode on `./src`
- `npm run type-check` - Run TypeScript type checking (`tsc --noEmit`)
- `npm run test` - Run Vitest unit tests (`vitest run --maxWorkers=2`)

### Git Hooks
- Pre-commit hooks are configured via Husky to run `npm run check` on staged files

## Architecture Overview

This is a personal portfolio website (`https://profile.k0ta.dev`) built with Next.js 16 App Router, React 19, and Chakra UI v3.

### Key Technologies
- **Next.js 16.4.6** (App Router, Server Components, Metadata API, dynamic OpenGraph image, sitemap/robots)
- **Chakra UI v3** (`@chakra-ui/react`) with semantic `_dark` / `_light` tokens aligned with `poker.k0ta.dev`
- **next-themes** for Dark/Light theme switching (Dark default)
- **React 19.1.0** & **TypeScript 5.8**
- **Biome** for linting and formatting
- **Vitest** for unit testing

### Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root Server Layout (fonts, SEO metadata, JSON-LD, chrome)
│   ├── page.tsx                # Main portfolio Server Page
│   ├── opengraph-image.tsx     # Dynamic 1200x630 OpenGraph PNG generator
│   ├── robots.ts               # robots.txt metadata route
│   ├── sitemap.ts              # sitemap.xml metadata route
│   └── projects/[slug]/
│       └── page.tsx            # Statically generated project case study pages
├── components/
│   ├── providers.tsx           # ThemeProvider, ChakraProvider, Language & CommandPalette context
│   ├── SiteHeader.tsx          # Sticky header with nav, Cmd+K, EN/JA, Dark/Light toggle
│   ├── SiteFooter.tsx          # Minimal footer with shortcut hint & subtle support links
│   ├── CommandPalette.tsx      # Keyboard-navigable Cmd+K quick menu
│   ├── HeroSection.tsx         # Hero section with deterministic photo switcher (?ref= support)
│   ├── NashForgeVisual.tsx     # Theme-aware GTO strategy visualizer card for NashForge
│   ├── ProjectsSection.tsx     # Featured NashForge showcase & secondary projects grid
│   ├── ProjectCaseStudy.tsx    # Detailed case study page layout
│   ├── ExperienceSection.tsx   # Current engineering roles
│   ├── SkillsSection.tsx       # Categorized technical skills & AWS SAA certification
│   └── ContactSection.tsx      # Beyond Code & 1-click Copy Email contact CTA
└── lib/
    ├── profile-data.ts         # Single source of truth for EN/JA profile, projects, skills, UI copy
    ├── profile-data.test.ts    # Unit tests for data integrity & helpers
    ├── theme.ts                # Chakra UI v3 semantic tokens & global CSS
    └── types.ts                # TypeScript domain types
```

### Code Style
- 4 spaces for indentation
- Single quotes for JavaScript/TypeScript strings
- Line width limit of 80 characters
- Always run `npm run ci:check`, `npm run type-check`, `npm run test`, and `npm run build` before finishing

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
