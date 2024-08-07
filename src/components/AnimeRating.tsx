import { StarIcon } from "@chakra-ui/icons";
import { HStack, Text } from "@chakra-ui/react";
import { convertVotes } from "./UtilityFunctions";

interface Props {
  score: number;
  scoredBy: number;
}
const AnimeRating = ({ score, scoredBy }: Props) => {
  return (
    <HStack>
      <Text>{score}</Text>
      <StarIcon
        aria-label={score > 8 ? "yellow-star" : "gray-star"}
        color={score > 8 ? "yellow.400" : undefined}
        mb="1rem"
      />
      <Text> ({convertVotes(scoredBy)})</Text>
    </HStack>
  );
};

export default AnimeRating;
