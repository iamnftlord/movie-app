import { create } from "zustand";

const useMovieStore = create((set) => ({
  movies: [],
  searchTerm: "",
  apiStatus: "idle",

  selectedMovie: null, // ✅ IMPORTANT

  setSearchTerm: (term) => set({ searchTerm: term }),

  updateMoviesList: (movies) => set({ movies }),

  setSelectedMovie: (movie) => set({ selectedMovie: movie }),

  setApiStatus: (status) => set({ apiStatus: status }),
}));

export default useMovieStore;
