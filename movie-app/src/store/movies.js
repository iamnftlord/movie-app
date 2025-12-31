import { create } from "zustand";

const useMovieStore = create((set) => ({
  movies: [],
  searchTerm: "",
  apiStatus: "idle",

  setSearchTerm: (term) => set({ searchTerm: term }),

  updateMoviesList: (movies) => set({ movies }),

  setApiStatus: (status) => set({ apiStatus: status }),
}));

export default useMovieStore;
