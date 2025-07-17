'use client';
import { Box, Container, Stack } from '@chakra-ui/react';
import Lang from '@/components/Lang';
import ProfileCard from '@/components/ProfileCard';
import TabCard from '@/components/TabCard';

export default function Home() {
    return (
        <Box bg="bg" minH="100dvh">
            <Container maxW="8xl" centerContent p={{ base: 4, md: 8 }}>
                <Stack
                    position="relative"
                    direction={{ base: 'column', md: 'row' }}
                    gap={{ base: 6, md: 8 }}
                    w="100%"
                    maxW="7xl"
                    bg="gray.900"
                    borderRadius="lg"
                    p={{ base: 4, md: 6 }}
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
                        top={{ base: 1, md: 4 }}
                        right={{ base: 1, md: 4 }}
                        zIndex={100}
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
