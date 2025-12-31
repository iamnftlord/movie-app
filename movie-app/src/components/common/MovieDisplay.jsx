import useMovieStore from "../../store/movies";
import MovieCard from "./MovieCard";

const MovieDisplay = () => {
  const { movies, apiStatus } = useMovieStore();

  const isLoading = apiStatus === "pending";

  console.log(
    "Movies in display component:",
    movies.map((m) => m.Title)
  );

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4 my-[2em]">
      {isLoading ? (
        <p>Fetching your movie details...</p>
      ) : movies.length > 0 ? (
        movies.map((movie, idx) => (
          <MovieCard
            key={idx}
            Title={movie.Title}
            Year={movie.Year}
            Poster={movie.Poster}
            imdbID={movie.imdbID}
          />
        ))
      ) : (
        <p>No movies found.</p>
      )}
    </div>
  );
};

export default MovieDisplay;
