import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

function CityMaster() {
  const [cityName, setCityName] = useState("");
  const [cities, setCities] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editCityName, setEditCityName] = useState("");

  const apiUrl = 'https://api.unicaredev.in/api/schedule/CreatedSchedule'; // The API URL you provided

  // Handle form submission to add city
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (cityName) {
      const requestData = {
        param_1: cityName, // Send city name as param_1
      };

      try {
        const response = await axios.post(apiUrl, requestData, {
          headers: {
            'Content-Type': 'application/json',
          }
        });

        if (response.status === 200) {
          setCities([...cities, { name: cityName }]);
          setCityName(""); // Clear input field after submit
        } else {
          alert('Failed to create schedule. API returned an error!');
        }
      } catch (error) {
        alert('Failed to create schedule. Please try again!');
      }
    }
  };

  // Handle deleting a city
  const handleDelete = (index) => {
    setCities(cities.filter((_, i) => i !== index));
  };

  // Handle editing a city
  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditCityName(cities[index].name);
  };

  // Handle updating a city
  const handleUpdate = (index) => {
    const updatedCities = [...cities];
    updatedCities[index].name = editCityName;
    setCities(updatedCities);
    setEditingIndex(null);
    setEditCityName(""); // Clear edit input
  };

  return (
    <div className="container-fluid bg-light min-vh-100">
      <h4 className="text-center mt-4">City Master</h4>
      <p className="text-center">Add a new city here</p>

      {/* Form for adding new city */}
      <div className="row justify-content-center mb-4">
        <form onSubmit={handleSubmit} className="col-12 col-md-8 col-lg-6">
          <div className="input-group flex-column flex-sm-row align-items-sm-center">
            <div className="d-flex mb-3 w-100 w-sm-auto">
            <TextField
              label="City Name"
              variant="outlined"
              size="small"
              value={cityName}
              onChange={(e) => setCityName(e.target.value)}
              required
              className="w-100"
            />
            
            <Button
              variant="contained"
              color="primary"
              type="submit"
              
              className=" col-auto ms-sm-2"
              
              
            >
              Add City
            </Button>
          </div>
          </div>
        </form>
      </div>

      {/* Table to display cities */}
      <TableContainer component={Paper} style={{ marginTop: '20px' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Sl. No.</strong></TableCell>
              <TableCell><strong>City Name</strong></TableCell>
              <TableCell><strong>Actions</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cities.map((city, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>
                  {editingIndex === index ? (
                    <TextField
                      value={editCityName}
                      onChange={(e) => setEditCityName(e.target.value)}
                      size="small"
                      fullWidth
                    />
                  ) : (
                    city.name
                  )}
                </TableCell>
                <TableCell>
                  {editingIndex === index ? (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleUpdate(index)}
                      className="me-2 mb-2 mb-sm-0"
                    >
                      Update
                    </Button>
                  ) : (
                    <div className="d-flex flex-column flex-sm-row gap-2">
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => handleEdit(index)}
                        className="w-100 w-sm-auto mb-2 mb-sm-0"
                      >
                        Update
                      </Button>
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => handleDelete(index)}
                        className="w-100 w-sm-auto"
                      >
                        Delete
                      </Button>
                    </div>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default CityMaster;
