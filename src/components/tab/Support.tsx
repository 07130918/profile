import { ExLink, TabContainer } from '@/components/ChakraExtension';
import { socialLink } from '@/lib/consts';
import design from '@/lib/design';
import { HStack, Image, Text, useMediaQuery } from '@chakra-ui/react';

const Support = () => {
    const [isLargerThan480] = useMediaQuery('(min-width: 480px)');

    return (
        <TabContainer>
            <Text
                fontSize='3xl'
                fontWeight='bold'
                bgGradient={design.graduation.blue2}
                bgClip='text'
            >
                Thank you for seeing this tab!
            </Text>
            <Text fontSize='xl' fontWeight='bold' bgGradient={design.graduation.gb} bgClip='text'>
                You can help me effortlessly
            </Text>
            <HStack>
                <ExLink href={socialLink.buyMeACoffee}>
                    <Image
                        src='https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png'
                        alt='Buy Me A Coffee'
                        h='82px'
                        w='300px'
                    />
                </ExLink>
                {isLargerThan480 && (
                    <Image
                        src='/images/buymeacoffeeqr.png'
                        alt='Buy Me A Coffee QR Code'
                        h={100}
                        w={100}
                    />
                )}
            </HStack>
            <ExLink href={socialLink.paypal}>
                <Image src='/images/paypal.png' alt='Paypal' h='100px' w='200px' />
            </ExLink>
        </TabContainer>
    );
};

export default Support;
