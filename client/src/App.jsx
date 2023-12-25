import React from 'react';
import { Home } from './Pages/Home';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Postjob from './Pages/Postjob';
import MyJobs from './Pages/MyJobs';

const App = () => {
  return (
     
    <BrowserRouter>
    <Navbar/>
      <Routes>    
        <Route path='/' element={<Home />} />
        <Route path='/post-job' element={<Postjob/>} />
        <Route path='/my-job' element={<MyJobs/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
