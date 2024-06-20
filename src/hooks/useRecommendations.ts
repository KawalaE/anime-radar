import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

interface Entry {
  mal_id: number;
  title: string;
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
  });
};
export default useRecommendations;
