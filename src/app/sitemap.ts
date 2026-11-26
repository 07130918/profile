import type { MetadataRoute } from 'next';
import { getAllProjectSlugs, SITE_URL } from '@/lib/profile-data';

export default function sitemap(): MetadataRoute.Sitemap {
    const projectEntries: MetadataRoute.Sitemap = getAllProjectSlugs().map(
        (slug) => ({
            url: `${SITE_URL}/projects/${slug}`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        }),
    );

    return [
        {
            url: SITE_URL,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        ...projectEntries,
    ];
}
