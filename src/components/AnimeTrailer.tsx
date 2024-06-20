import React from "react";
import { AspectRatio, Box, Text } from "@chakra-ui/react";

interface Props {
  url: string;
}
const AnimeTrailer = ({ url }: Props) => {
  return url ? (
    <AspectRatio maxW="500px" ratio={5 / 3} ms="auto" mr="auto" mt={3}>
      <iframe src={url} allowFullScreen />
    </AspectRatio>
  ) : null;
};

export default AnimeTrailer;
