import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ProjectCaseStudy from '@/components/ProjectCaseStudy';
import {
    getAllProjectSlugs,
    getProjectBySlug,
    PROFILE,
    SITE_URL,
} from '@/lib/profile-data';

interface ProjectPageProps {
    params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
    return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
    params,
}: ProjectPageProps): Promise<Metadata> {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        return {};
    }

    const url = `${SITE_URL}/projects/${project.slug}`;

    return {
        title: `${project.name} — Case Study`,
        description: project.summary.en,
        alternates: {
            canonical: url,
        },
        openGraph: {
            title: `${project.name} | ${PROFILE.name}`,
            description: project.summary.en,
            url,
            type: 'article',
        },
        twitter: {
            card: 'summary_large_image',
            title: `${project.name} | ${PROFILE.name}`,
            description: project.summary.en,
        },
    };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    return <ProjectCaseStudy project={project} />;
}
