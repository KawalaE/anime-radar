import { CheckIcon, ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorMode,
} from "@chakra-ui/react";
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
  const { colorMode } = useColorMode();
  return (
    <Menu>
      <MenuButton
        as={Button}
        background={colorMode === "light" ? "teal.100" : "gray.700"}
        rightIcon={<ChevronDownIcon />}
      >
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
