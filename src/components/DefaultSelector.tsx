import { CheckIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { refactorName } from "./UtilityFunctions";

interface Props {
  selectionItems: string[];
  tagName: string;
  setSelectedValue: (element: string) => void;
  currentSelectedValue: string | undefined;
}
const DefaultSelector = ({
  selectionItems,
  tagName,
  setSelectedValue,
  currentSelectedValue,
}: Props) => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        {tagName}
      </MenuButton>
      <MenuList>
        {selectionItems.map((item) => (
          <MenuItem
            key={item}
            value={item}
            flexDir="row-reverse"
            aria-label={item}
            icon={
              currentSelectedValue === item ? (
                <CheckIcon color="teal.400" />
              ) : (
                <></>
              )
            }
            onClick={() => {
              setSelectedValue(item);
            }}
          >
            {refactorName(item)}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default DefaultSelector;
