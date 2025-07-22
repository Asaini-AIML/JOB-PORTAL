import React from 'react';
import { Home } from './Pages/Home';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Postjob from './Pages/Postjob';
import MyJobs from './Pages/MyJobs';
import SalaryPage from './Pages/SalaryPage';
import UpdateJob from './Pages/UpdateJob';
import Login from './Component/Login';
import JobDetail from './Pages/JobDetail';

const fetchJobData = async () => {
  try {
    const response = await fetch('your_api_endpoint');
    const data = await response.json();
    // process data or set state
    console.log(data); // just an example, you can process data here
  } catch (error) {
    console.error('Error fetching job data:', error);
  }
};

const App = () => {
  return (
    
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/post-job' element={<Postjob />} />
        <Route path='/my-job' element={<MyJobs />} />
        <Route path='/salary' element={<SalaryPage />} />
        <Route
          path="edit-job/:id"
          element={<UpdateJob />}
          loader={({ params }) => fetchJobData(`http://localhost:3000/all-jobs/${params.id}`)}
        />
        <Route path='/login' element={<Login/>}/>
        <Route path='/job/:id' element={<JobDetail/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
