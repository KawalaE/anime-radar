import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import useAnimeQueryStore from "../store";
import { refactor } from "./UtilityFunctions";
import { CheckIcon } from "@chakra-ui/icons";

const OrderSelector = () => {
  const setOrderBy = useAnimeQueryStore((s) => s.setOrderBy);
  const selectedOrder = useAnimeQueryStore((s) => s.animeQuery.orderBy);
  const categoriesOfOrder = ["popularity", "score", "favorites", "scored_by"];

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        {"Order by"}
      </MenuButton>
      <MenuList>
        {categoriesOfOrder.map((category) => (
          <MenuItem
            key={category}
            value={category}
            flexDir="row-reverse"
            icon={
              selectedOrder === category ? (
                <CheckIcon color="teal.400" />
              ) : (
                <></>
              )
            }
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
