import { useInfiniteQuery } from "@tanstack/react-query";
import { Anime } from "../entities/Anime";
import APIClient, { FetchResponse } from "../services/api-client";
import { AnimeQuery } from "../store";

const newAPIClient = new APIClient<Anime>("/anime");

const useAnimes = (animeQuery: AnimeQuery) => {
  return useInfiniteQuery<FetchResponse<Anime>>({
    queryKey: ["animes", animeQuery],
    queryFn: ({ pageParam = 1 }) =>
      newAPIClient.getAll({
        params: {
          genres: animeQuery?.genreId?.toString(),
          q: animeQuery?.phrase,
          page: pageParam,
          limit: 24,
          sfw: true,
          order_by: animeQuery?.orderBy,
          min_score: 1,
          sort: animeQuery?.orderBy === "popularity" ? "asc" : "desc",
          type: animeQuery?.type,
          status: animeQuery?.status,
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
