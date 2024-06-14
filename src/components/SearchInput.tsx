import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { Dispatch, useRef } from "react";
import { animeQuery } from "../hooks/useAnimes";

interface Props {
  queryData: animeQuery;
  queryUpdater: Dispatch<React.SetStateAction<animeQuery>>;
}

const SearchInput = ({ queryData, queryUpdater }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      style={{ width: "100%" }}
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) {
          console.log(ref.current.value);
          queryUpdater({ ...queryData, phrase: ref.current.value });
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
