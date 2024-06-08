import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import MainSection from "./components/MainSection";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"main" "nav"`,
          lg: `"nav main"`, // wider than 1024px
        }}
        templateColumns={{
          base: "1fr",
          lg: "100px 1fr",
        }}
        minHeight="100vh"
      >
        <GridItem area="nav" bg="rgba(0, 29, 150, 0.2)">
          <NavBar />
        </GridItem>
        <GridItem area="main" bg="rgba(150, 29, 63, 0.2)">
          <MainSection />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
