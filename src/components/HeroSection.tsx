'use client';

import {
    Box,
    Button,
    Container,
    Grid,
    Heading,
    HStack,
    Stack,
    Text,
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import {
    FiArrowRight,
    FiGlobe,
    FiMail,
    FiMapPin,
    FiRefreshCw,
} from 'react-icons/fi';
import { useAppContext } from '@/components/providers';
import {
    AVATAR_COUNT,
    getInitialAvatarIndex,
    getNextAvatarIndex,
    PROFILE,
    UI_COPY,
} from '@/lib/profile-data';

const SOCIAL_LINKS = [
    {
        label: 'GitHub',
        href: PROFILE.links.github,
        Icon: FaGithub,
    },
    {
        label: 'X',
        href: PROFILE.links.x,
        Icon: FaXTwitter,
    },
    {
        label: 'LinkedIn',
        href: PROFILE.links.linkedIn,
        Icon: FaLinkedin,
    },
    {
        label: 'Email',
        href: PROFILE.links.email,
        Icon: FiMail,
    },
] as const;

export default function HeroSection() {
    const { lang } = useAppContext();
    const searchParams = useSearchParams();
    const initialIndex = getInitialAvatarIndex(searchParams.get('ref'));
    const [avatarIndex, setAvatarIndex] = useState<number>(initialIndex);

    const handleCyclePhoto = () => {
        setAvatarIndex((current) => getNextAvatarIndex(current));
    };

    return (
        <Box
            as="section"
            position="relative"
            overflow="hidden"
            pt={{ base: 12, md: 20 }}
            pb={{ base: 14, md: 20 }}
            borderBottom="1px solid"
            borderColor="border.subtle"
        >
            <Box
                aria-hidden="true"
                position="absolute"
                top="-140px"
                left="50%"
                transform="translateX(-50%)"
                w="100%"
                maxW="900px"
                h="420px"
                pointerEvents="none"
                background="radial-gradient(ellipse at center, rgba(77, 159, 255, 0.14) 0%, rgba(77, 159, 255, 0) 68%)"
            />

            <Container maxW="6xl" px={{ base: 4, md: 8 }} position="relative">
                <Grid
                    templateColumns={{ base: '1fr', lg: '1.35fr 0.65fr' }}
                    gap={{ base: 10, lg: 12 }}
                    alignItems="center"
                >
                    <Stack gap={6} align="start">
                        <HStack
                            px={3}
                            py={1.5}
                            borderRadius="pill"
                            bg="status.availableSoft"
                            border="1px solid"
                            borderColor="border.subtle"
                            gap={2}
                        >
                            <Box
                                w="8px"
                                h="8px"
                                borderRadius="full"
                                bg="status.available"
                            />
                            <Text
                                fontSize="xs"
                                fontWeight="semibold"
                                color="status.available"
                                letterSpacing="0.01em"
                            >
                                {PROFILE.availability[lang]}
                            </Text>
                        </HStack>

                        <Stack gap={3}>
                            <HStack gap={3} align="baseline" flexWrap="wrap">
                                <Heading
                                    as="h1"
                                    fontSize={{
                                        base: '4xl',
                                        md: '5xl',
                                        lg: '6xl',
                                    }}
                                    fontWeight="bold"
                                    letterSpacing="-0.03em"
                                    lineHeight="1.08"
                                    color="fg.primary"
                                >
                                    {PROFILE.name}
                                </Heading>
                                <Text
                                    fontFamily="mono"
                                    fontSize="sm"
                                    color="fg.muted"
                                >
                                    ({PROFILE.pronouns})
                                </Text>
                            </HStack>

                            <Text
                                fontFamily="mono"
                                fontSize={{ base: 'sm', md: 'md' }}
                                color="accent.primary"
                                fontWeight="medium"
                            >
                                {PROFILE.role[lang]}
                            </Text>
                        </Stack>

                        <Stack gap={3} maxW="62ch">
                            <Text
                                fontSize={{ base: 'xl', md: '2xl' }}
                                fontWeight="semibold"
                                lineHeight="1.35"
                                letterSpacing="-0.015em"
                                color="fg.primary"
                            >
                                {PROFILE.headline[lang]}
                            </Text>
                            <Text
                                fontSize={{ base: 'md', md: 'lg' }}
                                lineHeight="1.75"
                                color="fg.secondary"
                            >
                                {PROFILE.bio[lang]}
                            </Text>
                        </Stack>

                        <HStack gap={3} flexWrap="wrap" pt={1}>
                            <Link
                                href="/projects/nashforge"
                                style={{ textDecoration: 'none' }}
                            >
                                <Button
                                    size="lg"
                                    bg="accent.primary"
                                    color="accent.onPrimary"
                                    fontWeight="semibold"
                                    px={6}
                                    borderRadius="md"
                                    _hover={{ bg: 'accent.primaryHover' }}
                                >
                                    {UI_COPY.hero.primaryCta[lang]}
                                    <FiArrowRight />
                                </Button>
                            </Link>

                            <Link
                                href="/#contact"
                                style={{ textDecoration: 'none' }}
                            >
                                <Button
                                    size="lg"
                                    variant="outline"
                                    borderColor="border.strong"
                                    bg="bg.surface"
                                    color="fg.primary"
                                    fontWeight="semibold"
                                    px={6}
                                    borderRadius="md"
                                    _hover={{
                                        bg: 'bg.surfaceHover',
                                        borderColor: 'accent.border',
                                    }}
                                >
                                    {UI_COPY.hero.secondaryCta[lang]}
                                </Button>
                            </Link>
                        </HStack>

                        <HStack gap={2} flexWrap="wrap" pt={1}>
                            {SOCIAL_LINKS.map(({ label, href, Icon }) => {
                                const isExternal = href.startsWith('http');
                                return (
                                    <Box
                                        key={label}
                                        asChild
                                        display="inline-flex"
                                        alignItems="center"
                                        gap={2}
                                        px={3}
                                        py={1.5}
                                        borderRadius="md"
                                        border="1px solid"
                                        borderColor="border.subtle"
                                        bg="bg.surface"
                                        color="fg.secondary"
                                        fontSize="sm"
                                        fontWeight="medium"
                                        transition="border-color 0.15s ease, color 0.15s ease, background-color 0.15s ease"
                                        _hover={{
                                            borderColor: 'border.strong',
                                            color: 'fg.primary',
                                            bg: 'bg.surfaceHover',
                                        }}
                                    >
                                        <a
                                            href={href}
                                            target={
                                                isExternal
                                                    ? '_blank'
                                                    : undefined
                                            }
                                            rel={
                                                isExternal
                                                    ? 'noopener noreferrer'
                                                    : undefined
                                            }
                                        >
                                            <Icon size={15} />
                                            <span>{label}</span>
                                        </a>
                                    </Box>
                                );
                            })}
                        </HStack>
                    </Stack>

                    <Box
                        bg="bg.surface"
                        border="1px solid"
                        borderColor="border.subtle"
                        borderRadius="card"
                        p={5}
                        boxShadow="card"
                        maxW={{ base: '340px', lg: '100%' }}
                        w="100%"
                        mx={{ base: 'auto', lg: 0 }}
                    >
                        <Box
                            asChild
                            position="relative"
                            display="block"
                            w="100%"
                            aspectRatio={1}
                            borderRadius="lg"
                            overflow="hidden"
                            border="1px solid"
                            borderColor="border.subtle"
                            cursor="pointer"
                            p={0}
                            bg="bg.subtle"
                            transition="transform 0.2s ease, border-color 0.2s ease"
                            _hover={{
                                borderColor: 'accent.border',
                                transform: 'translateY(-1px)',
                            }}
                        >
                            <button
                                type="button"
                                onClick={handleCyclePhoto}
                                aria-label={UI_COPY.hero.switchPhoto[lang]}
                            >
                                <Image
                                    src={`/images/me/${avatarIndex}.jpg`}
                                    alt={PROFILE.name}
                                    fill
                                    priority
                                    sizes="(max-width: 768px) 300px, 340px"
                                    style={{ objectFit: 'cover' }}
                                />
                                <HStack
                                    position="absolute"
                                    bottom={2.5}
                                    right={2.5}
                                    px={2.5}
                                    py={1}
                                    borderRadius="pill"
                                    bg="rgba(11, 14, 20, 0.72)"
                                    backdropFilter="blur(8px)"
                                    color="#F8FAFC"
                                    fontFamily="mono"
                                    fontSize="2xs"
                                    gap={1.5}
                                >
                                    <FiRefreshCw size={11} />
                                    <Text as="span">
                                        {avatarIndex + 1}/{AVATAR_COUNT}
                                    </Text>
                                </HStack>
                            </button>
                        </Box>

                        <Stack gap={2.5} pt={4}>
                            <HStack
                                justify="space-between"
                                fontSize="xs"
                                color="fg.muted"
                            >
                                <HStack gap={1.5}>
                                    <FiMapPin size={13} />
                                    <Text>
                                        {UI_COPY.hero.locationLabel[lang]}
                                    </Text>
                                </HStack>
                                <Text fontWeight="medium" color="fg.primary">
                                    {PROFILE.location[lang]}
                                </Text>
                            </HStack>

                            <HStack
                                justify="space-between"
                                align="start"
                                gap={2}
                                flexWrap="wrap"
                                fontSize="xs"
                                color="fg.muted"
                                borderTop="1px solid"
                                borderColor="border.subtle"
                                pt={2.5}
                            >
                                <HStack gap={1.5} flexShrink={0}>
                                    <FiGlobe size={13} />
                                    <Text>
                                        {UI_COPY.hero.languagesLabel[lang]}
                                    </Text>
                                </HStack>
                                <Text
                                    fontWeight="medium"
                                    color="fg.primary"
                                    textAlign="right"
                                >
                                    {PROFILE.languages[lang]}
                                </Text>
                            </HStack>

                            <Text
                                fontFamily="mono"
                                fontSize="2xs"
                                color="fg.muted"
                                textAlign="right"
                                pt={1}
                            >
                                {UI_COPY.hero.photoHint[lang]}
                            </Text>
                        </Stack>
                    </Box>
                </Grid>
            </Container>
        </Box>
    );
}
