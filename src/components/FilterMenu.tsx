import { HStack } from "@chakra-ui/react";
import OrderSelector from "./OrderSelector";
import TypeSelector from "./TypeSelector";
import StatusSelector from "./StatusSelector";
import AnimeGenres from "./AnimeGenres";
import useGenres from "../hooks/useGenres";

const FilterMenu = () => {
  const {
    data: genres,
    error: genreError,
    isLoading: genreIsLoading,
  } = useGenres();

  return (
    <HStack mr={10} gap={4} ms={5} mt={5}>
      <AnimeGenres genres={genres?.data} />
      <OrderSelector />
      <TypeSelector />
      <StatusSelector />
    </HStack>
  );
};

export default FilterMenu;
