import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dcc from "./dcc";
import "./Style.css";

const SideNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
  
    <div className="sidenav-container">
      {/* Sidebar */}
      <div className="sidenav">
      <Link to="/dcc">DCC</Link>
        <a href="#about">BLOCK</a>
        <a href="#services">MUNICIPALITY</a>
        <a href="#contact">TOWN</a>
        <a href="#contact">TOWN</a>
      </div>

      {/* Main Content */}
      <div className="main-content">
    
        <h1>Welcome to My Website</h1>
        <p>This is the main content area. The sidebar is always open.</p>
      </div>
    </div>
  );
};

export default SideNav;
