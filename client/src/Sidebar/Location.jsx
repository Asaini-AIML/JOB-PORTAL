import React from "react";
import InputField from "../Component/InputField";

const Location = ({ handleChange }) => {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Location</h4>
      <div >
        <label className="sidebar-lable-container">
          <input
            type="radio"
            name="test"
            id="test"
            value=""
            onChange={handleChange}
          />
          <span className="checkmark"></span> All
        </label>
        <div>
        <InputField
          handlechange={handleChange}
          value="London"
          tiltle=" London"
          name="test"
        /></div>
        <div>
         <InputField
          handlechange={handleChange}
          value="seattle"
          tiltle=" Seattle"
          name="test"
        /></div>
        <div>
         <InputField
          handlechange={handleChange}
          value="mardid"
          tiltle=" Mardid"
          name="test"
        /></div>
        <div>
         <InputField
          handlechange={handleChange}
          value="boston"
          tiltle=" Boston"
          name="test"
        /></div>
      </div>
    </div>
  );
};

export default Location;
