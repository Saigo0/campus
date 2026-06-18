"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { setTokenGetter } from "@/app/utils/api";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [token, setToken] = useState(null);

  // Sempre que o token mudar, atualiza a referência usada pelo interceptor
  useEffect(() => {
    setTokenGetter(() => token);
  }, [token]);

  function logout() {
    setToken(null);
  }

  return (
    <AuthContext.Provider
      value={{ token, setToken, logout, isAuthenticated: !!token }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth deve ser usado dentro de <AuthProvider>");
  return ctx;
}