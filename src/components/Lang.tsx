'use client';
import { LangContext } from '@/components/providers';
import { Box, Button, HStack } from '@chakra-ui/react';
import { useContext } from 'react';

type LangType = 'en' | 'ja';

const Lang = () => {
    const { lang, setLang } = useContext(LangContext);

    const handleLangChange = (newLang: LangType) => {
        if (newLang === lang) return;
        setLang(newLang);
    };

    const handleKeyDown = (event: React.KeyboardEvent, newLang: LangType) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            handleLangChange(newLang);
        }
    };

    return (
        <Box
            // biome-ignore lint/a11y/useSemanticElements:
            role="region"
            aria-label="Language selector"
        >
            <HStack
                gap={0}
                bg="rgba(0, 0, 0, 0.8)"
                backdropFilter="blur(10px)"
                borderRadius="full"
                border="1px solid"
                borderColor="whiteAlpha.200"
                p={1}
                shadow="xl"
                position="relative"
                overflow="hidden"
                minW={{ base: '120px', md: '140px' }}
                h={{ base: '44px', md: '48px' }}
            >
                <Box
                    position="absolute"
                    top="4px"
                    w="calc(50% - 4px)"
                    h="calc(100% - 8px)"
                    bgGradient="to-r"
                    gradientFrom="#667eea"
                    gradientTo="#764ba2"
                    borderRadius="full"
                    shadow="lg"
                    zIndex={1}
                    left={lang === 'en' ? '4px' : 'calc(50% + 2px)'}
                    transition="left 0.2s ease"
                />
                <Button
                    variant="ghost"
                    size="sm"
                    w="50%"
                    h="100%"
                    borderRadius="full"
                    fontWeight={lang === 'en' ? '700' : '500'}
                    fontSize={{ base: 'xs', md: 'sm' }}
                    color={lang === 'en' ? 'white' : 'whiteAlpha.700'}
                    bg="transparent"
                    _hover={{ bg: 'transparent', transform: 'scale(1.02)' }}
                    _active={{ bg: 'transparent', transform: 'scale(0.98)' }}
                    _focus={{
                        bg: 'transparent',
                        outline: '2px solid',
                        outlineColor: 'whiteAlpha.600',
                        outlineOffset: '2px',
                    }}
                    onClick={() => handleLangChange('en')}
                    onKeyDown={(e) => handleKeyDown(e, 'en')}
                    aria-label="Switch to English"
                    aria-pressed={lang === 'en'}
                    tabIndex={0}
                    position="relative"
                    zIndex={2}
                    cursor="pointer"
                    transition="all 0.1s ease"
                >
                    EN
                </Button>
                <Button
                    variant="ghost"
                    size="sm"
                    w="50%"
                    h="100%"
                    borderRadius="full"
                    fontWeight={lang === 'ja' ? '700' : '500'}
                    fontSize={{ base: 'xs', md: 'sm' }}
                    color={lang === 'ja' ? 'white' : 'whiteAlpha.700'}
                    bg="transparent"
                    _hover={{ bg: 'transparent', transform: 'scale(1.02)' }}
                    _active={{ bg: 'transparent', transform: 'scale(0.98)' }}
                    _focus={{
                        bg: 'transparent',
                        outline: '2px solid',
                        outlineColor: 'whiteAlpha.600',
                        outlineOffset: '2px',
                    }}
                    onClick={() => handleLangChange('ja')}
                    onKeyDown={(e) => handleKeyDown(e, 'ja')}
                    aria-label="Switch to Japanese"
                    aria-pressed={lang === 'ja'}
                    tabIndex={0}
                    position="relative"
                    zIndex={2}
                    cursor="pointer"
                    transition="all 0.1s ease"
                >
                    JA
                </Button>
            </HStack>
        </Box>
    );
};

export default Lang;
