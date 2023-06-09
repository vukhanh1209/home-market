import axios from "axios";

const API = axios.create({
  // baseURL: "http://localhost:3001/api/"
  baseURL: "https://home-market-be-production.up.railway.app/api"
});

export default API;