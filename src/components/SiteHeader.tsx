'use client';

import { Box, Button, Container, Flex, HStack, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { FiCommand, FiMoon, FiSun } from 'react-icons/fi';
import { useAppContext } from '@/components/providers';
import { PROFILE, UI_COPY } from '@/lib/profile-data';

const NAV_ITEMS = [
    { href: '/#projects', key: 'projects' },
    { href: '/#experience', key: 'experience' },
    { href: '/#skills', key: 'skills' },
    { href: '/#contact', key: 'contact' },
] as const;

export default function SiteHeader() {
    const { lang, setLang, setPaletteOpen } = useAppContext();
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const isDark = !mounted || resolvedTheme === 'dark';

    const handleToggleTheme = () => {
        setTheme(isDark ? 'light' : 'dark');
    };

    return (
        <Box
            as="header"
            position="sticky"
            top={0}
            zIndex={50}
            bg="bg.header"
            backdropFilter="blur(14px)"
            borderBottom="1px solid"
            borderColor="border.subtle"
        >
            <Container maxW="6xl" px={{ base: 4, md: 8 }}>
                <Flex
                    h={{ base: '60px', md: '68px' }}
                    align="center"
                    justify="space-between"
                    gap={4}
                >
                    <Link href="/" style={{ textDecoration: 'none' }}>
                        <HStack gap={2} align="center">
                            <Box
                                w="8px"
                                h="8px"
                                borderRadius="full"
                                bg="accent.primary"
                            />
                            <Text
                                fontFamily="mono"
                                fontSize="sm"
                                fontWeight="semibold"
                                letterSpacing="-0.02em"
                                color="fg.primary"
                            >
                                {PROFILE.brand}
                            </Text>
                        </HStack>
                    </Link>

                    <Box
                        as="nav"
                        aria-label="Primary navigation"
                        display={{ base: 'none', md: 'flex' }}
                        alignItems="center"
                        gap={1}
                    >
                        {NAV_ITEMS.map((item) => (
                            <Link
                                key={item.key}
                                href={item.href}
                                style={{ textDecoration: 'none' }}
                            >
                                <Box
                                    px={3}
                                    py={1.5}
                                    borderRadius="md"
                                    fontSize="sm"
                                    fontWeight="medium"
                                    color="fg.secondary"
                                    transition="color 0.15s ease, background-color 0.15s ease"
                                    _hover={{
                                        color: 'fg.primary',
                                        bg: 'bg.subtle',
                                    }}
                                >
                                    {UI_COPY.nav[item.key][lang]}
                                </Box>
                            </Link>
                        ))}
                    </Box>

                    <HStack gap={2}>
                        <Button
                            size="sm"
                            variant="outline"
                            onClick={() => setPaletteOpen(true)}
                            aria-label={UI_COPY.nav.commandPalette[lang]}
                            h="34px"
                            px={{ base: 2.5, md: 3 }}
                            borderRadius="md"
                            borderColor="border.subtle"
                            bg="bg.surface"
                            color="fg.muted"
                            fontFamily="mono"
                            fontSize="xs"
                            _hover={{
                                borderColor: 'border.strong',
                                color: 'fg.primary',
                                bg: 'bg.surfaceHover',
                            }}
                        >
                            <FiCommand size={13} />
                            <Text
                                as="span"
                                display={{ base: 'none', sm: 'inline' }}
                            >
                                K
                            </Text>
                        </Button>

                        <HStack
                            role="group"
                            aria-label="Language selector"
                            gap={0}
                            p="2px"
                            h="34px"
                            bg="bg.surface"
                            border="1px solid"
                            borderColor="border.subtle"
                            borderRadius="md"
                        >
                            {(['en', 'ja'] as const).map((code) => {
                                const active = lang === code;
                                return (
                                    <Button
                                        key={code}
                                        size="xs"
                                        variant="ghost"
                                        h="28px"
                                        minW="36px"
                                        px={2}
                                        borderRadius="sm"
                                        fontFamily="mono"
                                        fontSize="xs"
                                        fontWeight={
                                            active ? 'semibold' : 'medium'
                                        }
                                        bg={
                                            active
                                                ? 'accent.soft'
                                                : 'transparent'
                                        }
                                        color={
                                            active
                                                ? 'accent.primary'
                                                : 'fg.muted'
                                        }
                                        _hover={{
                                            bg: active
                                                ? 'accent.soft'
                                                : 'bg.subtle',
                                            color: active
                                                ? 'accent.primary'
                                                : 'fg.primary',
                                        }}
                                        onClick={() => setLang(code)}
                                        aria-pressed={active}
                                    >
                                        {code.toUpperCase()}
                                    </Button>
                                );
                            })}
                        </HStack>

                        <Button
                            size="sm"
                            variant="outline"
                            onClick={handleToggleTheme}
                            aria-label={
                                isDark
                                    ? UI_COPY.nav.switchThemeToLight[lang]
                                    : UI_COPY.nav.switchThemeToDark[lang]
                            }
                            h="34px"
                            w="34px"
                            minW="34px"
                            p={0}
                            borderRadius="md"
                            borderColor="border.subtle"
                            bg="bg.surface"
                            color="fg.secondary"
                            _hover={{
                                borderColor: 'border.strong',
                                color: 'fg.primary',
                                bg: 'bg.surfaceHover',
                            }}
                        >
                            {isDark ? (
                                <FiSun size={15} />
                            ) : (
                                <FiMoon size={15} />
                            )}
                        </Button>
                    </HStack>
                </Flex>
            </Container>
        </Box>
    );
}
