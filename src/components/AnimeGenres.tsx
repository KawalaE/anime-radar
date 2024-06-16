import { Button, Heading, List, ListItem, VStack } from "@chakra-ui/react";
import Genre from "../entities/Genre";
import useAnimeQueryStore from "../store";

interface Props {
  genres?: Genre[];
}

const AnimeGenres = ({ genres }: Props) => {
  const setGenreId = useAnimeQueryStore((s) => s.setGenreId);
  const setSearchText = useAnimeQueryStore((s) => s.setSearchText);
  const currentGenre = useAnimeQueryStore((s) => s.animeQuery.genreId);
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
                key={genre.mal_id}
                fontSize="lg"
                variant="link"
                paddingY="10px"
                color={genre.mal_id === currentGenre ? "teal.400" : "grey"}
                _active={{
                  color: "teal.400",
                }}
                onClick={() => {
                  setSearchText("");
                  setGenreId(genre.mal_id);
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
