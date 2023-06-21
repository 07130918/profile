import { LangContext } from '@/components/providers';
import useResponsive from '@/lib/designHooks';
import {
    Box,
    HStack,
    Link,
    Stack,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text,
    useBreakpointValue,
} from '@chakra-ui/react';
import { useContext } from 'react';
import Introduction from './tab/Introduction';
import Skills from './tab/Skills';
import Support from './tab/Support';
import Works from './tab/Works';

const TabCard = () => {
    const { setLang } = useContext(LangContext);
    const { dColumnBase, fs } = useResponsive();
    const py = useBreakpointValue({ base: 0, md: 3 });

    const tabs = [
        { label: 'Profile', e: '😎', Component: Introduction },
        { label: 'Works', e: '🎨', Component: Works },
        { label: 'Career / Skills', e: '👨‍💻', Component: Skills },
        { label: 'Support', e: '🤝', Component: Support },
    ];

    return (
        <Tabs isLazy>
            <HStack>
                <Link color='blue.400' onClick={() => setLang('en')}>
                    English
                </Link>
                <Text color='blue.400'>/</Text>
                <Link color='blue.400' onClick={() => setLang('ja')}>
                    Japanese
                </Link>
            </HStack>
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
