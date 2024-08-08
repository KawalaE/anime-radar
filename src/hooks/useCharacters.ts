import { useQuery } from "@tanstack/react-query";
import CharacterData from "../entities/Character";
import APIClient from "../services/api-client";

interface Response {
  data: CharacterData[];
}
const newAPIClient = new APIClient<Response>("/anime");

const useCharacters = (id: number | string, additionalURL: string) => {
  return useQuery<Response>({
    queryKey: ["characters", id],
    queryFn: () => newAPIClient.get(id, additionalURL),
  });
};
export default useCharacters;
