import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextField, Box, Typography, Paper, Container, Link } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Login({ onLoginSuccess }) {
  const [emailError, setEmailError] = useState(""); // Error state for email field
  const [passwordError, setPasswordError] = useState(""); // Error state for password field
  const [success, setSuccess] = useState(""); // Success state for login success message
  const navigate=useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");

    // Reset error messages on form submit
    setEmailError("");
    setPasswordError("");
    setSuccess(""); // Reset success message

    // Simple form validation for empty fields
    if (!email) {
      setEmailError("Please Enter Your Email ID.");
    }
    if (!password) {
      setPasswordError("Please Enter Your Password.");
    }

    // If both fields are filled, show success message
    if (email && password) {
      //navigate("/dcc");
      
      setSuccess("Login successful!"); // Show success message
      onLoginSuccess(); // Trigger login success to update the state in App.js
      navigate('/dccpage');
      
    }
  };

  return (
    <Container component="main" maxWidth="xs" className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
      <Box sx={{ marginTop: 2 }} className="w-100">
        <div className="row">
          <div className="col-12 d-flex justify-content-center align-items-center">
            <Paper elevation={6} square sx={{ width: "100%", maxWidth: 400, padding: 3 }}>
              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Typography component="h1" variant="h5">
                  Sign in
                </Typography>
                {success && <div className="text-success mb-2">{success}</div>} {/* Display success message */}

                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    error={!!emailError} // Show error state for email
                    helperText={emailError} // Display the email error message
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    error={!!passwordError} // Show error state for password
                    helperText={passwordError} // Display the password error message
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onclick={handleSubmit}
                  >
                    Sign In
                  </Button>
                  <div className="row">
                    <div className="col-6">
                      <Link href="#" variant="body2">
                        Forgot password?
                      </Link>
                    </div>
                    <div className="col-6 text-end">
                      <Link href="#" variant="body2">
                        {"Sign Up"}
                      </Link>
                    </div>
                  </div>
                </Box>
              </Box>
            </Paper>
          </div>
        </div>
      </Box>
    </Container>
  );
}
