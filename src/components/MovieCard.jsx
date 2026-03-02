import { Link } from "react-router-dom";

const IMG = "https://image.tmdb.org/t/p/w500";

export default function MovieCard({ movie, onAddToWatchlist, actionLabel = "Add" }) {
  const poster = movie.poster_path ? `${IMG}${movie.poster_path}` : null;

  return (
    <article className="card">
      <div style={{ aspectRatio: "2 / 3", background: "#0c0e14" }}>
        {poster ? (
          <img
            src={poster}
            alt={`${movie.title} poster`}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            loading="lazy"
          />
        ) : (
          <div style={{ padding: "1rem" }} className="muted">
            No image
          </div>
        )}
      </div>

      <div style={{ padding: "0.85rem" }}>
        <strong style={{ display: "block" }}>{movie.title}</strong>
        <div className="muted" style={{ fontSize: "0.9rem" }}>
          Rating: {movie.vote_average?.toFixed?.(1) ?? "N/A"}
        </div>

        <div className="row" style={{ marginTop: "0.75rem" }}>
          <Link className="button" to={`/movies/${movie.id}`}>
            Details
          </Link>

          {onAddToWatchlist && (
            <button className="button" type="button" onClick={() => onAddToWatchlist(movie)}>
              {actionLabel}
            </button>
          )}
        </div>
      </div>
    </article>
  );
}