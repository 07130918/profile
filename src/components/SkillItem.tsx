import { Flex, Text } from '@chakra-ui/react';

interface SkillItemProps {
    icon: JSX.Element;
    text: string;
}

const SkillItem = ({ icon, text }: SkillItemProps) => {
    return (
        <Flex key={text} alignItems='center' mb={4}>
            {icon}
            <Text ml={2}>{text}</Text>
        </Flex>
    );
};

export default SkillItem;
