import { Grid, GridItem, Flex, Spinner } from "@chakra-ui/react";
import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import AnimeGrid from "../components/AnimeGrid";
import AnimeHeading from "../components/AnimeHeading";
import CardsSkeleton from "../components/CardsSkeleton";
import FilterMenu from "../components/FilterMenu";
import useAnimes from "../hooks/useAnimes";
import useAnimeQueryStore from "../store";

const HomePage = () => {
  const animeQuery = useAnimeQueryStore((s) => s.animeQuery);
  const {
    data: animes,
    error: animeError,
    isLoading: animeIsLoading,
    fetchNextPage,
    hasNextPage,
  } = useAnimes(animeQuery);

  const fetchedAnimesCount =
    animes?.pages.reduce((total, page) => total + page.data.length, 0) || 0;

  return (
    <>
      <Grid
        pr={["5px", "50px", "70px", "100px", "200px"]}
        pl={["5px", "50px", "70px", "100px", "200px"]}
      >
        <GridItem mt={10}>
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
