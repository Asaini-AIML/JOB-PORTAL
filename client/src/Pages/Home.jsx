import { useEffect, useState } from "react";
import Banner from "../Component/Banner";
import Jobs from "./Jobs";
import Card from "../Component/Card";
import Sidebar from "../Sidebar/Sidebar";
import Newletter from "../Component/Newletter";

export const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [jobs, setJobs] = useState([]);
  const[isLoading,setIsLoading]=useState(true);
  const[currentPage,setCurrentPage]=useState(1);
  const itemPerpage=6;

  useEffect(() => {
    setIsLoading(true);
    // 
    fetch("http://localhost:3000/all-jobs")
      .then((res) => res.json()) // Parse response as JSON
      .then((data) => {
        // console.log(data);
        setJobs(data); // Set the fetched data into state
        setIsLoading(false)
      })
      // .catch((error) => {
      //   console.error("Error fetching data:", error);
      // });
  }, []);
  

  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };
  const filteredItems = jobs.filter((job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1);
 
  
  const handleChange=(event)=>{
    setSelectedCategory(event.target.value)
  }
  //button base filtering//
  const handleClick=(event)=>{
    setSelectedCategory(event.target.value)
  }
  //calculate the index range
  const calculatePageRange = () =>{
    const startIndex =(currentPage -1)*itemPerpage
    const endIndex= startIndex + itemPerpage
    return {startIndex,endIndex};
  }

  //function for next page
  const nextPage = () =>{
    if(currentPage<Math.ceil(filteredItems.length / itemPerpage)){
      setCurrentPage(currentPage +1)
    }
  }
  //function for previous page
  const prevPage =()=>{
    if(currentPage>1){
      setCurrentPage(currentPage -1)
    }
  }
  //main function
  const filteredData=(jobs,selected,query)=>{
    let filteredJobs=jobs;
    //filtering input item
    if(query){
      filteredJobs=filteredItems;
    }
    //categiry filtering
    if(selected){
      filteredJobs=filteredJobs.filter(({jobLocation,maxPrice,experienceLevel,salaryType,employmentType,postingDate})=>(
        jobLocation.toLowerCase()===selected.toLowerCase() ||
        parseInt(maxPrice)<=parseInt(selected) ||
        postingDate>=selected||
        experienceLevel.toLowerCase()===selected.toLowerCase()||
        salaryType.toLowerCase()===selected.toLowerCase()||
        employmentType.toLowerCase()===selected.toLowerCase()
      ));
      console.log(filteredJobs);
    }
    //slice the data based on current page
    const {startIndex,endIndex}= calculatePageRange();
    filteredJobs =filteredJobs.slice(startIndex,endIndex)
    return filteredJobs.map((data,i)=><Card key={i} data={data}/>)
  }
  const result=filteredData(jobs,selectedCategory,query);
  return (
    <div>
      <Banner query={query} handleInputChange={handleInputChange} />
      <div className="bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12">
        {/*left side */}
        <div className="bg-white p-4 rounded"><Sidebar handleChange={handleChange} handleClick={handleClick}/></div>
         {/*Card*/}
        <div className="col-span-2 bg-white p-4 rounded-sm">
          {
            isLoading?(<p className="font-medium">Loding...</p>):result.length>0?(<Jobs result={result}/>):<>
            <h3 className="text-lg font-bold mb-2">{result.length}Jobs</h3>
            <p>No data found</p>
            </>
          }
          {/*Pagination here */ }
          {
            result.length>0?(
              <div className="flex justify-center mt-4 space-x-8">
                <button onClick={prevPage} disabled={currentPage===1} className="hover:underline">Previous</button>
                <span className="mx-2">Page {currentPage} of {Math.ceil(filteredItems.length / itemPerpage)}</span>
                <button onClick={nextPage} disabled={currentPage===Math.ceil(filteredItems.length/itemPerpage)} className="hover:underline">Next</button>
              </div>
            ):""
          }
          </div>
   {/*Right side */}
        <div className="bg-white p-4 rounded"><Newletter/></div>
        
      </div>
    </div>
  );
};
