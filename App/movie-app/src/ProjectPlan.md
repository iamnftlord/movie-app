# 🎬 Movie Database Application - Development Roadmap

This document outlines the step-by-step process for building the Movie Database application using **React**, **Vite**, **Zustand**, and **Tailwind CSS**.

---

## 🏗️ Phase 1: Environment Setup & Architecture
- [X] **Initialize Vite Project:** Run `npm create vite@latest` and select the React/JavaScript template.
- [x] **Install Dependencies:** - `npm install zustand react-router-dom axios`
    - `npm install -D tailwindcss postcss autoprefixer`
- [ ] **Configure Tailwind:** Run `npx tailwindcss init -p` and set up the `content` paths in `tailwind.config.js`.
- [x] **Environment Variables:** Create a `.env` file in the root directory:
    - `VITE_OMDB_API_KEY=your_key_here`
- [x] **Folder Structure:** Create the following directory layout:
    - `src/components` (UI pieces like Buttons, Cards)
    - `src/pages` (Home.jsx, MovieDetails.jsx)
    - `src/store` (useMovieStore.js)
    - `src/services` (api.js)

---

## 🧠 Phase 2: State Management (Zustand)
- [x] **Service Setup:** Create a utility in `src/services/api.js` to handle Axios/Fetch calls to the OMDb API.
- [x] **Store Definition:** Create `src/store/useMovieStore.js`.
- [x] **Define State:** Add `movies` (list), `selectedMovie` (details), `loading` (boolean), and `error` (string).
- [x] **Define Actions:** - `setMovies`: To update the list.
    - `searchMovies`: To fetch data based on the search query.
    - `getMovieDetails`: To fetch a specific movie by its IMDB ID.



---

## 🛣️ Phase 3: Routing & Navigation
- [x] **Router Configuration:** Set up `BrowserRouter` in `main.jsx`.
- [x] **Define Routes:**
    - `/` -> Home Page (Search results).
    - `/movie/:id` -> Detailed View.
- [x] **Navigation Bar:** Create a persistent Navbar component that appears on all pages.

---

## 🎨 Phase 4: UI & Component Development
### 🔍 Search & Home Page
- [x] **SearchBar Component:** Create an input field that updates the search state.
- [x] **MovieCard Component:** Design a card displaying the poster, title, and release year.
- [x] **Results Grid:** Build a responsive grid (1 column mobile, 3-4 columns desktop) using Tailwind.
- [x] **Fallback Imagery:** Logic to display a placeholder image if `Poster: "N/A"` is returned.

### 📋 Movie Details Page
- [x] **Detail Fetching:** Use `useEffect` and `useParams` to trigger `getMovieDetails` when the page loads.
- [x] **Information Layout:** Display the Plot, Cast, Genre, and Ratings (IMDb, etc.).
- [x] **Back Navigation:** Add a button to return to the search results.

---

## 🛠️ Phase 5: Error Handling & Optimization
- [x] **Loading States:** Create a visual spinner or skeleton loader for the fetching phase.
- [x] **Empty States:** Display a "No movies found" message for empty results.
- [x] **Error Messages:** Implement a UI alert if the API call fails or the network is down.
- [x] **Mobile Optimization:** Ensure the search bar and details page are fully usable on touch devices.

---

## 🚀 Phase 6: Deployment
- [x] **Production Build:** Run `npm run build` to generate the `dist` folder.
- [x] **Deployment:** Connect the repository to Netlify or Vercel.
- [x] **Environment Variable Config:** Add `VITE_OMDB_API_KEY` to the hosting provider's dashboard settings.
- [x] **Final Audit:** Test the live URL to ensure images load and search functions correctly.