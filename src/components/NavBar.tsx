import {
  Box,
  Flex,
  Image,
  Spacer,
  VStack,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { HamburgerIcon, StarIcon } from "@chakra-ui/icons";
import { FaHome, FaSuitcase } from "react-icons/fa";
import SectionButton from "./SectionButton";
import logo from "../assets/rubber-duck.png";

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      onClose(); // Close the drawer when a section is clicked
    }
  };

  return (
    <>
      <Flex
        direction="column"
        align="center"
        height="100vh"
        padding="10px"
        position="fixed"
        top="0"
        left="0"
        zIndex="100" // Ensure it is above other elements
        display={{ base: "none", md: "flex" }}
      >
        <Image
          src={logo}
          boxSize="40px"
          cursor="pointer"
          onClick={() => handleScrollTo("home")}
        />
        <Spacer />
        <Box>
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

      <IconButton
        icon={<HamburgerIcon />}
        aria-label="Open Menu"
        display={{ base: "flex", md: "none" }}
        position="fixed"
        top="10px"
        left="10px"
        zIndex="100" // Ensure it is above other elements
        onClick={onOpen}
      />

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>
              <Image
                src={logo}
                boxSize="40px"
                cursor="pointer"
                onClick={() => handleScrollTo("home")}
              />
            </DrawerHeader>
            <DrawerBody>
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
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

export default NavBar;
