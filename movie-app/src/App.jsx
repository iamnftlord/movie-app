import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router';
import Layout from './components/common/Layout';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={
          <Layout />
        }>
          <Route index element={<Home />} />
          <Route path="movie" element={<div>Home Page</div>} />
          <Route path="movie/:id" element={<MovieDetails/>} />
        </Route>
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
