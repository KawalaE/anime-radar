import { Grid, GridItem, Show, Spinner } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import AnimeGrid from "./components/AnimeGrid";
import AnimeGenres from "./components/AnimeGenres";
import useAnimes from "./hooks/useAnimes";
import useGenres from "./hooks/useGenres";
import { useState } from "react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import CardsSkeleton from "./components/CardsSkeleton";
import GenresSekeleton from "./components/GenresSekeleton";
import useAnimeQueryStore from "./store";
import OrderSelector from "./components/OrderSelector";

function App() {
  const animeQuery = useAnimeQueryStore((s) => s.animeQuery);
  const {
    data: animes,
    error: animeError,
    isLoading: animeIsLoading,
    fetchNextPage,
    hasNextPage,
  } = useAnimes(animeQuery);

  const {
    data: genres,
    error: genreError,
    isLoading: genreIsLoading,
  } = useGenres();

  const fetchedAnimesCount =
    animes?.pages.reduce((total, page) => total + page.data.length, 0) || 0;
  console.log(animes);
  console.log(fetchedAnimesCount);
  return (
    <>
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
            <AnimeGenres genres={genres?.data} />
            {genreIsLoading && <GenresSekeleton />}
          </GridItem>
        </Show>
        <InfiniteScroll
          next={fetchNextPage}
          hasMore={!!hasNextPage}
          loader={<Spinner />}
          dataLength={fetchedAnimesCount}
        >
          {" "}
          <OrderSelector />
          <GridItem area="main" mt={10}>
            {animeIsLoading && <CardsSkeleton />}
            {animes?.pages.map((page, index) => (
              <React.Fragment key={index}>
                <AnimeGrid animes={page.data} />
              </React.Fragment>
            ))}
          </GridItem>
        </InfiniteScroll>
      </Grid>
    </>
  );
}

export default App;
