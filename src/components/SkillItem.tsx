import type { TechStackElement } from '@/lib/types';
import { HStack } from '@chakra-ui/react';
import { ExLink } from './ChakraExtension';

const SkillItem = ({ name, icon, link }: TechStackElement) => {
    return (
        <HStack key={name} alignItems="center" pb={[1, 1, 4]}>
            <ExLink href={link}>{icon}</ExLink>
            <ExLink
                href={link}
                bgGradient="to-r"
                gradientFrom="#fff"
                gradientTo="#adadad"
                bgClip="text"
                color="transparent"
            >
                {name}
            </ExLink>
        </HStack>
    );
};

export default SkillItem;
