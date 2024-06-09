import { HStack, Icon, Switch, useColorMode } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack zIndex="99" position="relative">
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      {colorMode === "dark" ? (
        <Icon as={FaMoon} color="gray.200" />
      ) : (
        <Icon as={FaSun} color="gray.900" />
      )}
    </HStack>
  );
};

export default ColorModeSwitch;
