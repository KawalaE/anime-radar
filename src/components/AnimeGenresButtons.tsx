import Genre from "../entities/Genre";
import { Button, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import useAnimeQueryStore from "../store";
interface Props {
  genres: Genre[];
}
const AnimeGenresButtons = ({ genres }: Props) => {
  const changeGenre = useAnimeQueryStore((s) => s.setGenreId);
  const setPharse = useAnimeQueryStore((s) => s.setSearchText);
  const setType = useAnimeQueryStore((s) => s.setTypeTo);
  const setOrder = useAnimeQueryStore((s) => s.setOrderBy);
  const setStatus = useAnimeQueryStore((s) => s.setStatusTo);
  console.log(genres);
  const navigate = useNavigate();
  return (
    <Flex gap={5} flexWrap="wrap">
      {genres?.map((genre) => {
        return (
          <Button
            onClick={() => {
              setPharse("");
              setType("");
              setOrder("");
              setStatus("");
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
