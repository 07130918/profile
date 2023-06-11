import type { Project, TechStackItem } from '@/lib/consts';
import { design } from '@/lib/consts';
import { Box, Grid, HStack, Heading, Image, Link, Text, Wrap, WrapItem } from '@chakra-ui/react';
import { AiFillChrome } from 'react-icons/ai';
import { BiLinkExternal } from 'react-icons/bi';
import { DiJavascript1 } from 'react-icons/di';
import { FaGithub, FaPython, FaReact, FaVuejs } from 'react-icons/fa';
import { IoLogoVercel } from 'react-icons/io5';
import { SiChakraui, SiTypescript } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';

const techStack: { [key: string]: TechStackItem } = {
    python: {
        name: 'Python',
        type: 'icon',
        icon: <FaPython />,
        link: 'https://www.python.org/',
    },
    langChain: {
        name: 'LangChain',
        type: 'image',
        image: '/images/langchain.png',
        alt: 'LangChain',
        link: 'https://github.com/hwchase17/langchain',
    },
    js: {
        name: 'JavaScript',
        type: 'icon',
        icon: <DiJavascript1 color='#323330' />,
        link: 'https://www.javascript.com/',
    },
    ts: {
        name: 'TypeScript',
        type: 'icon',
        icon: <SiTypescript color='#3178c6' />,
        link: 'https://www.typescriptlang.org/',
    },
    react: {
        name: 'React',
        type: 'icon',
        icon: <FaReact />,
        link: 'https://reactjs.org/',
    },
    vue: {
        name: 'Vue.js',
        type: 'icon',
        icon: <FaVuejs color='#42b883' />,
        link: 'https://vuejs.org/',
    },
    nextjs: {
        name: 'Next.js',
        type: 'icon',
        icon: <TbBrandNextjs />,
        link: 'https://nextjs.org/',
    },
    chakra: {
        name: 'Chakra UI',
        type: 'icon',
        icon: <SiChakraui color='teal' />,
        link: 'https://chakra-ui.com/',
    },
    vercel: {
        name: 'Vercel',
        type: 'icon',
        icon: <IoLogoVercel />,
        link: 'https://vercel.com/',
    },
    chromeExtension: {
        name: 'Chrome Extension',
        type: 'icon',
        icon: <AiFillChrome />,
        link: 'https://chrome.google.com/webstore/category/extensions/',
    },
};

const projects: Project[] = [
    {
        name: '英文校正webアプリ',
        link: 'https://gp-proofreader.vercel.app/',
        externalLinkText: 'GP-proofreader',
        githubLink: 'https://github.com/07130918/LLM-Playground',
        githubRepoName: 'LLM-Playground',
        techStacks: [
            techStack.ts,
            techStack.nextjs,
            techStack.chakra,
            techStack.langChain,
            techStack.vercel,
        ],
    },
    {
        name: 'メモ帳Chrome拡張機能',
        link: 'https://chrome.google.com/webstore/detail/scribbles/kjbdhcdgdcipnifdhnpldjibglpjnjib?hl=ja&authuser=0',
        externalLinkText: 'Scribbles',
        githubLink: 'https://github.com/07130918/Scribbles',
        githubRepoName: 'Scribbles',
        techStacks: [
            techStack.ts,
            techStack.react,
            techStack.python,
            techStack.chakra,
            techStack.chromeExtension,
        ],
    },
    {
        name: '英単語クイズ',
        link: 'https://word-pop-quiz.vercel.app/',
        externalLinkText: 'Word Pop Quiz',
        githubLink: 'https://github.com/07130918/word-pop-quiz',
        githubRepoName: 'word-pop-quiz',
        techStacks: [techStack.ts, techStack.nextjs, techStack.chakra, techStack.vercel],
    },
    {
        name: 'To-DoリストChrome拡張機能',
        link: 'https://chrome.google.com/webstore/detail/to-do-list/chaiaabmmjdihkcjlpmbadcdmefaljib?hl=ja&authuser=0',
        externalLinkText: 'Simple To-Do List',
        githubLink: 'https://github.com/07130918/ChromeExtensions',
        githubRepoName: 'ChromeExtensions',
        techStacks: [techStack.js, techStack.vue, techStack.chromeExtension],
    },
];

const ServiceTabPanel = () => {
    return (
        <Grid templateColumns='repeat(2, 1fr)' gap={6} p={4}>
            {projects.map((project, index) => (
                <Box key={index} borderRadius='lg' boxShadow={design.boxShadow} p={4}>
                    <Link href={project.link} color='#2f81f7' isExternal>
                        <Heading size='lg'>{project.name}</Heading>
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
                                {techStack.type === 'icon' ? (
                                    <HStack>
                                        {techStack.icon}
                                        <Link href={techStack.link} isExternal>
                                            {techStack.name}
                                        </Link>
                                    </HStack>
                                ) : (
                                    <Link href={techStack.link} isExternal>
                                        <HStack>
                                            <Image
                                                src={techStack.image}
                                                alt={techStack.alt}
                                                w='20px'
                                                h='15px'
                                            />
                                            <Text>{techStack.alt}</Text>
                                        </HStack>
                                    </Link>
                                )}
                            </WrapItem>
                        ))}
                    </Wrap>
                </Box>
            ))}
        </Grid>
    );
};

export default ServiceTabPanel;
