import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<div>Layout Component</div>}>
          <Route index element={<div>Home Page</div>} />
          <Route path="movie" element={<div>Home Page</div>} />
          <Route path="movie/:id" element={<div>Home Page</div>} />
        </Route>
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
