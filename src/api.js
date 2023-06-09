import axios from "axios";

const API = axios.create({
  // baseURL: "http://localhost:8080/api/"
  baseURL: "https://home-market-be-production.up.railway.app/api/"
});

export default API;