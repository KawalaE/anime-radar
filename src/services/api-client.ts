import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.jikan.moe/v4",
});

class APIClient {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = () => {
    return axiosInstance.get(this.endpoint).then((res) => res.data.data);
  };
}
export default APIClient;
