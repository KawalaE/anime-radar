import {
  Button,
  Heading,
  List,
  ListItem,
  VStack,
  useColorMode,
} from "@chakra-ui/react";
import Genre from "../entities/Genre";

interface Props {
  genres?: Genre[];
}

const AnimeGenres = ({ genres }: Props) => {
  const { toggleColorMode, colorMode } = useColorMode();

  const filteredGneres = genres?.filter(
    (genre) =>
      genre.count > 1000 &&
      genre.name !== "Hentai" &&
      genre.name !== "Anthropomorphic"
  );

  return (
    <VStack mr={5} mt={10}>
      <Heading fontSize="2xl" mb={3}>
        Genres
      </Heading>
      <List>
        {filteredGneres?.map((genre) => {
          return (
            <ListItem key={genre.mal_id}>
              <Button fontSize="lg" variant="link" paddingY="10px">
                {genre.name}
              </Button>
            </ListItem>
          );
        })}
      </List>
    </VStack>
  );
};

export default AnimeGenres;
