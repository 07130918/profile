import { socialLink } from '@/lib/consts';
import design from '@/lib/design';
import useResponsive from '@/lib/designHooks';
import { Box, HStack, Image, Link, Stack, Text } from '@chakra-ui/react';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { GrMapLocation } from 'react-icons/gr';
import { SiGmail } from 'react-icons/si';
import { ExLink } from './ChakraExtension';

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

    const { pSmall, mBase, imageSize, dRowBase } = useResponsive();

    return (
        <Stack direction={dRowBase} align='start'>
            <Box bgGradient={design.graduation.blue} borderRadius='full' p={pSmall}>
                <Image
                    src='/images/me.jpeg'
                    alt='Kota Sato'
                    objectFit='cover'
                    w={imageSize}
                    h={imageSize}
                    borderRadius='full'
                />
            </Box>
            <Box ml={mBase}>
                <Text
                    fontSize='3xl'
                    fontWeight='bold'
                    bgGradient={design.graduation.theme}
                    bgClip='text'
                >
                    Kota Sato
                </Text>
                <ExLink href='https://www.buymeacoffee.com/hi.im.kota'>
                    <Image
                        src='https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png'
                        alt='Buy Me A Coffee'
                        h='50px'
                        w='180px'
                    />
                </ExLink>
                <HStack>
                    <GrMapLocation />
                    <Text>Tokyo / Japan 🇯🇵</Text>
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
            </Box>
        </Stack>
    );
};

export default ProfileCard;
