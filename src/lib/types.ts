export type Lang = 'en' | 'ja';

export type LocalizedText = Readonly<Record<Lang, string>>;

export type LocalizedList = Readonly<Record<Lang, readonly string[]>>;

export type ProjectCategory =
    | 'web-app'
    | 'developer-tools'
    | 'chrome-extension';

export interface ProjectItem {
    readonly slug: string;
    readonly name: string;
    readonly featured: boolean;
    readonly category: ProjectCategory;
    readonly categoryLabel: LocalizedText;
    readonly status: LocalizedText;
    readonly tagline: LocalizedText;
    readonly summary: LocalizedText;
    readonly problem: LocalizedText;
    readonly architecture: LocalizedText;
    readonly highlights: LocalizedList;
    readonly techStack: readonly string[];
    readonly liveUrl?: string;
    readonly githubUrl?: string;
    readonly githubRepoName?: string;
}

export interface ExperienceItem {
    readonly id: string;
    readonly company: LocalizedText;
    readonly url: string;
    readonly role: LocalizedText;
    readonly period: LocalizedText;
    readonly summary: LocalizedText;
    readonly highlights: LocalizedList;
    readonly techStack: readonly string[];
}

export interface SkillGroup {
    readonly id: string;
    readonly title: LocalizedText;
    readonly description: LocalizedText;
    readonly skills: readonly string[];
}

export interface CertificationItem {
    readonly id: string;
    readonly name: string;
    readonly issuer: string;
    readonly badgeSrc: string;
    readonly badgeAlt: string;
    readonly summary: LocalizedText;
}

export interface CountryVisit {
    readonly code: string;
    readonly flag: string;
    readonly name: LocalizedText;
}
