import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import Anime from "../entities/Anime";
import { AxiosRequestConfig } from "axios";

const newAPIClient = new APIClient<Anime>("/anime");

export interface animeQuery {
  genreId?: number;
}

const useAnimes = (animeQuery: animeQuery) => {
  return useQuery({
    queryKey: ["animes", animeQuery],
    queryFn: () =>
      newAPIClient.getAll({
        params: {
          genres: animeQuery?.genreId?.toString(),
        },
      }),
  });
};

export default useAnimes;
