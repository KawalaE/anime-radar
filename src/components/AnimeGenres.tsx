import { CheckIcon, ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorMode,
} from "@chakra-ui/react";
import Genre from "../entities/Genre";
import useAnimeQueryStore from "../store";

interface Props {
  genres?: Genre[];
}

const AnimeGenres = ({ genres }: Props) => {
  const setGenreId = useAnimeQueryStore((s) => s.setGenreId);
  const currentGenre = useAnimeQueryStore((s) => s.animeQuery.genreId);
  const filteredGneres = genres?.filter(
    (genre) =>
      //filter out to long categories or unwanted categories
      genre.count >= 1000 &&
      genre.mal_id !== 12 &&
      genre.mal_id !== 49 &&
      genre.mal_id !== 51
  );
  const { colorMode } = useColorMode();
  return (
    <Menu>
      <MenuButton
        as={Button}
        background={colorMode === "light" ? "teal.100" : "gray.700"}
        rightIcon={<ChevronDownIcon />}
      >
        Genres
      </MenuButton>
      <MenuList>
        {filteredGneres?.map((genre) => {
          return (
            <MenuItem
              flexDir="row-reverse"
              onClick={() => {
                setGenreId(genre.mal_id);
              }}
              key={genre.mal_id}
              aria-label={genre.name}
              icon={
                currentGenre === genre.mal_id ? (
                  <CheckIcon color="teal.400" />
                ) : (
                  <></>
                )
              }
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
