import { Box, HStack, Text, Switch, useColorMode } from "@chakra-ui/react";
import { GiRadarDish } from "react-icons/gi";
import SearchInput from "./SearchInput";
import { Dispatch } from "react";
import { animeQuery } from "../hooks/useAnimes";

interface Props {
  queryData: animeQuery;
  queryUpdater: Dispatch<React.SetStateAction<animeQuery>>;
  setActiveGenre: (id: number) => void;
}

const NavBar = ({ queryData, queryUpdater, setActiveGenre }: Props) => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack justifyContent="space-between" p="10px">
      <GiRadarDish size={55} />
      <SearchInput
        queryData={queryData}
        queryUpdater={queryUpdater}
        setActiveGenre={setActiveGenre}
      />
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
