import { ExLink } from '@/components/ChakraExtension';
import { socialLink } from '@/lib/consts';
import design from '@/lib/design';
import { HStack, Wrap, WrapItem } from '@chakra-ui/react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SiGmail } from 'react-icons/si';

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

export default function SocialMediaLinks() {
    return (
        <Wrap gap={0} spacing={1}>
            {socialMediaLinks.map(({ Icon, color, href, text }) => (
                <WrapItem key={href} w={{ base: 'calc(50% - 4px)', md: '100%' }}>
                    <HStack w='100%' spacing={2}>
                        <ExLink href={href}>
                            <Icon color={color} />
                        </ExLink>
                        <ExLink href={href} color={color} isTruncated>
                            {text}
                        </ExLink>
                    </HStack>
                </WrapItem>
            ))}
        </Wrap>
    );
}
