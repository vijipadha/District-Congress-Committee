import React, { useState } from 'react';
import { Container, TextField, MenuItem, Button, FormControl, InputLabel, Select, Typography, Card, CardContent, ThemeProvider, createTheme, Box } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',  // This will make the primary color blue
    },
  },
});

function DccPage() {
  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    boothNo: '',
    dob: '',
    gender: '',
    caste: '',
    mobileNo: '',
    email: '',
    dateOfApplication: '',
    aadharId: '',
    voterId: '',
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      photo: file,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const photoPreview = formData.photo ? URL.createObjectURL(formData.photo) : '';

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" className="mt-5">
        <Card>
          <CardContent>
            <Typography variant="h5" align="center" gutterBottom>
              District Congress Committee Form
            </Typography>
            <form onSubmit={handleSubmit}>
              <Box display="flex" flexWrap="wrap" gap={3}>
                {/* Name of the District Congress Committee */}
                <Box sx={{ flex: '1 1 45%' }}>
                  <TextField
                    label="Name of the District Congress Committee"
                    variant="outlined"
                    fullWidth
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Box>

                {/* Name of the Person */}
                <Box sx={{ flex: '1 1 45%' }}>
                  <TextField
                    label="Name of the Person"
                    variant="outlined"
                    fullWidth
                    name="personName"
                    value={formData.personName}
                    onChange={handleChange}
                    required
                  />
                </Box>

                {/* Designation */}
                <Box sx={{ flex: '1 1 45%' }}>
                  <FormControl fullWidth required>
                    <InputLabel>Designation</InputLabel>
                    <Select
                      name="designation"
                      value={formData.designation}
                      onChange={handleChange}
                      label="Designation"
                    >
                      <MenuItem value="President">President</MenuItem>
                      <MenuItem value="Vice President">Vice President</MenuItem>
                      <MenuItem value="Treasurer">Treasurer</MenuItem>
                      <MenuItem value="General Secretary">General Secretary</MenuItem>
                      <MenuItem value="Secretary">Secretary</MenuItem>
                      <MenuItem value="Executive Member">Executive Member</MenuItem>
                    </Select>
                  </FormControl>
                </Box>

                {/* Booth No */}
                <Box sx={{ flex: '1 1 45%' }}>
                  <TextField
                    label="Booth No"
                    variant="outlined"
                    fullWidth
                    name="boothNo"
                    type="number"
                    value={formData.boothNo}
                    onChange={handleChange}
                    required
                  />
                </Box>

                {/* Date of Birth */}
                <Box sx={{ flex: '1 1 45%' }}>
                  <TextField
                    label="Date of Birth"
                    variant="outlined"
                    fullWidth
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    required
                    InputLabelProps={{
                      shrink: true,// Ensures the label stays above the input field
                    }}
                  />
                </Box>

                {/* Gender (Radio Buttons) */}
                <Box sx={{ flex: '1 1 45%' }}>
                  <Typography variant="subtitle1">Gender</Typography>
                  <div className="d-flex justify-content-start">
                    <label className="me-3">
                      <input
                        type="radio"
                        name="gender"
                        value="Male"
                        checked={formData.gender === 'Male'}
                        onChange={handleChange}
                      />
                      Male
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="gender"
                        value="Female"
                        checked={formData.gender === 'Female'}
                        onChange={handleChange}
                      />
                      Female
                    </label>
                  </div>
                </Box>

                {/* Caste (Dropdown) */}
                <Box sx={{ flex: '1 1 45%' }}>
                  <FormControl fullWidth required>
                    <InputLabel>Caste</InputLabel>
                    <Select
                      name="caste"
                      value={formData.caste}
                      onChange={handleChange}
                      label="Caste"
                    >
                      <MenuItem value="General">General</MenuItem>
                      <MenuItem value="OBC">OBC</MenuItem>
                      <MenuItem value="SC">SC</MenuItem>
                      <MenuItem value="ST">ST</MenuItem>
                      <MenuItem value="Minority">Minority</MenuItem>
                    </Select>
                  </FormControl>
                </Box>

                {/* Mobile No */}
                <Box sx={{ flex: '1 1 45%' }}>
                  <TextField
                    label="Mobile No"
                    variant="outlined"
                    fullWidth
                    name="mobileNo"
                    value={formData.mobileNo}
                    onChange={handleChange}
                    required
                    pattern="[0-9]{10}"
                    maxLength="10"
                    title="Please enter a 10-digit mobile number."
                  />
                </Box>

                {/* Email ID */}
                <Box sx={{ flex: '1 1 45%' }}>
                  <TextField
                    label="Email ID"
                    variant="outlined"
                    fullWidth
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Box>

                {/* Date of Application */}
                <Box sx={{ flex: '1 1 45%' }}>
                  <TextField
                    label="Date of Application"
                    variant="outlined"
                    fullWidth
                    type="date"
                    name="dateOfApplication"
                    value={formData.dateOfApplication}
                    onChange={handleChange}
                    required
                    InputLabelProps={{
                      shrink: true,// Ensures the label stays above the input field
                    }}
                  />
                </Box>

                {/* Aadhar ID */}
                <Box sx={{ flex: '1 1 45%' }}>
                  <TextField
                    label="Aadhar ID"
                    variant="outlined"
                    fullWidth
                    name="aadharId"
                    value={formData.aadharId}
                    onChange={handleChange}
                    required
                    pattern="[0-9]{12}"
                    maxLength="12"
                    title="Aadhar ID must be 12 digits."
                  />
                </Box>

                {/* Voter ID */}
                <Box sx={{ flex: '1 1 45%' }}>
                  <TextField
                    label="Voter ID"
                    variant="outlined"
                    fullWidth
                    name="voterId"
                    value={formData.voterId}
                    onChange={handleChange}
                    required
                  />
                </Box>

                {/* Photo Upload */}
                <Box sx={{ flex: '1 1 45%' }}>
                  <Typography variant="subtitle1">Upload Photo</Typography>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="form-control"
                  />
                  {formData.photo && (
                    <img
                      src={photoPreview}
                      alt="Preview"
                      className="mt-3"
                      style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                    />
                  )}
                </Box>
              </Box>

              {/* Submit Button */}
              <div className="mt-3 text-center">
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  Submit
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </Container>
    </ThemeProvider>
  );
}

export default DccPage;
