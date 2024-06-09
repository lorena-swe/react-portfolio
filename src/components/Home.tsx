import { Code, Flex, Text, VStack } from "@chakra-ui/react";
import { css } from "@emotion/react";
import { useState, useEffect } from "react";

const Home = () => {
  const [showCaret, setShowCaret] = useState(true);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const caretTimer = setTimeout(() => {
      setShowCaret(false);
      setShowText(true);
    }, 1500); // This duration matches with the typing animation duration

    return () => clearTimeout(caretTimer);
  }, []);

  const typingAnimation = css`
    @keyframes typing {
      from {
        width: 0;
      }
      to {
        width: 100%;
      }
    }

    @keyframes blink-caret {
      from,
      to {
        border-color: transparent;
      }
      50% {
        border-color: purple;
      }
    }

    white-space: nowrap;
    overflow: hidden;
    border-right: ${showCaret ? "0.15em solid black" : "none"};
    animation: typing 1.5s steps(40, end),
      ${showCaret ? "blink-caret 0.75s step-end infinite" : "none"};
  `;

  const bubbleUpAnimation = css`
    @keyframes bubbleUp {
      0% {
        transform: translateY(20px);
        opacity: 0;
      }
      100% {
        transform: translateY(0);
        opacity: 1;
      }
    }

    animation: bubbleUp 1s ease-out forwards;
  `;

  return (
    <Flex
      align="center"
      justify="center"
      height="100%"
      maxWidth="100%"
      padding="20px"
      overflowX="hidden" // Prevent horizontal overflow
    >
      <VStack align="start" spacing={4}>
        {showText && (
          <Code
            colorScheme="purple"
            bg="transparent"
            fontFamily="'Fira Code', monospace"
            alignSelf="flex-start"
            fontSize={{ base: "12px", md: "16px" }}
            css={bubbleUpAnimation}
          >
            &lt;IntroSection&gt;
          </Code>
        )}

        <Text
          fontSize={{ base: "40px", md: "70px", lg: "90px" }}
          paddingLeft={{ base: "10px", md: "20px", lg: "30px" }}
          fontFamily="'Pacifico', cursive"
          css={typingAnimation}
        >
          Hi, I'm Lorena
        </Text>

        {showText && (
          <VStack
            spacing={0}
            paddingLeft={{ base: "10px", md: "20px", lg: "30px" }}
          >
            <Code
              colorScheme="purple"
              bg="transparent"
              fontFamily="'Fira Code', monospace"
              alignSelf="flex-start"
              marginBottom="-5px"
              fontSize={{ base: "12px", md: "16px" }}
              css={bubbleUpAnimation}
            >
              &lt;Role&gt;
            </Code>
            <Text
              fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
              paddingLeft={{ base: "10px", md: "20px", lg: "30px" }}
              fontFamily="'Raleway', sans-serif"
              letterSpacing={1}
              css={bubbleUpAnimation}
            >
              Frontend Developer
            </Text>
            <Code
              colorScheme="purple"
              bg="transparent"
              fontFamily="'Fira Code', monospace"
              alignSelf="flex-start"
              marginTop="-5px"
              fontSize={{ base: "12px", md: "16px" }}
              css={bubbleUpAnimation}
            >
              &lt;/Role&gt;
            </Code>
          </VStack>
        )}

        {showText && (
          <Code
            colorScheme="purple"
            bg="transparent"
            fontFamily="'Fira Code', monospace"
            alignSelf="flex-start"
            paddingTop="20px"
            fontSize={{ base: "12px", md: "16px" }}
            css={bubbleUpAnimation}
          >
            &lt;/IntroSection&gt;
          </Code>
        )}
      </VStack>
    </Flex>
  );
};

export default Home;
