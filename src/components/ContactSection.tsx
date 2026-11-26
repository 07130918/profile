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
    Wrap,
    WrapItem,
} from '@chakra-ui/react';
import { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FiCheck, FiCopy, FiMail } from 'react-icons/fi';
import { useAppContext } from '@/components/providers';
import { PROFILE, UI_COPY, VISITED_COUNTRIES } from '@/lib/profile-data';

export default function ContactSection() {
    const { lang } = useAppContext();
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = async () => {
        try {
            await navigator.clipboard.writeText(PROFILE.email);
            setCopied(true);
            window.setTimeout(() => setCopied(false), 2000);
        } catch {
            window.location.href = PROFILE.links.email;
        }
    };

    return (
        <Box
            as="section"
            id="contact"
            scrollMarginTop="84px"
            py={{ base: 14, md: 20 }}
        >
            <Container maxW="6xl" px={{ base: 4, md: 8 }}>
                <Grid
                    templateColumns={{ base: '1fr', lg: '1fr 1fr' }}
                    gap={6}
                    alignItems="stretch"
                >
                    {/* Beyond Code */}
                    <Stack
                        gap={5}
                        bg="bg.surface"
                        border="1px solid"
                        borderColor="border.subtle"
                        borderRadius="card"
                        p={{ base: 6, md: 8 }}
                        boxShadow="card"
                        justify="space-between"
                    >
                        <Stack gap={4}>
                            <Stack gap={2}>
                                <Text
                                    fontFamily="mono"
                                    fontSize="xs"
                                    fontWeight="semibold"
                                    letterSpacing="0.08em"
                                    textTransform="uppercase"
                                    color="accent.primary"
                                >
                                    {UI_COPY.about.eyebrow[lang]}
                                </Text>
                                <Heading
                                    as="h2"
                                    fontSize={{ base: 'xl', md: '2xl' }}
                                    fontWeight="bold"
                                    letterSpacing="-0.02em"
                                    color="fg.primary"
                                >
                                    {UI_COPY.about.title[lang]}
                                </Heading>
                            </Stack>

                            <Text
                                fontSize="sm"
                                color="fg.secondary"
                                lineHeight="1.75"
                            >
                                {PROFILE.philosophy[lang]}
                            </Text>

                            <Stack gap={1.5}>
                                <Text
                                    fontFamily="mono"
                                    fontSize="xs"
                                    fontWeight="semibold"
                                    color="fg.primary"
                                >
                                    {UI_COPY.about.focusTitle[lang]}
                                </Text>
                                <Text
                                    fontSize="sm"
                                    color="fg.secondary"
                                    lineHeight="1.7"
                                >
                                    {UI_COPY.about.focusBody[lang]}
                                </Text>
                            </Stack>
                        </Stack>

                        <Stack
                            gap={3}
                            pt={4}
                            borderTop="1px solid"
                            borderColor="border.subtle"
                        >
                            <Text
                                fontFamily="mono"
                                fontSize="xs"
                                fontWeight="semibold"
                                color="fg.muted"
                            >
                                {UI_COPY.about.travelTitle[lang]}
                            </Text>
                            <Wrap gap={1.5}>
                                {VISITED_COUNTRIES.map((country) => (
                                    <WrapItem key={country.code}>
                                        <HStack
                                            gap={1.5}
                                            px={2.5}
                                            py={1}
                                            borderRadius="md"
                                            bg="bg.subtle"
                                            border="1px solid"
                                            borderColor="border.subtle"
                                            fontSize="xs"
                                            color="fg.secondary"
                                        >
                                            <span aria-hidden="true">
                                                {country.flag}
                                            </span>
                                            <span>{country.name[lang]}</span>
                                        </HStack>
                                    </WrapItem>
                                ))}
                            </Wrap>
                        </Stack>
                    </Stack>

                    {/* Contact CTA */}
                    <Stack
                        gap={6}
                        bg="bg.surface"
                        border="1px solid"
                        borderColor="accent.border"
                        borderRadius="card"
                        p={{ base: 6, md: 8 }}
                        boxShadow="card"
                        justify="space-between"
                    >
                        <Stack gap={3}>
                            <Text
                                fontFamily="mono"
                                fontSize="xs"
                                fontWeight="semibold"
                                letterSpacing="0.08em"
                                textTransform="uppercase"
                                color="accent.primary"
                            >
                                {UI_COPY.contact.eyebrow[lang]}
                            </Text>
                            <Heading
                                as="h2"
                                fontSize={{ base: '2xl', md: '3xl' }}
                                fontWeight="bold"
                                letterSpacing="-0.025em"
                                color="fg.primary"
                            >
                                {UI_COPY.contact.title[lang]}
                            </Heading>
                            <Text
                                fontSize="sm"
                                color="fg.secondary"
                                lineHeight="1.75"
                            >
                                {UI_COPY.contact.subtitle[lang]}
                            </Text>
                        </Stack>

                        <Stack gap={4}>
                            <HStack
                                justify="space-between"
                                align="center"
                                p={3.5}
                                borderRadius="lg"
                                bg="bg.canvas"
                                border="1px solid"
                                borderColor="border.subtle"
                                gap={3}
                                flexWrap="wrap"
                            >
                                <HStack gap={2.5} minW={0}>
                                    <Box color="accent.primary" flexShrink={0}>
                                        <FiMail size={16} />
                                    </Box>
                                    <Text
                                        fontFamily="mono"
                                        fontSize="sm"
                                        fontWeight="medium"
                                        color="fg.primary"
                                        wordBreak="break-all"
                                    >
                                        {PROFILE.email}
                                    </Text>
                                </HStack>

                                <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={handleCopyEmail}
                                    borderColor="border.strong"
                                    bg="bg.surface"
                                    color={
                                        copied
                                            ? 'status.available'
                                            : 'fg.primary'
                                    }
                                    fontFamily="mono"
                                    fontSize="xs"
                                    _hover={{ bg: 'bg.surfaceHover' }}
                                >
                                    {copied ? (
                                        <FiCheck size={14} />
                                    ) : (
                                        <FiCopy size={14} />
                                    )}
                                    {copied
                                        ? UI_COPY.contact.copiedEmail[lang]
                                        : UI_COPY.contact.copyEmail[lang]}
                                </Button>
                            </HStack>

                            <HStack gap={3} flexWrap="wrap">
                                <Button
                                    asChild
                                    flex="1"
                                    minW="150px"
                                    bg="accent.primary"
                                    color="accent.onPrimary"
                                    fontWeight="semibold"
                                    borderRadius="md"
                                    _hover={{ bg: 'accent.primaryHover' }}
                                >
                                    <a href={PROFILE.links.email}>
                                        <FiMail />
                                        {UI_COPY.contact.sendEmail[lang]}
                                    </a>
                                </Button>

                                <Button
                                    asChild
                                    flex="1"
                                    minW="150px"
                                    variant="outline"
                                    borderColor="border.strong"
                                    bg="bg.canvas"
                                    color="fg.primary"
                                    fontWeight="semibold"
                                    borderRadius="md"
                                    _hover={{
                                        bg: 'bg.surfaceHover',
                                        borderColor: 'accent.border',
                                    }}
                                >
                                    <a
                                        href={PROFILE.links.x}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaXTwitter />
                                        {UI_COPY.contact.dmOnX[lang]}
                                    </a>
                                </Button>
                            </HStack>

                            <HStack
                                gap={4}
                                pt={2}
                                borderTop="1px solid"
                                borderColor="border.subtle"
                                fontSize="sm"
                                color="fg.muted"
                                flexWrap="wrap"
                            >
                                <Box
                                    asChild
                                    display="inline-flex"
                                    alignItems="center"
                                    gap={1.5}
                                    _hover={{ color: 'fg.primary' }}
                                >
                                    <a
                                        href={PROFILE.links.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaGithub size={15} />
                                        <span>
                                            github.com/{PROFILE.handles.github}
                                        </span>
                                    </a>
                                </Box>

                                <Box
                                    asChild
                                    display="inline-flex"
                                    alignItems="center"
                                    gap={1.5}
                                    _hover={{ color: 'fg.primary' }}
                                >
                                    <a
                                        href={PROFILE.links.linkedIn}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaLinkedin size={15} />
                                        <span>LinkedIn</span>
                                    </a>
                                </Box>
                            </HStack>
                        </Stack>
                    </Stack>
                </Grid>
            </Container>
        </Box>
    );
}
