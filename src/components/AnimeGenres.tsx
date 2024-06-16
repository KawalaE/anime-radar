import { Button, Heading, List, ListItem, VStack } from "@chakra-ui/react";
import Genre from "../entities/Genre";
import useAnimeQueryStore from "../store";

interface Props {
  activeGenre: number;
  setActiveGenre: (id: number) => void;
  genres?: Genre[];
}

const AnimeGenres = ({ activeGenre, setActiveGenre, genres }: Props) => {
  const setGenreId = useAnimeQueryStore((s) => s.setGenreId);
  const filteredGneres = genres?.filter(
    (genre) =>
      //filter out to long categories or unwanted categories
      genre.count > 1000 &&
      genre.mal_id !== 12 &&
      genre.mal_id !== 49 &&
      genre.mal_id !== 51
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
              <Button
                fontSize="lg"
                variant="link"
                paddingY="10px"
                color={genre.mal_id === activeGenre ? "teal.400" : "grey"}
                onClick={() => {
                  setGenreId(genre.mal_id);
                  setActiveGenre(genre.mal_id);
                }}
              >
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
