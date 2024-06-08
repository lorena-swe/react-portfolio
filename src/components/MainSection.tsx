// import React from "react";
import {
  Box,
  Divider,
  VStack,
  useClipboard,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { EmailIcon } from "@chakra-ui/icons";
import SocialsButton from "./SocialsButton";

const MainSection = () => {
  const emailAddress = "lorenazotaj10@gmail.com";
  const { onCopy } = useClipboard(emailAddress);
  const toast = useToast();

  const dividerColor = useColorModeValue("gray.600", "gray.200");

  const handleEmailClick = () => {
    onCopy();
    toast({
      title: "Email address copied.",
      description: `Copied! (${emailAddress})`,
      status: "success",
      duration: 3000,
      isClosable: true,
      position: "top-right",
    });
  };

  return (
    <>
      <Box position="absolute" top="10px" right="10px">
        <ColorModeSwitch />
      </Box>

      <Box position="fixed" bottom="10px" right="10px">
        <VStack spacing={0}>
          <SocialsButton
            label="GitHub"
            icon={<FaGithub fontSize="20px" />}
            href="https://github.com/lorena-swe"
          />
          <SocialsButton
            label="LinkedIn"
            icon={<FaLinkedin fontSize="20px" />}
            href="https://www.linkedin.com/in/lorena-zotaj/"
          />
          <SocialsButton
            label="Email"
            icon={<EmailIcon fontSize="20px" />}
            onClick={handleEmailClick}
          />

          <Divider
            orientation="vertical"
            height="100px"
            borderWidth="1px"
            borderColor={dividerColor}
            marginTop="10px"
          />
        </VStack>
      </Box>

      <VStack>
        <Box id="home" height="500px" bg="red">
          Home
        </Box>

        <Box id="skills" height="500px" bg="green">
          Skills
        </Box>

        <Box id="projects" height="500px" bg="blue">
          Projects
        </Box>
      </VStack>
    </>
  );
};

export default MainSection;
