import { createContext, useContext, useEffect, useMemo, useState } from "react";

const AuthContext = createContext(null);

const TOKEN_KEY = "reelrole_token";
const USER_KEY = "reelrole_user";
const EXPIRES_KEY = "reelrole_expires";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const savedToken = localStorage.getItem(TOKEN_KEY);
    const savedUser = localStorage.getItem(USER_KEY);
    const savedExpires = localStorage.getItem(EXPIRES_KEY);

    if (!savedToken || !savedUser || !savedExpires) return;

    const now = Date.now();
    if (now > Number(savedExpires)) {
      localStorage.removeItem(TOKEN_KEY);
      localStorage.removeItem(USER_KEY);
      localStorage.removeItem(EXPIRES_KEY);
      return;
    }

    setToken(savedToken);
    setUser(JSON.parse(savedUser));
  }, []);

  const register = async ({ name, email, password }) => {
    if (!name.trim() || !email.trim() || !password.trim()) {
      throw new Error("All fields are required.");
    }

    if (password.length < 6) {
      throw new Error("Password must be at least 6 characters.");
    }

    const fakeUser = {
      id: crypto.randomUUID(),
      name: name.trim(),
      email: email.trim().toLowerCase(),
      role: "user",
    };

    const fakeToken = `demo-jwt-${crypto.randomUUID()}`;
    const expiresAt = Date.now() + 1000 * 60 * 60; // 1 hour

    localStorage.setItem(TOKEN_KEY, fakeToken);
    localStorage.setItem(USER_KEY, JSON.stringify(fakeUser));
    localStorage.setItem(EXPIRES_KEY, String(expiresAt));

    setUser(fakeUser);
    setToken(fakeToken);

    return fakeUser;
  };

  const login = async ({ email, password }) => {
    if (!email.trim() || !password.trim()) {
      throw new Error("Email and password are required.");
    }

    if (password.length < 6) {
      throw new Error("Invalid credentials.");
    }

    const fakeUser = {
      id: crypto.randomUUID(),
      name: email.split("@")[0],
      email: email.trim().toLowerCase(),
      role: "user",
    };

    const fakeToken = `demo-jwt-${crypto.randomUUID()}`;
    const expiresAt = Date.now() + 1000 * 60 * 60;

    localStorage.setItem(TOKEN_KEY, fakeToken);
    localStorage.setItem(USER_KEY, JSON.stringify(fakeUser));
    localStorage.setItem(EXPIRES_KEY, String(expiresAt));

    setUser(fakeUser);
    setToken(fakeToken);

    return fakeUser;
  };

  const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
    localStorage.removeItem(EXPIRES_KEY);
    setUser(null);
    setToken(null);
  };

  const isAuthenticated = Boolean(user && token);

  const value = useMemo(
    () => ({
      user,
      token,
      isAuthenticated,
      login,
      register,
      logout,
    }),
    [user, token, isAuthenticated]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}