import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const JobDetail = () => {
  const {id} = useParams();
  const [job,setJob]=useState([])
  useEffect(()=>{
        fetch(`http://localhost:3000/all-jobs/${id}`).then(res=>res.json()).then(data=>setJob(data))
  },[])
  const handleApply =async()=>{
       
  }
  return (
    <div className='max-w-screen-2xl container mx-mute xl:px-24 px-4'>
      <h2>JobDetail:{id}</h2>
      <h1>{job.jobTitle}</h1>
      <button className='bg-blue px-8 py-2 text-white ' onClick={handleApply}>Apply now</button>
    </div>
  )
}

export default JobDetail