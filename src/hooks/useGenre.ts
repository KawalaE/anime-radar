import useGenres from "./useGenres";

const useGenre = (id?: number) => {
  const { data: genres } = useGenres();
  const findGenre = genres?.data.find((genre) => genre.mal_id === id);
  return findGenre?.name;
};

export default useGenre;
