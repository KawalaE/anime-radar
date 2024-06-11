import { SimpleGrid } from "@chakra-ui/react";
import useAnimes from "../hooks/useAnimes";
import AnimeCard from "./AnimeCard";

const AnimeGrid = () => {
  const { data: animes, error, isLoading } = useAnimes();
  console.log(animes);
  return (
    <SimpleGrid
      padding="10px"
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing={6}
    >
      {animes?.map((anime) => (
        <AnimeCard key={anime.mal_id} animeInfo={anime}></AnimeCard>
      ))}
    </SimpleGrid>
  );
};

export default AnimeGrid;
