'use client';
import CustomTabs from '@/components/tabs';
import { aws_image, design, links } from '@/lib/consts';
import { Box, Flex, HStack, Image, Link, Text, VStack } from '@chakra-ui/react';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { GrMapLocation } from 'react-icons/gr';

const Home = () => {
    return (
        <Flex
            bgGradient="linear(to-r, pink.300, orange.300)"
            justify="center"
            align="center"
            minH="100vh"
        >
            <Flex
                w="96vw"
                h="90vh"
                bg="white"
                borderRadius="lg"
                shadow="lg"
                p={4}
            >
                <Box
                    boxShadow={design.boxShadow}
                    py="3vh"
                    px="1.5vw"
                    borderRadius="lg"
                    alignSelf="flex-start"
                    mr="1vw"
                    h="84vh"
                >
                    <VStack align="start" spacing={2}>
                        <Box>
                            <Box
                                bgGradient="linear(to-r, blue.100, blue.300)"
                                borderRadius="full"
                                p={2}
                                display="inline-flex"
                            >
                                <Image
                                    src="/images/me.jpeg"
                                    alt="Kota Sato"
                                    w="250px"
                                    h="250px"
                                    borderRadius="full"
                                />
                            </Box>
                            <Text
                                as="h1"
                                fontSize="3xl"
                                fontWeight="bold"
                                bgGradient="linear(to-r, #ff00cc, #3333cc)"
                                bgClip="text"
                                mb={2}
                            >
                                Kota Sato
                            </Text>
                        </Box>
                        <HStack>
                            <GrMapLocation />
                            <Text>Tokyo/Japan 🇯🇵</Text>
                        </HStack>
                        <HStack>
                            <SiGmail color={design.color.gmail} />
                            <Link href={links.gmail} isExternal>
                                tokyosato1@gmail.com
                            </Link>
                        </HStack>
                        <HStack>
                            <FaTwitter color={design.color.twitter} />
                            <Link
                                href={links.twitter}
                                color={design.color.twitter}
                                isExternal
                            >
                                @tech_guy_kay
                            </Link>
                        </HStack>
                        <HStack>
                            <FaGithub color={design.color.github} />
                            <Link
                                href="https://github.com/07130918"
                                color={design.color.github}
                                isExternal
                            >
                                07130918
                            </Link>
                        </HStack>
                        <HStack>
                            <FaLinkedin color={design.color.linkedIn} />
                            <Link
                                href={links.linkedIn}
                                color={design.color.linkedIn}
                                isExternal
                            >
                                kota-sato-228364215
                            </Link>
                        </HStack>
                        <HStack>
                            <FaFacebook color={design.color.linkedIn} />
                            <Link
                                href={links.facebook}
                                color={design.color.facebook}
                                isExternal
                            >
                                100069795974235
                            </Link>
                        </HStack>
                        <Box
                            w="100%"
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Image
                                src={`/images/${aws_image}.png`}
                                alt={aws_image}
                                w="125px"
                                h="125px"
                                mb={4}
                            />
                        </Box>
                    </VStack>
                </Box>
                <Box
                    boxShadow={design.boxShadow}
                    py="3vh"
                    px="2vw"
                    borderRadius="lg"
                    alignSelf="flex-start"
                    ml="1vw"
                    w="70vw"
                    h="84vh"
                >
                    <CustomTabs />
                </Box>
            </Flex>
        </Flex>
    );
};

export default Home;
