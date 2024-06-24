import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import useAnimeQueryStore from "../store";
import { refactor } from "./UtilityFunctions";
import { CheckIcon } from "@chakra-ui/icons";

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
        {"Type"}
      </MenuButton>
      <MenuList>
        {categoriesOfOrder.map((type) => (
          <MenuItem
            flexDir="row-reverse"
            icon={
              selectedType === type ? <CheckIcon color="teal.400" /> : <></>
            }
            key={type}
            value={type}
            onClick={() => setTypeTo(type)}
          >
            {refactor(type)}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default TypeSelector;
