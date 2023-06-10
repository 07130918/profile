import { design } from '@/lib/consts';
import { Box, Grid, HStack, Heading, Image, Link, TabPanel } from '@chakra-ui/react';
import { AiFillChrome } from 'react-icons/ai';
import { BiLinkExternal } from 'react-icons/bi';
import { DiJavascript1 } from 'react-icons/di';
import { FaGithub, FaPython, FaReact, FaVuejs } from 'react-icons/fa';
import { IoLogoVercel } from 'react-icons/io5';
import { SiChakraui, SiTypescript } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';

const projects = [
    {
        name: '英文校正webアプリ',
        link: 'https://gp-proofreader.vercel.app/',
        externalLinkText: 'GP-proofreader',
        githubLink: 'https://github.com/07130918/LLM-Playground',
        techStacks: [
            { icon: <SiTypescript color="#3178c6" />, name: 'TypeScript' },
            { icon: <TbBrandNextjs />, name: 'Next.js' },
            { icon: <SiChakraui color="teal" />, name: 'Chakra' },
            { image: '/images/langchain.webp', alt: 'langchain', link: 'https://github.com/hwchase17/langchain' },
            { icon: <IoLogoVercel />, name: 'Vercel' },
        ],
    },
    {
        name: 'メモ帳Chrome拡張機能',
        link: 'https://chrome.google.com/webstore/detail/scribbles/kjbdhcdgdcipnifdhnpldjibglpjnjib?hl=ja&authuser=0',
        externalLinkText: 'Scribbles',
        githubLink: 'https://github.com/07130918/Scribbles',
        techStacks: [
            { icon: <SiTypescript color="#3178c6" />, name: 'TypeScript' },
            { icon: <FaReact />, name: 'React' },
            { icon: <FaPython />, name: 'Python' },
            { icon: <SiChakraui color="teal" />, name: 'Chakra' },
            { icon: <AiFillChrome />, name: 'Chrome' },
        ],
    },
    {
        name: '英単語クイズ',
        link: 'https://word-pop-quiz.vercel.app/',
        externalLinkText: 'Word Pop Quiz',
        githubLink: 'https://github.com/07130918/word-pop-quiz',
        techStacks: [
            { icon: <TbBrandNextjs />, name: 'Next.js' },
            { icon: <SiTypescript color="#3178c6" />, name: 'TypeScript' },
            { icon: <SiChakraui color="teal" />, name: 'Chakra' },
            { icon: <IoLogoVercel />, name: 'Vercel' },
        ],
    },
    {
        name: 'To-DoリストChrome拡張機能',
        link: 'https://chrome.google.com/webstore/detail/to-do-list/chaiaabmmjdihkcjlpmbadcdmefaljib?hl=ja&authuser=0',
        externalLinkText: 'Simple To-Do List',
        githubLink: 'https://github.com/07130918/ChromeExtensions',
        techStacks: [
            { icon: <DiJavascript1 color="#323330" />, name: 'JavaScript' },
            { icon: <FaVuejs color="#42b883" />, name: 'Vue.js' },
            { icon: <AiFillChrome />, name: 'Chrome' },
        ],
    },
];

const ServiceTabPanel = () => {
    return (
        <TabPanel>
            <Grid templateColumns="repeat(2, 1fr)" gap={6} p={4}>
                {projects.map((project, index) => (
                    <Box
                        key={index}
                        borderRadius="lg"
                        boxShadow={design.boxShadow}
                        p={4}
                    >
                        <Link href={project.link} color="#2f81f7" isExternal>
                            <Heading size="lg">{project.name}</Heading>
                        </Link>
                        <Box mt={2}>
                            <HStack>
                                <BiLinkExternal color="#2f81f7" />
                                <Link href={project.link} color="#2f81f7" isExternal>
                                    {project.externalLinkText}
                                </Link>
                            </HStack>
                        </Box>
                        <Box mt={2}>
                            <HStack>
                                <FaGithub />
                                <Link href={project.githubLink} isExternal>
                                    {project.externalLinkText}
                                </Link>
                            </HStack>
                        </Box>
                        <HStack mt={5}>
                            {project.techStacks.map((tech, index) => (
                                <HStack key={index}>
                                    {tech.icon}
                                    {tech.name && <Link href={tech.link} isExternal>{tech.name}</Link>}
                                    {tech.image && (
                                        <Link href={tech.link} isExternal>
                                            <Image
                                                src={tech.image}
                                                alt={tech.alt}
                                                w="120px"
                                                h="67.5px"
                                            />
                                        </Link>
                                    )}
                                </HStack>
                            ))}
                        </HStack>
                    </Box>
                ))}
            </Grid>
        </TabPanel>
    );
};

export default ServiceTabPanel;
