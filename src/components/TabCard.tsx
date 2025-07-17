import Main from '@/components/tab/Main';
import Skills from '@/components/tab/Skills';
import Support from '@/components/tab/Support';
import { Box, Button, Stack } from '@chakra-ui/react';
import { createElement, useState } from 'react';
import { GiSkills } from 'react-icons/gi';
import { PiHandshake } from 'react-icons/pi';
import { RxFace } from 'react-icons/rx';

const TabCard = () => {
    type Tab = 'profile' | 'skills' | 'support';
    const [activeTab, setActiveTab] = useState<Tab>('profile');

    const tabs: {
        label: string;
        Icon: React.ReactNode;
        Component: React.JSX.ElementType;
        value: Tab;
    }[] = [
        {
            label: 'Profile',
            Icon: <RxFace />,
            Component: Main,
            value: 'profile',
        },
        {
            label: 'Career / Skills',
            Icon: <GiSkills />,
            Component: Skills,
            value: 'skills',
        },
        {
            label: 'Support',
            Icon: <PiHandshake />,
            Component: Support,
            value: 'support',
        },
    ];

    const activeComponent =
        tabs.find((tab) => tab.value === activeTab)?.Component || Main;

    return (
        <Box flex="1" minH="600px" position="relative">
            <Stack
                direction="row"
                gap={2}
                mb={8}
                borderBottom="1px solid"
                borderColor="whiteAlpha.200"
                pb={0}
            >
                {tabs.map(({ label, Icon, value }) => (
                    <Button
                        key={value}
                        variant="ghost"
                        onClick={() => setActiveTab(value)}
                        fontSize={{ base: 'sm', md: 'md' }}
                        px={{ base: 3, md: 4 }}
                        py={{ base: 2, md: 3 }}
                        bg="transparent"
                        color={activeTab === value ? 'white' : '#a3a3a3'}
                        borderBottom={
                            activeTab === value ? '2px solid' : 'none'
                        }
                        borderBottomColor="whiteAlpha.900"
                        borderRadius={0}
                        transition="all 0.2s ease-in-out"
                    >
                        <Stack
                            direction={{ base: 'column', sm: 'row' }}
                            gap={{ base: 1, sm: 2 }}
                            align="center"
                        >
                            <Box color="pink.focusRing" fontSize="2xl">
                                {Icon}
                            </Box>
                            <Box
                                fontWeight={
                                    activeTab === value ? 'semibold' : 'normal'
                                }
                            >
                                {label}
                            </Box>
                        </Stack>
                    </Button>
                ))}
            </Stack>
            <Box transition="all 0.2s ease-in-out">
                {createElement(activeComponent)}
            </Box>
        </Box>
    );
};

export default TabCard;
