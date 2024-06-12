import axios, { AxiosRequestConfig } from "axios";
import Anime from "../entities/Anime";

export interface FetchResponse<T> {
  data: T[];
  pagination?: {};
}

const axiosInstance = axios.create({
  baseURL: "https://api.jikan.moe/v4",
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config?: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data.data);
  };
}
export default APIClient;
