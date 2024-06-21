import { SimpleGrid } from "@chakra-ui/react";
import AnimeCard from "./AnimeCard";
import { Anime } from "../entities/Anime";

interface Props {
  animes?: Anime[];
}
const AnimeGrid = ({ animes }: Props) => {
  return (
    <SimpleGrid
      padding="20px"
      columns={{ sm: 2, md: 3, lg: 3, xl: 4, "2xl": 6 }}
      spacing={10}
      margin={5}
      justifyContent="center"
    >
      {animes?.map((anime) => (
        <AnimeCard key={anime.mal_id} animeInfo={anime}></AnimeCard>
      ))}
    </SimpleGrid>
  );
};

export default AnimeGrid;
