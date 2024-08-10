import {
    AWSIcon,
    DynamoDBIcon,
    GCPIcon,
    JavaScriptIcon,
    LangChainIcon,
    MySQLIcon,
    NextJsIcon,
    PythonIcon,
    TabContainer,
    TypeScriptIcon,
} from '@/components/ChakraExtension';
import SkillItem from '@/components/SkillItem';
import { serviceLink } from '@/lib/consts';
import type { TechStack } from '@/lib/types';
import { Box, Heading, Image, Stack, Text } from '@chakra-ui/react';

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
            icon: <DynamoDBIcon />,
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
        <TabContainer bgGradient='linear(180deg, #fff, #adadad)' bgClip='text'>
            <Heading fontSize='2xl' color='#FAFAFA' mb={3}>
                My Skills
            </Heading>
            <Box mb={4}>
                <Heading fontSize='lg' mb={2}>
                    Natural Languages
                </Heading>
                <Text>Japanese / English</Text>
            </Box>
            {skillSets.map(({ genre, details }) => (
                <Box key={genre}>
                    <Heading fontSize='lg' mb={2}>
                        {genre}
                    </Heading>
                    <Stack direction={{ base: 'column', sm: 'row' }}>
                        {details.map(({ name, icon, link }) => (
                            <SkillItem key={name} name={name} icon={icon} link={link} />
                        ))}
                    </Stack>
                </Box>
            ))}
            <Image src='/images/AWS-badge.png' alt='AWS' w={40} h={40} />
        </TabContainer>
    );
};

export default Skills;
