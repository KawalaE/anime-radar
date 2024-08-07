import { Box, Heading } from "@chakra-ui/react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import useRecommendations from "../hooks/useRecommendations";
import AnimeCardCarousel from "./AnimeCardCarousel";

import "swiper/css";
import "swiper/css/navigation";
import "../index.css";

interface Props {
  id: number;
}
const AnimeRecommendations = ({ id }: Props) => {
  const { data, isLoading, error } = useRecommendations(id, "/recommendations");

  if (isLoading) return null;
  if (error) throw error;
  console.log("in recomendation");
  console.log(data);
  const bestRecommendations =
    data!.data.length > 10 ? data?.data.slice(0, 10) : data?.data;
  console.log("best");
  console.log(bestRecommendations);
  return data?.data.length ? (
    <>
      <Heading mb={5} mt={10} size="lg">
        More like this
      </Heading>
      <Box>
        <Swiper
          style={{ padding: "30px" }}
          spaceBetween={40}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
          breakpoints={{
            1800: {
              // width: 576,
              slidesPerView: 5,
            },
            1600: {
              // width: 576,
              slidesPerView: 4,
            },
            1100: {
              // width: 576,
              slidesPerView: 3,
            },
            700: {
              // width: 768,
              slidesPerView: 2,
            },
            0: {
              // width: 768,
              slidesPerView: 1,
            },
          }}
        >
          {bestRecommendations?.map((rec) => {
            return (
              <SwiperSlide
                key={rec.entry.mal_id}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <AnimeCardCarousel data={rec.entry}></AnimeCardCarousel>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Box>
    </>
  ) : null;
};

export default AnimeRecommendations;
