import { HStack } from "@chakra-ui/react";

import OrderSelector from "./OrderSelector";
import TypeSelector from "./TypeSelector";
import StatusSelector from "./StatusSelector";

const FilterMenu = () => {
  return (
    <HStack mr={5} ml={5} gap={4}>
      <OrderSelector />
      <TypeSelector />
      <StatusSelector />
    </HStack>
  );
};

export default FilterMenu;
