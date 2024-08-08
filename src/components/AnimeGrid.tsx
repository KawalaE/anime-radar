import { SimpleGrid } from "@chakra-ui/react";
import { Anime } from "../entities/Anime";
import AnimeCard from "./AnimeCard";
import AnimeNotFound from "./AnimeNotFound";

interface Props {
  animes?: Anime[];
}
const AnimeGrid = ({ animes }: Props) => {
  return (
    <>
      {!animes?.length && <AnimeNotFound />}
      <SimpleGrid
        columns={{ sm: 2, md: 3, lg: 4, "2xl": 6 }}
        spacing={10}
        margin={10}
        justifyContent="center"
      >
        {animes?.map((anime) => (
          <AnimeCard key={anime.mal_id} animeInfo={anime}></AnimeCard>
        ))}
      </SimpleGrid>
    </>
  );
};

export default AnimeGrid;
