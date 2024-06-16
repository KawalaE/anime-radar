import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import useAnimeQueryStore from "../store";
const OrderSelector = () => {
  const setOrderBy = useAnimeQueryStore((s) => s.setOrderBy);
  const selectedOrder = useAnimeQueryStore((s) => s.animeQuery.orderBy);
  const categoriesOfOrder = ["popularity", "score", "favorites", "scored_by"];

  const capitalize = (word: string) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        {selectedOrder ? `Order by: ${capitalize(selectedOrder)}` : "Order by"}
      </MenuButton>
      <MenuList>
        {categoriesOfOrder.map((category) => (
          <MenuItem
            key={category}
            value={category}
            onClick={() => setOrderBy(category)}
          >
            {capitalize(category)}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default OrderSelector;
