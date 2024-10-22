import { SimpleGrid } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import AnimeGenres from "./AnimeGenres";
import OrderSelector from "./OrderSelector";
import StatusSelector from "./StatusSelector";
import TypeSelector from "./TypeSelector";

const FilterMenu = () => {
  const { data: genres } = useGenres();

  return (
    <SimpleGrid columns={[1, null, 4]} gap="1.5rem">
      <AnimeGenres genres={genres?.data} />
      <OrderSelector />
      <TypeSelector />
      <StatusSelector />
    </SimpleGrid>
  );
};

export default FilterMenu;
