import logo from './logo.svg';
import React, { useState , useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import home from './home';
import './App.css';


function Login() {
   const navigate = useNavigate();
  
    const handleLoginRedirect = () => {
      navigate("/home");
    };
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;

    if (!email || !password) {
      setError("Please fill in all fields.");
      setSuccess("");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      setSuccess("");
      return;
    }

    // Placeholder for actual authentication logic
    setError("");
    setSuccess("Login successful!");
    console.log("Logged in with:", formData);
  };

  return (
    <div className="app">
    <h1>Register Form</h1>
    <form onSubmit={handleSubmit} className="login-form">
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
      <div className='row'>
        <div className="col-md-6">
        <div className="form-group">
        <label htmlFor="First Name">First Name:</label>
        <input
          type="input"
          id="name"
          name="name"
          value={null}
          onChange={handleInputChange}
          required
        />
      </div>
        </div>
        <div className="col-md-6">
        <div className="form-group">
        <label htmlFor="First Name">Last Name:</label>
        <input
          type="input"
          id="name"
          name="name"
          value={null}
          onChange={handleInputChange}
          required
        />
      </div>
        </div>
        <div className='col-md-6'>
        <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </div>
        </div>
        <div className='col-md-6'>
      
        <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
      </div>
        </div>
        <div className='col-md-6'>
     
        </div>
        <div className='col-md-6'>
       
        </div>
        <div className='col-md-6'>
        
        </div>
        <div className='col-md-6'>
       
        </div>
      </div>

    


      <button type="submit" onClick={handleLoginRedirect} className="btn">
        Login
      </button>
    </form>
  </div>

  );
}

export default Login;
