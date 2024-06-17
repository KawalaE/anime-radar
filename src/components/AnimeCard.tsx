import {
  AspectRatio,
  Box,
  Button,
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  Text,
  Tooltip,
  VStack,
} from "@chakra-ui/react";
import Anime from "../entities/Anime";
import { StarIcon } from "@chakra-ui/icons";
import { convertVotes } from "./UtilityFunctions";
import { useState } from "react";

interface Props {
  animeInfo: Anime;
}

const AnimeCard = ({ animeInfo: anime }: Props) => {
  const [isHovering, setIsHovering] = useState(false);
  const titleLength = anime.title_english
    ? anime.title_english.length
    : anime.title.length;
  console.log(titleLength);
  const offset = titleLength - 15 > 0 ? titleLength : 0;
  const animeDescription = anime.synopsis
    ? anime.synopsis.substring(0, 140 - offset) + "..."
    : "Description unavailable :(";
  return (
    <Card
      w={[325, 270, 250, 260, 220]}
      h={[590, 500, 470, 490, 430]}
      overflow="hidden"
      onPointerOver={() => setIsHovering(true)}
      onPointerLeave={() => setIsHovering(false)}
    >
      {isHovering && (
        <>
          <CardBody
            display="flex"
            flexDir="column"
            overflow="hidden"
            justifyContent="space-around"
          >
            <Heading size="sm" color="teal.400" mt={3}>
              {anime.title_english ? anime.title_english : anime.title}
            </Heading>

            <VStack alignItems="flex-start">
              <HStack>
                <Text>{anime.score}</Text>
                <StarIcon
                  color={anime.score > 8 ? "yellow.400" : undefined}
                  mb="1rem"
                />
                <Text> ({convertVotes(anime.scored_by)})</Text>
              </HStack>
              <Text color="gray.500" m="0" p="0">
                Episodes: {anime.episodes}
              </Text>
              <Text color="gray.500" m="0" p="0">
                Status: {anime.status}
              </Text>
            </VStack>

            <Text>{animeDescription}</Text>
            <Button alignSelf="flex-end" colorScheme="teal">
              More info
            </Button>
          </CardBody>
        </>
      )}
      {isHovering == false && (
        <>
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
        </>
      )}
    </Card>
  );
};

export default AnimeCard;
