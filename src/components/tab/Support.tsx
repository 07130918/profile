import { ExLink, TabContainer } from '@/components/ChakraExtension';
import { socialLink } from '@/lib/consts';
import design from '@/lib/design';
import { Box, HStack, Image, Text } from '@chakra-ui/react';

const Support = () => {
    return (
        <TabContainer>
            <Box p={2}>
                <Box mb={4}>
                    <Text
                        fontSize='3xl'
                        fontWeight='bold'
                        bgGradient={design.graduation.blue2}
                        bgClip='text'
                    >
                        Thank you for seeing this tab!
                    </Text>
                    <Text
                        fontSize='xl'
                        fontWeight='bold'
                        bgGradient={design.graduation.gb}
                        bgClip='text'
                    >
                        You can help me effortlessly
                    </Text>
                </Box>
                <TabContainer mb={4}>
                    <HStack>
                        <ExLink href={socialLink.buyMeACoffee}>
                            <Image
                                src='https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png'
                                alt='Buy Me A Coffee'
                                h='82px'
                                w='300px'
                            />
                        </ExLink>
                        <Box ml={10}>
                            <Image
                                src='/images/buymeacoffeeqr.png'
                                alt='Buy Me A Coffee QR Code'
                                h={100}
                                w={100}
                            />
                        </Box>
                    </HStack>
                </TabContainer>
                <TabContainer>
                    <ExLink href={socialLink.paypal}>
                        <Image src='/images/paypal.png' alt='Paypal' h='120px' w='240px' />
                    </ExLink>
                </TabContainer>
            </Box>
        </TabContainer>
    );
};

export default Support;
