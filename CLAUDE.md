# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `npm run dev` - Start the Next.js development server (http://localhost:3000)
- `npm run build` - Build the production application
- `npm start` - Start the production server

### Code Quality
- `npm run lint` - Run Biome linter with auto-fix on ./src
- `npm run format` - Format code with Biome on ./src
- `npm run check` - Run both lint and format with Biome on ./src
- `npm run type-check` - Run TypeScript type checking (no emit)

### Git Hooks
- Pre-commit hooks are configured via Husky to run `npm run check` on staged files
- This ensures code quality before commits

## Architecture Overview

This is a personal portfolio website built with Next.js 14 App Router and Chakra UI v3. The application follows a component-based architecture with clear separation of concerns.

### Key Technologies
- **Next.js 14.2.5** with App Router for server-side rendering and routing
- **Chakra UI v3** for component styling with a custom dark theme
- **TypeScript** for type safety across the codebase
- **Biome** for linting and formatting (replaces ESLint/Prettier)
- **React Context** for language switching (EN/JA)

### Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with providers
│   └── page.tsx           # Main page (client component)
├── components/
│   ├── providers.tsx      # Chakra & Language providers
│   ├── tab/              # Tab content components
│   │   ├── Main.tsx      # Profile & projects
│   │   ├── Skills.tsx    # Skills showcase
│   │   └── Support.tsx   # Payment/support options
│   └── ui/               # Chakra UI v3 components (auto-generated)
└── lib/
    ├── consts.ts         # Project data, links, social media
    ├── dictionary.ts     # i18n translations (EN/JA)
    ├── theme.ts          # Chakra UI theme config
    └── types.ts          # TypeScript interfaces
```

### Important Patterns

1. **Client Components**: All interactive components use the 'use client' directive
2. **Internationalization**: Simple dictionary-based i18n without external libraries
3. **Styling**: Chakra UI with custom theme, gradients using bgGradient/bgClip
4. **Data Management**: All constants and project data centralized in lib/consts.ts
5. **Type Safety**: Comprehensive TypeScript types in lib/types.ts

### Development Notes

- The `ui/` directory contains auto-generated Chakra UI v3 components - do not modify these directly
- Biome is configured to ignore the ui/ directory and ChakraExtension.tsx
- The app uses 'SF Pro JP' font for Japanese text support
- No test framework is currently configured
- Profile images can be dynamically selected via URL parameters

### Code Style
- 4 spaces for indentation
- Single quotes for JavaScript/TypeScript strings
- Line width limit of 80 characters
- Biome handles all formatting - always run `npm run check` before committing