import {
    Box,
    Button,
    TabList,
    TabPanel,
    TabPanels,
    TabProps,
    Tabs,
    useMultiStyleConfig,
    useTab,
} from '@chakra-ui/react';
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

    return (
        <Tabs isLazy>
            <TabList>
                <CustomTab>Profile</CustomTab>
                <CustomTab>Deployment</CustomTab>
                <CustomTab>Career / Skills</CustomTab>
                <CustomTab>Interest</CustomTab>
                <CustomTab>Support</CustomTab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <Introduction />
                </TabPanel>
                <TabPanel>
                    <Deployments />
                </TabPanel>
                <TabPanel>
                    <Skills />
                </TabPanel>
                <TabPanel>
                    <Box p={4}>
                        <p>Coming soon...</p>
                    </Box>
                </TabPanel>
                <TabPanel>
                    <Box p={4}>
                        <p>Coming soon...</p>
                    </Box>
                </TabPanel>
            </TabPanels>
        </Tabs>
    );
};

export default TabCard;
