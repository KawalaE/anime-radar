import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import AnimeGrid from "./components/AnimeGrid";
import AnimeGenres from "./components/AnimeGenres";
import useAnimes from "./hooks/useAnimes";
import useGenres from "./hooks/useGenres";
import CardSkeleton from "./components/CardSkeleton";
function App() {
  const {
    data: animes,
    error: animeError,
    isLoading: animeIsLoading,
  } = useAnimes();

  const {
    data: genres,
    error: genreError,
    isLoading: genreIsLoading,
  } = useGenres();

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">
          <AnimeGenres genres={genres} />
        </GridItem>
      </Show>

      <GridItem area="main">
        {animeIsLoading && <CardSkeleton />}
        <AnimeGrid animes={animes} />
      </GridItem>
    </Grid>
  );
}

export default App;
