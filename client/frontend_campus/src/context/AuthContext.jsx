import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  // Load from localStorage on initial render
//   . createContext
// Purpose: To create a React Context for authentication.
// How you used it:
// const AuthContext = createContext();
// Creates a context to share auth state and functions across your app
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    const savedToken = localStorage.getItem("token");

    if (savedUser && savedToken) {
      // We only parse the user because it is stored as a JSON string and needs to be converted back to a JavaScript object.
      setUser(JSON.parse(savedUser));
      setToken(savedToken);
    }
  }, []);

  const login = (token, user) => {


    if (!token) {
      console.error("Login failed: No token provided in userData");
      return;
    }

    setUser(user);
    setToken(token);
// parse converts to the json format and stringify converts to string format
    // Store user and token in localStorage
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
