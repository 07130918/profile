import { Providers } from "./providers";

export const metadata = {
    title: "Kota's profile",
    description: 'This is a portfolio site of Kota.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    );
};
