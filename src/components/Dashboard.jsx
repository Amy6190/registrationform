import React from "react";

const Dashboard = ({ setToken }) => {
  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  return (
    <div>
      <h2>Welcome to the Dashboard!</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
