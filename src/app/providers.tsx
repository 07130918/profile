'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import { Dispatch, SetStateAction, createContext, useState } from 'react';

type Lang = 'en' | 'ja';

const language = { en: 'en', ja: 'ja' } as const;
export const LangContext = createContext(
    {} as {
        lang: Lang;
        setLang: Dispatch<SetStateAction<Lang>>;
    },
);

export function Providers({ children }: { children: React.ReactNode }) {
    const [lang, setLang] = useState<Lang>(language.en);
    return (
        <CacheProvider>
            <LangContext.Provider value={{ lang, setLang }}>
                <ChakraProvider>{children}</ChakraProvider>
            </LangContext.Provider>
        </CacheProvider>
    );
}
