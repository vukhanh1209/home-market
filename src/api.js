import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3001/api/", 
  headers:{'content-type':'application/json'}
});

export default API;