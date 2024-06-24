import { CheckIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import useAnimeQueryStore from "../store";
import { refactor } from "./UtilityFunctions";

const StatusSelector = () => {
  const setStatusTo = useAnimeQueryStore((s) => s.setStatusTo);
  const selectedStatus = useAnimeQueryStore((s) => s.animeQuery.status);
  const statusSelection = ["airing", "complete"];

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        {"Status"}
      </MenuButton>
      <MenuList>
        {statusSelection.map((status) => (
          <MenuItem
            flexDir="row-reverse"
            icon={
              selectedStatus === status ? <CheckIcon color="teal.400" /> : <></>
            }
            key={status}
            value={status}
            onClick={() => setStatusTo(status)}
          >
            {refactor(status)}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default StatusSelector;
