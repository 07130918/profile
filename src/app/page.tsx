'use client';
import CustomTabs from '@/components/tabs';
import { socialLink } from '@/lib/consts';
import design from '@/lib/design';
import { Box, Flex, HStack, Image, Link, Text, VStack } from '@chakra-ui/react';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { GrMapLocation } from 'react-icons/gr';
import { SiGmail } from 'react-icons/si';

const Home = () => {
    return (
        <Flex bgGradient={design.graduation.gb} justify='center' align='center' minH='100vh'>
            <Flex w='96vw' h='90vh' bg='white' borderRadius='lg' shadow='lg' p={4}>
                <Box
                    boxShadow={design.boxShadow}
                    py='3vh'
                    px='1.5vw'
                    borderRadius='lg'
                    alignSelf='flex-start'
                    mr='1vw'
                    h='84vh'
                >
                    <VStack align='start' spacing={2}>
                        <Box>
                            <Box
                                bgGradient={design.graduation.blue}
                                borderRadius='full'
                                p={2}
                                display='inline-flex'
                            >
                                <Image
                                    src='/images/me.jpeg'
                                    alt='Kota Sato'
                                    w={60}
                                    h={60}
                                    borderRadius='full'
                                />
                            </Box>
                            <Text
                                as='h1'
                                fontSize='3xl'
                                fontWeight='bold'
                                bgGradient={design.graduation.theme}
                                bgClip='text'
                                mb={2}
                            >
                                Kota Sato
                            </Text>
                        </Box>
                        <HStack>
                            <GrMapLocation />
                            <Text>Tokyo / Japan 🇯🇵</Text>
                        </HStack>
                        <HStack>
                            <Link href={socialLink.gmail} isExternal>
                                <SiGmail color={design.color.gmail} />
                            </Link>
                            <Link href={socialLink.gmail} isExternal>
                                tokyosato1@gmail.com
                            </Link>
                        </HStack>
                        <HStack>
                            <Link href={socialLink.twitter} isExternal>
                                <FaTwitter color={design.color.twitter} />
                            </Link>
                            <Link href={socialLink.twitter} color={design.color.twitter} isExternal>
                                @tech_guy_kay
                            </Link>
                        </HStack>
                        <HStack>
                            <Link href={socialLink.github} isExternal>
                                <FaGithub color={design.color.github} />
                            </Link>
                            <Link
                                href='https://github.com/07130918'
                                color={design.color.github}
                                isExternal
                            >
                                07130918
                            </Link>
                        </HStack>
                        <HStack>
                            <Link href={socialLink.linkedIn} isExternal>
                                <FaLinkedin color={design.color.linkedIn} />
                            </Link>
                            <Link
                                href={socialLink.linkedIn}
                                color={design.color.linkedIn}
                                isExternal
                            >
                                kota-sato-228364215
                            </Link>
                        </HStack>
                        <HStack>
                            <Link href={socialLink.facebook} isExternal>
                                <FaFacebook color={design.color.linkedIn} />
                            </Link>
                            <Link
                                href={socialLink.facebook}
                                color={design.color.facebook}
                                isExternal
                            >
                                100069795974235
                            </Link>
                        </HStack>
                    </VStack>
                </Box>
                <Box
                    boxShadow={design.boxShadow}
                    py='3vh'
                    px='2vw'
                    borderRadius='lg'
                    alignSelf='flex-start'
                    ml='1vw'
                    w='70vw'
                    h='84vh'
                >
                    <CustomTabs />
                </Box>
            </Flex>
        </Flex>
    );
};

export default Home;
