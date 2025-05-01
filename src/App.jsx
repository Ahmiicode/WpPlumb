import React from 'react'
import {  Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'
import Topheader from './components/Topheader'
import Booknow from './pages/Booknow'
import Contactus from './pages/Contactus'
import Crc from './components/Crc'



const App = () => {
  return (
    <div className=''>
      <div className=''>
      <Topheader/>
      </div>
   
   
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/booknow" element={<Booknow />} />
        <Route path="/contactus" element={<Contactus/>} />
      
      </Routes>
      <Crc/>
      <Footer/>
     
    </div>
  )
}

export default App

