import { Grid, GridItem, Show, Flex, Spinner, Heading } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import AnimeGenres from "../components/AnimeGenres";
import AnimeGrid from "../components/AnimeGrid";
import AnimeHeading from "../components/AnimeHeading";
import CardsSkeleton from "../components/CardsSkeleton";
import FilterMenu from "../components/FilterMenu";
import GenresSekeleton from "../components/GenresSekeleton";
import useAnimes from "../hooks/useAnimes";
import useGenres from "../hooks/useGenres";
import useAnimeQueryStore from "../store";
import { Text } from "@chakra-ui/react";
const HomePage = () => {
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

  return (
    <>
      <Grid
        templateAreas={{
          base: `"main"`,
          lg: `"aside main"`,
        }}
      >
        <Show above="lg">
          <GridItem area="aside">
            <AnimeGenres genres={genres?.data} />
            {genreIsLoading && <GenresSekeleton />}
          </GridItem>
        </Show>
        <GridItem area="main" mt={10}>
          <Flex
            alignItems="center"
            justifyContent="space-between"
            flexWrap="wrap"
          >
            <AnimeHeading />
            <FilterMenu />
          </Flex>

          <InfiniteScroll
            next={fetchNextPage}
            hasMore={!!hasNextPage}
            loader={<Spinner />}
            dataLength={fetchedAnimesCount}
          >
            {" "}
            {animeIsLoading && <CardsSkeleton />}
            {animes?.pages.map((page, index) => (
              <React.Fragment key={index}>
                <AnimeGrid animes={page.data} />
              </React.Fragment>
            ))}
          </InfiniteScroll>
        </GridItem>
      </Grid>
    </>
  );
};

export default HomePage;
