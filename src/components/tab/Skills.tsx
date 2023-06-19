import { TabContainer } from '@/components/ChakraExtension';
import { serviceLink } from '@/lib/consts';
import design from '@/lib/design';
import useResponsive from '@/lib/designHooks';
import type { TechStack } from '@/lib/types';
import { Box, Heading, Image, Stack, Text } from '@chakra-ui/react';
import {
    AWSIcon,
    DynamoDBIcon,
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
    const { dColumnBase } = useResponsive();

    return (
        <TabContainer>
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
                    <Stack direction={dColumnBase}>
                        {details.map(({ name, icon, link }, i) => (
                            <SkillItem key={i} name={name} icon={icon} link={link} />
                        ))}
                    </Stack>
                </>
            ))}
            <Image src='/images/AWS-badge.png' alt='AWS' w={40} h={40} />
        </TabContainer>
    );
};

export default Skills;
