import { Box, Button, TabList, TabPanel, TabPanels, TabProps, Tabs, useMultiStyleConfig, useTab } from '@chakra-ui/react';
import ServiceTabPanel from './tab/ServiceTabPanel';
import ProfileTabPanel from './tab/ProfileTabPanel';

const CustomTabs = () => {
    const CustomTab = (props: TabProps) => {
        const tabProps = useTab(props);
        const isSelected = !!tabProps['aria-selected'];
        const styles = useMultiStyleConfig('Tabs', tabProps);

        return (
            <Button __css={{ ...styles.tab, fontSize: 'lg', px: 6, py: 3 }} {...tabProps}>
                <Box as='span'>
                    {isSelected ? '😎' : '😴'}
                </Box>
                {tabProps.children}
            </Button>
        )
    };

    return (
        <Tabs>
            <TabList>
                <CustomTab>プロフィール</CustomTab>
                <CustomTab>サービス(制作物)</CustomTab>
                <CustomTab>経歴/スキル</CustomTab>
                <CustomTab>趣味</CustomTab>
            </TabList>
            <TabPanels>
                <ProfileTabPanel />
                <ServiceTabPanel />
                <TabPanel>
                    <Box p={4}>
                        <p>経歴/スキルのコンテンツ</p>
                    </Box>
                </TabPanel>
                <TabPanel>
                    <Box p={4}>
                        <p>趣味のコンテンツ</p>
                    </Box>
                </TabPanel>
            </TabPanels>
        </Tabs>
    );
};

export default CustomTabs;
