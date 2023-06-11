import { design } from '@/lib/consts';
import { Box, HStack, Heading, Image, Text } from '@chakra-ui/react';
import { BiLink } from 'react-icons/bi';
import { FaAws, FaDatabase, FaPython } from 'react-icons/fa';
import { SiGooglecloud, SiJavascript, SiMysql, SiTypescript } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import SkillItem from '../SkillItem';

const techStackProgrammingLangs = [
    {
        icon: <FaPython size={24} color='#3776AB' />,
        text: 'Python',
    },
    {
        icon: <SiTypescript size={24} color='#3178C6' />,
        text: 'TypeScript',
    },
    {
        icon: <SiJavascript size={24} color='#F7DF1E' />,
        text: 'JavaScript',
    },
    {
        icon: <TbBrandNextjs size={24} color='#000000' />,
        text: 'Next.js',
    },
    {
        icon: <BiLink size={24} color='#3D9970' />,
        text: 'LangChain',
    },
];

const techStackDatabases = [
    {
        icon: <SiMysql size={24} color='#4479A1' />,
        text: 'MySQL',
    },
    {
        icon: <FaDatabase size={24} color='#000000' />,
        text: 'NoSQL (DynamoDB)',
    },
];

const techStackCloudPlatforms = [
    {
        icon: <FaAws size={24} color='#FF9900' />,
        text: 'AWS',
    },
    {
        icon: <SiGooglecloud size={24} color='#4285F4' />,
        text: 'GCP',
    },
];

const skillItems = [
    {
        genre: 'Programming Languages & Frameworks',
        stackContents: techStackProgrammingLangs,
    },
    {
        genre: 'Databases',
        stackContents: techStackDatabases,
    },
    {
        genre: 'Cloud Platforms',
        stackContents: techStackCloudPlatforms,
    },
];

const Skills = () => {
    return (
        <Box boxShadow={design.boxShadow} py={6} px={10} borderRadius='lg' mt={6}>
            <Heading
                fontSize='2xl'
                mb={3}
                bgGradient='linear(to-r, #ff00cc, #3333cc)'
                bgClip='text'
            >
                My Skills
            </Heading>
            <Box mb={4}>
                <Heading fontSize='lg' mb={2}>
                    Natural Languages
                </Heading>
                <Text>Japanese / English</Text>
            </Box>
            {skillItems.map(({ genre, stackContents }) => (
                <>
                    <Heading key={genre} fontSize='lg' mb={2}>
                        {genre}
                    </Heading>
                    <HStack>
                        {stackContents.map(({ icon, text }) => (
                            <SkillItem key={text} icon={icon} text={text} />
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
