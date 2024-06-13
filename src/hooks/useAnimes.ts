import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import Anime from "../entities/Anime";
import { useInfiniteQuery } from "@tanstack/react-query";

const newAPIClient = new APIClient<Anime>("/anime");

export interface animeQuery {
  genreId?: number;
}

const useAnimes = (animeQuery: animeQuery) => {
  return useInfiniteQuery<FetchResponse<Anime>>({
    queryKey: ["animes", animeQuery],
    queryFn: ({ pageParam = 1 }) =>
      newAPIClient.getAll({
        params: {
          genres: animeQuery?.genreId?.toString(),
          page: pageParam,
          limit: 24,
          sfw: true,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.pagination.has_next_page
        ? allPages.length + 1
        : undefined;
    },
  });
};

export default useAnimes;
