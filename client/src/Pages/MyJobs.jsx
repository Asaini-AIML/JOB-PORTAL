import React, { useEffect, useState } from 'react'

const MyJobs = () => {
    // const email = "Nunuhaitera@gmail.com"
    const[jobs,setJobs] =useState([]);
    const[searchText,setSearchText] =useState("");
    const[isLoading,seIsLoading] =useState(true);

    useEffect(()=>{
        seIsLoading(true)
        fetch(`http://localhost:3000/myJobs/Nunuhaitera@gmail.com`).then(res => res.json()).then(data=>{
          setJobs(data)
        })
    },[])

    const handleSearch=()=>{
      const filtere = jobs.filter((job) => job.jobTitle.toLowerCase().indexOf(searchText.toLowerCase()) !== -1);
      console.log(filtere)
    }

    
  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
      <div className='my-jobs-container'>
             <h1 className='text-center p-4'>All My Jobs</h1>
             <div className='search-box p-2 text-center mb-2'>
              <input onChange={(e)=>setSearchText(e.target.value)} type="text" name='search' id='search' className='py-2 pl-3 border focus:outline-none lg:w-6/12 mb-4 w-full' />
              <button className='bg-blue text-white font-semibold px-8 py-2 rounded-sm mb-4' onClick={handleSearch}>Search</button>
             </div>
      </div>
      </div>
  )
}

export default MyJobs