import SearchBar from "../components/SearchBar";

const Movies = () => {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white p-8">
      <h1 className="text-2xl font-bold mb-6">Movies</h1>
      <div className="max-w-2xl mb-6">
        <SearchBar />
      </div>
      <p className="text-gray-400">Browse and search movies. Content coming soon.</p>
    </div>
  );
};

export default Movies;