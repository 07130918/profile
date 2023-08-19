import { Providers } from '@/components/providers';
import { Metadata } from 'next';
import Head from 'next/head';

export const metadata: Metadata = {
    title: 'Hi! This is Kota.',
    description: 'This is a portfolio web page of Kota.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <Head>
                <link rel='icon' href='/favicon.ico' sizes='any' />
            </Head>
            <body>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
