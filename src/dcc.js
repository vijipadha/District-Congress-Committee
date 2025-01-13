import React, { useState } from "react";
import SideNav from "./SideNav";
import './Style.css';
function Dcc() {
    return (
    <div>
        <div className="row">
            <div className="col-md-6">
            <div className="form-group">
        <label htmlFor="First Name">First Name:</label>
        <input
          type="input"
          id="name"
          name="name"
          value={null}
          onChange={null}
          required
        />
      </div>
            </div>
        </div>
    </div>
    );
}
export default Dcc;