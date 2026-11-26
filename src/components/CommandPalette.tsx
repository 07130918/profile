'use client';

import { Box, Flex, HStack, Input, Stack, Text } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';
import { useEffect, useMemo, useRef, useState } from 'react';
import {
    FiArrowRight,
    FiCopy,
    FiGlobe,
    FiSearch,
    FiSun,
    FiX,
} from 'react-icons/fi';
import { useAppContext } from '@/components/providers';
import { PROFILE, PROJECTS, UI_COPY } from '@/lib/profile-data';

interface PaletteAction {
    id: string;
    group: 'navigate' | 'projects' | 'actions';
    label: string;
    hint?: string;
    run: () => void;
}

export default function CommandPalette() {
    const { lang, setLang, isPaletteOpen, setPaletteOpen } = useAppContext();
    const { resolvedTheme, setTheme } = useTheme();
    const router = useRouter();
    const [query, setQuery] = useState('');
    const [activeIndex, setActiveIndex] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);

    const closePalette = () => {
        setPaletteOpen(false);
        setQuery('');
        setActiveIndex(0);
    };

    const actions = useMemo<PaletteAction[]>(() => {
        const navigateActions: PaletteAction[] = [
            {
                id: 'nav-projects',
                group: 'navigate',
                label: UI_COPY.nav.projects[lang],
                hint: '#projects',
                run: () => router.push('/#projects'),
            },
            {
                id: 'nav-experience',
                group: 'navigate',
                label: UI_COPY.nav.experience[lang],
                hint: '#experience',
                run: () => router.push('/#experience'),
            },
            {
                id: 'nav-skills',
                group: 'navigate',
                label: UI_COPY.nav.skills[lang],
                hint: '#skills',
                run: () => router.push('/#skills'),
            },
            {
                id: 'nav-contact',
                group: 'navigate',
                label: UI_COPY.nav.contact[lang],
                hint: '#contact',
                run: () => router.push('/#contact'),
            },
        ];

        const projectActions: PaletteAction[] = PROJECTS.map((project) => ({
            id: `project-${project.slug}`,
            group: 'projects',
            label: project.name,
            hint: project.tagline[lang],
            run: () => router.push(`/projects/${project.slug}`),
        }));

        const quickActions: PaletteAction[] = [
            {
                id: 'action-copy-email',
                group: 'actions',
                label: UI_COPY.contact.copyEmail[lang],
                hint: PROFILE.email,
                run: () => {
                    navigator.clipboard
                        .writeText(PROFILE.email)
                        .catch(() => {});
                },
            },
            {
                id: 'action-toggle-lang',
                group: 'actions',
                label: UI_COPY.palette.toggleLang[lang],
                hint: lang === 'en' ? 'JA' : 'EN',
                run: () => setLang(lang === 'en' ? 'ja' : 'en'),
            },
            {
                id: 'action-toggle-theme',
                group: 'actions',
                label: UI_COPY.palette.toggleTheme[lang],
                hint: resolvedTheme === 'dark' ? 'Light' : 'Dark',
                run: () =>
                    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark'),
            },
        ];

        return [...navigateActions, ...projectActions, ...quickActions];
    }, [lang, resolvedTheme, router, setLang, setTheme]);

    const filtered = useMemo(() => {
        const normalized = query.trim().toLowerCase();
        if (!normalized) {
            return actions;
        }
        return actions.filter(
            (item) =>
                item.label.toLowerCase().includes(normalized) ||
                item.hint?.toLowerCase().includes(normalized),
        );
    }, [actions, query]);

    useEffect(() => {
        if (!isPaletteOpen) {
            return;
        }
        const timer = window.setTimeout(() => inputRef.current?.focus(), 10);
        return () => window.clearTimeout(timer);
    }, [isPaletteOpen]);

    if (!isPaletteOpen) {
        return null;
    }

    const executeAction = (action: PaletteAction) => {
        action.run();
        closePalette();
    };

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'Escape') {
            event.preventDefault();
            closePalette();
            return;
        }
        if (event.key === 'ArrowDown') {
            event.preventDefault();
            setActiveIndex((prev) =>
                filtered.length === 0 ? 0 : (prev + 1) % filtered.length,
            );
            return;
        }
        if (event.key === 'ArrowUp') {
            event.preventDefault();
            setActiveIndex((prev) =>
                filtered.length === 0
                    ? 0
                    : (prev - 1 + filtered.length) % filtered.length,
            );
            return;
        }
        if (event.key === 'Enter' && filtered[activeIndex]) {
            event.preventDefault();
            executeAction(filtered[activeIndex]);
        }
    };

    const getActionIcon = (action: PaletteAction) => {
        if (action.id === 'action-copy-email') {
            return <FiCopy size={14} />;
        }
        if (action.id === 'action-toggle-lang') {
            return <FiGlobe size={14} />;
        }
        if (action.id === 'action-toggle-theme') {
            return <FiSun size={14} />;
        }
        return <FiArrowRight size={14} />;
    };

    return (
        <Box
            role="dialog"
            aria-modal="true"
            aria-label={UI_COPY.nav.commandPalette[lang]}
            position="fixed"
            inset={0}
            zIndex={200}
            bg="rgba(0, 0, 0, 0.58)"
            backdropFilter="blur(6px)"
            display="flex"
            alignItems="flex-start"
            justifyContent="center"
            pt={{ base: '10vh', md: '14vh' }}
            px={4}
            onClick={closePalette}
            onKeyDown={handleKeyDown}
        >
            <Box
                w="100%"
                maxW="560px"
                bg="bg.surface"
                border="1px solid"
                borderColor="border.strong"
                borderRadius="card"
                boxShadow="cardHover"
                overflow="hidden"
                onClick={(event) => event.stopPropagation()}
            >
                <HStack
                    px={4}
                    py={3}
                    borderBottom="1px solid"
                    borderColor="border.subtle"
                    gap={3}
                >
                    <Box color="fg.muted">
                        <FiSearch size={16} />
                    </Box>
                    <Input
                        ref={inputRef}
                        value={query}
                        onChange={(event) => {
                            setQuery(event.target.value);
                            setActiveIndex(0);
                        }}
                        placeholder={UI_COPY.palette.placeholder[lang]}
                        border="none"
                        outline="none"
                        boxShadow="none"
                        bg="transparent"
                        color="fg.primary"
                        fontSize="sm"
                        px={0}
                        _focusVisible={{ outline: 'none', boxShadow: 'none' }}
                    />
                    <Box
                        asChild
                        color="fg.muted"
                        cursor="pointer"
                        p={1}
                        borderRadius="md"
                        _hover={{ color: 'fg.primary', bg: 'bg.subtle' }}
                    >
                        <button
                            type="button"
                            onClick={closePalette}
                            aria-label={UI_COPY.palette.close[lang]}
                        >
                            <FiX size={16} />
                        </button>
                    </Box>
                </HStack>

                <Stack maxH="360px" overflowY="auto" p={2} gap={1}>
                    {filtered.length === 0 ? (
                        <Text
                            py={8}
                            textAlign="center"
                            fontSize="sm"
                            color="fg.muted"
                        >
                            {UI_COPY.palette.empty[lang]}
                        </Text>
                    ) : (
                        filtered.map((action, index) => {
                            const selected = index === activeIndex;
                            return (
                                <Flex
                                    key={action.id}
                                    asChild
                                    w="100%"
                                    align="center"
                                    justify="space-between"
                                    gap={3}
                                    px={3}
                                    py={2.5}
                                    borderRadius="md"
                                    cursor="pointer"
                                    textAlign="left"
                                    bg={
                                        selected ? 'accent.soft' : 'transparent'
                                    }
                                    color={
                                        selected
                                            ? 'accent.primary'
                                            : 'fg.primary'
                                    }
                                >
                                    <button
                                        type="button"
                                        onMouseEnter={() =>
                                            setActiveIndex(index)
                                        }
                                        onClick={() => executeAction(action)}
                                    >
                                        <HStack gap={2.5} minW={0}>
                                            <Box
                                                color={
                                                    selected
                                                        ? 'accent.primary'
                                                        : 'fg.muted'
                                                }
                                                flexShrink={0}
                                            >
                                                {getActionIcon(action)}
                                            </Box>
                                            <Text
                                                fontSize="sm"
                                                fontWeight="medium"
                                                truncate
                                            >
                                                {action.label}
                                            </Text>
                                        </HStack>
                                        {action.hint && (
                                            <Text
                                                fontFamily="mono"
                                                fontSize="2xs"
                                                color="fg.muted"
                                                truncate
                                                maxW="220px"
                                            >
                                                {action.hint}
                                            </Text>
                                        )}
                                    </button>
                                </Flex>
                            );
                        })
                    )}
                </Stack>
            </Box>
        </Box>
    );
}
