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
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { FiArrowLeft, FiArrowUpRight, FiCheckCircle } from 'react-icons/fi';
import NashForgeVisual from '@/components/NashForgeVisual';
import { useAppContext } from '@/components/providers';
import { UI_COPY } from '@/lib/profile-data';
import type { ProjectItem } from '@/lib/types';

interface Props {
    project: ProjectItem;
}

export default function ProjectCaseStudy({ project }: Props) {
    const { lang } = useAppContext();

    return (
        <Box as="main" py={{ base: 10, md: 16 }}>
            <Container maxW="4xl" px={{ base: 4, md: 8 }}>
                <Stack gap={10}>
                    <Link href="/#projects" style={{ textDecoration: 'none' }}>
                        <HStack
                            gap={2}
                            fontSize="sm"
                            fontWeight="medium"
                            color="fg.muted"
                            _hover={{ color: 'accent.primary' }}
                        >
                            <FiArrowLeft size={15} />
                            <Text>{UI_COPY.caseStudy.back[lang]}</Text>
                        </HStack>
                    </Link>

                    <Stack gap={4}>
                        <HStack gap={2.5} flexWrap="wrap">
                            <Box
                                px={2.5}
                                py={0.5}
                                borderRadius="pill"
                                bg="accent.soft"
                                color="accent.primary"
                                fontFamily="mono"
                                fontSize="xs"
                                fontWeight="semibold"
                            >
                                {project.categoryLabel[lang]}
                            </Box>
                            <Text
                                fontFamily="mono"
                                fontSize="xs"
                                color="fg.muted"
                            >
                                {project.status[lang]}
                            </Text>
                        </HStack>

                        <Heading
                            as="h1"
                            fontSize={{ base: '3xl', md: '5xl' }}
                            fontWeight="bold"
                            letterSpacing="-0.03em"
                            color="fg.primary"
                        >
                            {project.name}
                        </Heading>

                        <Text
                            fontSize={{ base: 'lg', md: 'xl' }}
                            color="accent.primary"
                            fontWeight="medium"
                        >
                            {project.tagline[lang]}
                        </Text>

                        <Text
                            fontSize="md"
                            color="fg.secondary"
                            lineHeight="1.8"
                        >
                            {project.summary[lang]}
                        </Text>

                        <HStack gap={3} pt={2} flexWrap="wrap">
                            {project.liveUrl && (
                                <Button
                                    asChild
                                    bg="accent.primary"
                                    color="accent.onPrimary"
                                    fontWeight="semibold"
                                    borderRadius="md"
                                    _hover={{ bg: 'accent.primaryHover' }}
                                >
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {UI_COPY.projects.launchApp[lang]}
                                        <FiArrowUpRight />
                                    </a>
                                </Button>
                            )}
                            {project.githubUrl && (
                                <Button
                                    asChild
                                    variant="outline"
                                    borderColor="border.strong"
                                    bg="bg.surface"
                                    color="fg.primary"
                                    fontWeight="semibold"
                                    borderRadius="md"
                                    _hover={{ bg: 'bg.surfaceHover' }}
                                >
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaGithub />
                                        {project.githubRepoName ?? 'GitHub'}
                                    </a>
                                </Button>
                            )}
                        </HStack>
                    </Stack>

                    {project.slug === 'nashforge' && <NashForgeVisual />}

                    <Grid
                        templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
                        gap={5}
                    >
                        <Stack
                            gap={3}
                            bg="bg.surface"
                            border="1px solid"
                            borderColor="border.subtle"
                            borderRadius="card"
                            p={6}
                        >
                            <Heading
                                as="h2"
                                fontSize="lg"
                                fontWeight="semibold"
                                color="fg.primary"
                            >
                                {UI_COPY.caseStudy.problemTitle[lang]}
                            </Heading>
                            <Text
                                fontSize="sm"
                                color="fg.secondary"
                                lineHeight="1.8"
                            >
                                {project.problem[lang]}
                            </Text>
                        </Stack>

                        <Stack
                            gap={3}
                            bg="bg.surface"
                            border="1px solid"
                            borderColor="border.subtle"
                            borderRadius="card"
                            p={6}
                        >
                            <Heading
                                as="h2"
                                fontSize="lg"
                                fontWeight="semibold"
                                color="fg.primary"
                            >
                                {UI_COPY.caseStudy.architectureTitle[lang]}
                            </Heading>
                            <Text
                                fontSize="sm"
                                color="fg.secondary"
                                lineHeight="1.8"
                            >
                                {project.architecture[lang]}
                            </Text>
                        </Stack>
                    </Grid>

                    <Stack
                        gap={4}
                        bg="bg.surface"
                        border="1px solid"
                        borderColor="border.subtle"
                        borderRadius="card"
                        p={6}
                    >
                        <Heading
                            as="h2"
                            fontSize="lg"
                            fontWeight="semibold"
                            color="fg.primary"
                        >
                            {UI_COPY.caseStudy.highlightsTitle[lang]}
                        </Heading>
                        <Stack gap={3}>
                            {project.highlights[lang].map((highlight) => (
                                <HStack
                                    key={highlight}
                                    align="start"
                                    gap={3}
                                    fontSize="sm"
                                    color="fg.secondary"
                                >
                                    <Box
                                        color="accent.primary"
                                        mt="3px"
                                        flexShrink={0}
                                    >
                                        <FiCheckCircle size={15} />
                                    </Box>
                                    <Text lineHeight="1.7">{highlight}</Text>
                                </HStack>
                            ))}
                        </Stack>
                    </Stack>

                    <Stack gap={3}>
                        <Heading
                            as="h2"
                            fontSize="sm"
                            fontFamily="mono"
                            textTransform="uppercase"
                            letterSpacing="0.06em"
                            color="fg.muted"
                        >
                            {UI_COPY.caseStudy.stackTitle[lang]}
                        </Heading>
                        <Wrap gap={2}>
                            {project.techStack.map((tech) => (
                                <WrapItem key={tech}>
                                    <Box
                                        px={3}
                                        py={1.5}
                                        borderRadius="md"
                                        bg="bg.surface"
                                        border="1px solid"
                                        borderColor="border.subtle"
                                        fontFamily="mono"
                                        fontSize="xs"
                                        color="fg.primary"
                                    >
                                        {tech}
                                    </Box>
                                </WrapItem>
                            ))}
                        </Wrap>
                    </Stack>

                    <Stack
                        gap={3}
                        p={6}
                        borderRadius="card"
                        bg="bg.surface"
                        border="1px solid"
                        borderColor="accent.border"
                    >
                        <Heading
                            as="h2"
                            fontSize="xl"
                            fontWeight="bold"
                            color="fg.primary"
                        >
                            {UI_COPY.caseStudy.nextCtaTitle[lang]}
                        </Heading>
                        <Text
                            fontSize="sm"
                            color="fg.secondary"
                            lineHeight="1.7"
                        >
                            {UI_COPY.caseStudy.nextCtaBody[lang]}
                        </Text>
                        <Box pt={1}>
                            <Link
                                href="/#contact"
                                style={{ textDecoration: 'none' }}
                            >
                                <Button
                                    bg="accent.primary"
                                    color="accent.onPrimary"
                                    fontWeight="semibold"
                                    borderRadius="md"
                                    _hover={{ bg: 'accent.primaryHover' }}
                                >
                                    {UI_COPY.hero.secondaryCta[lang]}
                                </Button>
                            </Link>
                        </Box>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
}
