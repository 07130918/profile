import { LangContext } from '@/components/providers';
import { HStack, Link, Text } from '@chakra-ui/react';
import { useContext } from 'react';

const Lang = () => {
    const { setLang } = useContext(LangContext);

    return (
        <HStack pl={{ base: 2, md: 0 }} bgGradient='linear(180deg, #fff, #adadad)' bgClip='text'>
            <Link onClick={() => setLang('en')}>English</Link>
            <Text>/</Text>
            <Link onClick={() => setLang('ja')}>Japanese</Link>
        </HStack>
    );
};

export default Lang;
