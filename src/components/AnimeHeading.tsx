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
        <Heading
          fontSize={{ base: "1rem", md: "1.5rem", lg: "2rem" }}
          aria-label="main-heading"
          color="teal.400"
        >{`${currentPhrase}${
          currentGenreName
            ? currentGenreName + " by"
            : currentPhrase
            ? ""
            : "All by"
        }`}</Heading>{" "}
        <Heading
          aria-label="secondary-heading"
          noOfLines={1}
          fontSize={{ base: "1rem", md: "1.5rem", lg: "2rem" }}
        >{`${currentOrder} ${currentType} ${currentStatus}`}</Heading>
      </HStack>
    </VStack>
  );
};

export default AnimeHeading;
