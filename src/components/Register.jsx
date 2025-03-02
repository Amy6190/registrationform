import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [user, setUser] = useState({ name: "", email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/auth/register", user);
    alert("User Registered!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" onChange={(e) => setUser({ ...user, name: e.target.value })} required />
      <input type="email" placeholder="Email" onChange={(e) => setUser({ ...user, email: e.target.value })} required />
      <input type="password" placeholder="Password" onChange={(e) => setUser({ ...user, password: e.target.value })} required />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
