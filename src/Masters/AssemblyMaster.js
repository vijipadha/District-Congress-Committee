import React, { useState } from 'react';
import { TextField, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

function AssemblyMaster() {
  const [assemblyName, setAssemblyName] = useState("");
  const [assemblies, setAssemblies] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editAssemblyName, setEditAssemblyName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (assemblyName) {
      // Add new Assembly to the list
      setAssemblies([...assemblies, { name: assemblyName }]);
      setAssemblyName(""); // Reset input after submit
    }
  };

  const handleDelete = (index) => {
    // Remove Assembly from the list
    setAssemblies(assemblies.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    // Set editing state
    setEditingIndex(index);
    setEditAssemblyName(assemblies[index].name);
  };

  const handleUpdate = (index) => {
    // Update Assembly name
    const updatedAssemblies = [...assemblies];
    updatedAssemblies[index].name = editAssemblyName;
    setAssemblies(updatedAssemblies);
    setEditingIndex(null);
    setEditAssemblyName(""); // Clear edit input
  };

  return (
    <div className="container-fluid bg-light min-vh-100">
      <h4 className="text-center">Assembly</h4>
      <p className="text-center">Add a new Assembly here</p>

      {/* Form for adding new Assembly */}
      <div>
        <form onSubmit={handleSubmit}>
          <div className="input-group" style={{ display: 'flex', justifyContent: 'space-between' }}>
            <TextField 
              label="Assembly Name" 
              variant="outlined" 
              size="small"
              value={assemblyName}
              onChange={(e) => setAssemblyName(e.target.value)} 
              required
              style={{ flexGrow: 1 }}
            />
            <Button 
              variant="contained" 
              color="primary" 
              type="submit" 
              style={{ marginLeft: '10px', alignSelf: 'center' }}
            >
              Add Assembly
            </Button>
          </div>
        </form>
      </div>

      {/* Table to display Assemblies */}
      <TableContainer component={Paper} style={{ marginTop: '20px' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Sl. No.</strong></TableCell>
              <TableCell><strong>Assembly Name</strong></TableCell>
              <TableCell><strong>Actions</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {assemblies.map((assembly, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>
                  {editingIndex === index ? (
                    <TextField 
                      value={editAssemblyName}
                      onChange={(e) => setEditAssemblyName(e.target.value)}
                      size="small"
                      fullWidth
                    />
                  ) : (
                    assembly.name
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

export default AssemblyMaster;