import { Flex, Grid, SimpleGrid, Spinner } from "@chakra-ui/react";
import React from "react";
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
    isLoading: animeIsLoading,
    fetchNextPage,
    hasNextPage,
  } = useAnimes(animeQuery);
  const fetchedAnimesCount =
    animes?.pages.reduce((total, page) => total + page.data.length, 0) || 0;
  return (
    <>
      <Grid>
        <SimpleGrid columns={[1, null, 2]} p={5} gap="2.1rem">
          <Flex dir="ltr">
            <AnimeHeading />
          </Flex>
          <FilterMenu />
        </SimpleGrid>
        <Flex
          justifyContent="center"
          alignItems="center"
          direction="column"
          width="100%"
          overflowY="hidden"
        >
          <InfiniteScroll
            next={fetchNextPage}
            hasMore={!!hasNextPage}
            style={{ width: "100%", overflow: "hidden" }}
            loader={
              <Flex justifyContent="center" mt={4}>
                <Spinner />
              </Flex>
            }
            dataLength={fetchedAnimesCount}
          >
            {" "}
            {animes?.pages.map((page, index) => (
              <React.Fragment key={index}>
                <AnimeGrid animes={page.data} />
              </React.Fragment>
            ))}
            {animeIsLoading && (
              <div role="progressbar">
                <CardsSkeleton />
              </div>
            )}
          </InfiniteScroll>
        </Flex>
      </Grid>
    </>
  );
};

export default HomePage;
