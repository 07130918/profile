import {
    ChakraIcon,
    ChromeIcon,
    ExLink,
    JavaScriptIcon,
    LangChainImage,
    NextJsIcon,
    PythonIcon,
    ReactIcon,
    TabContainer,
    TypeScriptIcon,
    VercelIcon,
    VueIcon,
} from '@/components/ChakraExtension';
import { LangContext } from '@/components/providers';
import { projectsElement, serviceLink } from '@/lib/consts';
import design from '@/lib/design';
import { text } from '@/lib/dictionary';
import type { ProjectProps, TechStackElement } from '@/lib/types';
import { Box, Grid, HStack, Heading, Link, Stack, Wrap, WrapItem } from '@chakra-ui/react';
import Image from 'next/image';
import { useContext } from 'react';
import { BiLinkExternal } from 'react-icons/bi';
import { FaGithub } from 'react-icons/fa';

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
        ...projectsElement.wordPopQuiz,
        techStacks: [techStack.ts, techStack.nextjs, techStack.chakra, techStack.vercel],
    },
    {
        ...projectsElement.emailForge,
        techStacks: [techStack.ts, techStack.nextjs, techStack.chakra, techStack.vercel],
    },
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
        ...projectsElement.toDoList,
        techStacks: [techStack.js, techStack.vue, techStack.chromeExtension],
    },
];

const Works = () => {
    const { lang } = useContext(LangContext);
    const deployments = text[lang].deployments;

    return (
        <Grid templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(2, 1fr)']} gap={6}>
            {projects.map((project, i) => (
                <TabContainer key={i}>
                    <ExLink href={project.link} _hover={{ textDecoration: 'none' }}>
                        <Heading
                            size='lg'
                            bgGradient={design.graduation.theme}
                            bgClip='text'
                            fontWeight='extrabold'
                        >
                            {deployments[i].title}
                        </Heading>
                    </ExLink>
                    <Stack spacing={0} pt={2} direction={{ base: 'column', md: 'row' }}>
                        <HStack>
                            <BiLinkExternal color='#2f81f7' />
                            <ExLink href={project.link} color='#2f81f7'>
                                {project.externalLinkText}
                            </ExLink>
                        </HStack>
                        <HStack pl={{ base: 0, md: 2 }}>
                            <FaGithub />
                            <ExLink href={project.githubLink}>{project.githubRepoName}</ExLink>
                        </HStack>
                    </Stack>
                    <Wrap pt={2}>
                        {project.techStacks.map((techStack, idx) => (
                            <WrapItem key={idx}>
                                <HStack>
                                    {techStack.icon}
                                    <ExLink href={techStack.link}>{techStack.name}</ExLink>
                                </HStack>
                            </WrapItem>
                        ))}
                        {projects[i].githubRepoName === 'EmailForge' && (
                            <Box pl={{ base: 0, md: 2 }}>
                                <Link href='https://openai.com/' isExternal>
                                    <Image
                                        src='/images/OpenAI.jpg'
                                        alt='OpenAI'
                                        width={130}
                                        height={130}
                                    />
                                </Link>
                            </Box>
                        )}
                    </Wrap>
                </TabContainer>
            ))}
        </Grid>
    );
};

export default Works;
