'use client';
import { Card, PageContainer, PageWrapper } from '@/components/ChakraExtension';
import ProfileCard from '@/components/ProfileCard';
import TabCard from '@/components/TabCard';
import useResponsive from '@/lib/designHooks';

const Home = () => {
    const { p, h, mb, w, py, px, ml } = useResponsive();
    return (
        <PageWrapper>
            <PageContainer>
                <Card p={p} h={h} mb={mb}>
                    <ProfileCard />
                </Card>
                <Card w={w} py={py} px={px} ml={ml}>
                    <TabCard />
                </Card>
            </PageContainer>
        </PageWrapper>
    );
};

export default Home;
