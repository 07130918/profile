# Kota Ikeda — Portfolio (`profile.k0ta.dev`)

Personal portfolio website built with **Next.js 16 (App Router)**, **React 19**, **Chakra UI v3**, and **TypeScript**.

- Live Site: https://profile.k0ta.dev
- Featured Project (NashForge): https://poker.k0ta.dev

## Features

- Dark-first minimal design aligned with `poker.k0ta.dev`, with Dark / Light theme toggle (`next-themes`)
- Full English / Japanese (EN / JA) localization with URL query (`?lang=ja|en`) and localStorage persistence
- Featured NashForge showcase and statically generated project case study pages (`/projects/[slug]`)
- Keyboard-navigable Command Palette (`⌘K` / `Ctrl+K`) and 1-click email copy
- Dynamic OpenGraph image (`/opengraph-image`), `sitemap.xml`, `robots.txt`, JSON-LD (`Person`), and `/llms.txt`

## Development

```bash
npm install
npm run dev
```

## Quality Checks

```bash
npm run ci:check
npm run type-check
npm run test
npm run build
```

![hi-there-qr](https://github.com/07130918/profile/assets/70265286/4523bff9-7141-4c61-a777-ffa3e6893b28)
