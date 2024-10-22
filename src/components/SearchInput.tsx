import { Search2Icon } from "@chakra-ui/icons";
import {
  Input,
  InputGroup,
  InputLeftElement,
  useColorMode,
} from "@chakra-ui/react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import useAnimeQueryStore from "../store";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchedPhrase = useAnimeQueryStore((s) => s.setSearchText);
  const navigate = useNavigate();
  const { colorMode } = useColorMode();
  return (
    <form
      style={{ width: "100%" }}
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current?.value) {
          setSearchedPhrase(ref.current.value);
          navigate("/");
        }
      }}
    >
      <InputGroup ml={3} mr={3}>
        <InputLeftElement>{<Search2Icon />}</InputLeftElement>
        <Input
          ref={ref}
          role="search-bar"
          focusBorderColor="teal.300"
          size="md"
          background={colorMode === "light" ? "gray.200" : "gray.700"}
          borderRadius={20}
          variant="filled"
          placeholder="Anime name..."
          _placeholder={{ opacity: 5, color: "gray.500" }}
        ></Input>
      </InputGroup>
    </form>
  );
};

export default SearchInput;
