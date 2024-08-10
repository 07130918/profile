import { ExLink, TabContainer } from '@/components/ChakraExtension';
import { bmcImage, socialLink } from '@/lib/consts';
import design from '@/lib/design';
import { HStack, Image, Text, useMediaQuery } from '@chakra-ui/react';

const Support = () => {
    const [isLargerThan480] = useMediaQuery('(min-width: 480px)');
    return (
        <TabContainer>
            <Text
                fontSize='3xl'
                fontWeight='bold'
                bgGradient={design.graduation.rainbow}
                bgClip='text'
            >
                Thank you for seeing this tab!
            </Text>
            <Text fontSize='xl' fontWeight='bold' color='whiteAlpha.900' pb={4}>
                You can send me some tips easily!
            </Text>
            <HStack spacing={8}>
                <ExLink href={socialLink.buyMeACoffee}>
                    <Image src={bmcImage.src} alt={bmcImage.alt} h='82px' w='300px' />
                </ExLink>
                {isLargerThan480 && (
                    <Image src={bmcImage.qr.src} alt={bmcImage.qr.alt} h={100} w={100} />
                )}
            </HStack>
            <ExLink href={socialLink.paypal}>
                <Image src='/images/paypal.png' alt='Paypal' h='100px' w='200px' />
            </ExLink>
        </TabContainer>
    );
};

export default Support;
