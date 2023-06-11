import { projectsElement, serviceLink } from '@/lib/consts';
import design from '@/lib/design';
import type { ProjectProps, TechStackElement } from '@/lib/types';
import { Box, Grid, HStack, Heading, Link, Wrap, WrapItem } from '@chakra-ui/react';
import { BiLinkExternal } from 'react-icons/bi';
import { FaGithub } from 'react-icons/fa';
import {
    ChakraIcon,
    ChromeIcon,
    JavaScriptIcon,
    LangChainImage,
    NextJsIcon,
    PythonIcon,
    ReactIcon,
    TypeScriptIcon,
    VercelIcon,
    VueIcon,
} from '../ChakraExtension';

const techStack: Record<string, TechStackElement> = {
    python: {
        name: 'Python',
        icon: <PythonIcon size={20} />,
        link: serviceLink.python,
    },
    langChain: {
        name: 'LangChain',
        icon: <LangChainImage />,
        link: serviceLink.langChain,
    },
    js: {
        name: 'JavaScript',
        icon: <JavaScriptIcon size={20} />,
        link: serviceLink.js,
    },
    ts: {
        name: 'TypeScript',
        icon: <TypeScriptIcon size={20} />,
        link: serviceLink.ts,
    },
    react: {
        name: 'React',
        icon: <ReactIcon size={20} />,
        link: serviceLink.react,
    },
    vue: {
        name: 'Vue.js',
        icon: <VueIcon size={20} />,
        link: serviceLink.vue,
    },
    nextjs: {
        name: 'Next.js',
        icon: <NextJsIcon size={20} />,
        link: serviceLink.nextjs,
    },
    chakra: {
        name: 'Chakra UI',
        icon: <ChakraIcon size={20} />,
        link: serviceLink.chakra,
    },
    vercel: {
        name: 'Vercel',
        icon: <VercelIcon size={20} />,
        link: serviceLink.vercel,
    },
    chromeExtension: {
        name: 'Chrome Extension',
        icon: <ChromeIcon size={20} />,
        link: serviceLink.chromeExtension,
    },
};

const projects: ProjectProps[] = [
    {
        ...projectsElement.gpProofreader,
        techStacks: [
            techStack.ts,
            techStack.nextjs,
            techStack.chakra,
            techStack.langChain,
            techStack.vercel,
        ],
    },
    {
        ...projectsElement.scribbles,
        techStacks: [
            techStack.ts,
            techStack.react,
            techStack.python,
            techStack.chakra,
            techStack.chromeExtension,
        ],
    },
    {
        ...projectsElement.wordPopQuiz,
        techStacks: [techStack.ts, techStack.nextjs, techStack.chakra, techStack.vercel],
    },
    {
        ...projectsElement.toDoList,
        techStacks: [techStack.js, techStack.vue, techStack.chromeExtension],
    },
];

const ServiceTabPanel = () => {
    return (
        <Grid templateColumns='repeat(2, 1fr)' gap={6} p={4}>
            {projects.map((project, index) => (
                <Box key={index} borderRadius='lg' boxShadow={design.boxShadow} p={4}>
                    <Link href={project.link} _hover={{ textDecoration: 'none' }} isExternal>
                        <Heading
                            size='lg'
                            bgGradient={design.graduation.theme}
                            bgClip='text'
                            fontWeight='extrabold'
                        >
                            {project.name}
                        </Heading>
                    </Link>
                    <Box mt={2}>
                        <HStack>
                            <BiLinkExternal color='#2f81f7' />
                            <Link href={project.link} color='#2f81f7' isExternal>
                                {project.externalLinkText}
                            </Link>
                        </HStack>
                    </Box>
                    <Box mt={2}>
                        <HStack>
                            <FaGithub />
                            <Link href={project.githubLink} isExternal>
                                {project.githubRepoName}
                            </Link>
                        </HStack>
                    </Box>
                    <Wrap mt={5}>
                        {project.techStacks.map((techStack, index) => (
                            <WrapItem key={index}>
                                <HStack>
                                    {techStack.icon}
                                    <Link href={techStack.link} isExternal>
                                        {techStack.name}
                                    </Link>
                                </HStack>
                            </WrapItem>
                        ))}
                    </Wrap>
                </Box>
            ))}
        </Grid>
    );
};

export default ServiceTabPanel;
