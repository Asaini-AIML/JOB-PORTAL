import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MyJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [isLoading, setIsLoading] = useState(true);
        //set current page
        const [currentPage,setCurrentPage]=useState(1);
        const itemPerPage=4;
    useEffect(() => {
        setIsLoading(true);
        fetch(`http://localhost:3000/all-jobs`)
            .then(res => res.json())
            .then(data => {
                setJobs(data);
                setIsLoading(false); // Set loading state to false after fetching data
            })
            .catch(error => {
                console.error('Error fetching jobs:', error);
                setIsLoading(false); // Set loading state to false on error as well
            });
    }, [searchText]);
    //pageination
    const indexOfLastItem=currentPage*itemPerPage;
    const indexOfFirstItem=indexOfLastItem-itemPerPage;
    const currentJobs=jobs.slice(indexOfFirstItem,indexOfLastItem)
    //next button and prev buttton
    const nextPage=()=>{
        if(indexOfLastItem<jobs.length){
            setCurrentPage(currentPage+1)
        }
    }
    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1); // Corrected this line
        }
    }
    
    const handleSearch = () => {
        const filteredJobs = jobs.filter(job => job.jobTitle.toLowerCase().includes(searchText.toLowerCase()));
        setJobs(filteredJobs);
    };

    const handleDelete = (id) => {
        // console.log('Deleting job with id:', id)
        // Implement logic to delete job from server and update UI
        fetch(`http://localhost:3000/job/${id}`,{
          method: "DELETE"
        }).then((res)=>res.json).then((data)=>{
          if(data.acknowledged ===true){
            alert("Job Deleted Succesfully||")
        }
        });
    };

    return (
        <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
            <div className='my-jobs-container'>
                <h1 className='text-center p-4'>All My Jobs</h1>
                <div className='search-box p-2 text-center mb-2'>
                    <input onChange={(e) => setSearchText(e.target.value)} type="text" name='search' id='search' className='py-2 pl-3 border focus:outline-none lg:w-6/12 mb-4 w-full' />
                    <button className='bg-blue text-white font-semibold px-8 py-2 rounded-sm mb-4' onClick={handleSearch}>Search</button>
                </div>
            </div>

            <section className="py-1 bg-blueGray-50">
                <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-5">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
                        <div className="rounded-t mb-0 px-4 py-3 border-0">
                            <div className="flex flex-wrap items-center">
                                <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                                    <h3 className="font-semibold text-base text-blueGray-700">All Jobs</h3>
                                </div>
                                <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                                    <Link to="/Post-Job">
                                        <button className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Post A New Job</button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="block w-full overflow-x-auto">
                            <table className="items-center bg-transparent w-full border-collapse ">
                                <thead>
                                    <tr>
                                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            NO.
                                        </th>
                                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Job Title
                                        </th>
                                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Company Name
                                        </th>
                                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Salary
                                        </th>
                                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Edit
                                        </th>
                                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Delete
                                        </th>
                                    </tr>
                                </thead>
                                 {
                                    isLoading?(<div className='flex items-enternjustify-center h-20'><p>loading...</p></div>):(                       <tbody>
                                        {currentJobs.map((job, index) => (
                                            <tr key={index}>
                                                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                                                    {index + 1}
                                                </th>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    {job.jobTitle}
                                                </td>
                                                <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    {job.companyName}
                                                </td>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    ${job.minPrice} - ${job.maxPrice}
                                                </td>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    <button><Link to={`/edit-job/${job?._id}`}>Edit</Link></button>
                                                </td>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xswhitespace-nowrap p-4">
    <button onClick={() => handleDelete(job._id)} className='bg-red-700 py-2 px-6 text-white rounded-sm '>Delete</button>
    </td>
    </tr>
    ))}
    </tbody>)
                                 }
         
</table>
</div>
</div>
</div>
{/*Pagination */}
<div className='flex justify-center text-black space-x-8'>
    {
        currentPage>1&&(
            <button className='hover:underline' onClick={prevPage}>Previous</button>
        )
    }
    {
        indexOfLastItem<jobs.length &&(
            <button className='hover:underline' onClick={nextPage}>Next</button>
        )
    }
</div>
</section>
</div>
);
};

export default MyJobs;
