import { Button, Flex, Heading } from "@chakra-ui/react";
import useAnimeQueryStore from "../store";

const AnimeNotFound = () => {
  const resetAllSearches = useAnimeQueryStore((s) => s.resetAll);
  return (
    <Flex marginTop={20} flexDir="column" alignItems="center">
      <Heading size="lg" textAlign="center" mt={10}>
        Oops... No anime was found.
      </Heading>
      <Heading size="md" textAlign="center">
        Looks like it's hiding in another dimension!
      </Heading>
      <Button onClick={resetAllSearches} colorScheme="teal" variant="ghost">
        Reset my filters!
      </Button>
    </Flex>
  );
};

export default AnimeNotFound;
