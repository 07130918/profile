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
import Image from 'next/image';
import { FiCloud, FiCpu, FiLayout, FiServer } from 'react-icons/fi';
import { useAppContext } from '@/components/providers';
import { CERTIFICATIONS, SKILL_GROUPS, UI_COPY } from '@/lib/profile-data';

function getGroupIcon(groupId: string) {
    if (groupId === 'frontend') {
        return <FiLayout size={18} />;
    }
    if (groupId === 'backend') {
        return <FiServer size={18} />;
    }
    if (groupId === 'cloud') {
        return <FiCloud size={18} />;
    }
    return <FiCpu size={18} />;
}

export default function SkillsSection() {
    const { lang } = useAppContext();

    return (
        <Box
            as="section"
            id="skills"
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
                            {UI_COPY.skills.eyebrow[lang]}
                        </Text>
                        <Heading
                            as="h2"
                            fontSize={{ base: '2xl', md: '4xl' }}
                            fontWeight="bold"
                            letterSpacing="-0.025em"
                            color="fg.primary"
                        >
                            {UI_COPY.skills.title[lang]}
                        </Heading>
                        <Text
                            fontSize="md"
                            color="fg.secondary"
                            lineHeight="1.7"
                        >
                            {UI_COPY.skills.subtitle[lang]}
                        </Text>
                    </Stack>

                    <Grid
                        templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
                        gap={5}
                    >
                        {SKILL_GROUPS.map((group) => (
                            <Stack
                                key={group.id}
                                gap={4}
                                bg="bg.surface"
                                border="1px solid"
                                borderColor="border.subtle"
                                borderRadius="card"
                                p={6}
                                boxShadow="card"
                            >
                                <HStack gap={3} align="center">
                                    <Flex
                                        w="36px"
                                        h="36px"
                                        borderRadius="md"
                                        bg="accent.soft"
                                        color="accent.primary"
                                        align="center"
                                        justify="center"
                                        flexShrink={0}
                                    >
                                        {getGroupIcon(group.id)}
                                    </Flex>
                                    <Heading
                                        as="h3"
                                        fontSize="lg"
                                        fontWeight="semibold"
                                        color="fg.primary"
                                    >
                                        {group.title[lang]}
                                    </Heading>
                                </HStack>

                                <Text
                                    fontSize="sm"
                                    color="fg.secondary"
                                    lineHeight="1.65"
                                >
                                    {group.description[lang]}
                                </Text>

                                <Wrap gap={2} pt={1}>
                                    {group.skills.map((skill) => (
                                        <WrapItem key={skill}>
                                            <Box
                                                px={2.5}
                                                py={1}
                                                borderRadius="md"
                                                bg="bg.subtle"
                                                border="1px solid"
                                                borderColor="border.subtle"
                                                fontFamily="mono"
                                                fontSize="xs"
                                                fontWeight="medium"
                                                color="fg.primary"
                                            >
                                                {skill}
                                            </Box>
                                        </WrapItem>
                                    ))}
                                </Wrap>
                            </Stack>
                        ))}
                    </Grid>

                    {CERTIFICATIONS.map((cert) => (
                        <Flex
                            key={cert.id}
                            direction={{ base: 'column', sm: 'row' }}
                            align={{ base: 'start', sm: 'center' }}
                            gap={6}
                            bg="bg.surface"
                            border="1px solid"
                            borderColor="border.subtle"
                            borderRadius="card"
                            p={6}
                            boxShadow="card"
                        >
                            <Box
                                flexShrink={0}
                                p={2}
                                borderRadius="lg"
                                bg="bg.subtle"
                                border="1px solid"
                                borderColor="border.subtle"
                            >
                                <Image
                                    src={cert.badgeSrc}
                                    alt={cert.badgeAlt}
                                    width={88}
                                    height={88}
                                />
                            </Box>
                            <Stack gap={1.5}>
                                <Text
                                    fontFamily="mono"
                                    fontSize="2xs"
                                    fontWeight="semibold"
                                    letterSpacing="0.06em"
                                    textTransform="uppercase"
                                    color="accent.primary"
                                >
                                    {UI_COPY.skills.certificationsTitle[lang]} ·{' '}
                                    {cert.issuer}
                                </Text>
                                <Heading
                                    as="h3"
                                    fontSize={{ base: 'lg', md: 'xl' }}
                                    fontWeight="bold"
                                    color="fg.primary"
                                >
                                    {cert.name}
                                </Heading>
                                <Text
                                    fontSize="sm"
                                    color="fg.secondary"
                                    lineHeight="1.7"
                                    maxW="68ch"
                                >
                                    {cert.summary[lang]}
                                </Text>
                            </Stack>
                        </Flex>
                    ))}
                </Stack>
            </Container>
        </Box>
    );
}
