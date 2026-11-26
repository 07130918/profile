import type {
    CertificationItem,
    CountryVisit,
    ExperienceItem,
    Lang,
    ProjectItem,
    SkillGroup,
} from '@/lib/types';

export const SITE_URL = 'https://profile.k0ta.dev' as const;

export const AVATAR_COUNT = 4;
const PROFESSIONAL_REFS = new Set(['linkedIn', 'job-hunting']);

export function getInitialAvatarIndex(refParam: string | null): number {
    if (refParam && PROFESSIONAL_REFS.has(refParam)) {
        return 0;
    }
    return 1;
}

export function getNextAvatarIndex(currentIndex: number): number {
    return (currentIndex + 1) % AVATAR_COUNT;
}

export const PROFILE = {
    name: 'Kota Ikeda',
    brand: 'k0ta.dev',
    pronouns: 'he/him',
    email: 'tokyosato1@gmail.com',
    location: {
        en: 'Tokyo, Japan',
        ja: '東京 / 日本',
    },
    availability: {
        en: 'Open to full-time & freelance opportunities',
        ja: '転職・案件のご相談受付中',
    },
    role: {
        en: 'Software Engineer — Full-Stack Web & Product Engineering',
        ja: 'ソフトウェアエンジニア — Webアプリ / API / プロダクト開発',
    },
    headline: {
        en: 'Turning ambiguous ideas into clean interfaces and reliable systems.',
        ja: '曖昧な課題を、シンプルなUIと堅牢な仕組みに落とし込む。',
    },
    bio: {
        en: 'I build production web applications and APIs used by thousands of people at TechsPlus Inc. and AICE Inc. Outside work, I design and ship end-to-end products like NashForge, a GTO poker strategy trainer.',
        ja: 'TechsPlus株式会社とAICE株式会社で、数千人が利用するWebアプリケーションとAPIを開発しています。個人開発では、GTOポーカートレーナー「NashForge」をはじめ、企画から設計・実装・運用まで一貫して形にしています。',
    },
    philosophy: {
        en: 'Curious and hands-on by nature — I enjoy moving quickly from rough prototypes to polished software people can actually use.',
        ja: '好奇心旺盛で手を動かしながら学ぶスタイルです。小さな試作から公開品質まで磨き上げ、使う人に届くプロダクトを作る過程を大切にしています。',
    },
    languages: {
        en: 'Japanese (Native) / English (Working)',
        ja: '日本語 (ネイティブ) / 英語 (実務・学習継続中)',
    },
    links: {
        email: 'mailto:tokyosato1@gmail.com',
        x: 'https://x.com/tech_guy_kay',
        github: 'https://github.com/07130918',
        linkedIn: 'https://www.linkedin.com/in/kota-sato-228364215/',
        buyMeACoffee: 'https://www.buymeacoffee.com/hi.im.kota',
        paypal: 'https://www.paypal.com/paypalme/kotawebdev',
    },
    handles: {
        x: '@tech_guy_kay',
        github: '07130918',
        linkedIn: 'kota-sato-228364215',
    },
} as const;

export const PROJECTS: readonly ProjectItem[] = [
    {
        slug: 'nashforge',
        name: 'NashForge',
        featured: true,
        category: 'web-app',
        categoryLabel: {
            en: 'Featured Product',
            ja: '代表プロダクト',
        },
        status: {
            en: 'Live · Active Development',
            ja: '公開中・継続開発',
        },
        tagline: {
            en: 'GTO Poker Strategy Trainer based on Nash Equilibrium',
            ja: 'ナッシュ均衡に基づくGTOポーカートレーナー',
        },
        summary: {
            en: 'A web application for drilling Texas Hold’em decision-making and comparing your actions against Game Theory Optimal (GTO) solutions.',
            ja: 'テキサスホールデムの意思決定を反復練習し、GTO(ゲーム理論上最適)解と比較して戦略を鍛えるWebアプリケーションです。',
        },
        problem: {
            en: 'Traditional poker solvers are powerful but heavy and desktop-bound, making quick daily drills difficult. NashForge focuses on an immediate, distraction-free practice loop accessible right from the browser or mobile PWA.',
            ja: '既存のポーカーソルバーは高機能な一方で起動や操作が重く、日々のスキマ時間で意思決定を反復練習しづらい課題がありました。NashForgeはブラウザやモバイルからすぐ練習を始められる軽量で集中しやすい体験を目指しています。',
        },
        architecture: {
            en: 'Built with Next.js App Router, TypeScript, and Chakra UI in a dark-first interface designed for long study sessions. Includes Clerk authentication, Web App Manifest (PWA) support, dynamic OpenGraph images, and Vercel deployment at poker.k0ta.dev.',
            ja: 'Next.js App Router・TypeScript・Chakra UIで長時間の学習でも疲れにくいダークUIを構築。Clerkによる認証、PWA(Web App Manifest)対応、動的OGP生成を組み込み、poker.k0ta.dev としてVercel上で運用しています。',
        },
        highlights: {
            en: [
                'End-to-end product design covering game logic, study UX, and visual hierarchy',
                'Dark-first interface tuned for high legibility during repeated GTO drills',
                'Clerk authentication, mobile-friendly PWA setup, and SEO/OGP metadata',
            ],
            ja: [
                'ゲームロジック・学習UX・UI設計まで個人で一貫してプロダクト開発',
                '反復トレーニングでも見やすいコントラストと情報密度に調整したダークUI',
                'Clerk認証・PWA対応・動的OGPなど実運用を見据えたWeb基盤を整備',
            ],
        },
        techStack: [
            'TypeScript',
            'Next.js',
            'React',
            'Chakra UI',
            'Clerk',
            'PWA',
            'Vercel',
        ],
        liveUrl: 'https://poker.k0ta.dev/',
    },
    {
        slug: 'agents',
        name: 'Agents',
        featured: false,
        category: 'developer-tools',
        categoryLabel: {
            en: 'AI & Developer Workflow',
            ja: 'AI・開発ワークフロー',
        },
        status: {
            en: 'Open Source · Actively Updated',
            ja: 'OSS・継続更新中',
        },
        tagline: {
            en: 'Global agents, skills, and shared workflows for Codex & Claude Code',
            ja: 'Codex / Claude Code 向けグローバルエージェント・スキル基盤',
        },
        summary: {
            en: 'A curated engineering repository defining reusable AI coding agent rules, skills, review harnesses, and workflow references across projects.',
            ja: '複数プロジェクトを横断して使えるAIコーディングエージェントの規約・スキル・レビューフロー・参照ドキュメントを体系化したリポジトリです。',
        },
        problem: {
            en: 'AI coding agents quickly drift in style, verification rigor, and git hygiene across repositories without shared guardrails.',
            ja: 'プロジェクトごとにAIエージェントの振る舞いや検証品質、Git運用がばらつきやすいという課題を解決するために設計しました。',
        },
        architecture: {
            en: 'Structured around composable skills and shared markdown references backed by Python automation utilities, keeping workflows consistent between Codex and Claude Code.',
            ja: '共通リファレンスと再利用可能なスキル群を中心に構造化し、Pythonスクリプトによる補助と組み合わせてCodex・Claude Code間で一貫した開発フローを運用しています。',
        },
        highlights: {
            en: [
                'Standardized issue-to-PR, bug investigation, and review remediation workflows',
                'Cross-agent compatibility across Codex and Claude Code environments',
                'Continuously refined from real-world daily production engineering',
            ],
            ja: [
                'Issue起点の実装からPR・原因調査・レビュー是正まで標準化',
                'CodexとClaude Codeの双方で再利用できる構造設計',
                '日々の実務開発から得た知見を継続的にフィードバック',
            ],
        },
        techStack: ['Python', 'AI Agents', 'Claude Code', 'Codex', 'Markdown'],
        githubUrl: 'https://github.com/07130918/Agents',
        githubRepoName: '07130918/Agents',
    },
    {
        slug: 'word-pop-quiz',
        name: 'Word Pop Quiz',
        featured: false,
        category: 'web-app',
        categoryLabel: {
            en: 'Web Application',
            ja: 'Webアプリ',
        },
        status: {
            en: 'Live',
            ja: '公開中',
        },
        tagline: {
            en: 'Lightweight English vocabulary quiz app for quick study',
            ja: 'テンポよく学べる英単語クイズWebアプリ',
        },
        summary: {
            en: 'A responsive vocabulary quiz web app built to make daily English word review fast and approachable.',
            ja: '日々の英単語学習を手軽に続けられるよう設計した、レスポンシブ対応のクイズWebアプリです。',
        },
        problem: {
            en: 'Vocabulary apps often bury quick drills behind heavy onboarding and cluttered screens.',
            ja: '単語学習アプリの多くは起動から出題までの導線が長く、スキマ時間にすぐ解き始めにくい課題がありました。',
        },
        architecture: {
            en: 'Built with TypeScript, Next.js, and Chakra UI, deployed on Vercel for fast static/edge delivery.',
            ja: 'TypeScript・Next.js・Chakra UIで軽量に構築し、Vercelで高速配信しています。',
        },
        highlights: {
            en: [
                'Instant quiz start without friction',
                'Responsive layout designed for both mobile and desktop sessions',
                'Clean TypeScript & Next.js component architecture',
            ],
            ja: [
                '迷わずすぐ始められるシンプルな学習導線',
                'スマートフォン・PCどちらでも快適に操作できるレスポンシブ設計',
                'TypeScriptとNext.jsによる見通しのよいコンポーネント構成',
            ],
        },
        techStack: ['TypeScript', 'Next.js', 'Chakra UI', 'Vercel'],
        liveUrl: 'https://word-pop-quiz.vercel.app/',
        githubUrl: 'https://github.com/07130918/word-pop-quiz',
        githubRepoName: 'word-pop-quiz',
    },
    {
        slug: 'scribbles',
        name: 'Scribbles',
        featured: false,
        category: 'chrome-extension',
        categoryLabel: {
            en: 'Chrome Extension',
            ja: 'Chrome拡張機能',
        },
        status: {
            en: 'Published on Chrome Web Store',
            ja: 'Chrome ウェブストア公開中',
        },
        tagline: {
            en: 'Instant notepad right inside your browser toolbar',
            ja: 'ブラウザ上で即座に書ける軽量メモ帳拡張',
        },
        summary: {
            en: 'A minimal Chrome extension for jotting down notes without leaving your current tab.',
            ja: '開いているタブを切り替えずに素早くメモを取れる、シンプルなメモ帳Chrome拡張機能です。',
        },
        problem: {
            en: 'Switching to a heavy note-taking app breaks flow when you only need a scratchpad for a quick thought or snippet.',
            ja: 'ちょっとしたメモやURLを残したいだけのときに別アプリへ切り替えると作業の集中が切れる課題を解決しました。',
        },
        architecture: {
            en: 'Built with TypeScript, React, Chakra UI, and Python tooling, packaged and published on the Chrome Web Store.',
            ja: 'TypeScript・React・Chakra UIとPythonツールで構築し、Chromeウェブストアで一般公開しています。',
        },
        highlights: {
            en: [
                'Zero-friction popup scratchpad accessible from any webpage',
                'Published and maintained on the Chrome Web Store',
                'Clean React + TypeScript extension architecture',
            ],
            ja: [
                'どのWebページからでもワンクリックで開けるメモ体験',
                'Chromeウェブストアでの公開・配布まで完遂',
                'React + TypeScriptによる保守しやすい拡張構成',
            ],
        },
        techStack: [
            'TypeScript',
            'React',
            'Python',
            'Chakra UI',
            'Chrome Extension',
        ],
        liveUrl:
            'https://chromewebstore.google.com/detail/scribbles/kjbdhcdgdcipnifdhnpldjibglpjnjib',
        githubUrl: 'https://github.com/07130918/Scribbles',
        githubRepoName: 'Scribbles',
    },
    {
        slug: 'simple-todo-list',
        name: 'Simple To-Do List',
        featured: false,
        category: 'chrome-extension',
        categoryLabel: {
            en: 'Chrome Extension',
            ja: 'Chrome拡張機能',
        },
        status: {
            en: 'Published on Chrome Web Store',
            ja: 'Chrome ウェブストア公開中',
        },
        tagline: {
            en: 'Minimal task checklist built with Vue.js for Chrome',
            ja: 'Vue.js製のミニマルなタスク管理Chrome拡張',
        },
        summary: {
            en: 'A lightweight browser extension for tracking daily tasks with zero clutter.',
            ja: '余計な機能を削ぎ落とし、日々のタスクを軽快に管理できるChrome拡張機能です。',
        },
        problem: {
            en: 'Full project-management tools are overkill for keeping track of a few quick browser tasks.',
            ja: '数件のちょっとした作業メモに高機能なタスク管理ツールを開く手間を省くために開発しました。',
        },
        architecture: {
            en: 'Implemented with Vue.js and JavaScript as a compact Chrome Extension published to the Chrome Web Store.',
            ja: 'Vue.jsとJavaScriptで軽量に実装し、Chromeウェブストアに公開しています。',
        },
        highlights: {
            en: [
                'Focused single-purpose UI with fast interaction',
                'Built with Vue.js to explore component-driven extension UIs',
                'Publicly available on the Chrome Web Store',
            ],
            ja: [
                '単機能に絞った迷わない操作性',
                'Vue.jsを用いたコンポーネントベースの拡張UI実装',
                'Chromeウェブストアにて一般公開中',
            ],
        },
        techStack: ['JavaScript', 'Vue.js', 'Chrome Extension'],
        liveUrl:
            'https://chromewebstore.google.com/detail/to-do-list/chaiaabmmjdihkcjlpmbadcdmefaljib',
        githubUrl: 'https://github.com/07130918/ChromeExtensions',
        githubRepoName: 'ChromeExtensions',
    },
] as const;

export const EXPERIENCES: readonly ExperienceItem[] = [
    {
        id: 'techsplus',
        company: {
            en: 'TechsPlus Inc.',
            ja: 'TechsPlus株式会社',
        },
        url: 'https://techsplus.co.jp/',
        role: {
            en: 'Software Engineer (Web Applications & APIs)',
            ja: 'ソフトウェアエンジニア (Webアプリケーション / API開発)',
        },
        period: {
            en: 'Current',
            ja: '現在',
        },
        summary: {
            en: 'Developing and operating production web applications and backend APIs used by thousands of users.',
            ja: '数千人が利用するプロダクション環境のWebアプリケーションとバックエンドAPIの設計・開発・運用を担当。',
        },
        highlights: {
            en: [
                'End-to-end feature delivery across frontend UI and backend APIs',
                'Translating ambiguous product requirements into clear interfaces and maintainable systems',
            ],
            ja: [
                'フロントエンドUIからバックエンドAPIまで一貫した機能開発',
                '曖昧な要件を整理し、使いやすく保守性の高いシステムへ落とし込む設計',
            ],
        },
        techStack: ['TypeScript', 'React', 'Next.js', 'Python', 'AWS', 'MySQL'],
    },
    {
        id: 'aice',
        company: {
            en: 'AICE Inc.',
            ja: 'AICE株式会社',
        },
        url: 'https://aice.co.jp/',
        role: {
            en: 'Software Engineer (Web Applications & APIs)',
            ja: 'ソフトウェアエンジニア (Webアプリケーション / API開発)',
        },
        period: {
            en: 'Current',
            ja: '現在',
        },
        summary: {
            en: 'Building user-facing web applications and reliable APIs with a focus on practical UX and clean engineering.',
            ja: 'ユーザー向けWebアプリケーションおよび堅牢なAPIの開発に従事。実用的なUXとクリーンな設計を重視して開発。',
        },
        highlights: {
            en: [
                'Full-stack web application and API implementation',
                'Iterative prototyping and quality-focused delivery in fast-moving teams',
            ],
            ja: [
                'WebアプリケーションおよびAPIのフルスタック実装',
                'スピード感のある開発体制での試作から品質担保までの一貫対応',
            ],
        },
        techStack: ['TypeScript', 'Python', 'React', 'Cloud / APIs'],
    },
] as const;

export const SKILL_GROUPS: readonly SkillGroup[] = [
    {
        id: 'frontend',
        title: {
            en: 'Frontend & UI',
            ja: 'フロントエンド・UI',
        },
        description: {
            en: 'Building accessible, responsive interfaces with strong type safety.',
            ja: '型安全性とアクセシビリティを意識した、レスポンシブで軽快なUI設計・実装。',
        },
        skills: [
            'TypeScript',
            'React',
            'Next.js',
            'Chakra UI',
            'Vue.js',
            'Chrome Extensions',
        ],
    },
    {
        id: 'backend',
        title: {
            en: 'Backend & APIs',
            ja: 'バックエンド・API',
        },
        description: {
            en: 'Designing maintainable APIs and application logic serving thousands of users.',
            ja: '数千人規模の利用に耐える、保守性の高いAPI設計とビジネスロジック実装。',
        },
        skills: ['Python', 'TypeScript', 'REST APIs', 'Authentication (Clerk)'],
    },
    {
        id: 'cloud',
        title: {
            en: 'Database & Cloud',
            ja: 'データベース・クラウド',
        },
        description: {
            en: 'Operating reliable relational, NoSQL, and cloud-native web infrastructure.',
            ja: 'RDB・NoSQLおよびクラウド基盤を活用した安定したWebサービス運用。',
        },
        skills: ['AWS', 'GCP', 'MySQL', 'DynamoDB', 'Vercel'],
    },
    {
        id: 'ai-workflow',
        title: {
            en: 'AI & Developer Workflow',
            ja: 'AI活用・開発ワークフロー',
        },
        description: {
            en: 'Designing structured agent workflows, quality gates, and CI automation.',
            ja: 'AIコーディングエージェントの運用設計やCI自動化による高い開発生産性と品質担保。',
        },
        skills: [
            'Claude Code / Codex',
            'LLM Integration',
            'Biome',
            'GitHub Actions',
        ],
    },
] as const;

export const CERTIFICATIONS: readonly CertificationItem[] = [
    {
        id: 'aws-saa',
        name: 'AWS Certified Solutions Architect – Associate',
        issuer: 'Amazon Web Services',
        badgeSrc: '/images/AWS-badge.png',
        badgeAlt: 'AWS Certified Solutions Architect – Associate badge',
        summary: {
            en: 'Validated expertise in designing resilient, high-performing, secure, and cost-optimized architectures on AWS.',
            ja: 'AWSにおける高可用性・セキュリティ・コスト最適化を踏まえたクラウドアーキテクチャ設計能力を証明する認定資格。',
        },
    },
] as const;

export const VISITED_COUNTRIES: readonly CountryVisit[] = [
    { code: 'JP', flag: '🇯🇵', name: { en: 'Japan', ja: '日本' } },
    { code: 'GB', flag: '🇬🇧', name: { en: 'United Kingdom', ja: 'イギリス' } },
    { code: 'VN', flag: '🇻🇳', name: { en: 'Vietnam', ja: 'ベトナム' } },
    { code: 'SG', flag: '🇸🇬', name: { en: 'Singapore', ja: 'シンガポール' } },
    { code: 'AU', flag: '🇦🇺', name: { en: 'Australia', ja: 'オーストラリア' } },
    { code: 'PH', flag: '🇵🇭', name: { en: 'Philippines', ja: 'フィリピン' } },
    {
        code: 'NZ',
        flag: '🇳🇿',
        name: { en: 'New Zealand', ja: 'ニュージーランド' },
    },
    { code: 'HK', flag: '🇭🇰', name: { en: 'Hong Kong', ja: '香港' } },
    { code: 'MO', flag: '🇲🇴', name: { en: 'Macau', ja: 'マカオ' } },
    { code: 'IT', flag: '🇮🇹', name: { en: 'Italy', ja: 'イタリア' } },
    { code: 'VA', flag: '🇻🇦', name: { en: 'Vatican City', ja: 'バチカン' } },
    { code: 'KR', flag: '🇰🇷', name: { en: 'South Korea', ja: '韓国' } },
    { code: 'TH', flag: '🇹🇭', name: { en: 'Thailand', ja: 'タイ' } },
    { code: 'TW', flag: '🇹🇼', name: { en: 'Taiwan', ja: '台湾' } },
    { code: 'ID', flag: '🇮🇩', name: { en: 'Indonesia', ja: 'インドネシア' } },
] as const;

export const UI_COPY = {
    nav: {
        projects: { en: 'Projects', ja: '制作物' },
        experience: { en: 'Experience', ja: '経歴' },
        skills: { en: 'Skills', ja: 'スキル' },
        contact: { en: 'Contact', ja: 'お問い合わせ' },
        commandPalette: { en: 'Quick menu', ja: 'クイックメニュー' },
        switchThemeToLight: {
            en: 'Switch to light mode',
            ja: 'ライトモードへ切替',
        },
        switchThemeToDark: {
            en: 'Switch to dark mode',
            ja: 'ダークモードへ切替',
        },
    },
    hero: {
        primaryCta: { en: 'Explore NashForge', ja: 'NashForgeを見る' },
        secondaryCta: { en: 'Get in Touch', ja: 'お仕事のご相談' },
        switchPhoto: { en: 'Switch photo', ja: '写真を切替' },
        photoHint: { en: 'Click photo to cycle', ja: 'クリックで写真切替' },
        locationLabel: { en: 'Based in', ja: '拠点' },
        languagesLabel: { en: 'Languages', ja: '言語' },
    },
    projects: {
        eyebrow: { en: 'Selected Work', ja: '主な制作物' },
        title: { en: 'Products & Engineering', ja: 'プロダクトと開発実績' },
        subtitle: {
            en: 'End-to-end web apps, developer tooling, and browser extensions shipped from idea to production.',
            ja: '企画から設計・実装・公開まで一貫して形にしたWebアプリ、開発ツール、ブラウザ拡張機能です。',
        },
        launchApp: { en: 'Launch Live App', ja: 'アプリを開く' },
        viewCaseStudy: { en: 'Case Study', ja: '詳細を見る' },
        viewCode: { en: 'GitHub', ja: 'GitHub' },
        moreProjects: { en: 'More Projects', ja: 'その他のプロジェクト' },
        gtoPreviewLabel: {
            en: 'GTO Decision Drill · poker.k0ta.dev',
            ja: 'GTO意思決定ドリル · poker.k0ta.dev',
        },
        gtoPreviewSpot: {
            en: 'BTN vs BB · 100bb · Flop Strategy',
            ja: 'BTN vs BB · 100bb · フロップ戦略',
        },
    },
    caseStudy: {
        back: { en: 'Back to Portfolio', ja: 'ポートフォリオへ戻る' },
        problemTitle: { en: 'Problem & Motivation', ja: '課題と背景' },
        architectureTitle: {
            en: 'Architecture & Technical Choices',
            ja: 'アーキテクチャと技術選定',
        },
        highlightsTitle: {
            en: 'Engineering Highlights',
            ja: '設計・実装のポイント',
        },
        stackTitle: { en: 'Tech Stack', ja: '使用技術' },
        nextCtaTitle: {
            en: 'Interested in working together?',
            ja: '一緒にプロダクトを作りませんか？',
        },
        nextCtaBody: {
            en: 'Feel free to reach out for full-time roles, product engineering, or freelance web/API projects.',
            ja: '転職・業務委託・WebアプリやAPI開発のご相談など、お気軽にご連絡ください。',
        },
    },
    experience: {
        eyebrow: { en: 'Experience', ja: '経歴' },
        title: { en: 'Where I Build', ja: '現在の活動・実務' },
        subtitle: {
            en: 'Delivering production web applications and APIs in fast-moving teams.',
            ja: 'プロダクト志向のチームで、WebアプリとAPIの設計から運用まで担っています。',
        },
    },
    skills: {
        eyebrow: { en: 'Capabilities', ja: '技術スタック' },
        title: { en: 'Skills & Certifications', ja: 'スキルと認定資格' },
        subtitle: {
            en: 'Pragmatic tools I use daily across frontend, backend, cloud infrastructure, and AI-assisted workflows.',
            ja: 'フロントエンドからバックエンド、クラウド基盤、AI開発ワークフローまで実務と個人開発で活用している技術です。',
        },
        certificationsTitle: { en: 'Certification', ja: '保有資格' },
    },
    about: {
        eyebrow: { en: 'Beyond Code', ja: 'エンジニア以外の関心' },
        title: { en: 'Travel, Poker & Curiosity', ja: '旅とポーカーと好奇心' },
        travelTitle: {
            en: '15 Countries & Regions Visited',
            ja: '訪問した15の国と地域',
        },
        focusTitle: { en: 'Currently Exploring', ja: '最近の関心テーマ' },
        focusBody: {
            en: 'Deepening English fluency and studying game theory through poker — turning that passion directly into NashForge.',
            ja: '英語力の向上とポーカーのゲーム理論(GTO)の探求にハマっており、その熱量をそのままNashForgeの開発へ注いでいます。',
        },
    },
    contact: {
        eyebrow: { en: 'Contact', ja: 'お問い合わせ' },
        title: {
            en: 'Let’s build something meaningful.',
            ja: 'お仕事・ご相談はこちらから',
        },
        subtitle: {
            en: 'Open to full-time engineering roles and freelance web/API projects. Email or X (Twitter) DM is the fastest way to reach me.',
            ja: '転職のご相談や、Webアプリ・API開発の業務委託などお気軽にご連絡ください。メールまたはXのDMが一番スムーズです。',
        },
        copyEmail: { en: 'Copy Email', ja: 'メールをコピー' },
        copiedEmail: { en: 'Copied!', ja: 'コピーしました' },
        sendEmail: { en: 'Send Email', ja: 'メールを送る' },
        dmOnX: { en: 'DM on X', ja: 'XでDMを送る' },
    },
    footer: {
        supportLabel: { en: 'Support indie work:', ja: '個人開発を応援:' },
        shortcutHint: {
            en: 'Press ⌘K / Ctrl+K for quick menu',
            ja: '⌘K / Ctrl+K でクイックメニュー',
        },
    },
    palette: {
        placeholder: {
            en: 'Jump to section, project, or action...',
            ja: 'セクション・制作物・操作を検索...',
        },
        empty: {
            en: 'No matching commands.',
            ja: '該当する項目がありません。',
        },
        close: { en: 'Close', ja: '閉じる' },
        groupNavigate: { en: 'Navigate', ja: 'セクション移動' },
        groupProjects: { en: 'Projects', ja: 'プロジェクト' },
        groupActions: { en: 'Actions', ja: 'クイック操作' },
        toggleLang: {
            en: 'Switch language to 日本語',
            ja: '言語を English に切替',
        },
        toggleTheme: {
            en: 'Toggle Dark / Light theme',
            ja: 'ダーク / ライトテーマ切替',
        },
    },
} as const;

export function getFeaturedProject(): ProjectItem {
    const featured = PROJECTS.find((project) => project.featured);
    return featured ?? PROJECTS[0];
}

export function getSecondaryProjects(): readonly ProjectItem[] {
    return PROJECTS.filter((project) => !project.featured);
}

export function getProjectBySlug(slug: string): ProjectItem | undefined {
    return PROJECTS.find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): readonly string[] {
    return PROJECTS.map((project) => project.slug);
}

export function getLangLabel(lang: Lang): string {
    return lang === 'ja' ? '日本語' : 'English';
}
