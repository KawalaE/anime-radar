import {
  Box,
  Card,
  CardBody,
  Center,
  HStack,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import Anime from "../entities/Anime";
import { StarIcon } from "@chakra-ui/icons";
import convertVotes from "./VotesConversion";

interface Props {
  animeInfo: Anime;
}

const AnimeCard = ({ animeInfo: anime }: Props) => {
  return (
    <Card align="center">
      <Image
        objectFit="cover"
        src={anime.images.webp.large_image_url}
        width={60}
        height={350}
      ></Image>
      <CardBody>
        <Heading width={60} size="sm">
          {anime.title}
        </Heading>
        <HStack>
          <Text>{anime.score}</Text>
          <StarIcon
            color={anime.score > 8.5 ? "yellow" : undefined}
            mb="1rem"
          />
          <Text> ({convertVotes(anime.scored_by)})</Text>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default AnimeCard;
