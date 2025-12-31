import useMovieStore from "../store/movies";
import envVars from "../config";

export const fetchMovies = async (searchTerm) => {
  const { updateMoviesList, setApiStatus, apiStatus } =
    useMovieStore.getState();

  if (!searchTerm || searchTerm.length < 3) {
    updateMoviesList([]);
    return;
  }

  if (apiStatus === "pending") 
    return;

  try {
    setApiStatus("pending");

    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${envVars.OMDBApiKey}&s=${encodeURIComponent(searchTerm)}`
    );

    const data = await response.json();

    if (data.Response === "False") {
      updateMoviesList([]);
      setApiStatus("success");
      return;
    }

    updateMoviesList(data.Search);
    setApiStatus("success");

    console.log("Fetched movies:", data.Search); // ✅ YOU WILL SEE THIS

  } catch (error) {
    console.error("failed to fetch movies", error);
    setApiStatus("failure");
  }
};
