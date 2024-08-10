import { ExLink, WhiteLinearText } from '@/components/ChakraExtension';
import SocialMediaLinks from '@/components/SocialMediaLinks';
import { bmcImage, socialLink } from '@/lib/consts';
import design from '@/lib/design';
import { Box, HStack, Image, Stack, Text, VStack, useBreakpointValue } from '@chakra-ui/react';
import { useSearchParams } from 'next/navigation';
import { GrMapLocation } from 'react-icons/gr';

const refList = ['linkedIn', 'job-hunting'];

export default function ProfileCard() {
    const isMobile = useBreakpointValue({ base: true, md: false });
    const searchParams = useSearchParams();
    const ref = searchParams.has('ref') ? searchParams.get('ref') : null;
    const imageNumber = ref && refList.includes(ref) ? 0 : Math.floor(Math.random() * 3) + 1;

    return (
        <Stack
            direction={{ base: 'column', md: 'row' }}
            align='start'
            pt={{ base: 2, md: 0 }}
            px={{ base: 2, md: 0 }}
        >
            {isMobile ? (
                <>
                    <HStack spacing={4} align='start' w='100%'>
                        <Box bgGradient={design.graduation.blue} borderRadius='full' p={1}>
                            <Image
                                src={`images/me/${imageNumber}.jpg`}
                                alt='Kota Sato'
                                objectFit='cover'
                                borderRadius='full'
                                w='90px'
                                h='90px'
                            />
                        </Box>
                        <VStack align='start' spacing={0} pt={6}>
                            <Text
                                fontSize='2xl'
                                fontWeight='bold'
                                bgGradient={design.graduation.rainbow}
                                bgClip='text'
                            >
                                Kota Sato
                            </Text>
                            <Text fontSize='md' color='gray.500'>
                                (he/him)
                            </Text>
                        </VStack>
                    </HStack>
                    <SocialMediaLinks />
                </>
            ) : (
                <Stack w='20vw'>
                    <Box
                        bgGradient={design.graduation.blue}
                        borderRadius='full'
                        p={2}
                        w='fit-content'
                    >
                        <Image
                            src={`images/me/${imageNumber}.jpg`}
                            alt='Kota Sato'
                            objectFit='cover'
                            borderRadius='full'
                            boxSize='190px'
                        />
                    </Box>
                    <Stack gap={0} pl={4}>
                        <Text
                            fontSize='3xl'
                            fontWeight='bold'
                            bgGradient={design.graduation.rainbow}
                            bgClip='text'
                        >
                            Kota Sato
                        </Text>
                        <Text fontSize='lg' color='gray.500'>
                            (he/him)
                        </Text>
                        <HStack>
                            <GrMapLocation />
                            <WhiteLinearText>Tokyo/Japan</WhiteLinearText>
                        </HStack>
                        <SocialMediaLinks />
                        <Box pt={2}>
                            <ExLink href={socialLink.buyMeACoffee}>
                                <Image src={bmcImage.src} alt={bmcImage.alt} h='50px' w='180px' />
                            </ExLink>
                        </Box>
                        <ExLink href={socialLink.paypal}>
                            <Image src='images/paypal.png' alt='Paypal' h='90px' w='180px' />
                        </ExLink>
                        <Image src={bmcImage.qr.src} alt={bmcImage.qr.alt} h={100} w={100} />
                    </Stack>
                </Stack>
            )}
        </Stack>
    );
}
