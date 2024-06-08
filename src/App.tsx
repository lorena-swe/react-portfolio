import { Box, Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import MainSection from "./components/MainSection";
import backgroundImage from "./assets/milad-fakurian-u8Jn2rzYIps-unsplash.jpg";

function App() {
  return (
    <>
      <Box
        position="relative"
        minHeight="100vh"
        backgroundImage={`url(${backgroundImage})`}
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
          backdropFilter: "blur(35px)",
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
    </>
  );
}

export default App;
