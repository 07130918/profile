import { LangContext } from '@/components/providers';
import { HStack, Link, Text } from '@chakra-ui/react';
import { useContext } from 'react';

const Lang = () => {
    const { lang, setLang } = useContext(LangContext);

    return (
        <HStack pl={{ base: 2, md: 0 }} bgGradient='linear(180deg, #fff, #adadad)' bgClip='text'>
            <Link fontWeight={lang === 'en' ? 'bold' : 'normal'} onClick={() => setLang('en')}>
                English
            </Link>
            <Text>/</Text>
            <Link fontWeight={lang === 'ja' ? 'bold' : 'normal'} onClick={() => setLang('ja')}>
                Japanese
            </Link>
        </HStack>
    );
};

export default Lang;
