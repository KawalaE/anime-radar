import { Button, Heading, List, ListItem, VStack } from "@chakra-ui/react";
import Genre from "../entities/Genre";
import { animeQuery } from "../hooks/useAnimes";
import { Dispatch, useState } from "react";

interface Props {
  genres?: Genre[];
  queryData: animeQuery;
  queryUpdater: Dispatch<React.SetStateAction<animeQuery>>;
}

const AnimeGenres = ({ genres, queryData, queryUpdater }: Props) => {
  const filteredGneres = genres?.filter(
    (genre) =>
      //filter out to long categories or inappropriate categories
      genre.count > 1000 &&
      genre.mal_id !== 12 &&
      genre.mal_id !== 49 &&
      genre.mal_id !== 51
  );
  const [activeGnere, setActiveGenre] = useState(0);
  console.log(genres);
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
                color={genre.mal_id === activeGnere ? "teal.500" : "grey"}
                onClick={() => {
                  queryUpdater({
                    ...queryData,
                    genreId: genre.mal_id,
                    phrase: "",
                  });
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
