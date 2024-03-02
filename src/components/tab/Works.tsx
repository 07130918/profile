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
import { Grid, HStack, Heading, Wrap, WrapItem } from '@chakra-ui/react';
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

const Works = () => {
    const { lang } = useContext(LangContext);
    const t = text[lang].deployments;

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
                            {t[i].title}
                        </Heading>
                    </ExLink>
                    <HStack pt={1}>
                        <BiLinkExternal color='#2f81f7' />
                        <ExLink href={project.link} color='#2f81f7'>
                            {project.externalLinkText}
                        </ExLink>
                    </HStack>
                    <HStack pt={1}>
                        <FaGithub />
                        <ExLink href={project.githubLink}>{project.githubRepoName}</ExLink>
                    </HStack>
                    <Wrap pt={1}>
                        {project.techStacks.map((techStack, idx) => (
                            <WrapItem key={idx}>
                                <HStack>
                                    {techStack.icon}
                                    <ExLink href={techStack.link}>{techStack.name}</ExLink>
                                </HStack>
                            </WrapItem>
                        ))}
                    </Wrap>
                </TabContainer>
            ))}
        </Grid>
    );
};

export default Works;
