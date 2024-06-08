import {
  Box,
  Flex,
  IconButton,
  Image,
  Spacer,
  Tooltip,
  VStack,
} from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { EmailIcon, SearchIcon, StarIcon } from "@chakra-ui/icons";
// import ColorModeSwitch from "./ColorModeSwitch";
// import SearchInput from "./SearchInput";

// interface Props {
//   onSearch: (searchText: string) => void;
// }

const NavBar = () => {
  return (
    <Flex direction="column" align="center" height="100vh" padding="10px">
      <Image src={logo} boxSize="45px" />
      <Spacer />
      <Box>
        {/* Home, About, Projects */}
        <VStack spacing={4}>
          <Tooltip
            label="Home"
            placement="right"
            bg="rgba(0, 29, 50, 0.5)"
            color="white"
            borderRadius="7px"
          >
            <IconButton aria-label="Search database" icon={<SearchIcon />} />
          </Tooltip>
          <Tooltip
            label="Projects"
            placement="right"
            bg="rgba(0, 29, 50, 0.5)"
            color="white"
            borderRadius="7px"
          >
            <IconButton aria-label="Search database" icon={<StarIcon />} />
          </Tooltip>
          <Tooltip
            label="About"
            placement="right"
            bg="rgba(0, 29, 50, 0.5)"
            color="white"
            borderRadius="7px"
          >
            <IconButton aria-label="Search database" icon={<EmailIcon />} />
          </Tooltip>
        </VStack>
      </Box>
      <Spacer />
    </Flex>
  );
};

export default NavBar;
