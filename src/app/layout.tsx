import type { Metadata, Viewport } from 'next';
import { JetBrains_Mono, Noto_Sans_JP } from 'next/font/google';
import CommandPalette from '@/components/CommandPalette';
import { Providers } from '@/components/providers';
import SiteFooter from '@/components/SiteFooter';
import SiteHeader from '@/components/SiteHeader';
import { PROFILE, SITE_URL } from '@/lib/profile-data';

const notoSansJp = Noto_Sans_JP({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-sans',
    display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
    subsets: ['latin'],
    variable: '--font-mono',
    display: 'swap',
});

export const viewport: Viewport = {
    themeColor: [
        { media: '(prefers-color-scheme: dark)', color: '#0B0E14' },
        { media: '(prefers-color-scheme: light)', color: '#F8FAFC' },
    ],
};

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: `${PROFILE.name} — Software Engineer Portfolio`,
        template: `%s | ${PROFILE.name}`,
    },
    description:
        'Portfolio of Kota Ikeda, a Tokyo-based software engineer building full-stack web applications, APIs, and NashForge (GTO poker strategy trainer).',
    keywords: [
        'Kota Ikeda',
        'Software Engineer',
        'Full-Stack Engineer',
        'Next.js',
        'TypeScript',
        'React',
        'Python',
        'AWS',
        'NashForge',
        'Portfolio',
    ],
    authors: [{ name: PROFILE.name, url: SITE_URL }],
    creator: PROFILE.name,
    alternates: {
        canonical: SITE_URL,
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        alternateLocale: ['ja_JP'],
        url: SITE_URL,
        siteName: `${PROFILE.name} (${PROFILE.brand})`,
        title: `${PROFILE.name} — Software Engineer Portfolio`,
        description:
            'Full-stack web applications, APIs, and NashForge — portfolio of Kota Ikeda in Tokyo.',
    },
    twitter: {
        card: 'summary_large_image',
        title: `${PROFILE.name} — Software Engineer Portfolio`,
        description:
            'Full-stack web applications, APIs, and NashForge — portfolio of Kota Ikeda in Tokyo.',
        creator: PROFILE.handles.x,
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: PROFILE.name,
    url: SITE_URL,
    email: PROFILE.links.email,
    jobTitle: 'Software Engineer',
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Tokyo',
        addressCountry: 'JP',
    },
    sameAs: [
        PROFILE.links.github,
        PROFILE.links.x,
        PROFILE.links.linkedIn,
        'https://poker.k0ta.dev/',
    ],
    knowsAbout: [
        'TypeScript',
        'React',
        'Next.js',
        'Python',
        'AWS',
        'Google Cloud Platform',
        'Web Application Engineering',
        'API Design',
    ],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            suppressHydrationWarning
            className={`${notoSansJp.variable} ${jetbrainsMono.variable}`}
        >
            <body>
                <script
                    type="application/ld+json"
                    // biome-ignore lint/security/noDangerouslySetInnerHtml: Static JSON-LD structured data for SEO
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(personJsonLd),
                    }}
                />
                <Providers>
                    <SiteHeader />
                    {children}
                    <SiteFooter />
                    <CommandPalette />
                </Providers>
            </body>
        </html>
    );
}
