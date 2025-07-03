'use client';
import Lang from '@/components/Lang';
import ProfileCard from '@/components/ProfileCard';
import TabCard from '@/components/TabCard';
import { Box, Container, Stack } from '@chakra-ui/react';

export default function Home() {
    return (
        <Box bg="bg" minH="100vh" position="relative">
            <Container
                maxW="8xl"
                centerContent
                px={{ base: 4, md: 8 }}
                py={{ base: 6, md: 12 }}
            >
                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    gap={{ base: 6, md: 8 }}
                    w="100%"
                    maxW="7xl"
                    bg="gray.900"
                    borderRadius="lg"
                    p={{ base: 4, md: 6 }}
                    position="relative"
                    border="1px solid"
                    borderColor="gray.300"
                    boxShadow="card"
                    _hover={{
                        borderColor: 'gray.300',
                        boxShadow: 'cardHover',
                    }}
                >
                    <Box
                        position="absolute"
                        top={{ base: 4, md: 6 }}
                        right={{ base: 4, md: 6 }}
                        zIndex={10}
                    >
                        <Lang />
                    </Box>
                    <ProfileCard />
                    <TabCard />
                </Stack>
            </Container>
        </Box>
    );
}
