import { HStack, Image, Text } from '@chakra-ui/react';
import { ExLink, TabContainer } from '@/components/ChakraExtension';
import { bmcImage, socialLink } from '@/lib/consts';

const Support = () => {
    return (
        <TabContainer>
            <Text
                fontSize={{ base: 'xl', md: '3xl' }}
                fontWeight="bold"
                bgGradient="to-r"
                gradientFrom="#ff00cc"
                gradientTo="#3333cc"
                bgClip="text"
                color="transparent"
            >
                Thank you for seeing this tab!
            </Text>
            <Text
                fontSize={{ base: 'md', md: 'xl' }}
                fontWeight="bold"
                color="whiteAlpha.900"
                py={2}
            >
                You can send me some tips easily!
            </Text>
            <HStack gap={8}>
                <ExLink href={socialLink.buyMeACoffee}>
                    <Image
                        src={bmcImage.src}
                        alt={bmcImage.alt}
                        h={{
                            base: '50px',
                            md: '82px',
                        }}
                        w={{
                            base: '200px',
                            md: '300px',
                        }}
                    />
                </ExLink>
                <Image
                    src={bmcImage.qr.src}
                    alt={bmcImage.qr.alt}
                    h={100}
                    w={100}
                    display={{ base: 'none', sm: 'block' }}
                />
            </HStack>
            <ExLink href={socialLink.paypal}>
                <Image
                    src="/images/paypal.png"
                    alt="Paypal"
                    h={{
                        base: '90px',
                        md: '100px',
                    }}
                    w={{
                        base: '180px',
                        md: '200px',
                    }}
                />
            </ExLink>
        </TabContainer>
    );
};

export default Support;
