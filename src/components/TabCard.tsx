import useResponsive from '@/lib/designHooks';
import { Box, Stack, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import Lang from './Lang';
import Introduction from './tab/Introduction';
import Skills from './tab/Skills';
import Support from './tab/Support';
import Works from './tab/Works';

const TabCard = () => {
    const { dColumnBase, fs, py03: py } = useResponsive();

    const tabs = [
        { label: 'Profile', e: '😎', Component: Introduction },
        { label: 'Works', e: '🎨', Component: Works },
        { label: 'Career / Skills', e: '👨‍💻', Component: Skills },
        { label: 'Support', e: '🤝', Component: Support },
    ];

    return (
        <Tabs isLazy>
            <Lang />
            <TabList fontSize={fs}>
                {tabs.map(({ label, e }) => (
                    <Tab key={label} fontSize={fs} py={py} overflowX='hidden'>
                        <Stack direction={dColumnBase} gap={0}>
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
