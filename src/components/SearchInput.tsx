import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { Dispatch, useRef } from "react";
import useAnimeQueryStore from "../store";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchedPhrase = useAnimeQueryStore((s) => s.setSearchText);
  const setGenreId = useAnimeQueryStore((s) => s.setGenreId);
  return (
    <form
      style={{ width: "100%" }}
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current?.value) {
          console.log(ref.current.value);
          setSearchedPhrase(ref.current.value);
          setGenreId(0);
        }
      }}
    >
      <InputGroup ml={3} mr={3}>
        <InputLeftElement children={<Search2Icon />}></InputLeftElement>
        <Input
          ref={ref}
          focusBorderColor="teal.300"
          size="md"
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
