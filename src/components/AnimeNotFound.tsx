import { Button, Flex, Heading, Image } from "@chakra-ui/react";
import useAnimeQueryStore from "../store";

const AnimeNotFound = () => {
  const resetAllSearches = useAnimeQueryStore((s) => s.resetAll);
  return (
    <Flex marginTop={20} flexDir="column" alignItems="center">
      <Image
        boxSize={["250px", "350px"]}
        src={"../src/assets/anime-found-1.gif"}
      ></Image>
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
