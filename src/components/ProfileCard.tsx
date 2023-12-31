import { bmcImage, socialLink } from '@/lib/consts';
import design from '@/lib/design';
import useResponsive from '@/lib/designHooks';
import { Box, HStack, Image, Stack, Text } from '@chakra-ui/react';
import { useSearchParams } from 'next/navigation';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { GrMapLocation } from 'react-icons/gr';
import { SiGmail } from 'react-icons/si';
import { ExLink } from './ChakraExtension';

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
            Icon: FaTwitter,
            color: design.color.twitter,
            href: socialLink.twitter,
            text: '@tech_guy_kay',
        },
        {
            Icon: FaGithub,
            color: design.color.github,
            href: 'https://github.com/07130918',
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
            text: '100069795974235',
        },
    ];

    const { p12: p, imageSize, dRowBase } = useResponsive();

    const searchParams = useSearchParams();
    const ref = searchParams.has('ref') ? searchParams.get('ref') : null;
    const imageNumber = ref && refList.includes(ref) ? 0 : Math.floor(Math.random() * 3) + 1;

    return (
        <Stack direction={dRowBase} align='start'>
            <Box bgGradient={design.graduation.blue} borderRadius='full' p={p}>
                <Image
                    src={`/images/me/${imageNumber}.jpeg`}
                    alt='Kota Sato'
                    objectFit='cover'
                    w={imageSize}
                    h={imageSize}
                    borderRadius='full'
                />
            </Box>
            <Stack gap={0}>
                <Text
                    fontSize='3xl'
                    fontWeight='bold'
                    bgGradient={design.graduation.theme}
                    bgClip='text'
                >
                    Kota Sato
                </Text>
                <HStack>
                    <GrMapLocation />
                    <Text>Tokyo / Japan</Text>
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
                <ExLink href={socialLink.buyMeACoffee}>
                    <Image src={bmcImage.src} alt={bmcImage.alt} h='50px' w='180px' />
                </ExLink>
            </Stack>
        </Stack>
    );
};

export default ProfileCard;
