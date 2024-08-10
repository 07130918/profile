import { ExLink } from '@/components/ChakraExtension';
import { socialLink } from '@/lib/consts';
import { HStack, Wrap, WrapItem } from '@chakra-ui/react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SiGmail } from 'react-icons/si';

const socialMediaLinks = [
    {
        Icon: SiGmail,
        href: socialLink.gmail,
        text: 'tokyosato1@gmail.com',
    },
    {
        Icon: FaXTwitter,
        href: socialLink.x,
        text: '@tech_guy_kay',
    },
    {
        Icon: FaGithub,
        href: socialLink.github,
        text: '07130918',
    },
    {
        Icon: FaLinkedin,
        href: socialLink.linkedIn,
        text: 'kota-sato-228364215',
    },
    {
        Icon: FaFacebook,
        href: socialLink.facebook,
        text: 'Kota-Sato',
    },
];

export default function SocialMediaLinks() {
    return (
        <Wrap gap={0} spacing={1}>
            {socialMediaLinks.map(({ Icon, href, text }) => (
                <WrapItem key={href} w={{ base: 'calc(50% - 4px)', md: '100%' }}>
                    <HStack w='100%' spacing={2}>
                        <ExLink href={href}>
                            <Icon color='white' />
                        </ExLink>
                        <ExLink
                            href={href}
                            isTruncated
                            bgGradient='linear(180deg, #fff, #adadad)'
                            bgClip='text'
                        >
                            {text}
                        </ExLink>
                    </HStack>
                </WrapItem>
            ))}
        </Wrap>
    );
}
