import { create } from "zustand";
import { searchMoviesApi, getMovieDetailsApi } from "../service/api";

const useMovieStore = create((set) => ({
  movies: [],
  selectedMovie: null,
  loading: false,
  error: null,

  searchMovies: async (query) => {
    if (!query) return;

    set({ loading: true, error: null });

    try {
      const res = await searchMoviesApi(query);
      set({
        movies: res.data.Search || [],
        loading: false,
      });
    } catch (err) {
      set({
        error: "Failed to fetch movies",
        loading: false,
      });
    }
  },

  getMovieDetails: async (id) => {
    set({ loading: true, error: null });

    try {
      const res = await getMovieDetailsApi(id);
      set({
        selectedMovie: res.data,
        loading: false,
      });
    } catch (err) {
      set({
        error: "Failed to fetch movie details",
        loading: false,
      });
    }
  },
}));

export default useMovieStore;
