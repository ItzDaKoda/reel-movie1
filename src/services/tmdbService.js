const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_KEY;

function requireKey() {
  if (!API_KEY) {
    throw new Error(
      "Missing TMDB key. Add VITE_TMDB_KEY to .env and restart the dev server."
    );
  }
}

async function request(path) {
  requireKey();
  const url = `${BASE_URL}${path}${path.includes("?") ? "&" : "?"}api_key=${API_KEY}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`TMDB request failed (${res.status})`);
  return res.json();
}

export const fetchTrending = () => request("/trending/movie/week");
export const searchMovies = (query) =>
  request(`/search/movie?query=${encodeURIComponent(query)}&include_adult=false`);
export const fetchMovieDetails = (movieId) => request(`/movie/${movieId}`);