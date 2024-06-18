import React from "react";
import { useParams } from "react-router-dom";

const AnimeDetailPage = () => {
  const { id } = useParams();

  return <div>AnimeDetailPage</div>;
};

export default AnimeDetailPage;
