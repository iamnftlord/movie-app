import { useMemo } from "react"
import { FiSearch } from "react-icons/fi"
import useMovieStore from "../store/movies"
import MovieCard from "./common/MovieCard"
// import debounce from 'lodash.debounce'


const SearchBar = () => {
  const { setSearchTerm } = useMovieStore ();

 const handleChange = (e) => {
  setSearchTerm(e.target.value);
 const updatedSearchTerm = _.debounce(() => {
  fetchMovies()
 }, 250)

 updatedSearchTerm();
};


  return (
    <div className="flex items-center gap-5 
          px-4 py-2 rounded-full max-w-[80%] sm:max-w-[50%] 
          md:max-w-[30%] justify-between 
          border-solid border-2
          border-slate-700 mx-auto my-[1em]"
          >
        
        <input type="text" 
        placeholder="Search for Movies or Tv Series" 
        onChange={(e) => handleChange}
        className="outline-none border-none active:border-none bg-none"
        />
        <FiSearch />
      
    </div>
  )
}

export default SearchBar