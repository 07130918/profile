'use client';
import Lang from '@/components/Lang';
import ProfileCard from '@/components/ProfileCard';
import TabCard from '@/components/TabCard';
import { Box, HStack, Stack } from '@chakra-ui/react';

export default function Home() {
    return (
        <HStack bg='black' justify='center' minH='96vh' py='2vh' position='relative'>
            <Stack
                direction={{ base: 'column', md: 'row' }}
                p={{ base: 1, md: 4 }}
                w='96%'
                minH='96vh'
                bg='gray.900'
                borderRadius='lg'
                shadow='lg'
                position='relative'
            >
                <Box
                    position='absolute'
                    top={{ base: 2, md: 4 }}
                    right={{ base: 2, md: 4 }}
                    zIndex={10}
                >
                    <Lang />
                </Box>
                <ProfileCard />
                <TabCard />
            </Stack>
        </HStack>
    );
}
