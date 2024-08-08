import { AspectRatio, Card, Heading, Image, Tooltip } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Entry } from "../hooks/useRecommendations";

interface Props {
  data: Entry;
}

const AnimeCardCarousel = ({ data }: Props) => {
  return (
    <>
      <Link to={`/anime/${data.mal_id}`} style={{ display: "inline-block" }}>
        <Card
          _hover={{
            border: "2px",
            borderRadius: "5px",
            borderColor: "teal.400",
            cursor: "pointer",
          }}
          w={[210, 200, 230]}
          h={[370, 360, 400]}
          overflow="hidden"
        >
          <AspectRatio ratio={2 / 3}>
            <Image
              objectFit="cover"
              borderTopRadius={5}
              src={data.images.webp.large_image_url}
            ></Image>
          </AspectRatio>
          <Tooltip label={data.title}>
            <Heading textAlign="center" size="sm" mt={5}>
              {data.title
                ? data.title.length > 25
                  ? data.title.substring(0, 20) + "..."
                  : data.title
                : "null"}
            </Heading>
          </Tooltip>
        </Card>
      </Link>
    </>
  );
};

export default AnimeCardCarousel;
