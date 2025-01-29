import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function SideNav() {
  // State to track sidebar visibility
  const [collapsed, setCollapsed] = useState(false);
  const [mastersOpen, setMastersOpen] = useState(false); // State for Masters sub-menu

  // Toggle the sidebar between minimized and expanded
  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

    // Toggle Masters sub-menu visibility
    const toggleMastersMenu = () => {
      setMastersOpen(!mastersOpen);
    };

  return (
    <div className={`sidenav ${collapsed ? 'collapsed' : ''}`}>
      <button className="toggle-btn" onClick={toggleSidebar}>
        {collapsed ? '☰' : '×'}
      </button>
      <h2 className={`sidenav-title ${collapsed ? 'collapsed' : ''}`}>COMMITTEES</h2>
      <ul>
        <li><Link to="/dccpage">DCC</Link></li>
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
        {/* <li><Link to="/masters">MASTERS</Link></li> */}
        {/* Masters Menu with sub-items */}
        <li>
          <button className="submenu-toggle" onClick={toggleMastersMenu}>
            MASTERS {mastersOpen ? '▲' : '▼'}
          </button>
          {mastersOpen && (
            <ul className="submenu">
              <li><Link to="/masters/citymaster">CityMaster</Link></li>
              <li><Link to="/masters/corporationmaster">CorporationMaster</Link></li>
              <li><Link to="/masters/zonemaster">ZoneMaster</Link></li>
              <li><Link to="/masters/parliamentmaster">ParliamentMaster</Link></li>
              <li><Link to="/masters/assemblymaster">AssemblyMaster</Link></li>
              <li><Link to="/masters/designationmaster">DesignationMaster</Link></li>
              
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
}

export default SideNav;
