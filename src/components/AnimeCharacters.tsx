import React from "react";
import useCharacters from "../hooks/useCharacters";
import Character from "../entities/Character";
import { GridItem, Heading, SimpleGrid } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

interface Props {
  id: number;
}

const AnimeCharacters = ({ id }: Props) => {
  const { data, isLoading, error } = useCharacters(id, "/characters");

  if (isLoading) return null;
  if (error) throw error;

  const mainCharacters = data?.data.filter(
    (character) => character.role === "Main"
  );
  console.log(mainCharacters);
  return mainCharacters ? (
    <>
      <Heading size="lg" mb={5}>
        Main characters
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 4 }} spacing={10}>
        {mainCharacters?.map((character) => {
          return (
            <GridItem
              display="flex"
              flexDir="column"
              alignItems="center"
              key={character.character.mal_id}
            >
              <Image
                boxShadow="outline"
                p="2"
                outlineColor="red"
                rounded="md"
                src={character.character.images.webp.image_url}
              ></Image>
              <Text mt={3}>{character.character.name}</Text>
            </GridItem>
          );
        })}
      </SimpleGrid>
    </>
  ) : null;
};

export default AnimeCharacters;
