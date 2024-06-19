import React from "react";
import { AspectRatio, Text } from "@chakra-ui/react";

interface Props {
  url: string;
}
const AnimeTrailer = ({ url }: Props) => {
  return (
    <AspectRatio maxW="500px" ratio={5 / 3} ms="auto" mr="auto">
      <iframe title="naruto" src={url} allowFullScreen />
    </AspectRatio>
  );
};

export default AnimeTrailer;
