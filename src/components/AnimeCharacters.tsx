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
  return mainCharacters ? (
    <>
      <Heading size="lg" mb={5}>
        Main characters
      </Heading>
      <SimpleGrid columns={[1, 2, 2, 3, 4]} spacing={10}>
        {mainCharacters?.map((character) => {
          return (
            <GridItem
              display="flex"
              flexDir="column"
              alignItems="center"
              key={character.character.mal_id}
            >
              <Image
                border="2px"
                borderRadius={5}
                p={2}
                borderColor="teal.400"
                src={character.character.images.webp.image_url}
              ></Image>
              <Text mt={3} textAlign="center">
                {character.character.name}
              </Text>
            </GridItem>
          );
        })}
      </SimpleGrid>
    </>
  ) : null;
};

export default AnimeCharacters;
