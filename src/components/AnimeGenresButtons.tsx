import Genre from "../entities/Genre";
import { Button, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import useAnimeQueryStore from "../store";
interface Props {
  genres: Genre[];
}
const AnimeGenresButtons = ({ genres }: Props) => {
  const changeGenre = useAnimeQueryStore((s) => s.setGenreId);
  console.log(genres);
  const navigate = useNavigate();
  return (
    <Flex gap={5} flexWrap="wrap">
      {genres?.map((genre) => {
        return (
          <Button
            onClick={() => {
              changeGenre(genre.mal_id);
              navigate("/");
            }}
            size="sm"
            variant="outline"
            colorScheme="teal"
            key={genre.mal_id}
          >
            {genre.name}
          </Button>
        );
      })}
    </Flex>
  );
};

export default AnimeGenresButtons;
