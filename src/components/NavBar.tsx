import { HStack, Switch, useColorMode } from "@chakra-ui/react";
import { GiRadarSweep } from "react-icons/gi";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack justifyContent="space-between" p="10px" ms={2} mr={2}>
      <Link to={"/"}>
        <GiRadarSweep size={55} color="teal" />
      </Link>

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
