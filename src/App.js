import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import HomePage from './HomePage';
import SideNav from './SideNav';
import DccPage from './DccPage';
import BlockPage from './BlockPage';
import MunicipalityPage from './MunicipalityPage';
import './App.css';  // Your app's styles

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
              
              <Route path="/dcc" element={<DccPage />} />
              <Route path="/block" element={<BlockPage />} />
              <Route path="/municipality" element={<MunicipalityPage />} />
            </Routes>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
