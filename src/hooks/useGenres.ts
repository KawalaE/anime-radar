import APIClient from "../services/api-client";
import Genre from "../entities/Genre";
import { useQuery } from "@tanstack/react-query";

const newAPIClient = new APIClient<Genre>("/genres/anime");

const useGenres = () => {
  return useQuery({
    queryKey: ["genres"],
    queryFn: () => newAPIClient.getAll(),
  });
};
export default useGenres;
