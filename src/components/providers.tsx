'use client';
import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import type { Dispatch, SetStateAction } from 'react';
import { Suspense, createContext, useState } from 'react';

type Lang = 'en' | 'ja';

const language = { en: 'en', ja: 'ja' } as const;
export const LangContext = createContext({
    lang: language.en,
    setLang: (() => {}) as Dispatch<SetStateAction<Lang>>,
} as {
    lang: Lang;
    setLang: Dispatch<SetStateAction<Lang>>;
});

const theme = extendTheme({
    config: {
        initialColorMode: 'dark',
        useSystemColorMode: false,
    },
    styles: {
        global: {
            body: {
                bg: '#000',
                color: '#fff',
            },
        },
    },
    colors: {
        gray: {
            700: '#2d2d2d',
            800: '#1f1f1f',
            900: '#171717',
        },
    },
});

export function Providers({ children }: { children: React.ReactNode }) {
    const [lang, setLang] = useState<Lang>(language.en);
    return (
        <CacheProvider>
            <LangContext.Provider value={{ lang, setLang }}>
                <ChakraProvider theme={theme}>
                    <Suspense>{children}</Suspense>
                </ChakraProvider>
            </LangContext.Provider>
        </CacheProvider>
    );
}
