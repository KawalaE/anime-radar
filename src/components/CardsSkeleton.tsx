import {
  AspectRatio,
  Card,
  CardBody,
  Image,
  SimpleGrid,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

const AnimeCardSkeleton = () => {
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <SimpleGrid
      padding="20px"
      columns={{ sm: 2, md: 3, lg: 4, xl: 6 }}
      spacing={10}
    >
      {skeletons.map((skeleton) => {
        return (
          <Card key={skeleton} overflow="hidden">
            <Skeleton objectFit="cover" height="350px" width="295px" />
            <CardBody>
              <SkeletonText></SkeletonText>
            </CardBody>
          </Card>
        );
      })}
    </SimpleGrid>
  );
};

export default AnimeCardSkeleton;
