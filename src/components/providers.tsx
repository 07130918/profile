'use client';

import { ChakraProvider } from '@chakra-ui/react';
import { ThemeProvider } from 'next-themes';
import {
    createContext,
    type Dispatch,
    type ReactNode,
    type SetStateAction,
    Suspense,
    useContext,
    useEffect,
    useState,
} from 'react';
import { system } from '@/lib/theme';
import type { Lang } from '@/lib/types';

const LANG_STORAGE_KEY = 'k0ta-profile-lang';

interface AppContextValue {
    lang: Lang;
    setLang: (nextLang: Lang) => void;
    isPaletteOpen: boolean;
    setPaletteOpen: Dispatch<SetStateAction<boolean>>;
}

const AppContext = createContext<AppContextValue>({
    lang: 'en',
    setLang: () => {},
    isPaletteOpen: false,
    setPaletteOpen: () => {},
});

export function useAppContext(): AppContextValue {
    return useContext(AppContext);
}

export function Providers({ children }: { children: ReactNode }) {
    const [lang, setLangState] = useState<Lang>('en');
    const [isPaletteOpen, setPaletteOpen] = useState(false);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const queryLang = params.get('lang');
        if (queryLang === 'en' || queryLang === 'ja') {
            setLangState(queryLang);
            window.localStorage.setItem(LANG_STORAGE_KEY, queryLang);
            return;
        }

        const stored = window.localStorage.getItem(LANG_STORAGE_KEY);
        if (stored === 'en' || stored === 'ja') {
            setLangState(stored);
            return;
        }

        if (navigator.language.toLowerCase().startsWith('ja')) {
            setLangState('ja');
        }
    }, []);

    useEffect(() => {
        document.documentElement.lang = lang;
    }, [lang]);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (
                (event.metaKey || event.ctrlKey) &&
                event.key.toLowerCase() === 'k'
            ) {
                event.preventDefault();
                setPaletteOpen((prev) => !prev);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const setLang = (nextLang: Lang) => {
        setLangState(nextLang);
        window.localStorage.setItem(LANG_STORAGE_KEY, nextLang);
    };

    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            disableTransitionOnChange
        >
            <AppContext.Provider
                value={{ lang, setLang, isPaletteOpen, setPaletteOpen }}
            >
                <ChakraProvider value={system}>
                    <Suspense>{children}</Suspense>
                </ChakraProvider>
            </AppContext.Provider>
        </ThemeProvider>
    );
}
