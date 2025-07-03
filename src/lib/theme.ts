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
