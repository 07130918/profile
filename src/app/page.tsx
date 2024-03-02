'use client';
import ProfileCard from '@/components/ProfileCard';
import TabCard from '@/components/TabCard';
import design from '@/lib/design';
import { Flex } from '@chakra-ui/react';

const Home = () => {
    return (
        <Flex bgGradient={design.graduation.gb} justify='center' minH='96vh' py='2vh'>
            <Flex
                direction={['column', 'column', 'row']}
                w='96%'
                minH='96vh'
                bg='white'
                borderRadius='lg'
                shadow='lg'
                p={[1, 1, 4]}
            >
                <ProfileCard />
                <TabCard />
            </Flex>
        </Flex>
    );
};

export default Home;
