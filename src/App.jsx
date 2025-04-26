import React from 'react'
import Topheader from './components/Topheader'
import Herosection from './components/Herosection'
import Aboutus from './components/Aboutus'
import Services from './components/Services'
import Project from './components/Project'
import Emergncy from './components/Emergncy'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import Crc from './components/Crc'
import Footer from './components/Footer'


const App = () => {
  return (
    <div >
     <Topheader/>
     <Herosection/>
     <Aboutus/>
     <Services/>
     <Project/>
     <Emergncy/>
     <Testimonials/>
     <Pricing/>
     <Crc/>
     <Footer/>
     
    </div>
  )
}

export default App

