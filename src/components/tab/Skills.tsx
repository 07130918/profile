import { serviceLink } from '@/lib/consts';
import design from '@/lib/design';
import type { TechStack } from '@/lib/types';
import { Box, HStack, Heading, Image, Text } from '@chakra-ui/react';
import {
    AWSIcon,
    DataBaseIcon,
    GCPIcon,
    JavaScriptIcon,
    LangChainIcon,
    MySQLIcon,
    NextJsIcon,
    PythonIcon,
    TypeScriptIcon,
} from '../ChakraExtension';
import SkillItem from '../SkillItem';

const techStack: TechStack = {
    programmingLangs: [
        {
            name: 'Python',
            icon: <PythonIcon />,
            link: serviceLink.python,
        },
        {
            name: 'TypeScript',
            icon: <TypeScriptIcon />,
            link: serviceLink.ts,
        },
        {
            name: 'JavaScript',
            icon: <JavaScriptIcon />,
            link: serviceLink.js,
        },
        {
            name: 'Next.js',
            icon: <NextJsIcon />,
            link: serviceLink.nextjs,
        },
        {
            name: 'LangChain',
            icon: <LangChainIcon />,
            link: serviceLink.langChain,
        },
    ],
    databases: [
        {
            name: 'MySQL',
            icon: <MySQLIcon />,
            link: serviceLink.mysql,
        },
        {
            name: 'NoSQL (DynamoDB)',
            icon: <DataBaseIcon />,
            link: serviceLink.dynamodb,
        },
    ],
    cloudPlatforms: [
        {
            name: 'AWS',
            icon: <AWSIcon />,
            link: serviceLink.aws,
        },
        {
            name: 'GCP',
            icon: <GCPIcon />,
            link: serviceLink.gcp,
        },
    ],
};

const skillSets = [
    {
        genre: 'Programming Languages & Frameworks',
        details: techStack.programmingLangs,
    },
    {
        genre: 'Databases',
        details: techStack.databases,
    },
    {
        genre: 'Cloud Platforms',
        details: techStack.cloudPlatforms,
    },
];

const Skills = () => {
    return (
        <Box boxShadow={design.boxShadow} borderRadius='lg' py={6} px={10} mt={6}>
            <Heading fontSize='2xl' bgGradient={design.graduation.theme} bgClip='text' mb={3}>
                My Skills
            </Heading>
            <Box mb={4}>
                <Heading fontSize='lg' mb={2}>
                    Natural Languages
                </Heading>
                <Text>Japanese / English</Text>
            </Box>
            {skillSets.map(({ genre, details }) => (
                <>
                    <Heading key={genre} fontSize='lg' mb={2}>
                        {genre}
                    </Heading>
                    <HStack>
                        {details.map(({ name, icon, link }) => (
                            <SkillItem key={name} name={name} icon={icon} link={link} />
                        ))}
                    </HStack>
                </>
            ))}
            <Box textAlign='center' mt={6}>
                <Image src='/images/AWS-badge.png' alt='AWS' w={40} h={40} />
            </Box>
        </Box>
    );
};

export default Skills;
