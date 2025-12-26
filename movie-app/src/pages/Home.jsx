import MovieDisplay from "../components/common/movieDisplay";
import SearchBar from "../components/searchBar"

const Home = () => {
  return (
    <div>
        <SearchBar />
        <MovieDisplay />
    </div>
  );
};

export default Home;