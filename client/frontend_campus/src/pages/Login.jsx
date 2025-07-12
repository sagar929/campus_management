import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function AuthPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [isRegister, setIsRegister] = useState(false);
  const [form, setForm] = useState({ username: "", email: "", password: "", role: "" });

  const handleChange = (e) => {
    // { ...form } copies the current form state
    // [e.target.name] dynamically sets the property name based on the input field's name
    // e.target.value gets the value from the input field
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const endpoint = isRegister
  //       ? "https://campus-management-backend.onrender.com/api/auth/register"
  //       : "https://campus-management-backend.onrender.com/api/auth/login";
  //     const res = await fetch(endpoint, {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(form),
  //     });

  //     const data = await res.json();
  //     if (!res.ok) throw new Error(data.message || "Something went wrong");
  //     login(data.token, data.user);
  //     navigate("/dashboard");
  //   } catch (err) {
  //     alert(err.message);
  //   }
  // };

  // AXIOS automatically sets the header and the method and then stringfy 
  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const endpoint = isRegister
      ? "https://campus-management-backend.onrender.com/api/auth/register"
      : "https://campus-management-backend.onrender.com/api/auth/login";

    const res = await axios.post(endpoint, form); 

    login(res.data.token, res.data.user);
    navigate("/dashboard");
  } catch (err) {
    alert(err.response?.data?.message || err.message || "Something went wrong");
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-blue-300 to-blue-500">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-6">
          {isRegister ? "Register" : "Login"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
         {isRegister && (
  <>
    <input
      name="email"
      type="email"
      placeholder="Email"
      value={form.email}
      onChange={handleChange}
      required
      className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
    />
    <select
      name="role"
      value={form.role}
      onChange={handleChange}
      required
      className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition bg-white"
    >
      <option value="" disabled>
        Select Role
      </option>
      <option value="user">User</option>
      <option value="manager">Manager</option>
    </select>
  </>
)}
          <button
            type="submit"
            className="w-full py-3 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 transition"
          >
            {isRegister ? "Register" : "Login"}
          </button>
        </form>
        <button
          onClick={() => setIsRegister(!isRegister)}
          className="mt-6 w-full text-blue-700 hover:underline transition"
        >
          {isRegister
            ? "Already have an account? Login"
            : "New user? Register"}
        </button>
      </div>
    </div>
  );
}