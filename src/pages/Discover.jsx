import { useContext, useEffect, useMemo, useState } from "react";
import { searchMovies } from "../services/tmdbService.js";
import SearchBar from "../components/SearchBar.jsx";
import Loader from "../components/Loader.jsx";
import MovieCard from "../components/MovieCard.jsx";
import { WatchlistContext } from "../contexts/WatchlistContext.jsx";

export default function Discover() {
  const { addToWatchlist } = useContext(WatchlistContext);

  const [query, setQuery] = useState("");
  const [submittedQuery, setSubmittedQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const canSearch = useMemo(() => submittedQuery.trim().length > 0, [submittedQuery]);

  useEffect(() => {
    let alive = true;

    async function run() {
      if (!canSearch) {
        setMovies([]);
        setError("");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError("");
        const data = await searchMovies(submittedQuery.trim());
        if (!alive) return;
        setMovies(data.results || []);
      } catch (e) {
        if (!alive) return;
        setError(e.message || "Search failed.");
      } finally {
        if (!alive) return;
        setLoading(false);
      }
    }

    run();
    return () => {
      alive = false;
    };
  }, [submittedQuery, canSearch]);

  return (
    <section>
      <h1 style={{ marginTop: 0 }}>Discover</h1>
      <p className="muted">Search for movies and add them to your watchlist.</p>

      <SearchBar
        value={query}
        onChange={setQuery}
        onSubmit={() => setSubmittedQuery(query)}
        placeholder="Search movies (e.g., Inception)"
      />

      {loading && (
        <div style={{ marginTop: "1rem" }}>
          <Loader label="Searching..." />
        </div>
      )}

      {error && (
        <div className="card" style={{ padding: "1rem", marginTop: "1rem", borderColor: "#5b2a2a" }}>
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

      {!loading && !error && canSearch && movies.length === 0 && (
        <div className="card" style={{ padding: "1rem", marginTop: "1rem" }}>
          No results found.
        </div>
      )}
    </section>
  );
}