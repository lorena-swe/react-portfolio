import { Box, Divider, VStack, useColorModeValue } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { EmailIcon } from "@chakra-ui/icons";
import SocialsButton from "./SocialsButton";
import { useClipboard, useToast } from "@chakra-ui/react";

const Socials = () => {
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
    <Box position="fixed" bottom="100px" right="10px">
      <VStack spacing={2}>
        <SocialsButton
          label="GitHub"
          icon={<FaGithub fontSize="20px" />}
          href="https://github.com"
        />
        <SocialsButton
          label="LinkedIn"
          icon={<FaLinkedin fontSize="20px" />}
          href="https://www.linkedin.com"
        />
        <SocialsButton
          label="Email"
          icon={<EmailIcon fontSize="20px" />}
          onClick={handleEmailClick}
        />
      </VStack>

      <Divider
        orientation="vertical"
        height="50px"
        borderColor={dividerColor}
        borderWidth="2px"
      />
    </Box>
  );
};

export default Socials;
