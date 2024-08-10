import {
    ChakraIcon,
    ChromeIcon,
    ExLink,
    JavaScriptIcon,
    LangChainImage,
    NextJsIcon,
    Paragraph,
    PythonIcon,
    ReactIcon,
    TabContainer,
    TypeScriptIcon,
    VercelIcon,
    VueIcon,
} from '@/components/ChakraExtension';
import { LangContext } from '@/components/providers';
import { projectsElement, serviceLink, socialLink } from '@/lib/consts';
import design from '@/lib/design';
import { text } from '@/lib/dictionary';
import type { ProjectProps, TechStackElement } from '@/lib/types';
import { EmailIcon } from '@chakra-ui/icons';
import { Box, Grid, HStack, Heading, Link, Stack, Text, Wrap, WrapItem } from '@chakra-ui/react';
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

export default function Main() {
    const { lang } = useContext(LangContext);
    const t = text[lang].introduction;
    const deployments = text[lang].deployments;

    return (
        <>
            <TabContainer bgGradient='linear(180deg, #fff, #adadad)' bgClip='text'>
                <Heading fontSize='xl' mb={3} color='#FAFAFA'>
                    {t.greeting}
                </Heading>
                <Paragraph>
                    <Text>
                        {t.work.now}
                        <ExLink
                            href='https://techsplus.co.jp'
                            textDecoration='underline'
                            textDecorationColor='pink.300'
                            color='pink.300'
                        >
                            {t.work.inc}
                        </ExLink>
                        {t.work.addition}
                    </Text>
                </Paragraph>
                <Text>{t.current}</Text>
                <HStack>
                    <Text>{t.travel}</Text>
                    <Text color='black'>🇯🇵 🇬🇧 🇻🇳 🇸🇬 🇦🇺 🇵🇭 🇳🇿 🇭🇰 🇲🇴 🇮🇹 🇻🇦 🇰🇷 🇹🇭</Text>
                </HStack>
                <Text>{t.into}</Text>
                <Text fontWeight='bold' color='#FAFAFA' pt={2}>
                    {t.mindset}
                </Text>
            </TabContainer>
            <Box pt={4} />
            <TabContainer>
                <Box>
                    <Heading fontSize='xl' bgGradient='linear(180deg, #fff, #adadad)' bgClip='text'>
                        {t.job_contact}
                    </Heading>
                    <HStack pt={2}>
                        <ExLink href={socialLink.gmail}>
                            <EmailIcon color='white' />
                        </ExLink>
                        <ExLink
                            href={socialLink.gmail}
                            bgGradient={design.graduation.rainbow}
                            bgClip='text'
                            fontWeight='bold'
                            textDecoration='underline'
                        >
                            tokyosato1@gmail.com
                        </ExLink>
                    </HStack>
                </Box>
            </TabContainer>
            <Stack h='10dvh' />
            <Stack pt={2}>
                <Text
                    fontWeight='bold'
                    fontSize='4xl'
                    bgGradient='linear(180deg, #fff, #adadad)'
                    bgClip='text'
                >
                    My personal projects
                </Text>
                <Stack w='100%' borderTop='1px' borderTopColor='whiteAlpha.600' pb={4} />
            </Stack>
            <Grid templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(2, 1fr)']} gap={6}>
                {projects.map((project, i) => (
                    <TabContainer key={project.link}>
                        <ExLink href={project.link} _hover={{ textDecoration: 'none' }}>
                            <Heading
                                size='lg'
                                bgGradient={design.graduation.rainbow}
                                bgClip='text'
                                fontWeight='extrabold'
                            >
                                {deployments[i].title}
                            </Heading>
                        </ExLink>
                        <Stack spacing={0} pt={2} direction={{ base: 'column', md: 'row' }}>
                            <HStack>
                                <BiLinkExternal color='whiteAlpha.600' />
                                <ExLink
                                    href={project.link}
                                    bgGradient='linear(180deg, #fff, #adadad)'
                                    bgClip='text'
                                    textDecoration='underline'
                                    textDecorationColor='#ADADAD'
                                    color='#fff'
                                >
                                    {project.externalLinkText}
                                </ExLink>
                            </HStack>
                            <HStack pl={{ base: 0, md: 2 }}>
                                <FaGithub />
                                <ExLink
                                    href={project.githubLink}
                                    bgGradient='linear(180deg, #fff, #adadad)'
                                    bgClip='text'
                                >
                                    {project.githubRepoName}
                                </ExLink>
                            </HStack>
                        </Stack>
                        <Wrap pt={2}>
                            {project.techStacks.map((techStack) => (
                                <WrapItem key={techStack.link}>
                                    <HStack>
                                        {techStack.icon}
                                        <ExLink
                                            href={techStack.link}
                                            bgGradient='linear(180deg, #fff, #adadad)'
                                            bgClip='text'
                                        >
                                            {techStack.name}
                                        </ExLink>
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
        </>
    );
}
