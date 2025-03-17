import React, { useState } from 'react';
import { TextField, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

function DesignationMaster() {
  const [designationName, setDesignationName] = useState("");
  const [designations, setDesignations] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editDesignationName, setEditDesignationName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (designationName) {
      // Add new Designation to the list
      setDesignations([...designations, { name: designationName }]);
      setDesignationName(""); // Reset input after submit
    }
  };

  const handleDelete = (index) => {
    // Remove Designation from the list
    setDesignations(designations.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    // Set editing state
    setEditingIndex(index);
    setEditDesignationName(designations[index].name);
  };

  const handleUpdate = (index) => {
    // Update Designation name
    const updatedDesignations = [...designations];
    updatedDesignations[index].name = editDesignationName;
    setDesignations(updatedDesignations);
    setEditingIndex(null);
    setEditDesignationName(""); // Clear edit input
  };

  return (
    <div className="container-fluid bg-light min-vh-100">
      <h4 className="text-center">Designation</h4>
      <p className="text-center">Add a new Designation here</p>

      {/* Form for adding new Designation */}
      <div>
        <form onSubmit={handleSubmit}>
          <div className="input-group" style={{ display: 'flex', justifyContent: 'space-between' }}>
            <TextField 
              label="Designation Name" 
              variant="outlined" 
              size="small"
              value={designationName}
              onChange={(e) => setDesignationName(e.target.value)} 
              required
              style={{ flexGrow: 1 }}
            />
            <Button 
              variant="contained" 
              color="primary" 
              type="submit" 
              style={{ marginLeft: '10px', alignSelf: 'center' }}
            >
              Add Designation
            </Button>
          </div>
        </form>
      </div>

      {/* Table to display Designations */}
      <TableContainer component={Paper} style={{ marginTop: '20px' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Sl. No.</strong></TableCell>
              <TableCell><strong>Designation Name</strong></TableCell>
              <TableCell><strong>Actions</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {designations.map((designation, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>
                  {editingIndex === index ? (
                    <TextField 
                      value={editDesignationName}
                      onChange={(e) => setEditDesignationName(e.target.value)}
                      size="small"
                      fullWidth
                    />
                  ) : (
                    designation.name
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

export default DesignationMaster;