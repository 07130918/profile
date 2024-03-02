import { Paragraph } from '@/components/ChakraExtension';
import { Text } from '@chakra-ui/react';

const Section = ({ texts }: { texts: string[] }) => {
    return (
        <Paragraph>
            {texts.map((t, i) => (
                <Text key={i}>{t}</Text>
            ))}
        </Paragraph>
    );
};

export default Section;
