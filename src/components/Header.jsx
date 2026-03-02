import Navigation from "./Navigation.jsx";

export default function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 10,
        background: "rgba(15,17,21,0.9)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid #242836",
      }}
    >
      <div className="container" style={{ padding: "0.9rem 1rem" }}>
        <div className="row" style={{ justifyContent: "space-between" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <strong style={{ fontSize: "1.1rem" }}>ReelRole</strong>
            <span className="muted" style={{ fontSize: "0.9rem" }}>
              Movie discovery + watchlists
            </span>
          </div>
          <Navigation />
        </div>
      </div>
    </header>
  );
}