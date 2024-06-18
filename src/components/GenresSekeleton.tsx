import { SkeletonText } from "@chakra-ui/react";

const GenresSekeleton = () => {
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  return (
    <>
      {skeletons.map((skeleton) => (
        <SkeletonText
          key={skeleton}
          noOfLines={1}
          mt="10"
          ms="5"
          width="130px"
        />
      ))}
    </>
  );
};

export default GenresSekeleton;
