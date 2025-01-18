import React, { useState } from 'react';
import { Container, TextField, MenuItem, Button, Select, Typography, Card, CardContent, ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',  // This will make the primary color blue
    },
  },
});
const  selectDesigConfig = {
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
const  selectCasteConfig = {
  label: "Caste",
  fullWidth: true,
  name: "caste",
  required: true,
  options: [
    { value: "Caste", label: "Caste" },
    { value: "General", label: "General" },
    { value: "OBC", label: "OBC" },
    { value: "SC", label: "SC" },
    { value: "ST", label: "ST" },
    { value: "Minority", label: "Minority" },
    
  ],
};

function Town() {
  
  // Separate state for designation and caste
        const [designation, setDesignation] = useState("Designation");
        const [caste, setCaste] = useState("Caste");
      
        const handleChangeSelect = (event) => {
          const { name, value } = event.target;
          if (name === "designation") {
            setDesignation(value);
          } else if (name === "caste") {
            setCaste(value);
          }
        };
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
              Town Committee Form
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
                {/* Name of the Parliament */}
                <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                  <TextField
                    label="Name of the Parliament"
                    variant="outlined"
                    fullWidth
                    name="name"
                    value={formData.nameParliament}
                    onChange={handleChange}
                    required
                  />
                </div>
                {/* Name of the Assembly */}
                <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                  <TextField
                    label="Name of the Assembly"
                    variant="outlined"
                    fullWidth
                    name="name"
                    value={formData.nameAssembly}
                    onChange={handleChange}
                    required
                  />
                </div>
                {/* Name of the Town */}
                <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                  <TextField
                    label="Name of the Town"
                    variant="outlined"
                    fullWidth
                    name="name"
                    value={formData.nameTown}
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
                                                                {/* <InputLabel id={`${selectConfig.name}-label`}>{selectConfig.label}</InputLabel> */}
                                                                <Select
                                                                fullWidth
                                                        labelId={`${selectDesigConfig.name}-label`}
                                                        name={selectDesigConfig.name}
                                                        value={designation} // Static binding to the local state
                                                        onChange={handleChangeSelect} // Static handler for local state update
                                                      >
                                                        {selectDesigConfig.options.map((option) => (
                                                          <MenuItem key={option.value} value={option.value}>
                                                            {option.label}
                                                          </MenuItem>
                                                        ))}
                                                     </Select>
                                                     </div>
                {/* <div className="col-12 col-sm-6 col-md-6 col-lg-4">
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
                </div> */}

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
                <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                  <Typography variant="subtitle1">Gender</Typography>
                  <div className="d-flex justify-content-start">
                    <label className="me-2">
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
                    </label>
                  </div>
                </div>

                {/* Caste (Dropdown) */}
                 <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                                                                <Select
                                                                fullWidth
                                                        labelId={`${selectCasteConfig.name}-label`}
                                                        name={selectCasteConfig.name}
                                                        value={caste} // Static binding to the local state
                                                        onChange={handleChangeSelect} // Static handler for local state update
                                                      >
                                                        {selectCasteConfig.options.map((option) => (
                                                          <MenuItem key={option.value} value={option.value}>
                                                            {option.label}
                                                          </MenuItem>
                                                        ))}
                                                     </Select>
                                                     </div>
                {/* <div className="col-12 col-sm-6 col-md-6 col-lg-4">
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
                </div> */}

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

export default Town;
