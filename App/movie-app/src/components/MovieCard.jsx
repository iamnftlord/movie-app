import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const poster =
    movie.Poster !== "N/A"
      ? movie.Poster
      : "https://via.placeholder.com/300x450?text=No+Image";

  return (
    <Link to={`/movie/${movie.imdbID}`}>
      <div className="bg-gray-800 rounded overflow-hidden hover:scale-105 transition">
        <img src={poster} alt={movie.Title} />
        <div className="p-4">
          <h3 className="font-bold text-white">{movie.Title}</h3>
          <p className="text-gray-400">{movie.Year}</p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
