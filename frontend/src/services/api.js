import axios from "axios";

export const api = axios.create({
  // baseURL: "https://uploadrocketseat.herokuapp.com",
  baseURL: "http://localhost:3333",
});
