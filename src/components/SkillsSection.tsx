import { Grid, Box, VStack, Text, Code, Tooltip, Flex } from "@chakra-ui/react";
import {
  FaReact,
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaAngular,
  FaGit,
  FaFigma,
  FaBootstrap,
  FaJira,
  FaSalesforce,
} from "react-icons/fa";
import { SiTypescript, SiAzuredevops, SiChakraui } from "react-icons/si";

const skills = [
  { name: "React", icon: FaReact, color: "blue.500" },
  { name: "JavaScript", icon: FaJs, color: "yellow.500" },
  { name: "TypeScript", icon: SiTypescript, color: "blue.300" },
  { name: "HTML", icon: FaHtml5, color: "orange.500" },
  { name: "CSS", icon: FaCss3Alt, color: "blue.600" },
  { name: "Java", icon: FaJava, color: "red.500" },
  { name: "Python", icon: FaPython, color: "blue.400" },
  { name: "Angular", icon: FaAngular, color: "red.600" },
  { name: "Azure DevOps", icon: SiAzuredevops, color: "blue.600" },
  { name: "Salesforce", icon: FaSalesforce, color: "blue.400" },
  { name: "Jira", icon: FaJira, color: "blue.500" },
  { name: "Git", icon: FaGit, color: "orange.500" },
  { name: "Figma", icon: FaFigma, color: "pink.500" },
  { name: "Bootstrap", icon: FaBootstrap, color: "purple.600" },
  { name: "Chakra UI", icon: SiChakraui, color: "teal.500" },
];

const SkillsSection = () => {
  return (
    <VStack
      align="center"
      spacing={6}
      padding={{ base: "20px 50px", md: "50px" }}
      textAlign="center"
    >
      <Text
        fontSize={{ base: "2xl", md: "4xl" }}
        fontWeight="bold"
        fontFamily="'Pacifico', cursive"
        letterSpacing={3}
      >
        Skills
      </Text>
      <Code
        colorScheme="purple"
        bg="transparent"
        fontFamily="'Fira Code', monospace"
        alignSelf="flex-start"
        textAlign="left"
        fontSize={{ base: "12px", md: "16px" }}
      >
        /*
      </Code>
      <Code
        colorScheme="purple"
        bg="transparent"
        fontFamily="'Fira Code', monospace"
        alignSelf="flex-start"
        textAlign="left"
        fontSize={{ base: "12px", md: "16px" }}
        paddingLeft="30px"
        margin="-20px 0"
      >
        I'm a Frontend focused Full Stack Developer with almost 2 years of
        experience.
        <br />
        <br />
        I love focusing on the frontend side of an application as I enjoy seeing
        my code "come to life" and orchestrate in a seamless, beautiful
        experience!
        <br />
        <br />
        Here you can find a list of skills I've been using so far, both during
        my career and some personal projects:
      </Code>
      <Code
        colorScheme="purple"
        bg="transparent"
        fontFamily="'Fira Code', monospace"
        alignSelf="flex-start"
        textAlign="left"
        fontSize={{ base: "12px", md: "16px" }}
      >
        */
      </Code>
      <Grid
        templateColumns={{
          base: "repeat(3, 1fr)",
          md: "repeat(4, 1fr)",
          lg: "repeat(6, 1fr)",
        }}
        gap={6}
        width="100%"
        padding="0 35px"
      >
        {skills.map((skill) => (
          <Box key={skill.name} textAlign="center">
            <Flex align="center" justify="center">
              <Tooltip label={skill.name} placement="top">
                <Box fontSize={{ base: "3xl", md: "5xl" }} color={skill.color}>
                  <skill.icon />
                </Box>
              </Tooltip>
            </Flex>
          </Box>
        ))}
      </Grid>
    </VStack>
  );
};

export default SkillsSection;
