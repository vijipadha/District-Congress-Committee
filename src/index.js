import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';  // Make sure Router is used here
import 'bootstrap/dist/css/bootstrap.min.css';
import './Style.css';
import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>  {/* Wrap your app with Router */}
      <App />
    </Router>
  </React.StrictMode>
);
