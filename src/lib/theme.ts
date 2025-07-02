import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';

const customConfig = defineConfig({
    theme: {
        tokens: {
            fonts: {
                heading: { value: `'Inter', sans-serif` },
                body: { value: `'Inter', sans-serif` },
            },
            colors: {
                bg: {
                    canvas: { value: '#000000' },
                },
                fg: {
                    default: { value: '#ffffff' },
                },
            },
        },
        semanticTokens: {
            colors: {
                bg: {
                    DEFAULT: { value: '{colors.bg.canvas}' },
                },
                fg: {
                    DEFAULT: { value: '{colors.fg.default}' },
                },
            },
        },
    },
    globalCss: {
        'html, body': {
            backgroundColor: 'bg',
            color: 'fg',
        },
        // SVGアイコンの色は保持する
        svg: {
            color: 'inherit !important',
        },
    },
});

export const system = createSystem(defaultConfig, customConfig);
