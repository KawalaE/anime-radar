import {
  AspectRatio,
  Card,
  CardBody,
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
    <Card>
      <AspectRatio ratio={2 / 3}>
        <Image
          borderTopRadius={5}
          src={anime.images.webp.large_image_url}
        ></Image>
      </AspectRatio>

      <CardBody>
        <Heading size="sm">
          {anime.title_english ? anime.title_english : anime.title}
        </Heading>
        <HStack>
          <Text>{anime.score}</Text>
          <StarIcon
            color={anime.score > 8 ? "yellow.400" : undefined}
            mb="1rem"
          />
          <Text> ({convertVotes(anime.scored_by)})</Text>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default AnimeCard;
