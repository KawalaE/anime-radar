import React from "react";
import {
  Box,
  Flex,
  GridItem,
  Heading,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
interface Props {
  episodes: number;
  type: string;
  rating: string;
  year: number;
}

const AnimeDetailInfo = ({ episodes, type, rating, year }: Props) => {
  return (
    <>
      <Flex justifyContent="space-around" flexWrap="wrap" mt={7} mb={3}>
        {episodes ? (
          <Box>
            <VStack>
              <Heading size="md">Episodes</Heading>
              <Heading size="md" color="teal.400">
                {episodes}
              </Heading>
            </VStack>
          </Box>
        ) : null}
        {type ? (
          <Box>
            <VStack>
              <Heading size="md">Type</Heading>
              <Heading size="md" color="teal.400">
                {type}
              </Heading>
            </VStack>
          </Box>
        ) : null}
        {rating ? (
          <Box>
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
          </Box>
        ) : null}
        {year ? (
          <Box>
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
          </Box>
        ) : null}
      </Flex>
    </>
  );
};

export default AnimeDetailInfo;
