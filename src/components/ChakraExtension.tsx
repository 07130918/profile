import type { ExLinkProps } from '@/lib/types';
import type { BoxProps, LinkProps, TextProps } from '@chakra-ui/react';
import { Box, Image, Link, Text } from '@chakra-ui/react';
import { AiFillChrome } from 'react-icons/ai';
import { BiLink } from 'react-icons/bi';
import { FaAws, FaPython, FaReact, FaVuejs } from 'react-icons/fa';
import { IoLogoVercel } from 'react-icons/io5';
import {
    SiAmazondynamodb,
    SiChakraui,
    SiGooglecloud,
    SiJavascript,
    SiMysql,
    SiTypescript,
} from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';

export const AWSIcon = (props: any) => (
    <FaAws size={24} color="#FF9900" {...props} />
);
export const ChakraIcon = (props: any) => <SiChakraui size={24} {...props} />;
export const ChromeIcon = (props: any) => <AiFillChrome size={24} {...props} />;
export const DynamoDBIcon = (props: any) => (
    <SiAmazondynamodb size={24} {...props} />
);
export const GCPIcon = (props: any) => (
    <SiGooglecloud size={24} color="#4285F4" {...props} />
);
export const JavaScriptIcon = (props: any) => (
    <SiJavascript size={24} {...props} />
);
export const LangChainIcon = (props: any) => <BiLink size={24} {...props} />;
export const LangChainImage = (props: any) => (
    <Image src="/images/langchain.png" alt="LangChain" w={5} h={5} {...props} />
);
export const MySQLIcon = (props: any) => <SiMysql size={24} {...props} />;
export const NextJsIcon = (props: any) => (
    <TbBrandNextjs size={24} {...props} />
);
export const PythonIcon = (props: any) => <FaPython size={24} {...props} />;
export const ReactIcon = (props: any) => <FaReact size={24} {...props} />;
export const TypeScriptIcon = (props: any) => (
    <SiTypescript size={24} {...props} />
);
export const VueIcon = (props: any) => <FaVuejs size={24} {...props} />;
export const VercelIcon = (props: any) => <IoLogoVercel size={24} {...props} />;

export const Card = (props: BoxProps) => (
    <Box
        boxShadow="0px 4px 10px rgba(0, 0, 0, 0.6)"
        borderRadius="lg"
        overflow="auto"
        {...props}
    />
);

export const TabContainer = (props: BoxProps) => (
    <Box
        p={4}
        borderRadius="lg"
        borderColor="#333333"
        borderWidth="1px"
        {...props}
    />
);

export const Paragraph = (props: BoxProps) => <Box mb={3} {...props} />;

export const ExLink = ({
    href,
    children,
    ...props
}: ExLinkProps & LinkProps) => (
    <Link href={href} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
    </Link>
);

export const WhiteLinearText = (props: TextProps) => (
    <Text
        bgGradient="to-r"
        gradientFrom="#fff"
        gradientTo="#adadad"
        bgClip="text"
        color="transparent"
        {...props}
    />
);
