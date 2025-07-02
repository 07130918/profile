import type { TechStackElement } from '@/lib/types';
import { HStack } from '@chakra-ui/react';
import { ExLink } from './ChakraExtension';

const SkillItem = ({ name, icon, link }: TechStackElement) => {
    return (
        <HStack key={name} alignItems="center" pb={[1, 1, 4]}>
            <ExLink href={link} color="whiteAlpha.900">
                {icon}
            </ExLink>
            <ExLink
                href={link}
                bgGradient="linear(180deg, #fff, #adadad)"
                bgClip="text"
            >
                {name}
            </ExLink>
        </HStack>
    );
};

export default SkillItem;
