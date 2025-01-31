import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

function CityMaster() {
  const [cityName, setCityName] = useState("");
  const [cities, setCities] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editCityName, setEditCityName] = useState("");

  const apiUrl = 'https://api.unicaredev.in/api/schedule/CreatedSchedule'; // The API URL you provided
  //const apiUrl = 'https://cors-anywhere.herokuapp.com/https://api.unicaredev.in/api/schedule/CreatedSchedule';


  // Handle form submission to add city
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (cityName) {
      // Prepare data to send to API
      const requestData = {
        param_1: cityName, // Send city name as param_1
        
      };
       // Log the request data before sending
    console.log("Sending request data:", requestData);

      try {
        // Send POST request to the API
        const response = await axios.post(apiUrl, requestData, {
          headers: {
            'Content-Type': 'application/json',
            // Add any additional headers, such as authentication tokens, if required
          }
        });

        console.log('Response from API:', response.data);

        // If the response status is successful, add city to the list
        if (response.status === 200) {
          setCities([...cities, { name: cityName }]);
          setCityName(""); // Clear input field after submit
        } else {
          alert('Failed to create schedule. API returned an error!');
        }
      } catch (error) {
        console.error('Error during API request:', error);

        // Additional error handling
        if (error.response) {
          // If the API returned an error response
          console.error('Response data:', error.response.data);
          console.error('Response status:', error.response.status);
        } else {
          // If no response was received, check the error message
          console.error('Error message:', error.message);
        }

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
      <h1 className="text-center">City</h1>
      <p className="text-center">Add a new city here</p>

      {/* Form for adding new city */}
      <div>
        <form onSubmit={handleSubmit}>
          <div className="input-group" style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div className="col-4"> {/* You can adjust this column size */}
              <TextField
                label="City Name"
                variant="outlined"
                size="small"
                value={cityName}
                onChange={(e) => setCityName(e.target.value)}
                required
                fullWidth
              />
            </div>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              style={{ marginRight: '270px', alignSelf: 'center' }}
            >
              Add City
            </Button>
          </div>
        </form>
      </div>

      {/* Table to display cities */}
      <TableContainer component={Paper} style={{ marginTop: '20px', width: '80%' }}>
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
                    >
                      Update
                    </Button>
                  ) : (
                    <>
                      <Button
                        variant="contained"
                        color="primary"
                        style={{ marginRight: '8px' }}
                        onClick={() => handleEdit(index)}
                      >
                        Update
                      </Button>
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => handleDelete(index)}
                      >
                        Delete
                      </Button>
                    </>
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
