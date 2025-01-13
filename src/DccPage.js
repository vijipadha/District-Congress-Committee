import React, { useState } from 'react';
import { Container, TextField, InputLabel, MenuItem, Button, Select, Typography, Card, CardContent, ThemeProvider, createTheme } from '@mui/material';
import { FormControlLabel, Radio } from '@mui/material';
import './Style.css';
import './App.css';
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',  // This will make the primary color blue
    },
  },
});
const  selectConfig = {
  label: "Designation",
  fullWidth: true,
  name: "designation",
  required: true,
  options: [
    { value: "Designation", label: "Designation" },
    { value: "President", label: "President" },
    { value: "Vice President", label: "Vice President" },
    { value: "Treasurer", label: "Treasurer" },
    { value: "General Secretary", label: "General Secretary" },
    { value: "Secretary", label: "Secretary" },
    { value: "Executive Member", label: "Executive Member" },
  ],
};


function DccPage() {
 
  const  generalConfig = {
    label: "General",
    fullWidth: true,
    name: "general",
    required: true,
    options: [
      { value: "General", label: "General" },
      { value: "OBC", label: "OBC" },
      { value: "SC", label: "SC" },
      { value: "ST", label: "ST" },
      { value: "Minority", label: "Minority" },
    
    ],
  };
  const [general, setGeneral] = useState("General");
  const handleGeneralChange = (event) => {
    setGeneral(event.target.value);
  };
  const handleChangeselect = (event) => {
    setValue(event.target.value); // Update the local state
  };
  
  const [value, setValue] = useState("Designation");
  const [formData, setFormData] = useState({
    name: '',
    personName: '',
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
                <div className="col-12 col-sm-6 col-md-6 col-lg-4">
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
                <div className="col-12 col-sm-6 col-md-6 col-lg-4">
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
                <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                <Select
                fullWidth
        labelId={`${selectConfig.name}-label`}
        name={selectConfig.name}
        value={value} // Static binding to the local state
        onChange={handleChangeselect} // Static handler for local state update
      >
        {selectConfig.options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
     </Select>
              {/*      <Select
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
                  </Select> */}
                </div>

                {/* Booth No */}
                <div className="col-12 col-sm-6 col-md-6 col-lg-4">
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
                <div className="col-12 col-sm-6 col-md-6 col-lg-4">
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
                <div className="col-12 col-sm-6 col-md-6 col-lg-4 d-flex align-items-center">
                  <Typography variant="subtitle1">Gender</Typography>
                  <div className="d-flex justify-content-start">
                  <FormControlLabel value="female" control={<Radio />} label="Female" />
                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                    {/* <label className="me-2">
                      <input
                        type="radio"
                        name="gender"
                        value="Male"
                        checked={formData.gender === 'Male'}
                        onChange={handleChange}
                      />
                      <span className="ms-1">Male</span>
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="gender"
                        value="Female"
                        checked={formData.gender === 'Female'}
                        onChange={handleChange}
                      />
                      <span className="ms-1">Female</span>
                    </label> */}
                  </div>
                </div>

                {/* Caste (Dropdown) */}
                <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                <Select
                fullWidth
        labelId={`${generalConfig.name}-label`}
        name={generalConfig.name}
        value={general} // Static binding to the local state
        onChange={handleGeneralChange} // Static handler for local state update
      >
        {generalConfig.options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
     </Select>
                  {/* <Select
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
                  </Select> */}
                </div>

                {/* Mobile No */}
                <div className="col-12 col-sm-6 col-md-6 col-lg-4">
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
                <div className="col-12 col-sm-6 col-md-6 col-lg-4">
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
                <div className="col-12 col-sm-6 col-md-6 col-lg-4">
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
                      shrink: true,
                    }}
                  />
                </div>

                {/* Aadhar ID */}
                <div className="col-12 col-sm-6 col-md-6 col-lg-4">
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
                <div className="col-12 col-sm-6 col-md-6 col-lg-4">
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
                <div className="col-12 col-sm-6 col-md-6 col-lg-4">
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
              <div className="mt-3 text-center sub-btn">
                <Button className='sub-btn'
                  type="submit"               
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
