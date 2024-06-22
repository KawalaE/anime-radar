import useRecommendations from "../hooks/useRecommendations";
import { Heading } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import AnimeCardCarousel from "./AnimeCardCarousel";

interface Props {
  id: number;
}
const AnimeRecommendations = ({ id }: Props) => {
  const { data, isLoading, error } = useRecommendations(id, "/recommendations");

  if (isLoading) return null;
  if (error) throw error;

  const bestRecommendations =
    data?.data.length > 10 ? data?.data.slice(0, 10) : data?.data;
  console.log(bestRecommendations ? bestRecommendations[0] : null);

  return data?.data.length ? (
    <>
      <Heading mb={5} size="lg">
        More like this
      </Heading>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite={false}
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={true}
        renderDotsOutside={false}
        responsive={{
          superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 1400 },
            items: 5,
          },
          desktop: {
            breakpoint: { max: 1400, min: 1300 },
            items: 4,
          },
          tablet: {
            breakpoint: { max: 1300, min: 1000 },
            items: 3,
          },
          mobile: {
            breakpoint: { max: 1000, min: 500 },
            items: 2,
          },
          mobileSmall: {
            breakpoint: { max: 500, min: 0 },
            items: 1,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {bestRecommendations?.map((rec) => {
          return (
            <AnimeCardCarousel
              key={rec.entry.mal_id}
              data={rec.entry}
            ></AnimeCardCarousel>
          );
        })}
      </Carousel>
    </>
  ) : null;
};

export default AnimeRecommendations;
