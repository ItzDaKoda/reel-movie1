import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useAuth, AuthProvider } from "../contexts/AuthContext.jsx";

function TestComponent() {
  const { isAuthenticated, login, logout } = useAuth();

  return (
    <div>
      <div>Status: {isAuthenticated ? "logged in" : "logged out"}</div>
      <button
        onClick={() =>
          login({
            email: "test@example.com",
            password: "123456",
          })
        }
      >
        Login
      </button>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

test("logs in and logs out", async () => {
  const user = userEvent.setup();

  render(
    <AuthProvider>
      <TestComponent />
    </AuthProvider>
  );

  expect(screen.getByText(/logged out/i)).toBeInTheDocument();

  await user.click(screen.getByText("Login"));
  expect(screen.getByText(/logged in/i)).toBeInTheDocument();

  await user.click(screen.getByText("Logout"));
  expect(screen.getByText(/logged out/i)).toBeInTheDocument();
});