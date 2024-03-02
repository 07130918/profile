import { ExLink, Section, TabContainer } from '@/components/ChakraExtension';
import { LangContext } from '@/components/providers';
import { socialLink } from '@/lib/consts';
import design from '@/lib/design';
import { text } from '@/lib/dictionary';
import { Box, HStack, Heading, Text } from '@chakra-ui/react';
import { useContext } from 'react';
import { BiLink } from 'react-icons/bi';

const Introduction = () => {
    const { lang } = useContext(LangContext);
    const t = text[lang].introduction;

    const renderSection = (texts: string[]) => {
        return (
            <Section>
                {texts.map((t, i) => (
                    <Text key={i}>{t}</Text>
                ))}
            </Section>
        );
    };

    return (
        <TabContainer>
            <Heading fontSize='xl' mb={3}>
                {t.greeting}
            </Heading>
            <Section>
                <Text>
                    {t.work.now}
                    <ExLink href='https://www.arara.com/' textDecoration='underline'>
                        {t.work.inc}
                    </ExLink>
                    {t.work.addition}
                </Text>
                <Text>{t.major}</Text>
            </Section>
            {renderSection([t.study, t.current])}
            {renderSection([t.travel, t.satisfaction])}
            {renderSection([t.into, t.value])}
            <Text fontWeight='bold'>{t.mindset}</Text>
            <Box py={8}>
                <Heading fontSize='xl'>{t.job_contact}</Heading>
                <HStack>
                    <ExLink href={socialLink.gmail}>
                        <BiLink color={design.color.gmail} />
                    </ExLink>
                    <ExLink
                        href={socialLink.gmail}
                        bgGradient={design.graduation.theme}
                        bgClip='text'
                        fontWeight='bold'
                        textDecoration='underline'
                    >
                        tokyosato1@gmail.com
                    </ExLink>
                </HStack>
            </Box>
        </TabContainer>
    );
};

export default Introduction;
