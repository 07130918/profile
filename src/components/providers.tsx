'use client';
import { ChakraProvider } from '@chakra-ui/react';
import type { Dispatch, SetStateAction } from 'react';
import { createContext, Suspense, useState } from 'react';
import { system } from '@/lib/theme';

type Lang = 'en' | 'ja';

const language = { en: 'en', ja: 'ja' } as const;
export const LangContext = createContext({
    lang: language.en,
    setLang: (() => {}) as Dispatch<SetStateAction<Lang>>,
} as {
    lang: Lang;
    setLang: Dispatch<SetStateAction<Lang>>;
});

export function Providers({ children }: { children: React.ReactNode }) {
    const [lang, setLang] = useState<Lang>(language.en);
    return (
        <LangContext.Provider value={{ lang, setLang }}>
            <ChakraProvider value={system}>
                <Suspense>{children}</Suspense>
            </ChakraProvider>
        </LangContext.Provider>
    );
}
