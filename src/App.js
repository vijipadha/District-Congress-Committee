import logo from './logo.svg';
import React, { useState } from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Login from './Login';

function Home() {
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate("/login");
  };
  return (
    <div className="home">
      <h1>Welcome to the DCC</h1>
      <button onClick={handleLoginRedirect} className="btn">
        Register
      </button>
    </div>
  );
}
function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
