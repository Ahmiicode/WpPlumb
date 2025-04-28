import React from 'react'
import aboutImage from '../assets/about.png'
import '../index.scss';

const Aboutus = () => {
  return (
    <div className='w-full min-h-[560px] bg-gray-100 mx-auto px-4 sm:px-6 lg:px-8 py-12'>
      <div className='max-w-[1200px] w-full h-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[96px]'>
        {/* Text Content */}
        <div className='w-full max-w-full lg:max-w-[540px] h-auto flex flex-col justify-center order-2 lg:order-1 [&>*]:text-[#333333]'>
          <div className='flex items-center gap-4 mb-6'>
            <div className='w-8 h-[2px] bg-[#555555]' /> {/* Changed line color */}
            <h2 className='text-lg font-medium [&]:text-[#444444]'>ABOUT US</h2> {/* h2 color */}
          </div>
          
          <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-6 [&]:text-[#222222]'> {/* h1 color */}
            Experienced & Reliable Plumbing Services
          </h1>
          
          <div className='space-y-4 mb-8 [&_p]:text-[#666666]'> {/* Paragraph color */}
            <p className='text-base lg:text-lg'>
              With over a decade of experience, our team of certified plumbers is committed to providing top-quality service
            </p>
            <p className='text-base lg:text-lg'>
              From small leaks to major installations, we handle every job with professionalism and expertise.
            </p>
          </div>
          
          <button className="button-yellow w-fit px-8 py-3 text-lg">
            Book Now
          </button>
        </div>

        {/* Image */}
        <div className='w-full h-full max-w-[560px] mx-auto order-1 lg:order-2'>
          <img 
            src={aboutImage}  
            alt="Service"  
            className='w-full h-auto object-cover rounded-lg shadow-xl' 
          />
        </div>
      </div>
    </div>
  )
}

export default Aboutus
