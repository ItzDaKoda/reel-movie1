import { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchMovieDetails } from "../services/tmdbService.js";
import Loader from "../components/Loader.jsx";
import { WatchlistContext } from "../contexts/WatchlistContext.jsx";

const IMG = "https://image.tmdb.org/t/p/w500";

export default function MovieDetails() {
  const { movieId } = useParams();
  const { addToWatchlist } = useContext(WatchlistContext);

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let alive = true;

    async function load() {
      try {
        setLoading(true);
        setError("");
        const data = await fetchMovieDetails(movieId);
        if (!alive) return;
        setMovie(data);
      } catch (e) {
        if (!alive) return;
        setError(e.message || "Failed to load details.");
      } finally {
        if (!alive) return;
        setLoading(false);
      }
    }

    load();
    return () => {
      alive = false;
    };
  }, [movieId]);

  if (loading) return <Loader label="Loading movie details..." />;

  if (error) {
    return (
      <div className="card" style={{ padding: "1rem", borderColor: "#5b2a2a" }}>
        <strong>Error:</strong> {error}
        <div style={{ marginTop: "0.75rem" }}>
          <Link className="button" to="/discover">
            Back to Discover
          </Link>
        </div>
      </div>
    );
  }

  if (!movie) return null;

  const poster = movie.poster_path ? `${IMG}${movie.poster_path}` : null;

  return (
    <section>
      <div className="row" style={{ justifyContent: "space-between" }}>
        <h1 style={{ marginTop: 0, marginBottom: 0 }}>{movie.title}</h1>
        <Link className="button" to="/discover">
          Back
        </Link>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1rem", marginTop: "1rem" }}>
        <div className="card">
          <div style={{ background: "#0c0e14" }}>
            {poster ? (
              <img
                src={poster}
                alt={`${movie.title} poster`}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            ) : (
              <div style={{ padding: "1rem" }} className="muted">
                No image
              </div>
            )}
          </div>
        </div>

        <div className="card" style={{ padding: "1rem" }}>
          <p className="muted" style={{ marginTop: 0 }}>
            {movie.release_date ? `Release: ${movie.release_date}` : "Release: N/A"} • Rating:{" "}
            {movie.vote_average?.toFixed?.(1) ?? "N/A"}
          </p>

          <div className="row" style={{ marginBottom: "0.75rem" }}>
            <button className="button" onClick={() => addToWatchlist(movie)}>
              Add to Watchlist
            </button>
          </div>

          <h2 style={{ margin: "0.75rem 0 0.25rem" }}>Overview</h2>
          <p className="muted" style={{ marginTop: 0 }}>
            {movie.overview || "No overview available."}
          </p>

          <h2 style={{ margin: "0.75rem 0 0.25rem" }}>Genres</h2>
          <p className="muted" style={{ marginTop: 0 }}>
            {movie.genres?.length ? movie.genres.map((g) => g.name).join(", ") : "N/A"}
          </p>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          section > div[style*="grid-template-columns"] {
            grid-template-columns: 340px 1fr !important;
            align-items: start;
          }
        }
      `}</style>
    </section>
  );
}