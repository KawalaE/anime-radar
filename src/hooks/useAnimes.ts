import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import Anime from "../entities/Anime";

const newAPIClient = new APIClient<Anime>("/anime");

const useAnimes = () => {
  return useQuery({
    queryKey: ["animes"],
    queryFn: () => newAPIClient.getAll(),
  });
};

export default useAnimes;
