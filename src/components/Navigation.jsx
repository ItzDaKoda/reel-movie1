import { NavLink } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext.jsx";

const linkStyle = ({ isActive }) => ({
  padding: "0.55rem 0.8rem",
  borderRadius: "12px",
  border: "1px solid #2c3244",
  background: isActive ? "#1b2030" : "transparent",
  fontWeight: 700,
});

export default function Navigation() {
  const { isAuthenticated } = useAuth();

  return (
    <nav className="row" aria-label="Primary navigation">
      <NavLink to="/" style={linkStyle}>
        Home
      </NavLink>
      <NavLink to="/discover" style={linkStyle}>
        Discover
      </NavLink>
      <NavLink to="/my-lists" style={linkStyle}>
        My Lists
      </NavLink>
      {!isAuthenticated && (
        <>
          <NavLink to="/login" style={linkStyle}>
            Login
          </NavLink>
          <NavLink to="/register" style={linkStyle}>
            Register
          </NavLink>
        </>
      )}
    </nav>
  );
}