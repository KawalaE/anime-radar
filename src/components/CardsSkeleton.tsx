import {
  Card,
  CardBody,
  SimpleGrid,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

const AnimeCardSkeleton = () => {
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <SimpleGrid
      padding="20px"
      columns={{ sm: 2, md: 3, lg: 4, "2xl": 6 }}
      spacing={10}
      margin={5}
      justifyContent="center"
    >
      {skeletons.map((skeleton) => {
        return (
          <Card w={200} h={400} key={skeleton} overflow="hidden">
            <Skeleton objectFit="cover" height="450px" width="395px" />
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
