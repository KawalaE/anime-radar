import axios from "axios";
import Anime from "../entities/Anime";

export interface FetchResponse<T> {
  data: Anime[];
  pagination: {};
}

const axiosInstance = axios.create({
  baseURL: "https://api.jikan.moe/v4",
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = () => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint)
      .then((res) => res.data.data);
  };
}
export default APIClient;
