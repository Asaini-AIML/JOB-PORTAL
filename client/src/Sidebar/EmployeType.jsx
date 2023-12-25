import React from 'react'
import InputField from '../Component/InputField'

const EmployeType = ({handleChange}) => {
  return (
    <div>
    <h4 className="text-lg font-medium mb-2">Type Of Employee</h4>
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
        value="Full-time"
        tiltle=" Full-time"
        name="test"
      /></div>
      <div>
      <InputField
        handlechange={handleChange}
        value="Temporary"
        tiltle=" Temporary"
        name="test"
      /></div>
      <div>
       <InputField
        handlechange={handleChange}
        value="Part-time"
        tiltle=" Part-time"
        name="test"
      /></div>
     
    </div>
  </div>
  )
}

export default EmployeType