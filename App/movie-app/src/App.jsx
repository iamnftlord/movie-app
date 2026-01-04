import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import Movies from "./pages/Movies";
import TvSeries from "./pages/TvSeries";
import Upcoming from "./pages/Upcoming";
import LoginPage from "./Oauth/LoginPage";
import SignupPage from "./Oauth/SignupPage";

const App = () => {
  return (
    <Routes>
      {/* Redirect root to login */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* Auth routes */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />

      {/* App routes */}
      <Route path="/home" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/series" element={<TvSeries />} />
      <Route path="/upcoming" element={<Upcoming />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
    </Routes>
  );
};

export default App;