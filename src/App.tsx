import {
  ChakraProvider,
  Box,
  Grid,
  GridItem,
  useColorMode,
} from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import MainSection from "./components/MainSection";
import darkThemeImage from "./assets/milad-fakurian-purple-blue.jpg";
import lightThemeImage from "./assets/milad-fakurian-bubble-drop.jpg";
import theme from "./theme";

function App() {
  const { colorMode } = useColorMode();

  return (
    <ChakraProvider theme={theme}>
      <Box
        position="relative"
        minHeight="100vh"
        backgroundImage={
          colorMode === "dark"
            ? `url(${darkThemeImage})`
            : `url(${lightThemeImage})`
        }
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        backgroundAttachment="fixed"
        _before={{
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backdropFilter: "blur(100px)",
          zIndex: 1,
        }}
      >
        <Grid
          templateAreas={{
            base: `"main" "nav"`,
            lg: `"nav main"`, // wider than 1024px
          }}
          templateColumns={{
            base: "1fr",
            lg: "70px 1fr",
          }}
          minHeight="100vh"
          position="relative"
          zIndex={2}
        >
          <GridItem area="nav">
            <NavBar />
          </GridItem>
          <GridItem area="main">
            <MainSection />
          </GridItem>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
