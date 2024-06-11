import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

const SearchInput = () => {
  return (
    <InputGroup ml={3} mr={3}>
      <InputLeftElement children={<Search2Icon />}></InputLeftElement>
      <Input
        focusBorderColor="teal.300"
        size="md"
        borderRadius={20}
        variant="filled"
        placeholder="Anime name..."
        _placeholder={{ opacity: 5, color: "gray.500" }}
      ></Input>
    </InputGroup>
  );
};

export default SearchInput;
