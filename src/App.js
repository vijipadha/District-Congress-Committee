import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
//import HomePage from './HomePage';
import SideNav from './SideNav';
import DccPage from './DccPage';
import BlockPage from './BlockPage';
import MunicipalityPage from './MunicipalityPage';
import Town from './Town';
import TownPanchayat from './TownPanchayat';
import Village from './Village';
import Division from './Division';
import DivisionWard from './DivisionWard';
import Ward from './Ward';
import Booth from './Booth';
import FrontalDepartment from './FrontalDepartment';
import Mandal from './Mandal';
import './App.css';  // Your app's styles
import 'bootstrap/dist/css/bootstrap.min.css';

  const handleLoginRedirect = () => {
    navigate("/Login");
  };
 
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);  // State to track login status

  // Handle login success
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      {!isLoggedIn ? (
        <Routes>
          <Route path="/" element={<Login onLoginSuccess={handleLoginSuccess} />} />
        </Routes>
      ) : (
        <div className="dashboard">
          <SideNav />  {/* Display SideNav only after login */}
          <div className="content">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/dcc" element={<DccPage />} />
              <Route path="/block" element={<BlockPage />} />
              <Route path="/municipality" element={<MunicipalityPage />} />
              <Route path="/town" element={<Town />} />
              <Route path="/townpanchayat" element={<TownPanchayat />} />
              <Route path="/village" element={<Village />} />
              <Route path="/division" element={<Division />} />
              <Route path="/divisionward" element={<DivisionWard />} />
              <Route path="/ward" element={<Ward />} />
              <Route path="/booth" element={<Booth />} />
              <Route path="/frontaldepartment" element={<FrontalDepartment />} />
              <Route path="/mandal" element={<Mandal />} />

            </Routes>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
