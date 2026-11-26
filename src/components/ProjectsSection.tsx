'use client';

import {
    Box,
    Button,
    Container,
    Flex,
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
import { FiArrowUpRight, FiBookOpen, FiCheckCircle } from 'react-icons/fi';
import NashForgeVisual from '@/components/NashForgeVisual';
import { useAppContext } from '@/components/providers';
import {
    getFeaturedProject,
    getSecondaryProjects,
    UI_COPY,
} from '@/lib/profile-data';

export default function ProjectsSection() {
    const { lang } = useAppContext();
    const featured = getFeaturedProject();
    const secondaryProjects = getSecondaryProjects();

    return (
        <Box
            as="section"
            id="projects"
            scrollMarginTop="84px"
            py={{ base: 14, md: 20 }}
            borderBottom="1px solid"
            borderColor="border.subtle"
        >
            <Container maxW="6xl" px={{ base: 4, md: 8 }}>
                <Stack gap={10}>
                    <Stack gap={2.5} maxW="64ch">
                        <Text
                            fontFamily="mono"
                            fontSize="xs"
                            fontWeight="semibold"
                            letterSpacing="0.08em"
                            textTransform="uppercase"
                            color="accent.primary"
                        >
                            {UI_COPY.projects.eyebrow[lang]}
                        </Text>
                        <Heading
                            as="h2"
                            fontSize={{ base: '2xl', md: '4xl' }}
                            fontWeight="bold"
                            letterSpacing="-0.025em"
                            color="fg.primary"
                        >
                            {UI_COPY.projects.title[lang]}
                        </Heading>
                        <Text
                            fontSize="md"
                            color="fg.secondary"
                            lineHeight="1.7"
                        >
                            {UI_COPY.projects.subtitle[lang]}
                        </Text>
                    </Stack>

                    {/* Featured Project: NashForge */}
                    <Box
                        as="article"
                        bg="bg.surface"
                        border="1px solid"
                        borderColor="accent.border"
                        borderRadius="card"
                        p={{ base: 5, md: 8 }}
                        boxShadow="card"
                    >
                        <Grid
                            templateColumns={{
                                base: '1fr',
                                lg: '1.1fr 0.9fr',
                            }}
                            gap={{ base: 7, lg: 10 }}
                            alignItems="center"
                        >
                            <Stack gap={5} align="start">
                                <HStack gap={2} flexWrap="wrap">
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
                                        {featured.categoryLabel[lang]}
                                    </Box>
                                    <Text
                                        fontFamily="mono"
                                        fontSize="xs"
                                        color="fg.muted"
                                    >
                                        {featured.status[lang]}
                                    </Text>
                                </HStack>

                                <Stack gap={2}>
                                    <Heading
                                        as="h3"
                                        fontSize={{ base: '2xl', md: '3xl' }}
                                        fontWeight="bold"
                                        letterSpacing="-0.02em"
                                        color="fg.primary"
                                    >
                                        {featured.name}
                                    </Heading>
                                    <Text
                                        fontSize="md"
                                        fontWeight="medium"
                                        color="accent.primary"
                                    >
                                        {featured.tagline[lang]}
                                    </Text>
                                    <Text
                                        fontSize="sm"
                                        lineHeight="1.75"
                                        color="fg.secondary"
                                    >
                                        {featured.summary[lang]}
                                    </Text>
                                </Stack>

                                <Stack gap={2}>
                                    {featured.highlights[lang].map((point) => (
                                        <HStack
                                            key={point}
                                            align="start"
                                            gap={2.5}
                                            fontSize="sm"
                                            color="fg.secondary"
                                        >
                                            <Box
                                                color="accent.primary"
                                                mt="3px"
                                                flexShrink={0}
                                            >
                                                <FiCheckCircle size={14} />
                                            </Box>
                                            <Text lineHeight="1.6">
                                                {point}
                                            </Text>
                                        </HStack>
                                    ))}
                                </Stack>

                                <Wrap gap={2}>
                                    {featured.techStack.map((tech) => (
                                        <WrapItem key={tech}>
                                            <Box
                                                px={2.5}
                                                py={1}
                                                borderRadius="md"
                                                bg="bg.subtle"
                                                border="1px solid"
                                                borderColor="border.subtle"
                                                fontFamily="mono"
                                                fontSize="xs"
                                                color="fg.secondary"
                                            >
                                                {tech}
                                            </Box>
                                        </WrapItem>
                                    ))}
                                </Wrap>

                                <HStack gap={3} flexWrap="wrap" pt={1}>
                                    {featured.liveUrl && (
                                        <Button
                                            asChild
                                            bg="accent.primary"
                                            color="accent.onPrimary"
                                            fontWeight="semibold"
                                            borderRadius="md"
                                            _hover={{
                                                bg: 'accent.primaryHover',
                                            }}
                                        >
                                            <a
                                                href={featured.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                {
                                                    UI_COPY.projects.launchApp[
                                                        lang
                                                    ]
                                                }
                                                <FiArrowUpRight />
                                            </a>
                                        </Button>
                                    )}
                                    <Link
                                        href={`/projects/${featured.slug}`}
                                        style={{ textDecoration: 'none' }}
                                    >
                                        <Button
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
                                            <FiBookOpen />
                                            {
                                                UI_COPY.projects.viewCaseStudy[
                                                    lang
                                                ]
                                            }
                                        </Button>
                                    </Link>
                                </HStack>
                            </Stack>

                            <NashForgeVisual />
                        </Grid>
                    </Box>

                    {/* Secondary Projects Grid */}
                    <Stack gap={5}>
                        <Text
                            fontFamily="mono"
                            fontSize="xs"
                            fontWeight="semibold"
                            letterSpacing="0.08em"
                            textTransform="uppercase"
                            color="fg.muted"
                        >
                            {UI_COPY.projects.moreProjects[lang]}
                        </Text>

                        <Grid
                            templateColumns={{
                                base: '1fr',
                                md: 'repeat(2, 1fr)',
                            }}
                            gap={5}
                        >
                            {secondaryProjects.map((project) => (
                                <Flex
                                    key={project.slug}
                                    as="article"
                                    direction="column"
                                    justify="space-between"
                                    gap={5}
                                    bg="bg.surface"
                                    border="1px solid"
                                    borderColor="border.subtle"
                                    borderRadius="card"
                                    p={6}
                                    boxShadow="card"
                                    transition="border-color 0.15s ease, transform 0.15s ease, box-shadow 0.15s ease"
                                    _hover={{
                                        borderColor: 'border.strong',
                                        transform: 'translateY(-2px)',
                                        boxShadow: 'cardHover',
                                    }}
                                >
                                    <Stack gap={3}>
                                        <Flex
                                            justify="space-between"
                                            align="center"
                                            gap={2}
                                            flexWrap="wrap"
                                        >
                                            <Text
                                                fontFamily="mono"
                                                fontSize="2xs"
                                                fontWeight="semibold"
                                                color="accent.primary"
                                                textTransform="uppercase"
                                                letterSpacing="0.05em"
                                            >
                                                {project.categoryLabel[lang]}
                                            </Text>
                                            <Text
                                                fontFamily="mono"
                                                fontSize="2xs"
                                                color="fg.muted"
                                            >
                                                {project.status[lang]}
                                            </Text>
                                        </Flex>

                                        <Heading
                                            as="h3"
                                            fontSize="xl"
                                            fontWeight="bold"
                                            letterSpacing="-0.015em"
                                            color="fg.primary"
                                        >
                                            {project.name}
                                        </Heading>

                                        <Text
                                            fontSize="sm"
                                            color="fg.secondary"
                                            lineHeight="1.7"
                                        >
                                            {project.summary[lang]}
                                        </Text>
                                    </Stack>

                                    <Stack gap={4}>
                                        <Wrap gap={1.5}>
                                            {project.techStack.map((tech) => (
                                                <WrapItem key={tech}>
                                                    <Box
                                                        px={2}
                                                        py={0.5}
                                                        borderRadius="sm"
                                                        bg="bg.subtle"
                                                        border="1px solid"
                                                        borderColor="border.subtle"
                                                        fontFamily="mono"
                                                        fontSize="2xs"
                                                        color="fg.secondary"
                                                    >
                                                        {tech}
                                                    </Box>
                                                </WrapItem>
                                            ))}
                                        </Wrap>

                                        <HStack
                                            gap={4}
                                            pt={3}
                                            borderTop="1px solid"
                                            borderColor="border.subtle"
                                            fontSize="sm"
                                            fontWeight="medium"
                                            flexWrap="wrap"
                                        >
                                            <Link
                                                href={`/projects/${project.slug}`}
                                                style={{
                                                    textDecoration: 'none',
                                                }}
                                            >
                                                <HStack
                                                    gap={1.5}
                                                    color="accent.primary"
                                                    _hover={{
                                                        color: 'accent.primaryHover',
                                                    }}
                                                >
                                                    <FiBookOpen size={14} />
                                                    <Text>
                                                        {
                                                            UI_COPY.projects
                                                                .viewCaseStudy[
                                                                lang
                                                            ]
                                                        }
                                                    </Text>
                                                </HStack>
                                            </Link>

                                            {project.liveUrl && (
                                                <Box
                                                    asChild
                                                    display="inline-flex"
                                                    alignItems="center"
                                                    gap={1}
                                                    color="fg.secondary"
                                                    _hover={{
                                                        color: 'fg.primary',
                                                    }}
                                                >
                                                    <a
                                                        href={project.liveUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <span>Live</span>
                                                        <FiArrowUpRight
                                                            size={14}
                                                        />
                                                    </a>
                                                </Box>
                                            )}

                                            {project.githubUrl && (
                                                <Box
                                                    asChild
                                                    display="inline-flex"
                                                    alignItems="center"
                                                    gap={1.5}
                                                    color="fg.secondary"
                                                    _hover={{
                                                        color: 'fg.primary',
                                                    }}
                                                >
                                                    <a
                                                        href={project.githubUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <FaGithub size={14} />
                                                        <span>
                                                            {
                                                                UI_COPY.projects
                                                                    .viewCode[
                                                                    lang
                                                                ]
                                                            }
                                                        </span>
                                                    </a>
                                                </Box>
                                            )}
                                        </HStack>
                                    </Stack>
                                </Flex>
                            ))}
                        </Grid>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
}
