import {
  AspectRatio,
  Button,
  Card,
  CardBody,
  Heading,
  Image,
  Text,
  Tooltip,
  VStack,
} from "@chakra-ui/react";
import { Anime } from "../entities/Anime";
import { Link } from "react-router-dom";
import AnimeRating from "./AnimeRating";

interface Props {
  animeInfo: Anime;
}

const AnimeCard = ({ animeInfo: anime }: Props) => {
  const mainTitle = anime.title_english ? anime.title_english : anime.title;
  const shortendTitle =
    mainTitle.length > 30 ? mainTitle.substring(0, 35) + "..." : mainTitle;
  const animeDescription = anime.synopsis
    ? anime.synopsis.substring(0, 190) + "..."
    : "Description unavailable :(";
  return (
    <Card w={200} h={400} overflow="hidden" role="group">
      {/**Main card body */}
      <CardBody
        padding={0}
        _groupHover={{ display: "none" }}
        display="flex"
        flexDir="column"
        overflow="hidden"
        justifyContent="space-between"
      >
        <AspectRatio ratio={2 / 3} alignContent="flex-start">
          <Image
            objectFit="cover"
            borderTopRadius={5}
            src={anime.images.webp.large_image_url}
          ></Image>
        </AspectRatio>
        <VStack alignItems="flex-start" ms={3}>
          <Heading size="sm" color="teal.400" mr={3} mt={3}>
            {shortendTitle}
          </Heading>

          <AnimeRating score={anime.score} scoredBy={anime.scored_by} />
        </VStack>
      </CardBody>
      {/**Reverse card body */}
      <CardBody
        pos="relative"
        display="none"
        _before={{
          content: '""',
          bgImage: `url(${anime.images.webp.large_image_url})`,
          backgroundSize: "cover",
          position: "absolute",
          top: "0px",
          right: "0px",
          bottom: " 0px",
          left: "0px",
          opacity: "0.3",
          filter: "brightness(0.25) ",
        }}
        _groupHover={{
          display: "flex",
          flexDir: "column",
          justifyContent: "space-around",
        }}
      >
        <Tooltip label={mainTitle}>
          <Heading position="relative" size="sm">
            {shortendTitle}
          </Heading>
        </Tooltip>

        <VStack position="relative" alignItems="flex-start" gap={1}>
          <AnimeRating score={anime.score} scoredBy={anime.scored_by} />
          <Text fontSize="sm" position="relative" color="gray.400" m="0" p="0">
            Episodes: {anime.episodes}
          </Text>
          <Text fontSize="sm" position="relative" color="gray.400" mb="1" p="0">
            Status: {anime.status}
          </Text>
        </VStack>

        <Text position="relative" fontSize="sm">
          {animeDescription}
        </Text>
        <Link to={"/anime/" + anime.mal_id}>
          <Button colorScheme="teal">More info</Button>
        </Link>
      </CardBody>
    </Card>
  );
};

export default AnimeCard;
