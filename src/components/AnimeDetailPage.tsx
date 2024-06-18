import React from "react";
import { useParams } from "react-router-dom";
import useAnime from "../hooks/useAnime";

const AnimeDetailPage = () => {
  const { id } = useParams();
  const { data } = useAnime(id!);
  console.log(data);
  return <div>AnimeDetailPage</div>;
};

export default AnimeDetailPage;
