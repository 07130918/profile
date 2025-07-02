import { ExLink, TabContainer } from '@/components/ChakraExtension';
import { bmcImage, socialLink } from '@/lib/consts';
import design from '@/lib/design';
import { HStack, Image, Text, useMediaQuery } from '@chakra-ui/react';

const Support = () => {
    const [isLargerThan480] = useMediaQuery('(min-width: 480px)');
    return (
        <TabContainer>
            <Text
                fontSize={{ base: 'xl', md: '3xl' }}
                fontWeight="bold"
                bgGradient={design.graduation.rainbow}
                bgClip="text"
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
            <HStack spacing={8}>
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
                {isLargerThan480 && (
                    <Image
                        src={bmcImage.qr.src}
                        alt={bmcImage.qr.alt}
                        h={100}
                        w={100}
                    />
                )}
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
