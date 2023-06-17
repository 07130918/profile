import { LangContext } from '@/components/providers';
import {
    Box,
    Button,
    HStack,
    Link,
    TabList,
    TabPanel,
    TabPanels,
    TabProps,
    Tabs,
    Text,
    useMultiStyleConfig,
    useTab,
} from '@chakra-ui/react';
import { useContext } from 'react';
import Deployments from './tab/Deployments';
import Introduction from './tab/Introduction';
import Skills from './tab/Skills';

const TabCard = () => {
    const CustomTab = (props: TabProps) => {
        const tabProps = useTab(props);
        const isSelected = !!tabProps['aria-selected'];
        const styles = useMultiStyleConfig('Tabs', tabProps);

        return (
            <Button __css={{ ...styles.tab, fontSize: 'lg', px: 6, py: 3 }} {...tabProps}>
                <Box as='span' mr={2}>
                    {isSelected ? '😎' : '😴'}
                </Box>
                {tabProps.children}
            </Button>
        );
    };

    const { setLang } = useContext(LangContext);

    const tabs = [
        { label: 'Profile', Component: Introduction },
        { label: 'Deployment', Component: Deployments },
        { label: 'Career / Skills', Component: Skills },
        {
            label: 'Interest',
            Component: () => (
                <Box p={4}>
                    <p>Coming soon...</p>
                </Box>
            ),
        },
        {
            label: 'Support',
            Component: () => (
                <Box p={4}>
                    <p>Coming soon...</p>
                </Box>
            ),
        },
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
            <TabList>
                {tabs.map(({ label }) => (
                    <CustomTab key={label}>{label}</CustomTab>
                ))}
            </TabList>
            <TabPanels>
                {tabs.map(({ Component }, index) => (
                    <TabPanel key={index}>
                        <Component />
                    </TabPanel>
                ))}
            </TabPanels>
        </Tabs>
    );
};

export default TabCard;
