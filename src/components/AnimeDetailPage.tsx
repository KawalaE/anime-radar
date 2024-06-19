import React from "react";
import { useParams } from "react-router-dom";
import useAnime from "../hooks/useAnime";
import { Grid, GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import ExpanadableText from "./ExpanadableText";

const AnimeDetailPage = () => {
  const { id } = useParams();
  const { data: anime, isLoading, error } = useAnime(id!);
  console.log(anime);
  let title = anime?.data.title_english
    ? anime?.data.title_english
    : anime?.data.title;
  if (isLoading) return <Spinner />;
  if (error || !anime) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} padding={5}>
      <GridItem>
        {<Heading>{title}</Heading>}
        <ExpanadableText>{anime?.data.synopsis}</ExpanadableText>
      </GridItem>
    </SimpleGrid>
  );
};

export default AnimeDetailPage;
