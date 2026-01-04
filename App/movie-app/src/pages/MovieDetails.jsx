import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useMovieStore from "../store/useMovieStore";

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { selectedMovie, getMovieDetails, loading } = useMovieStore();

  useEffect(() => {
    getMovieDetails(id);
  }, [id, getMovieDetails]);

  if (loading || !selectedMovie) {
    return <p className="text-white p-6">Loading...</p>;
  }

  return (
    <div className="p-6 text-white">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 bg-gray-700 px-4 py-2 rounded"
      >
        ← Back
      </button>

      <div className="flex flex-col md:flex-row gap-6">
        <img src={selectedMovie.Poster} className="w-64" />
        <div>
          <h1 className="text-3xl text-blue-500 font-bold">{selectedMovie.Title}</h1>
          <p className="mt-2 text-black">{selectedMovie.Plot}</p>
          <p className="mt-2 text-black">🎭 Cast: {selectedMovie.Actors}</p>
          <p className="mt-2 text-black">🎬 Genre: {selectedMovie.Genre}</p>
          <p className="mt-2 text-black">⭐ IMDb: {selectedMovie.imdbRating}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;