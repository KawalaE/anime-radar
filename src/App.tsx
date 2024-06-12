import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import AnimeGrid from "./components/AnimeGrid";
import AnimeGenres from "./components/AnimeGenres";
import useAnimes from "./hooks/useAnimes";
import useGenres from "./hooks/useGenres";
import CardsSkeleton from "./components/CardsSkeleton";
import GenreSkeleton from "./components/GenreSkeleton";
import { useState } from "react";
import { animeQuery } from "./hooks/useAnimes";

function App() {
  const [animeQuery, setAnimeQuery] = useState({} as animeQuery);
  const {
    data: animes,
    error: animeError,
    isLoading: animeIsLoading,
  } = useAnimes(animeQuery);

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
          <AnimeGenres
            genres={genres}
            queryData={animeQuery}
            queryUpdater={setAnimeQuery}
          />
          {genreIsLoading && <GenreSkeleton />}
        </GridItem>
      </Show>

      <GridItem area="main">
        {animeIsLoading && <CardsSkeleton />}
        <AnimeGrid animes={animes} />
      </GridItem>
    </Grid>
  );
}

export default App;
