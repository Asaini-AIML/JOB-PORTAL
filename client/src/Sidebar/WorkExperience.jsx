import React from 'react'
import InputField from '../Component/InputField'
const WorkExperience = ({handleChange}) => {
  return (
    <div>
    <h4 className="text-lg font-medium mb-2">Work Experience</h4>
    <div >
      <label className="sidebar-lable-container">
        <input
          type="radio"
          name="test"
          id="test"
          value=""
          onChange={handleChange}
        />
        <span className="checkmark"></span>Any Experience
      </label>
      <div>
      <InputField
        handlechange={handleChange}
        value="Internship"
        tiltle=" Internship"
        name="test"
      /></div>
      <div>
       <InputField
        handlechange={handleChange}
        value="work remotely"
        tiltle=" Work Remotely"
        name="test"
      /></div>
     
    </div>
  </div>
  )
}

export default WorkExperience