import type { Metadata } from 'next';
import { Providers } from '@/components/providers';

export const metadata: Metadata = {
    title: 'Hi! This is Kota.',
    description: 'This is a portfolio web page of Kota.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
