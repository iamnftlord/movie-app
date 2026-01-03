import {
  FiHome,
  FiFilm,
  FiTv,
  FiClock,
  FiLogOut,
  FiSearch,
  FiPlay,
  FiInfo
} from "react-icons/fi";

import useMovieStore from "../store/useMovieStore";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const { movies, loading, error } = useMovieStore();

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white flex">
      
      {/* ================= Sidebar ================= */}
      <aside className="w-64 bg-[#111] flex flex-col justify-between p-6">
        <div>
          <div className="text-2xl font-bold text-teal-400 mb-10">
           <img src="/assets/react.svg" alt="" /> 🎬 MovieDB
          </div>

          <nav className="space-y-4">
            <SidebarItem icon={<FiHome />} label="Home" active />
            <SidebarItem icon={<FiFilm />} label="Movies" />
            <SidebarItem icon={<FiTv />} label="TV Series" />
            <SidebarItem icon={<FiClock />} label="Upcoming" />
          </nav>
        </div>

        <button className="flex items-center gap-3 text-gray-400 hover:text-red-500">
          <FiLogOut />
          Log out
        </button>
      </aside>

      {/* ================= Main Content ================= */}
      <main className="flex-1 p-8 space-y-10 overflow-y-auto">

        {/* Search */}
        <div className="max-w-2xl">
          <SearchBar />
        </div>

        {/* Hero Section */}
        <section className="relative rounded-2xl overflow-hidden h-[320px] bg-gradient-to-r from-black to-transparent">
          <img
            src="https://images.unsplash.com/photo-1524985069026-dd778a71c7b4"
            alt="Hero"
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />

          <div className="relative z-10 p-10 h-full flex flex-col justify-end">
            <h1 className="text-4xl font-bold tracking-wider mb-4">
              MOONFALL
            </h1>

            <div className="flex gap-4">
              <button className="flex items-center gap-2 bg-white text-black px-6 py-2 rounded-lg font-semibold">
                <FiPlay /> Play
              </button>

              <button className="flex items-center gap-2 bg-gray-700 px-6 py-2 rounded-lg">
                <FiInfo /> More Info
              </button>
            </div>
          </div>
        </section>

        {/* Trending */}
        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Trending</h2>
            <span className="text-sm text-gray-400 cursor-pointer hover:text-white">
              See all
            </span>
          </div>

          {loading && <p className="text-gray-400">Loading...</p>}
          {error && <p className="text-red-500">{error}</p>}

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {movies.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} />
            ))}
          </div>
        </section>

      </main>

      {/* ================= Filters Panel ================= */}
      <aside className="w-72 bg-[#111] p-6 hidden lg:block">
        <FilterSection
          title="Categories"
          options={["Action", "Adventure", "Comedy", "Crime", "Fantasy"]}
        />

        <FilterSection
          title="Services"
          options={["Netflix", "Prime Video", "Disney+", "HBO Max", "Hulu"]}
        />
      </aside>
    </div>
  );
};

export default Home;

const SidebarItem = ({ icon, label, active }) => (
  <div
    className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer 
    ${
      active
        ? "bg-teal-600 text-white"
        : "text-gray-400 hover:bg-gray-800"
    }`}
  >
    {icon}
    <span>{label}</span>
  </div>
);


const FilterSection = ({ title, options }) => (
  <div className="mb-8">
    <h3 className="font-semibold mb-4">{title}</h3>

    <div className="space-y-3">
      {options.map((opt) => (
        <label
          key={opt}
          className="flex items-center justify-between bg-[#1a1a1a] px-4 py-2 rounded-lg"
        >
          <span className="text-sm">{opt}</span>
          <input
            type="checkbox"
            defaultChecked
            className="accent-teal-500"
          />
        </label>
      ))}
    </div>
  </div>
);
