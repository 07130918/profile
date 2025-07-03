import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';

const customConfig = defineConfig({
    theme: {
        tokens: {
            fonts: {
                heading: {
                    value: `'SF Pro JP', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif`,
                },
                body: {
                    value: `'SF Pro JP', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif`,
                },
            },
            colors: {
                bg: {
                    canvas: { value: '#000000' },
                },
            },
            radii: {
                lg: { value: '0.75rem' },
                full: { value: '9999px' },
            },
            shadows: {
                card: {
                    value: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                },
                cardHover: {
                    value: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                },
            },
        },
        semanticTokens: {
            colors: {
                bg: {
                    DEFAULT: { value: '{colors.bg.canvas}' },
                },
            },
        },
    },
    globalCss: {
        'html, body': {
            backgroundColor: 'bg',
            color: 'fg',
            fontSmooth: 'antialiased',
            textRendering: 'optimizeLegibility',
        },
        '*': {
            transition: 'all 0.2s ease-in-out',
        },
        svg: {
            color: 'inherit !important',
        },
    },
});

export const system = createSystem(defaultConfig, customConfig);
