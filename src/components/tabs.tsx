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
import Introduction from './tab/Introduction';
import ServiceTabPanel from './tab/ServiceTabPanel';
import Skills from './tab/Skills';

const CustomTabs = () => {
    const CustomTab = (props: TabProps) => {
        const tabProps = useTab(props);
        const isSelected = !!tabProps['aria-selected'];
        const styles = useMultiStyleConfig('Tabs', tabProps);

        return (
            <Button __css={{ ...styles.tab, fontSize: 'lg', px: 6, py: 3 }} {...tabProps}>
                <Box as='span'>{isSelected ? '😎' : '😴'}</Box>
                {tabProps.children}
            </Button>
        );
    };

    return (
        <Tabs>
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
                    <ServiceTabPanel />
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

export default CustomTabs;
