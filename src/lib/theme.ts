import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';

const customConfig = defineConfig({
    theme: {
        tokens: {
            fonts: {
                heading: {
                    value: `var(--font-sans), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`,
                },
                body: {
                    value: `var(--font-sans), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`,
                },
                mono: {
                    value: `var(--font-mono), ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`,
                },
            },
            radii: {
                card: { value: '1rem' },
                pill: { value: '9999px' },
            },
        },
        semanticTokens: {
            colors: {
                bg: {
                    canvas: {
                        value: { _light: '#F8FAFC', _dark: '#0B0E14' },
                    },
                    surface: {
                        value: { _light: '#FFFFFF', _dark: '#111622' },
                    },
                    surfaceHover: {
                        value: { _light: '#F1F5F9', _dark: '#161C2C' },
                    },
                    subtle: {
                        value: { _light: '#EEF2F7', _dark: '#161D2B' },
                    },
                    header: {
                        value: {
                            _light: 'rgba(248, 250, 252, 0.82)',
                            _dark: 'rgba(11, 14, 20, 0.82)',
                        },
                    },
                },
                fg: {
                    primary: {
                        value: { _light: '#0F172A', _dark: '#F8FAFC' },
                    },
                    secondary: {
                        value: { _light: '#334155', _dark: '#CBD5E1' },
                    },
                    muted: {
                        value: { _light: '#64748B', _dark: '#94A3B8' },
                    },
                },
                border: {
                    subtle: {
                        value: {
                            _light: 'rgba(15, 23, 42, 0.09)',
                            _dark: 'rgba(255, 255, 255, 0.08)',
                        },
                    },
                    strong: {
                        value: {
                            _light: 'rgba(15, 23, 42, 0.18)',
                            _dark: 'rgba(255, 255, 255, 0.16)',
                        },
                    },
                },
                accent: {
                    primary: {
                        value: { _light: '#1D6FE2', _dark: '#4D9FFF' },
                    },
                    primaryHover: {
                        value: { _light: '#155BC0', _dark: '#74B5FF' },
                    },
                    soft: {
                        value: {
                            _light: 'rgba(29, 111, 226, 0.09)',
                            _dark: 'rgba(77, 159, 255, 0.12)',
                        },
                    },
                    border: {
                        value: {
                            _light: 'rgba(29, 111, 226, 0.28)',
                            _dark: 'rgba(77, 159, 255, 0.30)',
                        },
                    },
                    onPrimary: {
                        value: { _light: '#FFFFFF', _dark: '#08111F' },
                    },
                },
                status: {
                    available: {
                        value: { _light: '#059669', _dark: '#34D399' },
                    },
                    availableSoft: {
                        value: {
                            _light: 'rgba(5, 150, 105, 0.10)',
                            _dark: 'rgba(52, 211, 153, 0.12)',
                        },
                    },
                },
            },
            shadows: {
                card: {
                    value: {
                        _light: '0 1px 2px rgba(15, 23, 42, 0.05), 0 8px 24px rgba(15, 23, 42, 0.04)',
                        _dark: '0 1px 2px rgba(0, 0, 0, 0.35), 0 12px 32px rgba(0, 0, 0, 0.28)',
                    },
                },
                cardHover: {
                    value: {
                        _light: '0 4px 12px rgba(15, 23, 42, 0.08), 0 16px 36px rgba(15, 23, 42, 0.07)',
                        _dark: '0 8px 24px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(77, 159, 255, 0.22)',
                    },
                },
            },
        },
    },
    globalCss: {
        html: {
            scrollBehavior: 'smooth',
            backgroundColor: 'bg.canvas',
            color: 'fg.primary',
            '@media (prefers-reduced-motion: reduce)': {
                scrollBehavior: 'auto',
            },
        },
        body: {
            backgroundColor: 'bg.canvas',
            color: 'fg.primary',
            fontFamily: 'body',
            fontSmooth: 'antialiased',
            textRendering: 'optimizeLegibility',
        },
        'a:focus-visible, button:focus-visible, [tabindex]:focus-visible': {
            outline: '2px solid',
            outlineColor: 'accent.primary',
            outlineOffset: '2px',
        },
        '*, *::before, *::after': {
            '@media (prefers-reduced-motion: reduce)': {
                animationDuration: '0.01ms !important',
                animationIterationCount: '1 !important',
                transitionDuration: '0.01ms !important',
            },
        },
    },
});

export const system = createSystem(defaultConfig, customConfig);
