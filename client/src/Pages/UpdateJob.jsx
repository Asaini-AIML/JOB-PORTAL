
import { useLoaderData,useParams } from 'react-router-dom';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import CreatableSelect from 'react-select/creatable';
import JobPosting from '../Sidebar/JobPosting';

const UpdateJob = () => {
  const { id } = useParams();
  const {_id,jobTitle,companyName,minPrice,maxPrice,salaryType,jobLocation,postingDate,experienceLevel,companyLogo,employementType,description,postedBy,skills} = useLoaderData();

  const [selectedOption, setSelectedOption] = useState(skills);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.skills = selectedOption;
    fetch(`http://localhost:3000/update-job/${id}`, {
      method: 'PATCH',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.acknowledged === true) {
          alert('Job updated Successfully');
          reset();
          setSelectedOption(null); // Reset selectedOption state
        } else {
          alert('Failed to post job. Please try again later.');
        }
      })
      .catch((error) => {
        console.error('Error posting job:', error);
        alert('Failed to post job. Please try again later.');
      });
  };
  
  const options = [
    { value: 'JavaScript', label: 'JavaScript' },
    { value: 'HTML', label: 'HTML' },
    { value: 'CSS', label: 'CSS' },
    { value: 'React', label: 'React' },
    { value: 'Node', label: 'Node' },
    { value: 'MongoDB', label: 'MongoDB' },
    { value: 'Python', label: 'Python' }
  ];
  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
        {/**form */}
        <div className='bg-[#faf8f8] py-10 px-4 lg:px-16'>
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-5' >
            {/**first row */}
            <div className='create-job-flex'>
                <div className='lg:w-1/2 w-full'>
                    <label className='block mb-2 text-lg'>Job Title</label>
                    <input type="text" defaultValue={jobTitle} {...register("jobTitle")} className='create-job-input'/>
                </div>
                <div className='lg:w-1/2 w-full'>
                    <label className='block mb-2 text-lg'>Company Name</label>
                    <input type="text" placeholder='Ex: Google' defaultValue={companyName} {...register("companyName")} className='create-job-input'/>
                </div>
            </div>
            {/**second row */}
            <div className='create-job-flex'>
                <div className='lg:w-1/2 w-full'>
                    <label className='block mb-2 text-lg'>Minimum salary</label>
                    <input type="text" placeholder='$20k' defaultValue={minPrice}{...register("minPrice")} className='create-job-input'/>
                </div>
                <div className='lg:w-1/2 w-full'>
                    <label className='block mb-2 text-lg'>Maximum Salary</label>
                    <input type="text" placeholder='$120k' defaultValue={maxPrice} {...register("maxPrice")} className='create-job-input'/>
                </div>
            </div>
            {/**3rd row */}
            <div className='create-job-flex'>
                <div className='lg:w-1/2 w-full'>
                    <label className='block mb-2 text-lg'>Salary Type</label>
                    <select {...register("salaryType")} className='create-job-input'>
        <option value={salaryType}>{salaryType}</option>
        <option value="Hourly">Hourly</option>
        <option value="Monthly">Monthly</option>
        <option value="Yearly">Yearly</option>
      </select>
                </div>
                <div className='lg:w-1/2 w-full'>
                    <label className='block mb-2 text-lg'>Job Location</label>
                    <input type="text" placeholder='Ex: London' defaultValue={jobLocation}{...register("jobLocation")} className='create-job-input'/>
                </div>
            </div>
         {/**4th row */}
         <div className='create-job-flex'>
         <div className='lg:w-1/2 w-full'>
                    <label className='block mb-2 text-lg'>Job Posting date</label>
                    <input type="Date" placeholder='Ex: 2023-10-28 'defaultValue={postingDate}{...register("postingDate")} className='create-job-input'/>
                </div>
                <div className='lg:w-1/2 w-full'>
                    <label className='block mb-2 text-lg'>Experience Level</label>
                    <select {...register("experienceLevel")} className='create-job-input'>
        <option value={experienceLevel}>{experienceLevel}</option>
        <option value="Any experience">Any experience</option>
        <option value="Intership">Intership</option>
        <option value="Work remotely">Work remotely</option>
      </select>
                </div>
                
            </div>
          {/**5th row */}
          <div>
          <label className='block mb-2 text-lg'>Required Skill Set</label>
           <CreatableSelect defaultInputValue={skills} onChange={setSelectedOption} options={option} isMulti className='create-job-input py-4'/>
          </div>
           {/**6th row */}
           <div className='create-job-flex'>
         <div className='lg:w-1/2 w-full'>
                    <label className='block mb-2 text-lg'>Company Logo</label>
                    <input type="url" placeholder='Paste your company logo Url: https://x.com ' defaultInputValue={companyLogo} {...register("companyLogo")} className='create-job-input'/>
                </div>
                <div className='lg:w-1/2 w-full'>
                    <label className='block mb-2 text-lg'>Employement Type</label>
                    <select {...register("experienceLevel")} className='create-job-input'>
        <option value={employementType}>{employementType}</option>
        <option value="Full-time">Full-Time</option>
        <option value="Part-time">Part-Time</option>
        <option value="Temporary">Temporary</option>
      </select>
                </div>
                
            </div>
            {/**7th row */}
            <div className='w-full '>
            <label className='block mb-2 text-lg'>Job Description</label>
            <textarea {...register("description")} 
            rows={6}
            defaultInputValue={description}
            placeholder='Enter the description'
            className='w-full pl-3 py-1.5 focus:outline-none' />
            </div>
            {/**las row */}
            <div className='w-full'>
            <label className='block mb-2 text-lg'>Job Posted By</label>
            <input type="email" placeholder='your email'defaultInputValue={postedBy} {...register("PostedBy")} className='create-job-input'/>
            </div>
      <input type="submit" className='block mt-12 bg-blue text-white font-semibold px-8 py-2 rounded-sm cursor-pointer' />
    </form>

        </div>
    </div>
  )
}

export default UpdateJob