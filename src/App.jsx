import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Router, BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ApplicationForm from './pages/ApplicationForm'

function App() {

  return (
    
    <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/application-form' element={<ApplicationForm />} />
    </Routes>
    <ToastContainer />
    </BrowserRouter>
    </div>   
    
  )
}

export default App
