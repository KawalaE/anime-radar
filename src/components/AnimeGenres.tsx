import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import Genre from "../entities/Genre";
import useAnimeQueryStore from "../store";
import { ChevronDownIcon } from "@chakra-ui/icons";

interface Props {
  genres?: Genre[];
}

const AnimeGenres = ({ genres }: Props) => {
  const setGenreId = useAnimeQueryStore((s) => s.setGenreId);
  const setSearchText = useAnimeQueryStore((s) => s.setSearchText);
  const currentGenre = useAnimeQueryStore((s) => s.animeQuery.genreId);
  console.log(genres);
  const filteredGneres = genres?.filter(
    (genre) =>
      //filter out to long categories or unwanted categories
      genre.count >= 1000 &&
      genre.mal_id !== 12 &&
      genre.mal_id !== 49 &&
      genre.mal_id !== 51
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        Genres
      </MenuButton>
      <MenuList>
        {filteredGneres?.map((genre) => {
          return (
            <MenuItem
              onClick={() => {
                setGenreId(genre.mal_id);
              }}
              key={genre.mal_id}
            >
              {genre.name}
            </MenuItem>
          );
        })}{" "}
      </MenuList>
    </Menu>
  );
};

export default AnimeGenres;
