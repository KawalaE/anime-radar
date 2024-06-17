import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import useAnimeQueryStore from "../store";
import { refactor } from "./UtilityFunctions";

const OrderSelector = () => {
  const setOrderBy = useAnimeQueryStore((s) => s.setOrderBy);
  const selectedOrder = useAnimeQueryStore((s) => s.animeQuery.orderBy);
  const categoriesOfOrder = ["popularity", "score", "favorites", "scored_by"];

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        {selectedOrder ? `Order by: ${refactor(selectedOrder)}` : "Order by"}
      </MenuButton>
      <MenuList>
        {categoriesOfOrder.map((category) => (
          <MenuItem
            key={category}
            value={category}
            onClick={() => {
              setOrderBy(category);
            }}
          >
            {refactor(category)}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default OrderSelector;
