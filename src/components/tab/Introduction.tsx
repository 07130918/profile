import { ExLink, TabContainer, TextBox } from '@/components/ChakraExtension';
import { LangContext } from '@/components/providers';
import { socialLink } from '@/lib/consts';
import design from '@/lib/design';
import { text } from '@/lib/dictionary';
import { HStack, Heading, Link, Text } from '@chakra-ui/react';
import { useContext } from 'react';
import { BiLink } from 'react-icons/bi';

const Introduction = () => {
    const { lang } = useContext(LangContext);
    const t = text[lang].introduction;

    const renderSection = (texts: string[]) => {
        return (
            <TextBox>
                {texts.map((t, i) => (
                    <Text key={i}>{t}</Text>
                ))}
            </TextBox>
        );
    };

    return (
        <>
            <TabContainer>
                <Heading fontSize='xl' mb={3}>
                    {t.greeting}
                </Heading>
                <TextBox>
                    <Text>
                        {t.work.at}
                        <ExLink href='https://www.arara.com/' textDecoration='underline'>
                            {t.work.inc}
                        </ExLink>
                    </Text>
                    <Text>{t.major}</Text>
                </TextBox>
                {renderSection([t.study, t.current])}
                {renderSection([t.travel, t.satisfaction])}
                {renderSection([t.into])}
                {renderSection([t.value])}
                <Text fontWeight='bold'>{t.mindset}</Text>
            </TabContainer>
            <TabContainer mt={4}>
                <Heading fontSize='xl' mb={3}>
                    {t.job_contact}
                </Heading>
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
            </TabContainer>
        </>
    );
};

export default Introduction;
