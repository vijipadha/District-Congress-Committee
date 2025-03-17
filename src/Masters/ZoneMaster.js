import React, { useState } from 'react';
import { TextField, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

function ZoneMaster() {
  const [zoneName, setZoneName] = useState("");
  const [zones, setZones] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editZoneName, setEditZoneName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (zoneName) {
      // Add new Zone to the list
      setZones([...zones, { name: zoneName }]);
      setZoneName(""); // Reset input after submit
    }
  };

  const handleDelete = (index) => {
    // Remove Zone from the list
    setZones(zones.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    // Set editing state
    setEditingIndex(index);
    setEditZoneName(zones[index].name);
  };

  const handleUpdate = (index) => {
    // Update Zone name
    const updatedZones = [...zones];
    updatedZones[index].name = editZoneName;
    setZones(updatedZones);
    setEditingIndex(null);
    setEditZoneName(""); // Clear edit input
  };

  return (
    <div className="container-fluid bg-light min-vh-100">
      <h4 className="text-center">Zone</h4>
      <p className="text-center">Add a new Zone here</p>

      {/* Form for adding new Zone */}
      <div>
        <form onSubmit={handleSubmit}>
          <div className="input-group" style={{ display: 'flex', justifyContent: 'space-between' }}>
            <TextField 
              label="Zone Name" 
              variant="outlined" 
              size="small"
              value={zoneName}
              onChange={(e) => setZoneName(e.target.value)} 
              required
              style={{ flexGrow: 1 }}
            />
            <Button 
              variant="contained" 
              color="primary" 
              type="submit" 
              style={{ marginLeft: '10px', alignSelf: 'center' }}
            >
              Add Zone
            </Button>
          </div>
        </form>
      </div>

      {/* Table to display Zones */}
      <TableContainer component={Paper} style={{ marginTop: '20px' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Sl. No.</strong></TableCell>
              <TableCell><strong>Zone Name</strong></TableCell>
              <TableCell><strong>Actions</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {zones.map((zone, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>
                  {editingIndex === index ? (
                    <TextField 
                      value={editZoneName}
                      onChange={(e) => setEditZoneName(e.target.value)}
                      size="small"
                      fullWidth
                    />
                  ) : (
                    zone.name
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

export default ZoneMaster;