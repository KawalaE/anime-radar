import { Badge, Flex } from "@chakra-ui/react";
interface Props {
  episodes: number;
  type: string;
  rating: string;
  year: number;
}

const AnimeDetailInfo = ({ episodes, type, rating, year }: Props) => {
  return (
    <>
      <Flex flexWrap="wrap" gap={5} mb={3}>
        {episodes ? (
          <Badge p={1} colorScheme="teal">
            Episodes: {episodes}
          </Badge>
        ) : null}
        {type ? (
          <Badge p={1} colorScheme="teal">
            {type}
          </Badge>
        ) : null}
        {rating ? (
          <Badge p={1} colorScheme="teal">
            {rating}
          </Badge>
        ) : null}
        {year ? (
          <Badge p={1} colorScheme="teal">
            {year}
          </Badge>
        ) : null}
      </Flex>
    </>
  );
};

export default AnimeDetailInfo;
