import Main from '@/components/tab/Main';
import Skills from '@/components/tab/Skills';
import Support from '@/components/tab/Support';
import {
    Box,
    Stack,
    Tab,
    TabIndicator,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
} from '@chakra-ui/react';

const TabCard = () => {
    const tabs = [
        { label: 'Profile', e: '😎', Component: Main },
        { label: 'Career / Skills', e: '👨‍💻', Component: Skills },
        { label: 'Support', e: '🤝', Component: Support },
    ];

    return (
        <Tabs
            isLazy
            w={{ base: '100%', md: '75%' }}
            px={{ base: 1, md: 4 }}
            py={{ base: 0, md: 4 }}
            position="relative"
            variant="unstyled"
        >
            <TabList fontSize={{ base: 'md', md: 'lg' }}>
                {tabs.map(({ label, e }) => (
                    <Tab
                        key={label}
                        fontSize={{ base: 'md', md: 'lg' }}
                        py={{ base: 0, md: 3 }}
                        overflowX="hidden"
                    >
                        <Stack
                            direction={{ base: 'column', sm: 'row' }}
                            gap={{ base: 0, sm: 2 }}
                        >
                            <Box>{e}</Box>
                            <Box>{label}</Box>
                        </Stack>
                    </Tab>
                ))}
            </TabList>
            <TabIndicator
                mt="-1.5px"
                height="2px"
                bg="whiteAlpha.600"
                borderRadius="1px"
            />
            <TabPanels>
                {tabs.map(({ Component, label }) => (
                    <TabPanel key={label}>
                        <Component />
                    </TabPanel>
                ))}
            </TabPanels>
        </Tabs>
    );
};

export default TabCard;
