import { SimpleGrid } from "@chakra-ui/react";
import useAnimes from "../hooks/useAnimes";
import AnimeCard from "./AnimeCard";
import Anime from "../entities/Anime";
import InfiniteScroll from "react-infinite-scroll-component";
import { FetchResponse } from "../services/api-client";

interface Props {
  animes?: Anime[];
}
const AnimeGrid = ({ animes }: Props) => {
  return (
    <SimpleGrid
      padding="20px"
      columns={{ sm: 2, md: 3, lg: 3, xl: 4, "2xl": 6 }}
      spacing={10}
    >
      {animes?.map((anime) => (
        <AnimeCard key={anime.mal_id} animeInfo={anime}></AnimeCard>
      ))}
    </SimpleGrid>
  );
};

export default AnimeGrid;
