import { ExLink } from '@/components/ChakraExtension';
import { socialLink } from '@/lib/consts';
import { HStack, Wrap, WrapItem } from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
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
];

export default function SocialMediaLinks() {
    return (
        <Wrap gap={1}>
            {socialMediaLinks.map(({ Icon, href, text }) => (
                <WrapItem
                    key={href}
                    w={{ base: 'calc(50% - 4px)', md: '100%' }}
                >
                    <HStack w="100%" gap={2}>
                        <ExLink href={href} color="gray.100">
                            <Icon />
                        </ExLink>
                        <ExLink
                            href={href}
                            textOverflow="ellipsis"
                            overflow="hidden"
                            whiteSpace="nowrap"
                            color="gray.100"
                        >
                            {text}
                        </ExLink>
                    </HStack>
                </WrapItem>
            ))}
        </Wrap>
    );
}
