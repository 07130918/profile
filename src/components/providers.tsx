'use client';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
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

export function Providers({ children }: { children: React.ReactNode }) {
    const [lang, setLang] = useState<Lang>(language.en);
    return (
        <LangContext.Provider value={{ lang, setLang }}>
            <ChakraProvider value={defaultSystem}>
                <style jsx global>{`
                    html, body {
                        background-color: #000 !important;
                        color: #fff !important;
                    }
                    *:not(svg):not(path) {
                        color: white;
                    }
                `}</style>
                <Suspense>{children}</Suspense>
            </ChakraProvider>
        </LangContext.Provider>
    );
}
