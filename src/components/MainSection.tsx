import { Box, VStack } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import Socials from "./Socials";
import ProjectsSection from "./ProjectsSection";
import Home from "./Home";
import SkillsSection from "./SkillsSection";

const MainSection = () => {
  return (
    <>
      <Box overflowX="hidden" position="relative">
        <Box position="fixed" top="10px" right="10px" zIndex="99">
          <ColorModeSwitch />
        </Box>
        <Box position="fixed" zIndex="99">
          <Socials />
        </Box>
        <VStack padding={{ base: "0px", md: "50px" }}>
          <Box id="home" height="calc(100vh - 50px)" width="100%">
            <Home />
          </Box>

          <Box id="skills" height="auto" width="100%">
            <SkillsSection />
          </Box>

          <Box id="projects" minHeight="auto" width="100%">
            <ProjectsSection />
          </Box>
        </VStack>
      </Box>
    </>
  );
};

export default MainSection;
