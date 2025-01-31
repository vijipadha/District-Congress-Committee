import React, { useState } from 'react';
import { TextField, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

function CorporationMaster() {
  const [corporationName, setCorporationName] = useState("");
  const [corporations, setCorporations] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editCorporationName, setEditCorporationName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (corporationName) {
      // Add new Corporation to the list
      setCorporations([...corporations, { name: corporationName }]);
      setCorporationName(""); // Reset input after submit
    }
  };

  const handleDelete = (index) => {
    // Remove Corporation from the list
    setCorporations(corporations.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    // Set editing state
    setEditingIndex(index);
    setEditCorporationName(corporations[index].name);
  };

  const handleUpdate = (index) => {
    // Update Corporation name
    const updatedCorporations = [...corporations];
    updatedCorporations[index].name = editCorporationName;
    setCorporations(updatedCorporations);
    setEditingIndex(null);
    setEditCorporationName(""); // Clear edit input
  };

  return (
    <div className="container-fluid bg-light min-vh-100">
      <h1 className="text-center">City</h1>
      <p className="text-center">Add a new Corporation here</p>

      {/* Form for adding new Corporation */}
      <div>
        <form onSubmit={handleSubmit}>
          <div className="input-group" style={{ display: 'flex', justifyContent: 'space-between' }}>
            <TextField 
              label="Corporation Name" 
              variant="outlined" 
              size="small"
              value={corporationName}
              onChange={(e) => setCorporationName(e.target.value)} 
              required
              style={{ flexGrow: 1 }}
            />
            <Button 
              variant="contained" 
              color="primary" 
              type="submit" 
              style={{ marginLeft: '10px', alignSelf: 'center' }}
            >
              Add City
            </Button>
          </div>
        </form>
      </div>

      {/* Table to display Corporations */}
      <TableContainer component={Paper} style={{ marginTop: '20px' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Sl. No.</strong></TableCell>
              <TableCell><strong>Corporation Name</strong></TableCell>
              <TableCell><strong>Actions</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {corporations.map((city, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>
                  {editingIndex === index ? (
                    <TextField 
                      value={editCorporationName}
                      onChange={(e) => setEditCorporationName(e.target.value)}
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

export default CorporationMaster;
