import logo from './logo.svg';
import React, { useState } from "react";
import './App.css';
import './Style.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Register from './Register';
import Login from './Login';
import Dashboard from './Dashboard';
import Dcc from './dcc';
import SideNav from './SideNav';
function Home() {
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate("/Login");
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
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };


  return (
    <Router>    
      <div className="app">
      <div className="title Head">
        <h2 className='app-title'>District Congress Committee</h2>
      </div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Dashboard" element={<Dashboard />} />
           <Route path="/dcc" element={<Dcc />} />
        </Routes>
      </div>
      
    </Router>

  );
}

export default App;
