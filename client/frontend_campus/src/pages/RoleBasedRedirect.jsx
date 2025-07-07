import React from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export default function RoleBasedRedirect() {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" />;
  if (user.role === "manager") return <Navigate to="/manager" />;
  if (user.role === "user") return <Navigate to="/register" />;
  if (user.role === "admin") return <Navigate to="/admin" />;

  // fallback
  return <Navigate to="/" />;
}
