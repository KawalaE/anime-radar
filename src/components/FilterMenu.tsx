import { HStack } from "@chakra-ui/react";
import OrderSelector from "./OrderSelector";
import TypeSelector from "./TypeSelector";
import StatusSelector from "./StatusSelector";

const FilterMenu = () => {
  return (
    <HStack mr={10} gap={4} ms={5} mt={5}>
      <OrderSelector />
      <TypeSelector />
      <StatusSelector />
    </HStack>
  );
};

export default FilterMenu;
