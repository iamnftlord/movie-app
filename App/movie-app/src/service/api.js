import axios from "axios";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

const api = axios.create({
  baseURL: "https://www.omdbapi.com/",
  params: {
    apikey: API_KEY,
  },
});

export const searchMoviesApi = (query) =>
  api.get("/", { params: { s: query } });

export const getMovieDetailsApi = (id) =>
  api.get("/", { params: { i: id, plot: "full" } });
