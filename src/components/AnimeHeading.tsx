import { HStack, Heading, VStack } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import useAnimeQueryStore from "../store";
import { refactorName } from "./UtilityFunctions";

const AnimeHeading = () => {
  const currentGenreId = useAnimeQueryStore((s) => s.animeQuery.genreId);
  const currentGenreName = useGenre(currentGenreId) || "";
  const currentOrder = refactorName(
    useAnimeQueryStore((s) => s.animeQuery.orderBy) || ""
  );
  const currentType = refactorName(
    useAnimeQueryStore((s) => s.animeQuery.type) || ""
  );
  const currentStatus = refactorName(
    useAnimeQueryStore((s) => s.animeQuery.status) || ""
  );
  const currentPhrase = refactorName(
    useAnimeQueryStore((s) => s.animeQuery.phrase) || ""
  );
  return (
    <VStack ms={10} justifyContent="flex-start">
      <HStack flexWrap="wrap">
        {" "}
        <Heading
          size="xl"
          aria-label="main-heading"
          color="teal.400"
        >{`${currentPhrase}${
          currentGenreName
            ? currentGenreName + " by"
            : currentPhrase
            ? ""
            : "All by"
        }`}</Heading>
        <Heading
          noOfLines={1}
          size="lg"
        >{`${currentOrder} ${currentType} ${currentStatus}`}</Heading>
      </HStack>
    </VStack>
  );
};

export default AnimeHeading;
