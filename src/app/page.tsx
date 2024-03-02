'use client';
import { PageContainer, PageWrapper } from '@/components/ChakraExtension';
import ProfileCard from '@/components/ProfileCard';
import TabCard from '@/components/TabCard';

const Home = () => {
    return (
        <PageWrapper>
            <PageContainer>
                <ProfileCard />
                <TabCard />
            </PageContainer>
        </PageWrapper>
    );
};

export default Home;
