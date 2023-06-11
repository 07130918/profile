import type { TechStackElement } from '@/lib/types';
import { HStack } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react';

const SkillItem = ({ name, icon, link }: TechStackElement) => {
    return (
        <HStack key={name} alignItems='center' mb={4}>
            <Link href={link} isExternal>
                {icon}
            </Link>
            <Link href={link} ml={2} isExternal>
                {name}
            </Link>
        </HStack>
    );
};

export default SkillItem;
