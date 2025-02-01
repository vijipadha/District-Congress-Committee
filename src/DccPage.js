import React, { useState } from 'react';
import { Container, TextField, MenuItem, Button, Select, Typography, Card, CardContent, ThemeProvider, createTheme } from '@mui/material';
import axios from 'axios';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',  // This will make the primary color blue
    },
  },
});
const selectDesigConfig = {
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
    { value: "New Member Enroll", label: "New Member Enroll" },
  ],
};
const selectCasteConfig = {
  label: "Caste",
  fullWidth: true,
  name: "caste",
  required: true,
  options: [
    { value: "Caste", label: "Caste" },
    { value: "General", label: "General" },
    { value: "BC", label: "BC" },
    { value: "MBC", label: "MBC" },
    { value: "BCM", label: "BCM" },
    { value: "SC", label: "SC" },
    { value: "ST", label: "ST" },
    { value: "DC", label: "DC" },
    { value: "Others", label: "Others" },
    

  ],
};

function DccPage() {
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the data to be sent to the API
    const requestData = {
      name: formData.name,
      personName: formData.personName,
      designation: designation, // from the select dropdown
      boothNo: formData.boothNo,
      dob: formData.dob,
      gender: formData.gender,
      caste: caste, // from the select dropdown
      mobileNo: formData.mobileNo,
      email: formData.email,
      dateOfApplication: new Date().toISOString(), // Example, you can adjust this to the correct value
      aadharId: formData.aadharId,
      voterId: formData.voterId,
      photo: formData.photo ? formData.photo.name : '', // If you want to send the photo file name
    };

    // API request URL (this should be the correct URL for your API endpoint)
    const apiUrl = 'http://api.unicaredev.in/api/schedule/CreatedSchedule';

    try {
      // Send POST request to the API
      const response = await axios.post(apiUrl, requestData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('Response from API:', response.data);

      // Handle success (e.g., show a success message, clear form, etc.)
      alert('Form submitted successfully!');
      setFormData({ // Clear the form on success
        nameCity: '',
        nameCorporation: '',
        nameZone:'',
        nameParliament:'',
        nameAssembly:'',
        personName:'',
        aadharId: '',
        voterId: '',
        voterSno:'',
        boothNo: '',
        mobileNo: '',
        email: '',
        dob: '',
        designation: '',
        gender: '',
        caste: '',
        photo: null,
       
       
       
        
      });
    } catch (error) {
      console.error('Error during API request:', error);
      alert('Failed to submit the form. Please try again!');
    }
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
                {/* Name of the City */}
                <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                  <TextField
                    label="Name of the City"
                    variant="outlined"
                    fullWidth
                    name="nameCity"
                    value={formData.nameCity}
                    onChange={handleChange}
                    required
                  />
                </div>
                {/* Corporation */}
                <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                  <TextField
                    label="Corporation"
                    variant="outlined"
                    fullWidth
                    name="nameCorporation"
                    value={formData.Corporation}
                    onChange={handleChange}
                    required
                  />
                </div>
                {/* Name of the Zone */}
                <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                  <TextField
                    label="Name of the Zone"
                    variant="outlined"
                    fullWidth
                    name="nameZone"
                    value={formData.nameZone}
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
                    name="nameParliament"
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



                {/* Name  */}
                <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                  <TextField
                    label="Name"
                    variant="outlined"
                    fullWidth
                    name="personName"
                    value={formData.personName}
                    onChange={handleChange}
                    required
                  />
                </div>
                {/* Aadhar ID  */}
                <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                  <TextField
                    label="Aadhar ID"
                    variant="outlined"
                    fullWidth
                    name="aadharId"
                    type="number"
                    value={formData.aadharId}
                    onChange={handleChange}
                    required
                    inputProps={{ pattern: '[0-9]*' }}  
                  />
                </div>
                {/* Voter ID  */}
                <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                  <TextField
                    label="Voter ID"
                    variant="outlined"
                    fullWidth
                    name="voterId"
                    value={formData.voterId}
                    onChange={handleChange}
                    required
                    type="number"
                  />
                </div>
                {/* Voter's Serial Number  */}
                <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                  <TextField
                    label="Voter's Serial Number"
                    variant="outlined"
                    fullWidth
                    name="voterSno"
                    value={formData.voterSno}
                    onChange={handleChange}
                    required
                    type="number"
                  />
                </div>
                {/* Ward Number  */}
                <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                  <TextField
                    label="Ward No."
                    variant="outlined"
                    fullWidth
                    name="wardNo"
                    value={formData.wardNo}
                    onChange={handleChange}
                    required
                    type="number"
                  />
                </div>
                {/* Booth Number  */}
                <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                  <TextField
                    label="Booth No."
                    variant="outlined"
                    fullWidth
                    name="boothNo"
                    value={formData.boothNo}
                    onChange={handleChange}
                    required
                    type="number"
                  />
                </div>
                {/* Mobile Number  */}
                <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                  <TextField
                    label="Mobile Number"
                    variant="outlined"
                    fullWidth
                    name="mobileNo"
                    value={formData.mobileNo}
                    onChange={handleChange}
                    required
                    type="number"
                  />
                </div>
                {/* Email ID  */}
                <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                  <TextField
                    label="Email ID"
                    variant="outlined"
                    fullWidth
                    name="email"
                    value={formData.email}
                    onChange={handleChange}

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






                {/* Designation */}
                <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                  {/* <InputLabel id={`${selectConfig.name}-label`}>{selectConfig.label}</InputLabel> */}
                  
                  <Select
                    fullWidth
                    labelId={`${selectDesigConfig.name}-label`}
                    name={selectDesigConfig.name}
                    value={designation} // Static binding to the local state
                    onChange={handleChangeSelect} // Static handler for local state update
                    required
                  >
                    {selectDesigConfig.options.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </Select>
                </div>
                {/* Gender (Radio Buttons) */}
                <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                  <Typography variant="subtitle1">Gender<span>*</span></Typography>
                  <div className="d-flex justify-content-start">
                    <label className="me-2">
                      <input
                        type="radio"
                        name="gender"
                        value="Male"
                        checked={formData.gender === 'Male'}
                        onChange={handleChange}
                        required
                      />
                      <span className="ms-1">Male</span>
                    </label>
                    <label className="me-2">
                      <input
                        type="radio"
                        name="gender"
                        value="Female"
                        checked={formData.gender === 'Female'}
                        onChange={handleChange}
                        required
                      />
                      <span className="ms-1">Female</span>
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="gender"
                        value="Others"
                        checked={formData.gender === 'Others'}
                        onChange={handleChange}
                        required
                      />
                      <span className="ms-1">Others</span>
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

export default DccPage;
