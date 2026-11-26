'use client';

import {
    Box,
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
import { FiArrowUpRight, FiCheckCircle } from 'react-icons/fi';
import { useAppContext } from '@/components/providers';
import { EXPERIENCES, UI_COPY } from '@/lib/profile-data';

export default function ExperienceSection() {
    const { lang } = useAppContext();

    return (
        <Box
            as="section"
            id="experience"
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
                            {UI_COPY.experience.eyebrow[lang]}
                        </Text>
                        <Heading
                            as="h2"
                            fontSize={{ base: '2xl', md: '4xl' }}
                            fontWeight="bold"
                            letterSpacing="-0.025em"
                            color="fg.primary"
                        >
                            {UI_COPY.experience.title[lang]}
                        </Heading>
                        <Text
                            fontSize="md"
                            color="fg.secondary"
                            lineHeight="1.7"
                        >
                            {UI_COPY.experience.subtitle[lang]}
                        </Text>
                    </Stack>

                    <Grid
                        templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
                        gap={5}
                    >
                        {EXPERIENCES.map((exp) => (
                            <Flex
                                key={exp.id}
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
                            >
                                <Stack gap={4}>
                                    <Flex
                                        justify="space-between"
                                        align="start"
                                        gap={3}
                                        flexWrap="wrap"
                                    >
                                        <Stack gap={1}>
                                            <Box
                                                asChild
                                                display="inline-flex"
                                                alignItems="center"
                                                gap={1.5}
                                                color="fg.primary"
                                                fontWeight="bold"
                                                fontSize="xl"
                                                letterSpacing="-0.015em"
                                                _hover={{
                                                    color: 'accent.primary',
                                                }}
                                            >
                                                <a
                                                    href={exp.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <span>
                                                        {exp.company[lang]}
                                                    </span>
                                                    <FiArrowUpRight size={16} />
                                                </a>
                                            </Box>
                                            <Text
                                                fontSize="sm"
                                                fontWeight="medium"
                                                color="accent.primary"
                                            >
                                                {exp.role[lang]}
                                            </Text>
                                        </Stack>

                                        <Box
                                            px={2.5}
                                            py={0.5}
                                            borderRadius="pill"
                                            bg="status.availableSoft"
                                            color="status.available"
                                            fontFamily="mono"
                                            fontSize="xs"
                                            fontWeight="semibold"
                                        >
                                            {exp.period[lang]}
                                        </Box>
                                    </Flex>

                                    <Text
                                        fontSize="sm"
                                        color="fg.secondary"
                                        lineHeight="1.7"
                                    >
                                        {exp.summary[lang]}
                                    </Text>

                                    <Stack gap={2}>
                                        {exp.highlights[lang].map((item) => (
                                            <HStack
                                                key={item}
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
                                                    {item}
                                                </Text>
                                            </HStack>
                                        ))}
                                    </Stack>
                                </Stack>

                                <Wrap
                                    gap={1.5}
                                    pt={3}
                                    borderTop="1px solid"
                                    borderColor="border.subtle"
                                >
                                    {exp.techStack.map((tech) => (
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
                            </Flex>
                        ))}
                    </Grid>
                </Stack>
            </Container>
        </Box>
    );
}
