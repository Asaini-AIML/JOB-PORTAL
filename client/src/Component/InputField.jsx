import React from 'react'

const InputField = ({handlechange,value,tiltle,name}) => {
  return (
    <label className='sidebar-lable-container'>
    <input type="radio" name={name}  value={value} onChange={handlechange} />
    <span className='checkmark'></span>{tiltle}
</label>
  )
}

export default InputField