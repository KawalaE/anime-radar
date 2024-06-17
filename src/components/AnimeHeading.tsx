import useAnimeQueryStore from "../store";
import { HStack, Heading } from "@chakra-ui/react";
import { refactor } from "./UtilityFunctions";
import useGenre from "../hooks/useGenre";

const AnimeHeading = () => {
  const currentGenreId = useAnimeQueryStore((s) => s.animeQuery.genreId);
  const currentGenreName = useGenre(currentGenreId) || "";
  const currentOrder = refactor(
    useAnimeQueryStore((s) => s.animeQuery.orderBy) || ""
  );
  const currentType = refactor(
    useAnimeQueryStore((s) => s.animeQuery.type) || ""
  );
  const currentStatus = refactor(
    useAnimeQueryStore((s) => s.animeQuery.status) || ""
  );
  return (
    <HStack justifyContent="center">
      <Heading
        size="xl"
        ms={4}
        color="teal.400"
      >{`${currentGenreName}`}</Heading>
      <Heading
        noOfLines={1}
        size="lg"
      >{`${currentOrder} ${currentType} ${currentStatus}`}</Heading>
    </HStack>
  );
};

export default AnimeHeading;
