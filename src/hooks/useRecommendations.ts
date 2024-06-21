import { useQueries, useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Images } from "../entities/Anime";

export interface Entry {
  mal_id: number;
  title: string;
  images: Images;
}

interface RecommendationEntry {
  entry: Entry;
}

interface RecommendationsResponse {
  data: RecommendationEntry[];
}

const newAPIClient = new APIClient<RecommendationsResponse>("/anime");

const useRecommendations = (id: number | string, additionalURL: string) => {
  return useQuery({
    queryKey: ["recommendations", id],
    queryFn: () => newAPIClient.get(id, additionalURL),
    retry: 10,
    retryDelay: 1000,
  });
};
export default useRecommendations;
