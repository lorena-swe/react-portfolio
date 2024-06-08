import { Code, Flex, Text, VStack } from "@chakra-ui/react";
import { css } from "@emotion/react";
import { useState, useEffect } from "react";

const Home = () => {
  const [showCaret, setShowCaret] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCaret(false);
    }, 1500); // Match this duration with the typing animation duration
    return () => clearTimeout(timer);
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

  return (
    <Flex align="center" justify="center" height="100%">
      <VStack align="start" spacing={4}>
        <Code
          colorScheme="purple"
          bg="transparent"
          fontFamily="'Fira Code', monospace"
          alignSelf="flex-start"
        >
          &lt;IntroSection&gt;
        </Code>
        <Text
          fontSize="70px"
          paddingLeft="16px"
          fontFamily="'Pacifico', cursive"
          css={typingAnimation}
        >
          Hi, I'm Lorena
        </Text>
        <Text
          fontSize="3xl"
          paddingLeft="16px"
          fontFamily="'Roboto', sans-serif"
        >
          Frontend Developer
        </Text>
        <Code
          colorScheme="purple"
          bg="transparent"
          fontFamily="'Fira Code', monospace"
          alignSelf="flex-start"
        >
          &lt;/IntroSection&gt;
        </Code>
      </VStack>
    </Flex>
  );
};

export default Home;
