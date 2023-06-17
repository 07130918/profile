import { TabContainer } from '@/components/ChakraExtension';
import { LangContext } from '@/components/providers';
import { socialLink } from '@/lib/consts';
import design from '@/lib/design';
import { text } from '@/lib/dictionary';
import { Box, HStack, Heading, Link, Text } from '@chakra-ui/react';
import { useContext } from 'react';
import { BiLink } from 'react-icons/bi';

const Introduction = () => {
    const { lang } = useContext(LangContext);
    const t = text[lang].introduction;

    return (
        <>
            <TabContainer>
                <Heading fontSize='xl' mb={3}>
                    {t.greeting}
                </Heading>
                <Box mb={3}>
                    <Text>
                        {t.link.work_at}
                        <Link href='https://www.arara.com/' textDecoration='underline'>
                            {t.link.inc}
                        </Link>
                    </Text>
                    <Text>{t.link.major}</Text>
                </Box>
                <Box mb={3}>
                    <Text>{t.study}</Text>
                    <Text>{t.current} </Text>
                </Box>
                <Box mb={3}>
                    <Text>{t.travel}</Text>
                    <Text>{t.satisfaction}</Text>
                </Box>
                <Box mb={3}>
                    <Text>{t.into}</Text>
                </Box>
                <Box mb={3}>
                    <Text>{t.value}</Text>
                </Box>
                <Text fontWeight='bold'>{t.mindset} </Text>
            </TabContainer>
            <TabContainer mt={6}>
                <Heading fontSize='xl' mb={3}>
                    {t.job_contact}
                </Heading>
                <HStack>
                    <Link href={socialLink.gmail} isExternal>
                        <BiLink color={design.color.gmail} />
                    </Link>
                    <Link
                        href={socialLink.gmail}
                        bgGradient={design.graduation.theme}
                        bgClip='text'
                        fontWeight='bold'
                        textDecoration='underline'
                        isExternal
                    >
                        tokyosato1@gmail.com
                    </Link>
                </HStack>
            </TabContainer>
        </>
    );
};

export default Introduction;
