import type { TechStackElement } from '@/lib/types';
import { HStack, Box } from '@chakra-ui/react';
import { ExLink } from './ChakraExtension';

const SkillItem = ({ name, icon, link }: TechStackElement) => {
    return (
        <HStack key={name} alignItems='center' mb={[1, 1, 4]}>
            {[icon, name].map((item, i) => (
                <ExLink key={i} href={link}>
                    {item}
                </ExLink>
            ))}
        </HStack>
    );
};

export default SkillItem;
