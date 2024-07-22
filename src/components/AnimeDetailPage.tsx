import { Box, Flex, Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useAnime from "../hooks/useAnime";
import AnimeCharacters from "./AnimeCharacters";
import AnimeDetailInfo from "./AnimeDetailInfo";
import AnimeGenresButtons from "./AnimeGenresButtons";
import AnimeRating from "./AnimeRating";
import AnimeRecommendations from "./AnimeRecommendations";
import AnimeTrailer from "./AnimeTrailer";
import ExpandableText from "./ExpandableText";

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
          <Flex alignItems="center" rowGap={1} columnGap={5} flexWrap="wrap">
            <AnimeRating
              score={anime?.data.score}
              scoredBy={anime?.data.scored_by}
            />
            <AnimeDetailInfo
              episodes={anime.data.episodes}
              type={anime.data.type}
              rating={anime.data.rating}
              year={anime.data.year}
            />
          </Flex>

          <ExpandableText>{anime?.data.synopsis}</ExpandableText>
          <AnimeGenresButtons genres={anime.data.genres}></AnimeGenresButtons>
        </Box>

        {anime?.data.trailer.embed_url ? (
          <Box flex="1">
            <AnimeTrailer url={anime?.data.trailer.embed_url}></AnimeTrailer>
          </Box>
        ) : null}
      </Flex>

      <AnimeCharacters id={anime?.data.mal_id} />
      <AnimeRecommendations id={anime.data.mal_id} />
    </Flex>
  );
};

export default AnimeDetailPage;
