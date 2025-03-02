import React, { useState } from "react";
import axios from "axios";

const Login = ({ setToken }) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:5000/api/auth/login", credentials);
    localStorage.setItem("token", res.data.token);
    setToken(res.data.token);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" placeholder="Email" onChange={(e) => setCredentials({ ...credentials, email: e.target.value })} required />
      <input type="password" placeholder="Password" onChange={(e) => setCredentials({ ...credentials, password: e.target.value })} required />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
