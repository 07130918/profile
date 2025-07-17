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
import {
    bmcImage,
    projectsElement,
    serviceLink,
    socialLink,
} from '@/lib/consts';
import { text } from '@/lib/dictionary';
import type { ProjectProps, TechStackElement } from '@/lib/types';
import { EmailIcon } from '@chakra-ui/icons';
import {
    Box,
    Image as ChakraImage,
    Grid,
    HStack,
    Heading,
    Link,
    Stack,
    Text,
    Wrap,
    WrapItem,
} from '@chakra-ui/react';
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
        techStacks: [
            techStack.ts,
            techStack.nextjs,
            techStack.chakra,
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
        ...projectsElement.emailForge,
        techStacks: [
            techStack.ts,
            techStack.nextjs,
            techStack.chakra,
            techStack.vercel,
        ],
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
            <TabContainer bgClip="text" color="whiteAlpha.900">
                <Heading fontSize="xl" mb={3} color="whiteAlpha.900">
                    {t.greeting}
                </Heading>
                <Paragraph>
                    <Text>
                        {t.work.now}
                        <ExLink
                            href="https://techsplus.co.jp"
                            textDecoration="underline"
                            textDecorationColor="pink.300"
                            color="pink.300"
                        >
                            {t.work.inc1}
                        </ExLink>
                        <Text as="span">{t.work.and}</Text>
                        <ExLink
                            href="https://aice.co.jp/"
                            textDecoration="underline"
                            textDecorationColor="pink.300"
                            color="pink.300"
                        >
                            {t.work.inc2}
                        </ExLink>
                        {t.work.addition}
                    </Text>
                </Paragraph>
                <Text mb={3}>{t.current}</Text>
                <Paragraph>
                    <Text>
                        {t.travel}{' '}
                        <Text color="black" as="span">
                            🇯🇵 🇬🇧 🇻🇳 🇸🇬 🇦🇺 🇵🇭 🇳🇿 🇭🇰 🇲🇴 🇮🇹 🇻🇦 🇰🇷 🇹🇭 🇹🇼
                        </Text>
                    </Text>
                    <Text>
                        {t.into}{' '}
                        <Text color="black" as="span">
                            🛫
                        </Text>
                    </Text>
                </Paragraph>
                <Text fontWeight="bold" pt={2}>
                    {t.mindset}
                </Text>
            </TabContainer>
            <Box pt={4} />
            <TabContainer>
                <Box>
                    <Heading fontSize="lg" color="whiteAlpha.900">
                        {t.job_contact}
                    </Heading>
                    <HStack pt={2}>
                        <ExLink href={socialLink.gmail}>
                            <Box color="whiteAlpha.900">
                                <EmailIcon />
                            </Box>
                        </ExLink>
                        <ExLink
                            href={socialLink.gmail}
                            bgGradient="to-r"
                            gradientFrom="#ff00cc"
                            gradientTo="#3333cc"
                            bgClip="text"
                            color="transparent"
                            fontWeight="bold"
                            textDecoration="underline"
                            fontSize="lg"
                        >
                            tokyosato1@gmail.com
                        </ExLink>
                    </HStack>
                </Box>
            </TabContainer>
            <Box display={{ base: 'block', md: 'none' }}>
                <Stack pt={4} alignItems="center">
                    <Stack>
                        <ExLink href={socialLink.buyMeACoffee}>
                            <ChakraImage
                                src={bmcImage.src}
                                alt={bmcImage.alt}
                                h="50px"
                                w="200px"
                            />
                        </ExLink>
                    </Stack>
                </Stack>
            </Box>
            <Stack pt={6}>
                <Text
                    fontWeight="bold"
                    fontSize={{ base: '2xl', md: '3xl' }}
                    bgGradient="to-r"
                    gradientFrom="#fff"
                    gradientTo="#adadad"
                    bgClip="text"
                    color="transparent"
                >
                    My personal projects
                </Text>
                <Box w="100%" h="1px" bg="whiteAlpha.600" mb={4} />
            </Stack>
            <Grid
                templateColumns={[
                    'repeat(1, 1fr)',
                    'repeat(1, 1fr)',
                    'repeat(2, 1fr)',
                ]}
                gap={6}
            >
                {projects.map((project, i) => (
                    <TabContainer key={project.link}>
                        <ExLink
                            href={project.link}
                            _hover={{ textDecoration: 'none' }}
                        >
                            <Heading
                                size={{ base: 'xl', md: '2xl' }}
                                bgGradient="to-r"
                                gradientFrom="#ff00cc"
                                gradientTo="#3333cc"
                                bgClip="text"
                                color="transparent"
                                fontWeight="bold"
                            >
                                {deployments[i].title}
                            </Heading>
                        </ExLink>
                        <Stack
                            gap={0}
                            pt={2}
                            direction={{ base: 'column', md: 'row' }}
                        >
                            <HStack>
                                <Box color="white">
                                    <BiLinkExternal />
                                </Box>
                                <ExLink
                                    href={project.link}
                                    bgGradient="to-r"
                                    gradientFrom="#fff"
                                    gradientTo="#adadad"
                                    bgClip="text"
                                    color="transparent"
                                    textDecoration="underline"
                                    textDecorationColor="#ADADAD"
                                >
                                    {project.externalLinkText}
                                </ExLink>
                            </HStack>
                            <HStack pl={{ base: 0, md: 2 }}>
                                <Box color="white">
                                    <FaGithub />
                                </Box>
                                <ExLink
                                    href={project.githubLink}
                                    bgGradient="to-r"
                                    gradientFrom="#fff"
                                    gradientTo="#adadad"
                                    bgClip="text"
                                    color="transparent"
                                >
                                    {project.githubRepoName}
                                </ExLink>
                            </HStack>
                        </Stack>
                        <Wrap pt={2}>
                            {project.techStacks.map((techStack) => (
                                <WrapItem key={techStack.link}>
                                    <HStack>
                                        <ExLink href={techStack.link}>
                                            {techStack.icon}
                                        </ExLink>
                                        <ExLink
                                            href={techStack.link}
                                            bgGradient="to-r"
                                            gradientFrom="#fff"
                                            gradientTo="#adadad"
                                            bgClip="text"
                                            color="transparent"
                                        >
                                            {techStack.name}
                                        </ExLink>
                                    </HStack>
                                </WrapItem>
                            ))}
                            {projects[i].githubRepoName === 'EmailForge' && (
                                <Box pl={{ base: 0, md: 2 }}>
                                    <Link
                                        href="https://openai.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Image
                                            src="/images/OpenAI.jpg"
                                            alt="OpenAI"
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
