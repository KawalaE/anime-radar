import { Box, HStack, Text, Switch, useColorMode } from "@chakra-ui/react";
import { GiRadarDish } from "react-icons/gi";
import SearchInput from "./SearchInput";

const NavBar = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack justifyContent="space-between" p="10px">
      <GiRadarDish size={55} />
      <SearchInput />
      <Switch
        isChecked={colorMode === "dark"}
        colorScheme="teal"
        size="md"
        onChange={toggleColorMode}
      />
    </HStack>
  );
};

export default NavBar;
