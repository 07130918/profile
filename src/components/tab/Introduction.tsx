import { socialLink } from '@/lib/consts';
import design from '@/lib/design';
import { Box, HStack, Heading, Link, Text } from '@chakra-ui/react';
import { BiLink } from 'react-icons/bi';

const Introduction = () => {
    return (
        <>
            <Box boxShadow={design.boxShadow} py={6} px={10} borderRadius='lg' mt={6}>
                <Heading fontSize='xl' mb={3}>
                    こんにちは、佐藤宏太です!
                </Heading>
                <Text>
                    私はソフトウェア・エンジニアリングを専門とし、現在
                    <Link href='https://www.arara.com/' textDecoration='underline'>
                        アララ株式会社
                    </Link>
                    でソフトウェアエンジニアとして働いていますが、大学在学中には都市計画を専攻していました。特に構造力学と測量学について学ぶことは私にとって貴重な経験でした。
                </Text>
                <Text>
                    現在、私はwebアプリの開発に取り組んでいます。新しい技術やアイデアを探求し、それを具現化することに喜びを感じています。
                </Text>
                <Text>(このページも好奇心で作りました!)🧑🏻‍💻</Text>
                <Text>旅行が大好きです。(詳しくは、趣味のタブで!)</Text>
                <Text>新しい場所や文化を探索が、私の好奇心と探究心が満たします!</Text>
                <Text>
                    最近は英語にも熱中しています。母国語ではない言語で物事を理解し、コミュニケーションが取れることに喜びを感じています。
                </Text>
                <Text>
                    私は取り組む物事を通し常に成長し、新しい挑戦/目標に向かって前進することを大切にしています。
                </Text>
                <Text fontWeight='bold'>
                    私の探究心と決断力を活かし、素晴らしいプロジェクトや経験を追求していきたいと考えています!!!
                </Text>
            </Box>
            <Box boxShadow={design.boxShadow} py={4} px={10} borderRadius='lg' mt={6}>
                <Heading fontSize='xl' mb={3}>
                    お仕事依頼はこちら!
                </Heading>
                <HStack>
                    <Link href={socialLink.gmail} isExternal>
                        <BiLink color={design.color.gmail} />
                    </Link>
                    <Link
                        href={socialLink.gmail}
                        bgGradient={design.graduation.theme}
                        bgClip='text'
                        fontWeight='bold'
                        textDecoration='underline'
                        isExternal
                    >
                        tokyosato1@gmail.com
                    </Link>
                </HStack>
            </Box>
        </>
    );
};

export default Introduction;
