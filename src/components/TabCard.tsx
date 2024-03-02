import Lang from '@/components/Lang';
import Introduction from '@/components/tab/Introduction';
import Skills from '@/components/tab/Skills';
import Support from '@/components/tab/Support';
import Works from '@/components/tab/Works';
import { Box, Stack, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';

const TabCard = () => {
    const tabs = [
        { label: 'Profile', e: '😎', Component: Introduction },
        { label: 'Works', e: '🎨', Component: Works },
        { label: 'Career / Skills', e: '👨‍💻', Component: Skills },
        { label: 'Support', e: '🤝', Component: Support },
    ];

    return (
        <Tabs
            isLazy
            w={{ base: '100%', md: '75%' }}
            px={{ base: 1, md: 4 }}
            py={{ base: 0, md: 4 }}
        >
            <Lang />
            <TabList fontSize={{ base: 'md', md: 'lg' }}>
                {tabs.map(({ label, e }) => (
                    <Tab
                        key={label}
                        fontSize={{ base: 'md', md: 'lg' }}
                        py={{ base: 0, md: 3 }}
                        overflowX='hidden'
                    >
                        <Stack direction={{ base: 'column', sm: 'row' }} gap={0}>
                            <Box>{e}</Box>
                            <Box>{label}</Box>
                        </Stack>
                    </Tab>
                ))}
            </TabList>
            <TabPanels>
                {tabs.map(({ Component }, index) => (
                    <TabPanel p={[1, 1, 4]} key={index}>
                        <Component />
                    </TabPanel>
                ))}
            </TabPanels>
        </Tabs>
    );
};

export default TabCard;
