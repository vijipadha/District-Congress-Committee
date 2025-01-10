import React, { useState } from 'react';
//import { Link } from 'react-router-dom';

const HomePage = () => {
  const [showForm, setShowForm] = useState(false);

  const handleFormClick = () => {
    setShowForm(!showForm);
  };

  return (
    <div style={{ display: 'flex' }}>
      {/* Sidebar */}
      <nav style={{ width: '200px', background: '#f4f4f4', padding: '10px' }}>
        <h3>Side Navigation</h3>
        <ul>
          
            <button onClick={handleFormClick}>Show Form</button>
          
        </ul>
      </nav>

      {/* Main Content Area */}
      <div style={{ marginLeft: '220px', padding: '20px' }}>
        <h1>Welcome to the Homepage</h1>
        {showForm && (
          <div>
            <h2>Form</h2>
            <form>
              <label>
                Name:
                <input type="text" />
              </label>
              <br />
              <label>
                Email:
                <input type="email" />
              </label>
              <br />
              <button type="submit">Submit</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
