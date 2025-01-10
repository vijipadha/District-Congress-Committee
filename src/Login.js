import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css';

function Login({ onLoginSuccess }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

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

    // Notify parent component (App) that login is successful
    onLoginSuccess();  

    // Redirect to HomePage after login success
    navigate('/HomePage');
  };

  return (
    <div className="login-page">
      
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit} className="login-form">
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}

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

        <button type="submit" className="btn">
          Login
        </button>
      </form>
      
    </div>
    
  );
}

export default Login;
