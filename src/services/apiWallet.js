import axios from "axios";

axios.defaults.withCredentials = true;

const api = axios.create({
  baseURL: process.env.VUE_APP_API_WALLET
});

export default api;
