import { useParams } from "react-router-dom";
import useAnime from "../hooks/useAnime";
import {
  Flex,
  Grid,
  GridItem,
  Heading,
  SimpleGrid,
  Spinner,
} from "@chakra-ui/react";
import ExpanadableText from "./ExpanadableText";
import AnimeTrailer from "./AnimeTrailer";
import AnimeRating from "./AnimeRating";
import AnimeCharacters from "./AnimeCharacters";
import AnimeDetailInfo from "./AnimeDetailInfo";
import AnimeRecommendations from "./AnimeRecommendations";
import { Box } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
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
    <Flex
      m={10}
      padding={10}
      flexDir="column"
      pr={["5px", "50px", "70px", "100px", "200px"]}
      pl={["5px", "50px", "70px", "100px", "200px"]}
    >
      <Flex direction={{ base: "column", xl: "row" }} gap={5}>
        <Box flex="1">
          <Heading>{title}</Heading>
          <AnimeRating
            score={anime?.data.score}
            scoredBy={anime?.data.scored_by}
          />
          <ExpanadableText>{anime?.data.synopsis}</ExpanadableText>
        </Box>

        {anime?.data.trailer.embed_url ? (
          <Box flex="1">
            <AnimeTrailer url={anime?.data.trailer.embed_url}></AnimeTrailer>
          </Box>
        ) : null}
      </Flex>
      <AnimeDetailInfo
        episodes={anime.data.episodes}
        type={anime.data.type}
        rating={anime.data.rating}
        year={anime.data.year}
      />
      <AnimeCharacters id={anime?.data.mal_id} />
      <AnimeRecommendations id={anime.data.mal_id} />
    </Flex>
  );
};

export default AnimeDetailPage;
