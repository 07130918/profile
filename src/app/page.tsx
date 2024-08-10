'use client';
import ProfileCard from '@/components/ProfileCard';
import TabCard from '@/components/TabCard';
import { HStack, Stack } from '@chakra-ui/react';

export default function Home() {
    return (
        <HStack bg='black' justify='center' minH='96vh' py='2vh'>
            <Stack
                direction={{ base: 'column', md: 'row' }}
                p={{ base: 1, md: 4 }}
                w='96%'
                minH='96vh'
                bg='gray.900'
                borderRadius='lg'
                shadow='lg'
            >
                <ProfileCard />
                <TabCard />
            </Stack>
        </HStack>
    );
}
