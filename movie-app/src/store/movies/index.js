import { create } from 'zustand'

const initState = {
    movies: [],
    selectedMovie:{},
    searchTerm: '',
    ApiStatus: null,
    error: null,
}

const useMovieStore = create((set) => ({
  ...initState,
  setSearchTerm: (newTerm) => set({ searchTerm: newTerm
  }),
    selectedMovie: (movie) => set({ selectedMovie: movie }),

    updateMoveList: (movie) =>

        set((state) => ({movie: [...state.movies, movie] })),
    deleteMovieFromList: (movieId) => 
        set((state) => ({ movies: state.movies.filter (movie => movie.id !==movieId)
    })),

    setApiStatus: (status) => set({
        ApiStatus: status
    }),
    
    reset: () => set({
        initState
     }),

    clearSelectedMovie: () =>
    set({
        selectedMovie: {},
    }),
 clearMovieList: () => set({
    movies: [] }),
}));

export default useMovieStore;
