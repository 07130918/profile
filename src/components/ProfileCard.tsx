import { ExLink } from '@/components/ChakraExtension';
import { bmcImage, socialLink } from '@/lib/consts';
import design from '@/lib/design';
import { Box, HStack, Image, Stack, Text, useMediaQuery } from '@chakra-ui/react';
import { useSearchParams } from 'next/navigation';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { GrMapLocation } from 'react-icons/gr';
import { SiGmail } from 'react-icons/si';

const refList = ['linkedIn', 'job-hunting'];

const ProfileCard = () => {
    const socialMediaLinks = [
        {
            Icon: SiGmail,
            color: design.color.gmail,
            href: socialLink.gmail,
            text: 'tokyosato1@gmail.com',
        },
        {
            Icon: FaXTwitter,
            color: design.color.x,
            href: socialLink.x,
            text: '@tech_guy_kay',
        },
        {
            Icon: FaGithub,
            color: design.color.github,
            href: socialLink.github,
            text: '07130918',
        },
        {
            Icon: FaLinkedin,
            color: design.color.linkedIn,
            href: socialLink.linkedIn,
            text: 'kota-sato-228364215',
        },
        {
            Icon: FaFacebook,
            color: design.color.facebook,
            href: socialLink.facebook,
            text: 'Kota-Sato',
        },
    ];

    const [isLargerThan480] = useMediaQuery('(min-width: 480px)');
    const searchParams = useSearchParams();
    const ref = searchParams.has('ref') ? searchParams.get('ref') : null;
    const imageNumber = ref && refList.includes(ref) ? 0 : Math.floor(Math.random() * 3) + 1;
    return (
        <Stack
            direction={{ base: 'row', md: 'column' }}
            align='start'
            p={{ base: 2, md: 6 }}
            h={{ md: '90hv' }}
        >
            <Box bgGradient={design.graduation.blue} borderRadius='full' p={{ base: 1, md: 2 }}>
                <Image
                    src={`images/me/${imageNumber}.jpg`}
                    alt='Kota Sato'
                    objectFit='cover'
                    borderRadius='full'
                    w={{ base: '90px', md: '60' }}
                    h={{ base: '90px', md: '60' }}
                />
            </Box>
            <Stack gap={0} pl={{ base: 0, md: 4 }}>
                <Text
                    fontSize='3xl'
                    fontWeight='bold'
                    bgGradient={design.graduation.theme}
                    bgClip='text'
                >
                    Kota Sato
                </Text>
                <Text fontSize='lg' color='gray.500'>
                    (he/him)
                </Text>
                <HStack pt={{ base: 0, md: 2 }}>
                    <GrMapLocation />
                    <Text>Tokyo/Japan</Text>
                </HStack>
                {socialMediaLinks.map(({ Icon, color, href, text }) => (
                    <HStack key={href}>
                        <ExLink href={href}>
                            <Icon color={color} />
                        </ExLink>
                        <ExLink href={href} color={color}>
                            {text}
                        </ExLink>
                    </HStack>
                ))}
                <Box pt={2}>
                    <ExLink href={socialLink.buyMeACoffee}>
                        <Image src={bmcImage.src} alt={bmcImage.alt} h='50px' w='180px' />
                    </ExLink>
                </Box>
                {isLargerThan480 && (
                    <>
                        <ExLink href={socialLink.paypal}>
                            <Image src='images/paypal.png' alt='Paypal' h='90px' w='180px' />
                        </ExLink>
                        <Image src={bmcImage.qr.src} alt={bmcImage.qr.alt} h={100} w={100} />
                    </>
                )}
            </Stack>
        </Stack>
    );
};

export default ProfileCard;
