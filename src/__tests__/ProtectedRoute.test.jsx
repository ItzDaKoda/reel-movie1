import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext.jsx";
import ProtectedRoute from "../components/ProtectedRoute.jsx";

test("redirects unauthenticated users away from protected route", () => {
  render(
    <AuthProvider>
      <MemoryRouter initialEntries={["/my-lists"]}>
        <Routes>
          <Route
            path="/my-lists"
            element={
              <ProtectedRoute>
                <div>Protected Content</div>
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<div>Login Page</div>} />
        </Routes>
      </MemoryRouter>
    </AuthProvider>
  );

  expect(screen.getByText("Login Page")).toBeInTheDocument();
});