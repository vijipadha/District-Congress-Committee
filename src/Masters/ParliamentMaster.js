import React, { useState } from 'react';
import { TextField, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

function ParliamentMaster() {
  const [parliamentName, setParliamentName] = useState("");
  const [parliaments, setParliaments] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editParliamentName, setEditParliamentName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (parliamentName) {
      // Add new Parliament to the list
      setParliaments([...parliaments, { name: parliamentName }]);
      setParliamentName(""); // Reset input after submit
    }
  };

  const handleDelete = (index) => {
    // Remove Parliament from the list
    setParliaments(parliaments.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    // Set editing state
    setEditingIndex(index);
    setEditParliamentName(parliaments[index].name);
  };

  const handleUpdate = (index) => {
    // Update Parliament name
    const updatedParliaments = [...parliaments];
    updatedParliaments[index].name = editParliamentName;
    setParliaments(updatedParliaments);
    setEditingIndex(null);
    setEditParliamentName(""); // Clear edit input
  };

  return (
    <div className="container-fluid bg-light min-vh-100">
      <h4 className="text-center">Parliament</h4>
      <p className="text-center">Add a new Parliament here</p>

      {/* Form for adding new Parliament */}
      <div>
        <form onSubmit={handleSubmit}>
          <div className="input-group" style={{ display: 'flex', justifyContent: 'space-between' }}>
            <TextField 
              label="Parliament Name" 
              variant="outlined" 
              size="small"
              value={parliamentName}
              onChange={(e) => setParliamentName(e.target.value)} 
              required
              style={{ flexGrow: 1 }}
            />
            <Button 
              variant="contained" 
              color="primary" 
              type="submit" 
              style={{ marginLeft: '10px', alignSelf: 'center' }}
            >
              Add Parliament
            </Button>
          </div>
        </form>
      </div>

      {/* Table to display Parliaments */}
      <TableContainer component={Paper} style={{ marginTop: '20px' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Sl. No.</strong></TableCell>
              <TableCell><strong>Parliament Name</strong></TableCell>
              <TableCell><strong>Actions</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {parliaments.map((parliament, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>
                  {editingIndex === index ? (
                    <TextField 
                      value={editParliamentName}
                      onChange={(e) => setEditParliamentName(e.target.value)}
                      size="small"
                      fullWidth
                    />
                  ) : (
                    parliament.name
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

export default ParliamentMaster;