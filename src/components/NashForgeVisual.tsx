'use client';

import { Box, Flex, Grid, HStack, Stack, Text } from '@chakra-ui/react';
import { useAppContext } from '@/components/providers';
import { UI_COPY } from '@/lib/profile-data';

const RANGE_MATRIX = [
    { hand: 'AA', action: 'raise' },
    { hand: 'AKs', action: 'raise' },
    { hand: 'AQs', action: 'raise' },
    { hand: 'AJs', action: 'mixed' },
    { hand: 'AKo', action: 'raise' },
    { hand: 'KK', action: 'raise' },
    { hand: 'KQs', action: 'mixed' },
    { hand: 'KJs', action: 'call' },
    { hand: 'AQo', action: 'mixed' },
    { hand: 'KQo', action: 'call' },
    { hand: 'QQ', action: 'raise' },
    { hand: 'QJs', action: 'call' },
    { hand: 'AJo', action: 'call' },
    { hand: 'KJo', action: 'fold' },
    { hand: 'QJo', action: 'fold' },
    { hand: 'JJ', action: 'mixed' },
] as const;

const BOARD_CARDS = [
    { rank: 'A', suit: '♠', red: false },
    { rank: 'K', suit: '♦', red: true },
    { rank: '7', suit: '♣', red: false },
] as const;

function getCellColors(action: 'raise' | 'mixed' | 'call' | 'fold') {
    if (action === 'raise') {
        return {
            bg: 'rgba(77, 159, 255, 0.24)',
            borderColor: 'rgba(77, 159, 255, 0.48)',
            color: 'fg.primary',
        };
    }
    if (action === 'mixed') {
        return {
            bg: 'linear-gradient(90deg, rgba(77, 159, 255, 0.28) 60%, rgba(52, 211, 153, 0.24) 60%)',
            borderColor: 'rgba(77, 159, 255, 0.34)',
            color: 'fg.primary',
        };
    }
    if (action === 'call') {
        return {
            bg: 'rgba(52, 211, 153, 0.20)',
            borderColor: 'rgba(52, 211, 153, 0.42)',
            color: 'fg.primary',
        };
    }
    return {
        bg: 'bg.subtle',
        borderColor: 'border.subtle',
        color: 'fg.muted',
    };
}

export default function NashForgeVisual() {
    const { lang } = useAppContext();

    return (
        <Box
            bg="bg.canvas"
            border="1px solid"
            borderColor="border.subtle"
            borderRadius="lg"
            overflow="hidden"
        >
            <Flex
                px={4}
                py={2.5}
                borderBottom="1px solid"
                borderColor="border.subtle"
                align="center"
                justify="space-between"
                bg="bg.subtle"
            >
                <HStack gap={1.5}>
                    <Box
                        w="8px"
                        h="8px"
                        borderRadius="full"
                        bg="border.strong"
                    />
                    <Box
                        w="8px"
                        h="8px"
                        borderRadius="full"
                        bg="border.strong"
                    />
                    <Box
                        w="8px"
                        h="8px"
                        borderRadius="full"
                        bg="border.strong"
                    />
                </HStack>
                <Text fontFamily="mono" fontSize="2xs" color="fg.muted">
                    {UI_COPY.projects.gtoPreviewLabel[lang]}
                </Text>
                <Box
                    px={2}
                    py={0.5}
                    borderRadius="pill"
                    bg="accent.soft"
                    color="accent.primary"
                    fontFamily="mono"
                    fontSize="2xs"
                    fontWeight="semibold"
                >
                    GTO
                </Box>
            </Flex>

            <Stack p={4} gap={4}>
                <Flex
                    align="center"
                    justify="space-between"
                    flexWrap="wrap"
                    gap={2}
                >
                    <Text
                        fontFamily="mono"
                        fontSize="xs"
                        color="fg.secondary"
                        fontWeight="medium"
                    >
                        {UI_COPY.projects.gtoPreviewSpot[lang]}
                    </Text>

                    <HStack gap={1.5}>
                        {BOARD_CARDS.map((card) => (
                            <Flex
                                key={`${card.rank}${card.suit}`}
                                w="34px"
                                h="42px"
                                borderRadius="md"
                                bg="bg.surface"
                                border="1px solid"
                                borderColor="border.strong"
                                align="center"
                                justify="center"
                                direction="column"
                                lineHeight="1"
                                fontFamily="mono"
                            >
                                <Text
                                    fontSize="xs"
                                    fontWeight="bold"
                                    color={card.red ? '#F87171' : 'fg.primary'}
                                >
                                    {card.rank}
                                </Text>
                                <Text
                                    fontSize="xs"
                                    color={
                                        card.red ? '#F87171' : 'fg.secondary'
                                    }
                                >
                                    {card.suit}
                                </Text>
                            </Flex>
                        ))}
                    </HStack>
                </Flex>

                <Grid templateColumns="repeat(4, 1fr)" gap={1.5}>
                    {RANGE_MATRIX.map((cell) => {
                        const style = getCellColors(cell.action);
                        return (
                            <Flex
                                key={cell.hand}
                                h="36px"
                                borderRadius="md"
                                border="1px solid"
                                borderColor={style.borderColor}
                                background={style.bg}
                                align="center"
                                justify="center"
                                fontFamily="mono"
                                fontSize="xs"
                                fontWeight="semibold"
                                color={style.color}
                            >
                                {cell.hand}
                            </Flex>
                        );
                    })}
                </Grid>

                <Stack gap={2}>
                    <Flex
                        h="8px"
                        borderRadius="pill"
                        overflow="hidden"
                        bg="bg.subtle"
                    >
                        <Box w="64%" bg="#4D9FFF" />
                        <Box w="28%" bg="#34D399" />
                        <Box w="8%" bg="border.strong" />
                    </Flex>
                    <Flex
                        justify="space-between"
                        fontFamily="mono"
                        fontSize="2xs"
                        color="fg.muted"
                    >
                        <Text color="accent.primary">Bet / Raise 64%</Text>
                        <Text color="status.available">Check / Call 28%</Text>
                        <Text>Fold 8%</Text>
                    </Flex>
                </Stack>
            </Stack>
        </Box>
    );
}
