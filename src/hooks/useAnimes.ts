import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

const newAPIClient = new APIClient("/anime");

const useAnimes = () => {
  return useQuery({
    queryKey: ["animes"],
    queryFn: () => newAPIClient.getAll(),
  });
};

export default useAnimes;
