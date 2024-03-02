import { ExLink, Paragraph, TabContainer } from '@/components/ChakraExtension';
import Section from '@/components/Section';
import { LangContext } from '@/components/providers';
import { socialLink } from '@/lib/consts';
import design from '@/lib/design';
import { text } from '@/lib/dictionary';
import { EmailIcon } from '@chakra-ui/icons';
import { Box, HStack, Heading, Text } from '@chakra-ui/react';
import { useContext } from 'react';

const Introduction = () => {
    const { lang } = useContext(LangContext);
    const t = text[lang].introduction;
    return (
        <TabContainer>
            <Heading fontSize='xl' mb={3}>
                {t.greeting}
            </Heading>
            <Paragraph>
                <Text>
                    {t.work.now}
                    <ExLink href='https://www.arara.com/' textDecoration='underline'>
                        {t.work.inc}
                    </ExLink>
                    {t.work.addition}
                </Text>
                <Text>{t.major}</Text>
            </Paragraph>
            <Section texts={[t.study, t.current]} />
            <Section texts={[t.travel, t.satisfaction]} />
            <Section texts={[t.into, t.value]} />
            <Text fontWeight='bold'>{t.mindset}</Text>
            <Box pt={6}>
                <Heading fontSize='xl'>{t.job_contact}</Heading>
                <HStack>
                    <ExLink href={socialLink.gmail}>
                        <EmailIcon color={design.color.gmail} />
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
