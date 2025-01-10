import React, { useState } from 'react';
import { Container, TextField, MenuItem, Button, Select, Typography, Card, CardContent, ThemeProvider, createTheme } from '@mui/material';

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
              <div className="row g-3">
                {/* Name of the District Congress Committee */}
                <div className="col-12 col-md-6">
                  <TextField
                    label="Name of the District Congress Committee"
                    variant="outlined"
                    fullWidth
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Name of the Person */}
                <div className="col-12 col-md-6">
                  <TextField
                    label="Name of the Person"
                    variant="outlined"
                    fullWidth
                    name="personName"
                    value={formData.personName}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Designation */}
                <div className="col-12 col-md-6">
                  <Select
                    label="Designation"
                    fullWidth
                    name="designation"
                    value={formData.designation}
                    onChange={handleChange}
                    required
                  >
                    <MenuItem value="President">President</MenuItem>
                    <MenuItem value="Vice President">Vice President</MenuItem>
                    <MenuItem value="Treasurer">Treasurer</MenuItem>
                    <MenuItem value="General Secretary">General Secretary</MenuItem>
                    <MenuItem value="Secretary">Secretary</MenuItem>
                    <MenuItem value="Executive Member">Executive Member</MenuItem>
                  </Select>
                </div>

                {/* Booth No */}
                <div className="col-12 col-md-6">
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
                </div>

                {/* Date of Birth */}
                <div className="col-12 col-md-6">
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
                      shrink: true, // Ensures the label stays above the input field
                    }}
                  />
                </div>

                {/* Gender (Radio Buttons) */}
                <div className="col-12 col-md-6">
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
                </div>

                {/* Caste (Dropdown) */}
                <div className="col-12 col-md-6">
                  <Select
                    label="Caste"
                    fullWidth
                    name="caste"
                    value={formData.caste}
                    onChange={handleChange}
                    required
                  >
                    <MenuItem value="General">General</MenuItem>
                    <MenuItem value="OBC">OBC</MenuItem>
                    <MenuItem value="SC">SC</MenuItem>
                    <MenuItem value="ST">ST</MenuItem>
                    <MenuItem value="Minority">Minority</MenuItem>
                  </Select>
                </div>

                {/* Mobile No */}
                <div className="col-12 col-md-6">
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
                </div>

                {/* Email ID */}
                <div className="col-12 col-md-6">
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
                </div>

                {/* Date of Application */}
                <div className="col-12 col-md-6">
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
                      shrink: true, // Ensures the label stays above the input field
                    }}
                  />
                </div>

                {/* Aadhar ID */}
                <div className="col-12 col-md-6">
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
                </div>

                {/* Voter ID */}
                <div className="col-12 col-md-6">
                  <TextField
                    label="Voter ID"
                    variant="outlined"
                    fullWidth
                    name="voterId"
                    value={formData.voterId}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Photo Upload */}
                <div className="col-12 col-md-6">
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
                </div>
              </div>

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
