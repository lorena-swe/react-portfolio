import { Box, Flex, Image, Spacer, VStack } from "@chakra-ui/react";
import logo from "../assets/rubber-duck.png";
import { StarIcon } from "@chakra-ui/icons";
import { FaHome, FaSuitcase } from "react-icons/fa";
import SectionButton from "./SectionButton";

const NavBar = () => {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Flex
      direction="column"
      align="center"
      height="100vh"
      padding="10px"
      position="fixed"
      top="0"
      left="0"
    >
      <Image
        src={logo}
        boxSize="40px"
        cursor="pointer"
        onClick={() => handleScrollTo("home")}
      />
      <Spacer />
      <Box>
        {/* Home, About, Projects */}
        <VStack spacing={4}>
          <SectionButton
            label="Home"
            icon={<FaHome />}
            onClick={() => handleScrollTo("home")}
          />
          <SectionButton
            label="Skills"
            icon={<StarIcon />}
            onClick={() => handleScrollTo("skills")}
          />
          <SectionButton
            label="Projects"
            icon={<FaSuitcase />}
            onClick={() => handleScrollTo("projects")}
          />
        </VStack>
      </Box>
      <Spacer />
    </Flex>
  );
};

export default NavBar;
