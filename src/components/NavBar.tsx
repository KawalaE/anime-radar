import { HStack, Switch, useColorMode } from "@chakra-ui/react";
import { GiRadarSweep } from "react-icons/gi";
import SearchInput from "./SearchInput";
import { Link, useParams } from "react-router-dom";
import useAnimeQueryStore from "../store";

const NavBar = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  const resetAllSearches = useAnimeQueryStore((s) => s.resetAll);
  const params = useParams();
  console.log(params.id);
  return (
    <HStack justifyContent="space-between" p="10px" ms={2} mr={2}>
      <Link to={"/"}>
        <GiRadarSweep
          onClick={() => (params.id ? null : resetAllSearches())}
          size={55}
          color="teal"
        />
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
