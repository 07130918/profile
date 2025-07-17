'use client';
import { Box, Text } from '@chakra-ui/react';
import type { Mistake } from './types';
import { useTypingAnimation } from './useTypingAnimation';

interface Props {
    text: string;
    mistakes: Mistake[];
}
const TypingAnimation = ({ text, mistakes }: Props) => {
    const { displayText, isComplete } = useTypingAnimation(text, mistakes);
    return (
        <Box display="inline-block" position="relative">
            <Text as="span" whiteSpace="pre-wrap">
                {displayText}
            </Text>
            {!isComplete && (
                <Text
                    as="span"
                    color="pink.300"
                    fontWeight="bold"
                    fontSize="xl"
                >
                    |
                </Text>
            )}
        </Box>
    );
};

export default TypingAnimation;
