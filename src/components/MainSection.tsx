// import React from "react";
import { Box } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";

const MainSection = () => {
  return (
    <>
      <Box position="absolute" top="10px" right="10px">
        <ColorModeSwitch />
      </Box>
    </>
  );
};

export default MainSection;
