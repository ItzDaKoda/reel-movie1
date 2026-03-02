import { useContext } from "react";
import { Link } from "react-router-dom";
import { WatchlistContext } from "../contexts/WatchlistContext.jsx";
import MovieCard from "../components/MovieCard.jsx";

export default function MyLists() {
  const { watchlist, removeFromWatchlist, clearWatchlist } = useContext(WatchlistContext);

  return (
    <section>
      <div className="row" style={{ justifyContent: "space-between" }}>
        <div>
          <h1 style={{ marginTop: 0, marginBottom: 0 }}>My Watchlist</h1>
          <p className="muted" style={{ marginTop: "0.25rem" }}>
            Movies you saved from Home or Discover.
          </p>
        </div>

        <div className="row">
          <button className="button" onClick={clearWatchlist} disabled={watchlist.length === 0}>
            Clear
          </button>
          <Link className="button" to="/discover">
            Add more
          </Link>
        </div>
      </div>

      {watchlist.length === 0 ? (
        <div className="card" style={{ padding: "1rem" }}>
          Your watchlist is empty. Go to{" "}
          <Link to="/discover">
            <strong>Discover</strong>
          </Link>{" "}
          to add movies.
        </div>
      ) : (
        <div className="grid" style={{ marginTop: "1rem" }}>
          {watchlist.map((m) => (
            <MovieCard
              key={m.id}
              movie={m}
              onAddToWatchlist={() => removeFromWatchlist(m.id)}
              actionLabel="Remove"
            />
          ))}
        </div>
      )}
    </section>
  );
}