import { useMemo } from "react";
import { FiSearch } from "react-icons/fi";
import useMovieStore from "../store/movies";
import _ from "lodash";
import { fetchMovies } from "../service/movies";

const SearchBar = () => {
  const setSearchTerm = useMovieStore((state) => state.setSearchTerm);

  // ✅ Debounced function accepts VALUE
  const debouncedFetch = useMemo(
    () =>
      _.debounce((value) => {
        fetchMovies(value);
      }, 500),
    []
  );

  const handleChange = (e) => {
    const value = e.target.value; // ✅ extract immediately
    setSearchTerm(value);
    debouncedFetch(value); // ✅ pass value, not event
  };

  return (
    <div className="flex items-center gap-5 px-4 py-2 rounded-full max-w-[80%] sm:max-w-[50%] md:max-w-[30%] border-2 border-slate-700 mx-auto my-4">
      <input
        type="text"
        placeholder="Search for Movies or TV Series"
        onChange={handleChange}
        className="outline-none bg-transparent w-full"
      />
      <FiSearch />
    </div>
  );
};

export default SearchBar;
