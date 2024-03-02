'use client';
import ProfileCard from '@/components/ProfileCard';
import TabCard from '@/components/TabCard';
import design from '@/lib/design';
import { HStack, Stack } from '@chakra-ui/react';

const Home = () => {
    return (
        <HStack bgGradient={design.graduation.gb} justify='center' minH='96vh' py='2vh'>
            <Stack
                direction={{ base: 'column', md: 'row' }}
                p={{ base: 1, md: 4 }}
                w='96%'
                minH='96vh'
                bg='white'
                borderRadius='lg'
                shadow='lg'
            >
                <ProfileCard />
                <TabCard />
            </Stack>
        </HStack>
    );
};

export default Home;
