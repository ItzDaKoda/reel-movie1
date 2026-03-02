import { useEffect, useState, useContext } from "react";
import { fetchTrending } from "../services/tmdbService.js";
import Loader from "../components/Loader.jsx";
import MovieCard from "../components/MovieCard.jsx";
import { WatchlistContext } from "../contexts/WatchlistContext.jsx";

export default function Home() {
  const { addToWatchlist } = useContext(WatchlistContext);

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let alive = true;

    async function load() {
      try {
        setLoading(true);
        setError("");
        const data = await fetchTrending();
        if (!alive) return;
        setMovies(data.results || []);
      } catch (e) {
        if (!alive) return;
        setError(e.message || "Something went wrong.");
      } finally {
        if (!alive) return;
        setLoading(false);
      }
    }

    load();
    return () => {
      alive = false;
    };
  }, []);

  return (
    <section>
      <h1 style={{ marginTop: 0 }}>Trending Movies</h1>
      <p className="muted">
        Browse what’s trending this week. Add movies to your watchlist to view them later.
      </p>

      {loading && <Loader label="Loading trending movies..." />}
      {error && (
        <div className="card" style={{ padding: "1rem", borderColor: "#5b2a2a" }}>
          <strong>Error:</strong> {error}
        </div>
      )}

      {!loading && !error && (
        <div className="grid" style={{ marginTop: "1rem" }}>
          {movies.map((m) => (
            <MovieCard
              key={m.id}
              movie={m}
              onAddToWatchlist={addToWatchlist}
              actionLabel="Watchlist"
            />
          ))}
        </div>
      )}
    </section>
  );
}