'use client';

import { Box, Container, Flex, HStack, Text } from '@chakra-ui/react';
import { FiCoffee } from 'react-icons/fi';
import { useAppContext } from '@/components/providers';
import { PROFILE, UI_COPY } from '@/lib/profile-data';

export default function SiteFooter() {
    const { lang } = useAppContext();

    return (
        <Box
            as="footer"
            borderTop="1px solid"
            borderColor="border.subtle"
            py={8}
            bg="bg.canvas"
        >
            <Container maxW="6xl" px={{ base: 4, md: 8 }}>
                <Flex
                    direction={{ base: 'column', md: 'row' }}
                    align={{ base: 'start', md: 'center' }}
                    justify="space-between"
                    gap={4}
                    fontSize="xs"
                    color="fg.muted"
                >
                    <HStack gap={3} flexWrap="wrap">
                        <Text fontFamily="mono">
                            © {new Date().getFullYear()} {PROFILE.name}
                        </Text>
                        <Text aria-hidden="true">·</Text>
                        <Text fontFamily="mono">
                            {UI_COPY.footer.shortcutHint[lang]}
                        </Text>
                    </HStack>

                    <HStack gap={3} flexWrap="wrap">
                        <HStack gap={1.5}>
                            <FiCoffee size={13} />
                            <Text>{UI_COPY.footer.supportLabel[lang]}</Text>
                        </HStack>
                        <Box
                            asChild
                            color="fg.secondary"
                            textDecoration="underline"
                            textUnderlineOffset="3px"
                            _hover={{ color: 'accent.primary' }}
                        >
                            <a
                                href={PROFILE.links.buyMeACoffee}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Buy Me A Coffee
                            </a>
                        </Box>
                        <Text aria-hidden="true">·</Text>
                        <Box
                            asChild
                            color="fg.secondary"
                            textDecoration="underline"
                            textUnderlineOffset="3px"
                            _hover={{ color: 'accent.primary' }}
                        >
                            <a
                                href={PROFILE.links.paypal}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                PayPal
                            </a>
                        </Box>
                    </HStack>
                </Flex>
            </Container>
        </Box>
    );
}
