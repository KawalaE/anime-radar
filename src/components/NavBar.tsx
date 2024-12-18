import { HStack, Switch, useColorMode } from "@chakra-ui/react";
import { GiRadarSweep } from "react-icons/gi";
import { Link, useParams } from "react-router-dom";
import useAnimeQueryStore from "../store";
import SearchInput from "./SearchInput";

const NavBar = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  const resetAllSearches = useAnimeQueryStore((s) => s.resetAll);
  const params = useParams();
  return (
    <HStack justifyContent="space-between" p={5} ms={2} mr={2} mt={3}>
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
