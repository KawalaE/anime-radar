import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import Anime from "../entities/Anime";
import { FetchResponse } from "../services/api-client";

const newAPIClient = new APIClient<FetchResponse<Anime>>("/anime");

const useAnimes = () => {
  return useQuery({
    queryKey: ["animes"],
    queryFn: () => newAPIClient.getAll(),
  });
};

export default useAnimes;
