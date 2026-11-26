import { describe, expect, it } from 'vitest';
import {
    AVATAR_COUNT,
    CERTIFICATIONS,
    EXPERIENCES,
    getAllProjectSlugs,
    getFeaturedProject,
    getInitialAvatarIndex,
    getNextAvatarIndex,
    getProjectBySlug,
    getSecondaryProjects,
    PROFILE,
    PROJECTS,
    SITE_URL,
    SKILL_GROUPS,
    VISITED_COUNTRIES,
} from '@/lib/profile-data';

describe('profile-data integrity', () => {
    it('defines a featured NashForge project and unique slugs', () => {
        const featured = getFeaturedProject();
        expect(featured.slug).toBe('nashforge');
        expect(featured.liveUrl).toBe('https://poker.k0ta.dev/');

        const slugs = getAllProjectSlugs();
        expect(new Set(slugs).size).toBe(PROJECTS.length);
        expect(getSecondaryProjects().length).toBe(PROJECTS.length - 1);
    });

    it('looks up projects by slug safely', () => {
        expect(getProjectBySlug('nashforge')?.name).toBe('NashForge');
        expect(getProjectBySlug('agents')?.name).toBe('Agents');
        expect(getProjectBySlug('non-existent')).toBeUndefined();
    });

    it('provides non-empty EN and JA copy for all projects and experiences', () => {
        for (const project of PROJECTS) {
            expect(project.tagline.en.length).toBeGreaterThan(0);
            expect(project.tagline.ja.length).toBeGreaterThan(0);
            expect(project.summary.en.length).toBeGreaterThan(0);
            expect(project.summary.ja.length).toBeGreaterThan(0);
            expect(project.highlights.en.length).toBeGreaterThan(0);
            expect(project.highlights.ja.length).toBe(
                project.highlights.en.length,
            );
        }

        for (const exp of EXPERIENCES) {
            expect(exp.company.en.length).toBeGreaterThan(0);
            expect(exp.company.ja.length).toBeGreaterThan(0);
            expect(exp.highlights.en.length).toBe(exp.highlights.ja.length);
        }

        for (const group of SKILL_GROUPS) {
            expect(group.skills.length).toBeGreaterThan(0);
        }

        expect(CERTIFICATIONS.length).toBeGreaterThan(0);
        expect(VISITED_COUNTRIES.length).toBe(15);
    });

    it('uses modern canonical links without deprecated domains', () => {
        expect(SITE_URL).toBe('https://profile.k0ta.dev');
        expect(PROFILE.links.x).toMatch(/^https:\/\/x\.com\//);
        expect(PROFILE.links.github).toBe('https://github.com/07130918');

        for (const project of PROJECTS) {
            if (project.liveUrl) {
                expect(project.liveUrl).toMatch(/^https:\/\//);
                expect(project.liveUrl).not.toContain('chrome.google.com');
            }
            if (project.githubUrl) {
                expect(project.githubUrl).toMatch(/^https:\/\/github\.com\//);
            }
        }
    });
});

describe('avatar selection helpers', () => {
    it('returns deterministic initial avatar index for SSR safety', () => {
        expect(getInitialAvatarIndex('linkedIn')).toBe(0);
        expect(getInitialAvatarIndex('job-hunting')).toBe(0);
        expect(getInitialAvatarIndex(null)).toBe(1);
        expect(getInitialAvatarIndex('twitter')).toBe(1);
    });

    it('cycles avatar indices cleanly within bounds', () => {
        expect(getNextAvatarIndex(0)).toBe(1);
        expect(getNextAvatarIndex(AVATAR_COUNT - 1)).toBe(0);
    });
});
