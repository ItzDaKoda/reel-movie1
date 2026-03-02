export default function Loader({ label = "Loading..." }) {
  return (
    <div className="card" style={{ padding: "1rem" }} role="status" aria-live="polite">
      <div className="row">
        <div
          style={{
            width: 16,
            height: 16,
            borderRadius: "50%",
            border: "2px solid #2c3244",
            borderTopColor: "#e8eaf0",
            animation: "spin 1s linear infinite",
          }}
        />
        <span className="muted">{label}</span>
      </div>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg);} to { transform: rotate(360deg);} }
      `}</style>
    </div>
  );
}