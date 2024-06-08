// import React from "react";
import { Box, VStack } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import Socials from "./Socials";

const MainSection = () => {
  return (
    <>
      <Box>
        <Box position="fixed" top="10px" right="10px">
          <ColorModeSwitch />
        </Box>

        <Socials />

        <VStack padding="50px">
          <Box id="home" height="calc(100vh - 50px)" width="100%">
            Home
          </Box>

          <Box id="skills" height="calc(100vh - 50px)" width="100%">
            Skills
          </Box>

          <Box id="projects" height="calc(100vh - 50px)" width="100%">
            Projects
          </Box>
        </VStack>
      </Box>
    </>
  );
};

export default MainSection;
