import APIClient, { FetchResponse } from "../services/api-client";
import { useQuery } from "@tanstack/react-query";
import Character from "../entities/Character";

interface Response {
  data: CharacterData[];
}
const newAPIClient = new APIClient<Response>("/anime");

const useCharacters = (id: number | string, additionalURL: string) => {
  return useQuery({
    queryKey: ["characters", id],
    queryFn: () => newAPIClient.get(id, additionalURL),
  });
};
export default useCharacters;
