import {
  Button,
  Flex,
  Heading,
  SimpleGrid,
  Image,
  Img,
} from "@chakra-ui/react";
import AnimeCard from "./AnimeCard";
import { Anime } from "../entities/Anime";
import useAnimeQueryStore from "../store";

interface Props {
  animes?: Anime[];
}
const AnimeGrid = ({ animes }: Props) => {
  const resetAllSearches = useAnimeQueryStore((s) => s.resetAll);
  return (
    <>
      {!animes?.length && (
        <Flex marginTop={20} flexDir="column" alignItems="center">
          <Image
            boxSize={["250px", "350px"]}
            src="src/assets/anime-found.gif"
          ></Image>
          <Heading size="lg" textAlign="center" mt={10}>
            Oops... No anime was found.
          </Heading>
          <Heading size="md" textAlign="center">
            Looks like it's hiding in another dimension!
          </Heading>
          <Button onClick={resetAllSearches} colorScheme="teal" variant="ghost">
            Reset my filters!
          </Button>
        </Flex>
      )}
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
