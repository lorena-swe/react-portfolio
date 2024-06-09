import { Box, Text, Flex } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      as="footer"
      width="100%"
      padding="70px 20px 35px 20px"
      textAlign="center"
    >
      <Flex direction="column" align="center">
        <Text>&copy; 2024 Lorena Zotaj. All rights reserved.</Text>
        <Text>Built with ❤️ using React and Chakra UI</Text>
      </Flex>
    </Box>
  );
};

export default Footer;
