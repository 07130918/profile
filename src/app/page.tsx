'use client';
import { Card, PageContainer, PageWrapper } from '@/components/ChakraExtension';
import ProfileCard from '@/components/ProfileCard';
import TabCard from '@/components/TabCard';

const Home = () => {
    return (
        <PageWrapper>
            <PageContainer>
                <Card p={6}>
                    <ProfileCard />
                </Card>
                <Card w='75%' py={4} px={8} ml={8}>
                    <TabCard />
                </Card>
            </PageContainer>
        </PageWrapper>
    );
};

export default Home;
