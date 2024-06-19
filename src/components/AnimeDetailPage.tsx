import React from "react";
import { useParams } from "react-router-dom";
import useAnime from "../hooks/useAnime";
import { Grid, GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import ExpanadableText from "./ExpanadableText";
import AnimeTrailer from "./AnimeTrailer";
import AnimeRating from "./AnimeRating";
import AnimeCharacters from "./AnimeCharacters";

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
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} padding={10}>
      <GridItem>
        <Heading>{title}</Heading>
        <AnimeRating
          score={anime?.data.score}
          scoredBy={anime?.data.scored_by}
        />
        <ExpanadableText>{anime?.data.synopsis}</ExpanadableText>
      </GridItem>
      <GridItem>
        <AnimeTrailer
          image={anime?.data.trailer.images.large_image_url}
          url={anime?.data.trailer.embed_url}
        ></AnimeTrailer>
      </GridItem>
      <GridItem>
        <AnimeCharacters id={anime?.data.mal_id} />
      </GridItem>
    </SimpleGrid>
  );
};

export default AnimeDetailPage;
