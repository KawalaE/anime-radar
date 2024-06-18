import APIClient from "../services/api-client";
import Anime from "../entities/Anime";
import { useQuery } from "@tanstack/react-query";

const newAPIClient = new APIClient<Anime>("/anime");

const useAnime = (id: number | string) => {
  return useQuery({
    queryKey: ["anime", id],
    queryFn: () => newAPIClient.get(id),
  });
};

export default useAnime;
