import { Box, HStack, Text, Switch, useColorMode } from "@chakra-ui/react";
import { GiRadarSweep } from "react-icons/gi";
import SearchInput from "./SearchInput";
import { Dispatch } from "react";

const NavBar = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack justifyContent="space-between" p="10px" ms={2} mr={2}>
      <GiRadarSweep size={55} color="teal" />
      <SearchInput />
      <Switch
        isChecked={colorMode === "dark"}
        colorScheme="teal"
        size="md"
        ms={5}
        onChange={toggleColorMode}
      />
    </HStack>
  );
};

export default NavBar;
