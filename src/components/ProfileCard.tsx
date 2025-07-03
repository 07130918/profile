import { ExLink } from '@/components/ChakraExtension';
import SocialMediaLinks from '@/components/SocialMediaLinks';
import { bmcImage, socialLink } from '@/lib/consts';
import { Box, HStack, Image, Stack, Text, VStack } from '@chakra-ui/react';
import { useSearchParams } from 'next/navigation';
import { GrMapLocation } from 'react-icons/gr';

const refList = ['linkedIn', 'job-hunting'];

export default function ProfileCard() {
    const searchParams = useSearchParams();
    const ref = searchParams.has('ref') ? searchParams.get('ref') : null;
    const imageNumber =
        ref && refList.includes(ref) ? 0 : Math.floor(Math.random() * 3) + 1;

    return (
        <Stack
            direction={{ base: 'column', md: 'row' }}
            align="start"
            pt={{ base: 2, md: 0 }}
            px={{ base: 2, md: 0 }}
        >
            <Box display={{ base: 'block', md: 'none' }}>
                <HStack gap={4} align="start" w="100%">
                    <Box
                        bgGradient="to-r"
                        gradientFrom="blue.100"
                        gradientTo="blue.300"
                        borderRadius="full"
                        p={1}
                    >
                        <Image
                            src={`images/me/${imageNumber}.jpg`}
                            alt="Kota Sato"
                            objectFit="cover"
                            borderRadius="full"
                            w="90px"
                            h="90px"
                        />
                    </Box>
                    <VStack align="start" gap={0} pt={6}>
                        <Text
                            fontSize="2xl"
                            fontWeight="bold"
                            bgGradient="to-r"
                            gradientFrom="#ff00cc"
                            gradientTo="#3333cc"
                            bgClip="text"
                            color="transparent"
                        >
                            Kota Sato
                        </Text>
                        <Text fontSize="md" color="gray.500" mb={3}>
                            (he/him)
                        </Text>
                    </VStack>
                </HStack>
                <SocialMediaLinks />
            </Box>
            <Box display={{ base: 'none', md: 'block' }}>
                <Stack w="20vw">
                    <Box
                        bgGradient="to-r"
                        gradientFrom="blue.100"
                        gradientTo="blue.300"
                        borderRadius="full"
                        p={2}
                        w="fit-content"
                    >
                        <Image
                            src={`images/me/${imageNumber}.jpg`}
                            alt="Kota Sato"
                            objectFit="cover"
                            borderRadius="full"
                            boxSize="190px"
                        />
                    </Box>
                    <Stack gap={0} pl={4}>
                        <Text
                            fontSize="3xl"
                            fontWeight="bold"
                            bgGradient="to-r"
                            gradientFrom="#ff00cc"
                            gradientTo="#3333cc"
                            bgClip="text"
                            color="transparent"
                        >
                            Kota Sato
                        </Text>
                        <Text fontSize="lg" color="gray.500" mb={3}>
                            (he/him)
                        </Text>
                        <HStack color="gray.100">
                            <GrMapLocation />
                            <Text>Tokyo/Japan</Text>
                        </HStack>
                        <SocialMediaLinks />
                        <Box pt={2}>
                            <ExLink href={socialLink.buyMeACoffee}>
                                <Image
                                    src={bmcImage.src}
                                    alt={bmcImage.alt}
                                    h="50px"
                                    w="180px"
                                />
                            </ExLink>
                        </Box>
                        <ExLink href={socialLink.paypal}>
                            <Image
                                src="images/paypal.png"
                                alt="Paypal"
                                h="90px"
                                w="180px"
                            />
                        </ExLink>
                        <Image
                            src={bmcImage.qr.src}
                            alt={bmcImage.qr.alt}
                            h={100}
                            w={100}
                        />
                        <Box h={100} w={100} mt={4}>
                            <HStack mb={1}>
                                <Text fontSize="xl" color="whiteAlpha.900">
                                    MBTI:
                                </Text>
                                <Text fontSize="xl" color="#88619a">
                                    ENTP
                                </Text>
                            </HStack>
                            <Image
                                src="images/entp.webp"
                                alt="ENTP Personality Type"
                                h="100%"
                                w="100%"
                                borderRadius="sm"
                                objectFit="cover"
                            />
                        </Box>
                    </Stack>
                </Stack>
            </Box>
        </Stack>
    );
}
