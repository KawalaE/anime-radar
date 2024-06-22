import { StarIcon } from "@chakra-ui/icons";
import { VStack, Heading, HStack } from "@chakra-ui/react";
import { convertVotes } from "./UtilityFunctions";
import { Text } from "@chakra-ui/react";

interface Props {
  score: number;
  scoredBy: number;
}
const AnimeRating = ({ score, scoredBy }: Props) => {
  return (
    <HStack>
      <Text>{score}</Text>
      <StarIcon color={score > 8 ? "yellow.400" : undefined} mb="1rem" />
      <Text> ({convertVotes(scoredBy)})</Text>
    </HStack>
  );
};

export default AnimeRating;
