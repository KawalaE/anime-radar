import { Card, SimpleGrid, Skeleton, SkeletonText } from "@chakra-ui/react";

const CardsSkeleton = () => {
  let skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <SimpleGrid
      mt={10}
      padding="20px"
      columns={{ sm: 2, md: 3, lg: 4, xl: 6 }}
      spacing={10}
    >
      {skeletons.map((skeleton) => {
        return (
          <Card
            key={skeleton}
            // padding={3}
            // m={5}
            // overflow="hidden"
            // width="185px"
          >
            {/* height="300px" */}
            <Skeleton></Skeleton>
            <SkeletonText noOfLines={3} spacing={4} mt={2} />
          </Card>
        );
      })}
    </SimpleGrid>
  );
};

export default CardsSkeleton;
