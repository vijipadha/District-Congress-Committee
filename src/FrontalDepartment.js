import React, { useState } from 'react';
import './DccPage.css'; // Make sure to import the CSS

function FrontalDepartment() {
  // State to hold form data
  const [formData, setFormData] = useState({
    name: '',
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
    photo:null,
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  // Handle file upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      photo: file,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic, e.g., logging the form data
    console.log('Form submitted:', formData);
  };
   // Preview image if photo is uploaded
   const photoPreview = formData.photo ? URL.createObjectURL(formData.photo) : '';


  return (
    <div className="dcc">
      <h2>Frontal Organisation Form</h2>
      <form onSubmit={handleSubmit} className='dcc-page'>
        {/* Name of the District Congress Committee */}
        <div className='block-form'>
          <label htmlFor="name">Name of the District Congress Committee:</label>
          <input
            type="text"
            id="namedcc"
            name="namedcc"
            value={formData.namedcc}
            onChange={handleChange}
            required
          />
        </div>
        {/* Name of the Frontal Department/Department/Cells  */}
        <div className='block-form'>
          <label htmlFor="name">Name of the Frontal Department/Department/Cells </label>
          <input
            type="text"
            id="nameFDC"
            name="nameFDC"
            value={formData.nameFDC}
            onChange={handleChange}
            required
          />
        </div>
        {/* Name of the Frontal Department/Department/Cells Chief */}
        <div className='block-form'>
          <label htmlFor="name">Name of the Frontal Department/Department/Cells Chief</label>
          <input
            type="text"
            id="nameFDCChief"
            name="nameFDCChief"
            value={formData.nameFDCChief}
            onChange={handleChange}
            required
          />
        </div>
        

        {/* Designation */}
        <div className='dcc-form'>
          <label htmlFor="designation">Designation:</label>
          <select
            id="designation"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            required
          >
            <option value="">Select Designation</option>
            <option value="President">President</option>
            <option value="Vice President">Vice President</option>
            <option value="Treasurer">Treasurer</option>
            <option value="General Secretary">General Secretary</option>
            <option value="Secretary">Secretary</option>
            <option value="Executive Member">Executive Member</option>
          </select>
        </div>

        {/* Booth No */}
        <div className='dcc-form'>
          <label htmlFor="boothNo">Booth No:</label>
          <input
            type="number"
            id="boothNo"
            name="boothNo"
            value={formData.boothNo}
            onChange={handleChange}
            required
          />
        </div>

        {/* Date of Birth */}
        <div className='dcc-form'>
          <label htmlFor="dob">Date of Birth:</label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />
        </div>

        {/* Gender (Radio Buttons) */}
        <div className='dcc-form'>
        <div className="gender-wrapper">
          <label>Gender:</label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={formData.gender === 'Male'}
              onChange={handleChange}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={formData.gender === 'Female'}
              onChange={handleChange}
            />
            Female
          </label>
          </div>
        </div>

        {/* Caste (Dropdown) */}
        <div className='dcc-form'>
          <label htmlFor="caste">Caste:</label>
          <select
            id="caste"
            name="caste"
            value={formData.caste}
            onChange={handleChange}
            required
          >
            <option value="">Select Caste</option>
            <option value="General">General</option>
            <option value="OBC">OBC</option>
            <option value="SC">SC</option>
            <option value="ST">ST</option>
            <option value="Minority">Minority</option>
          </select>
        </div>

        {/* Mobile No */}
        <div className='dcc-form'>
          <label htmlFor="mobileNo">Mobile No:</label>
          <input
            type="text"
            id="mobileNo"
            name="mobileNo"
            value={formData.mobileNo}
            onChange={handleChange}
            required
            pattern="[0-9]{10}"  // Ensuring 10-digit input
            maxLength="10"
            title="Please enter a 10-digit mobile number."
          />
        </div>

        {/* Email ID */}
        <div className='dcc-form'>
          <label htmlFor="email">Email ID:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Date of Application */}
        <div className='dcc-form'>
          <label htmlFor="dateOfApplication">Date of Application:</label>
          <input
            type="date"
            id="dateOfApplication"
            name="dateOfApplication"
            value={formData.dateOfApplication}
            onChange={handleChange}
            required
          />
        </div>

        {/* Aadhar ID */}
        <div className='dcc-form'>
          <label htmlFor="aadharId">Aadhar ID:</label>
          <input
            type="text"
            id="aadharId"
            name="aadharId"
            value={formData.aadharId}
            onChange={handleChange}
            required
            pattern="[0-9]{12}" // Aadhar ID is a 12-digit number
            maxLength="12"
            title="Aadhar ID must be 12 digits."
          />
        </div>

        {/* Voter ID */}
        <div className='dcc-form'>
          <label htmlFor="voterId">Voter ID:</label>
          <input
            type="text"
            id="voterId"
            name="voterId"
            value={formData.voterId}
            onChange={handleChange}
            required
          />
        </div>
        {/* Photo Upload */}
        <div className="photo-upload">
          <label htmlFor="photo">Upload Photo:</label>
          <input
            type="file"
            id="photo"
            name="photo"
            accept="image/*"
            onChange={handleFileChange}
          />
          {formData.photo && (
            <img
              src={photoPreview}
              alt="Preview"
              className="photo-preview"
              width='150px'
             
            />
          )}
        </div>

        {/* Submit Button */}
        <div style={{ gridColumn: 'span 2' }}>
          <button type="submit" className='btn'>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default FrontalDepartment;
