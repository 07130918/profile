import Main from '@/components/tab/Main';
import Skills from '@/components/tab/Skills';
import Support from '@/components/tab/Support';
import { Box, Button, Stack } from '@chakra-ui/react';
import { createElement, useState } from 'react';

const TabCard = () => {
    const [activeTab, setActiveTab] = useState('profile');

    const tabs = [
        { label: 'Profile', e: '😎', Component: Main, value: 'profile' },
        {
            label: 'Career / Skills',
            e: '👨‍💻',
            Component: Skills,
            value: 'skills',
        },
        { label: 'Support', e: '🤝', Component: Support, value: 'support' },
    ];

    const activeComponent =
        tabs.find((tab) => tab.value === activeTab)?.Component || Main;

    return (
        <Box
            w={{ base: '100%', md: '75%' }}
            px={{ base: 1, md: 4 }}
            py={{ base: 0, md: 4 }}
            position="relative"
        >
            <Stack
                direction="row"
                gap={4}
                mb={4}
                borderBottom="1px solid"
                borderColor="whiteAlpha.200"
                pb={2}
            >
                {tabs.map(({ label, e, value }) => (
                    <Button
                        key={value}
                        variant="ghost"
                        onClick={() => setActiveTab(value)}
                        fontSize={{ base: 'md', md: 'lg' }}
                        py={{ base: 0, md: 3 }}
                        bg="transparent"
                        color={activeTab === value ? 'white' : 'whiteAlpha.600'}
                        borderBottom={
                            activeTab === value ? '2px solid white' : 'none'
                        }
                        borderRadius={0}
                        _hover={{ bg: 'whiteAlpha.100' }}
                    >
                        <Stack
                            direction={{ base: 'column', sm: 'row' }}
                            gap={{ base: 0, sm: 2 }}
                        >
                            <Box>{e}</Box>
                            <Box>{label}</Box>
                        </Stack>
                    </Button>
                ))}
            </Stack>
            <Box>{createElement(activeComponent)}</Box>
        </Box>
    );
};

export default TabCard;
