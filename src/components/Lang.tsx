import { LangContext } from '@/components/providers';
import { HStack, Link, Text } from '@chakra-ui/react';
import { useContext } from 'react';

const c = 'blue.400';

const Lang = () => {
    const { setLang } = useContext(LangContext);

    return (
        <HStack pl={{ base: 2, md: 0 }}>
            <Link color={c} onClick={() => setLang('en')}>
                English
            </Link>
            <Text color={c}>/</Text>
            <Link color={c} onClick={() => setLang('ja')}>
                Japanese
            </Link>
        </HStack>
    );
};

export default Lang;
