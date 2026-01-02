import useMovieStore from "../../store/movies";
import MovieCard from "./MovieCard";

const MovieDisplay = () => {
  const { movies, apiStatus } = useMovieStore();
  const isLoading = apiStatus === "pending";

  console.log("IMDB IDs:", movies.map((m) => m.imdbID));

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4 my-[2em]">
      {isLoading ? (
        <p>Fetching your movie details...</p>
      ) : movies.length > 0 ? (
        movies.map((movie) => (
          <MovieCard
            key={movie.imdbID}          // ✅ use imdbID as key
            Title={movie.Title}
            Year={movie.Year}
            Poster={movie.Poster}
            imdbID={movie.imdbID}       // ✅ correctly passed
          />
        ))
      ) : (
        <p>No movies found.</p>
      )}
    </div>
  );
};

export default MovieDisplay;
