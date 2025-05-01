import React from 'react'
import Herosection from '../components/Herosection'
import Aboutus from '../components/Aboutus'
import Services from '../components/Services'
import Project from '../components/Project'
import Emergncy from '../components/Emergncy'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing'
import Crc from '../components/Crc'


const Home = () => {
  return (
    <div>
    <Herosection/>
     <Aboutus/>
     <Services/>
     <Project/>
     <Emergncy/>
     <Testimonials/>
     <Pricing/>
     

    </div>
  )
}

export default Home
