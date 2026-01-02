import envVars from "../config";
import useMovieStore from "../store/movies";

export const fetchMovies = async (searchTerm) => {
  const { updateMoviesList, setApiStatus } = useMovieStore.getState();

  try {
    setApiStatus("pending");

    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${envVars.OMDBApiKey}&s=${encodeURIComponent(searchTerm)}`
    );

    const data = await response.json();

    if (data.Response === "False") {
      throw new Error(data.Error);
    }

    updateMoviesList(data.Search); // ✅ IMPORTANT
    setApiStatus("success");
  } catch (error) {
    console.error("Failed to fetch movies", error);
    setApiStatus("failure");
  }
};

export const fetchMoviesDetails = async (imdbID) => {
  const { setSelectedMovie, setApiStatus } = useMovieStore.getState();

  try {
    setApiStatus("pending");

    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${envVars.OMDBApiKey}&i=${imdbID}&plot=full`
    );

    const data = await response.json();

    if (data.Response === "False") {
      throw new Error(data.Error);
    }

    setSelectedMovie(data);
    setApiStatus("success");
  } catch (error) {
    console.error("Failed to fetch movie details", error);
    setApiStatus("failure");
  }
};
