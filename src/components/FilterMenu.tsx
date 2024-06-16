import { HStack } from "@chakra-ui/react";

import OrderSelector from "./OrderSelector";
import TypeSelector from "./TypeSelector";

const FilterMenu = () => {
  return (
    <HStack>
      <OrderSelector />
      <TypeSelector />
    </HStack>
  );
};

export default FilterMenu;
