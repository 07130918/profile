import { socialLink } from '@/lib/consts';
import design from '@/lib/design';
import { Box, HStack, Image, Link, Text, VStack } from '@chakra-ui/react';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { GrMapLocation } from 'react-icons/gr';
import { SiGmail } from 'react-icons/si';

const ProfileCard = () => {
    const socialMediaLinks = [
        {
            icon: SiGmail,
            color: design.color.gmail,
            href: socialLink.gmail,
            text: 'tokyosato1@gmail.com',
        },
        {
            icon: FaTwitter,
            color: design.color.twitter,
            href: socialLink.twitter,
            text: '@tech_guy_kay',
        },
        {
            icon: FaGithub,
            color: design.color.github,
            href: 'https://github.com/07130918',
            text: '07130918',
        },
        {
            icon: FaLinkedin,
            color: design.color.linkedIn,
            href: socialLink.linkedIn,
            text: 'kota-sato-228364215',
        },
        {
            icon: FaFacebook,
            color: design.color.facebook,
            href: socialLink.facebook,
            text: '100069795974235',
        },
    ];

    return (
        <VStack align='start'>
            <Box bgGradient={design.graduation.blue} borderRadius='full' p={2}>
                <Image
                    src='/images/me.jpeg'
                    alt='Kota Sato'
                    objectFit='cover'
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
            <HStack>
                <GrMapLocation />
                <Text>Tokyo / Japan 🇯🇵</Text>
            </HStack>
            {socialMediaLinks.map(({ icon: Icon, color, href, text }) => (
                <HStack key={href}>
                    <Link href={href} isExternal>
                        <Icon color={color} />
                    </Link>
                    <Link href={href} color={color} isExternal>
                        {text}
                    </Link>
                </HStack>
            ))}
        </VStack>
    );
};

export default ProfileCard;
