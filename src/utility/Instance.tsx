import axios from "axios";

const Instance = axios.create({
  baseURL: "https://api.nytimes.com",
});
Instance.interceptors.request.use((config) => {
  const apiKey = import.meta.env.VITE_API_KEY;
  config.params = {
    ...config.params,
    "api-key": apiKey,
  };
  return config;
});

export default Instance;
