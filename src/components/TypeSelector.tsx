import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import useAnimeQueryStore from "../store";
import { capitalize } from "./UtilityFunctions";

const TypeSelector = () => {
  const setTypeTo = useAnimeQueryStore((s) => s.setTypeTo);
  const selectedType = useAnimeQueryStore((s) => s.animeQuery.type);
  const categoriesOfOrder = [
    "tv",
    "movie",
    "ova",
    "special",
    "ona",
    "music",
    "cm",
    "pv",
    "tv_special",
  ];

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        {selectedType ? `Type: ${capitalize(selectedType)}` : "Type"}
      </MenuButton>
      <MenuList>
        {categoriesOfOrder.map((type) => (
          <MenuItem key={type} value={type} onClick={() => setTypeTo(type)}>
            {capitalize(type)}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default TypeSelector;
