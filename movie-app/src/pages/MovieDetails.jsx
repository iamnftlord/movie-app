import { useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { fetchMoviesDetails } from "../service/movies";
import useMovieStore from "../store/movies";

const MovieDetails = () => {
  const { id } = useParams();
  const { selectedMovie, apiStatus } = useMovieStore();
  const navigate = useNavigate();

  console.log('Selected Movie', selectedMovie)

  useEffect(() => {
    fetchMoviesDetails(id);
  }, [id]);

  // ✅ HANDLE LOADING / EMPTY STATE
  if (apiStatus === "pending" || !selectedMovie) {
    return <p>Loading movie details...</p>;
  }

  const {
    Title,
    Year,
    Genre,
    Director,
    Actors,
    Poster,
    imdbRating,
    Plot,
    Ratings,
    Released,
    Runtime
  } = selectedMovie;

  

  return (
    <div className="flex flex-col items-center">
        <button className="border border-solid border-slate-100 hover:cursor-pointer" onClick={() => navigate(-1)}>Back to Search</button>
      <img src={Poster} alt={`Poster for ${Title}`} />
      <h2>
        {Title} ({Year})
      </h2>

      {Released && (
        <p>
            <strong>Released:</strong> {Released}
        </p>
      )}

      <div className="flex flex-col">
        {Genre && (
          <p>
            <strong>Genre:</strong> {Genre}
          </p>
        )}
        {imdbRating && (
          <p>
            <strong>IMDB Rating:</strong> {imdbRating}
          </p>
        )}
      </div>

      {Director && (
        <p>
          <strong>Director:</strong> {Director}
        </p>
      )}
      {Actors && (
        <p>
          <strong>Actors:</strong> {Actors}
        </p>
      )}
      {Plot && (
        <p>
            <strong>Plot:</strong> {Plot}
        </p>
      )}
      {Ratings && Ratings.length > 0 && (
        <div>
            <strong>Ratings:</strong>
            <ul>
                {Ratings.map((rating, index) => (
                <li key={index}>
                 {rating.Source}: {rating.Value}
                </li>
                ))}
            </ul>
        </div>
      )}
      {Runtime && (
        <p>
            <strong>Movie Length:</strong> {Runtime}
        </p>
      )}
    </div>
  );
};

export default MovieDetails;
