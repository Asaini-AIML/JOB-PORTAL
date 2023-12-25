import React from 'react';
import Button from './Button';
import InputField from "../Component/InputField";
const Salary = ({ handleChange, handleClick }) => {
  return (
    <div>
      <h4 className='text-lg font-medium mb-2'>Salary</h4>
      <div className='mb-4'>
        <Button onClickHandler={handleClick} value="" title="Hourly" />
        <Button onClickHandler={handleClick} value="Monthly" title="Monthly" />
        <Button onClickHandler={handleClick} value="Yearly" title="Yearly" />
      </div>
      <div>
      <label className="sidebar-lable-container">
          <input
            type="radio"
            name="test"
            id="test"
            value=""
            onChange={handleChange}
          />
          <span className="checkmark"></span>All
        </label>
        <div>
        <InputField
          handlechange={handleChange}
          value={30}
          tiltle=" < 30000k"
          name="test2"
        /></div>
        <div>
        <InputField
          handlechange={handleChange}
          value={50}
          tiltle=" < 50000k"
          name="test2"
        /></div>
        <div>
        <InputField
          handlechange={handleChange}
          value={80}
          tiltle=" < 80000k"
          name="test2"
        /></div>
        <div>
        <InputField
          handlechange={handleChange}
          value={100}
          tiltle=" < 100000k"
          name="test2"
        /></div>
        
      </div>
    </div>
  );
};

export default Salary;
