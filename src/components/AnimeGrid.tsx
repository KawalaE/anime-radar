import useAnimes from "../hooks/useAnimes";

const AnimeGrid = () => {
  const { data, error, isLoading } = useAnimes();
  return <div>AnimeGrid</div>;
};

export default AnimeGrid;
