import React from "react";
import { GridItem, Heading, SimpleGrid, VStack } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
interface Props {
  episodes: number;
  type: string;
  rating: string;
  year: number;
}

const AnimeDetailInfo = ({ episodes, type, rating, year }: Props) => {
  return (
    <SimpleGrid columns={[1, 2]} spacing={10} mt={5}>
      {episodes ? (
        <GridItem>
          <VStack>
            <Heading size="md">Episodes</Heading>
            <Heading size="md" color="teal.400">
              {episodes}
            </Heading>
          </VStack>
        </GridItem>
      ) : null}
      {type ? (
        <GridItem>
          <VStack>
            <Heading size="md">Type</Heading>
            <Heading size="md" color="teal.400">
              {type}
            </Heading>
          </VStack>
        </GridItem>
      ) : null}
      {rating ? (
        <GridItem>
          <VStack>
            <Heading size="md">Rating</Heading>
            <Heading
              width="100px"
              textAlign="center"
              size="sm"
              color="teal.400"
            >
              {rating}
            </Heading>
          </VStack>
        </GridItem>
      ) : null}
      {year ? (
        <GridItem>
          <VStack>
            <Heading size="md">Year</Heading>
            <Heading
              width="100px"
              textAlign="center"
              size="md"
              color="teal.400"
            >
              {year}
            </Heading>
          </VStack>
        </GridItem>
      ) : null}
    </SimpleGrid>
  );
};

export default AnimeDetailInfo;
