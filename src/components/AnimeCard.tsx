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
  const mainTitle = anime.title_english ? anime.title_english : anime.title;
  const shortendTitle =
    mainTitle.length > 30 ? mainTitle.substring(0, 40) + "..." : mainTitle;
  const animeDescription = anime.synopsis
    ? anime.synopsis.substring(0, 120) + "..."
    : "Description unavailable :(";
  return (
    <Card
      w={[325, 270, 250, 260, 220]}
      h={[590, 500, 470, 490, 430]}
      overflow="hidden"
      role="group"
    >
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
          <HStack>
            <Text>{anime.score}</Text>
            <StarIcon
              color={anime.score > 8 ? "yellow.400" : undefined}
              mb="1rem"
            />
            <Text> ({convertVotes(anime.scored_by)})</Text>
          </HStack>
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
        <Heading position="relative" size="sm">
          {shortendTitle}
        </Heading>
        <VStack position="relative" alignItems="flex-start">
          <HStack>
            <Text>{anime.score}</Text>
            <StarIcon
              color={anime.score > 8 ? "yellow.400" : undefined}
              mb="1rem"
            />
            <Text> ({convertVotes(anime.scored_by)})</Text>
          </HStack>
          <Text position="relative" color="gray.400" m="0" p="0">
            Episodes: {anime.episodes}
          </Text>
          <Text position="relative" color="gray.400" m="0" p="0">
            Status: {anime.status}
          </Text>
        </VStack>

        <Text position="relative">{animeDescription}</Text>
        <Button alignSelf="flex-end" colorScheme="teal">
          More info
        </Button>
      </CardBody>
    </Card>
  );
};

export default AnimeCard;
