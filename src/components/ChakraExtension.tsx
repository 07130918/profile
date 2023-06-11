import { Image } from '@chakra-ui/image';
import { Box, BoxProps, Flex, FlexProps } from '@chakra-ui/react';
import { AiFillChrome } from 'react-icons/ai';
import { BiLink } from 'react-icons/bi';
import { FaAws, FaDatabase, FaPython, FaVuejs } from 'react-icons/fa';
import { IoLogoVercel } from 'react-icons/io5';
import { SiChakraui, SiGooglecloud, SiJavascript, SiMysql, SiTypescript } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';

import design from '@/lib/design';

export const AWSIcon = (props: any) => <FaAws size={24} color='#FF9900' {...props} />;
export const ChakraIcon = (props: any) => <SiChakraui size={24} color='#319795' {...props} />;
export const ChromeIcon = (props: any) => <AiFillChrome size={24} color='#4285F4' {...props} />;
export const DataBaseIcon = (props: any) => <FaDatabase size={24} color='#000000' {...props} />;
export const GCPIcon = (props: any) => <SiGooglecloud size={24} color='#4285F4' {...props} />;
export const JavaScriptIcon = (props: any) => <SiJavascript size={24} color='#F7DF1E' {...props} />;
export const LangChainIcon = (props: any) => <BiLink size={24} color='#3D9970' {...props} />;
export const LangChainImage = (props: any) => (
    <Image src='/images/langchain.png' alt='LangChain' w={5} h={5} {...props} />
);
export const MySQLIcon = (props: any) => <SiMysql size={24} color='#4479A1' {...props} />;
export const NextJsIcon = (props: any) => <TbBrandNextjs size={24} color='#000000' {...props} />;
export const PythonIcon = (props: any) => <FaPython size={24} color='#3776AB' {...props} />;
export const ReactIcon = (props: any) => <FaPython size={24} color='#61DAFB' {...props} />;
export const TypeScriptIcon = (props: any) => <SiTypescript size={24} color='#3178C6' {...props} />;
export const VueIcon = (props: any) => <FaVuejs size={24} color='#42B883' {...props} />;
export const VercelIcon = (props: any) => <IoLogoVercel size={24} color='#000000' {...props} />;

export const PageWrapper = (props: FlexProps) => (
    <Flex
        bgGradient={design.graduation.gb}
        justify='center'
        align='center'
        minH='100vh'
        {...props}
    />
);

export const PageContainer = (props: FlexProps) => (
    <Flex
        direction={['column', 'column', 'row']}
        w='96%'
        bg='white'
        borderRadius='lg'
        shadow='lg'
        p={4}
        {...props}
    />
);

export const Card = (props: BoxProps) => (
    <Box boxShadow={design.boxShadow} borderRadius='lg' h='90vh' overflow='auto' {...props} />
);
