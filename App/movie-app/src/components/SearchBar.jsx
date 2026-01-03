import { useState } from "react";
import useMovieStore from "../store/useMovieStore";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const searchMovies = useMovieStore((state) => state.searchMovies);

  const handleSubmit = (e) => {
    e.preventDefault();
    searchMovies(query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <input
        type="text"
        placeholder="Search movies..."
        className="flex-1 p-3 rounded bg-gray-800 text-white"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="bg-red-600 px-5 rounded text-white">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
