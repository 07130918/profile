# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Kota Sato built with Next.js 14, TypeScript, and Chakra UI. The application features a bilingual interface (English/Japanese) with a modern dark theme design.

## Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint with auto-fix
- `npm run format` - Format code with Prettier

## Architecture & Key Components

### Application Structure
- **App Router**: Uses Next.js 14 App Router pattern (`src/app/`)
- **Root Layout**: Configured with dark theme and metadata (`src/app/layout.tsx`)
- **Main Page**: Single-page application with two-column layout (`src/app/page.tsx`)

### Core Components
- **ProfileCard**: Left column displaying personal info, photo, and social links
- **TabCard**: Right column with tabbed interface (Profile, Career/Skills, Support)
- **Providers**: Chakra UI theme provider with language context (`src/components/providers.tsx`)

### Language System
- **Dictionary**: All text content stored in `src/lib/dictionary.ts` with `en` and `ja` keys
- **Context**: Language state managed via React Context (`LangContext`)
- **Component Pattern**: Components access text via `text[lang].section.key` pattern

### Theming
- **Dark Theme**: Custom Chakra UI theme with black/gray color scheme
- **Layout**: Responsive design using Chakra UI's Stack components
- **Styling**: Gradient text effects and smooth transitions throughout

### Code Quality
- **Linting**: ESLint with Next.js config
- **Formatting**: Prettier with 4-space tabs, single quotes, 100 char width
- **Git Hooks**: Husky + lint-staged runs lint and format on commit
- **TypeScript**: Strict typing throughout with proper component interfaces

### Development Notes
- All text content must be added to both `en` and `ja` sections in `dictionary.ts`
- Components use `useContext(LangContext)` to access current language
- Responsive breakpoints: `base` (mobile), `md` (desktop) in Chakra UI syntax
- Color scheme uses `gray.700`, `gray.800`, `gray.900` for dark theme consistency