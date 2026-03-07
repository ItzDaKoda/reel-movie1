import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext.jsx";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await login(form);
      navigate("/my-lists");
    } catch (err) {
      setError(err.message || "Login failed.");
    }
  };

  return (
    <section className="card" style={{ padding: "1rem", maxWidth: "500px", margin: "0 auto" }}>
      <h1 style={{ marginTop: 0 }}>Login</h1>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="email">Email</label>
          <input
            className="input"
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="password">Password</label>
          <input
            className="input"
            id="password"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
          />
        </div>

        {error && <p style={{ color: "#ff8f8f" }}>{error}</p>}

        <button className="button" type="submit">
          Login
        </button>
      </form>

      <p className="muted" style={{ marginTop: "1rem" }}>
        Need an account? <Link to="/register">Register</Link>
      </p>
    </section>
  );
}