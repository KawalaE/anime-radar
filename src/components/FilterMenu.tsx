import { Flex } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import AnimeGenres from "./AnimeGenres";
import OrderSelector from "./OrderSelector";
import StatusSelector from "./StatusSelector";
import TypeSelector from "./TypeSelector";

const FilterMenu = () => {
  const { data: genres } = useGenres();

  return (
    <Flex mr={10} gap={4} ms={5} mt={5} flexWrap="wrap">
      <AnimeGenres genres={genres?.data} />
      <OrderSelector />
      <TypeSelector />
      <StatusSelector />
    </Flex>
  );
};

export default FilterMenu;
