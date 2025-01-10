import React from 'react';
import { Link } from 'react-router-dom';
import './SideNav.css';  // You can create a separate CSS file for styles

function SideNav() {
  return (
    <div className="sidenav">
      <h2>COMMITTEES</h2>
      <ul>
        <li><Link to="/dcc">DCC</Link></li>
        <li><Link to="/block">BLOCK</Link></li>
        <li><Link to="/municipality">MUNICIPALITY</Link></li>
        <li><Link to="/town">TOWN</Link></li>
        <li><Link to="/townpanchayat">TOWN PANCHAYAT</Link></li>
        <li><Link to="/village">VILLAGE</Link></li>
        <li><Link to="/division">DIVISION</Link></li>
        <li><Link to="/divisionward">DIVISION WARD</Link></li>
        <li><Link to="/ward">WARD</Link></li>
        <li><Link to="/booth">BOOTH</Link></li>
        <li><Link to="/frontaldepartment">FRONTAL DEPARTMENT</Link></li>
        <li><Link to="/mandal">MANDAL</Link></li>
      </ul>
    </div>
  );
}

export default SideNav;
