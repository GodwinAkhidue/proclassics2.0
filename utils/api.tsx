import axios from "axios";

const server_url = "https://api.proclassics.co";

const api = axios.create({
  baseURL: server_url,
  withCredentials: true,
});

export default api;
