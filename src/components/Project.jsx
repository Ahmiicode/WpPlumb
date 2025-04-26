import React from 'react'
import '../index.scss';
import pro1 from '../assets/pro1.png'
import pro2 from '../assets/pro2.png'
import pro3 from '../assets/pro3.png'
import {  FaArrowRight } from 'react-icons/fa';

const Project = () => {
  return (
    <div className='  top-[2891px] w-[1440px] h-[643px] bg-gray-100  mx-auto'>
      <div className='relative top-[80px]  left-[120px] w-[1201px] h-[483px]  gap-[32px]'>
        <div className='heading w-[1201px] h-[191px]flex gap-[23px]'>
            <div className='w-[1201px] h-[96px] relative mx-auto gap-[12px]'>
                <div className='flex about text-regular-normal w-auto  max-w-[176px]  h-auto gap-[16px]'>
                    <h3>----------</h3>
                     <h3 className=''>PROJECTS</h3>
                </div>
                <div className='w-[1201px] h-[96px] flex gap-[51px]'>
                    <div className='typography-2 w-[631px]'>
                        <h1 className=''>Delivering Quality Plumbing Solutions for Homes & Businesses</h1>
                    </div>
                    <div className='text-regular-normal w-[571px] ml-29 h-[72px] '>
                        <p className='font-roboto font-normal text-[16px] leading-[150%] tracking-[0%] text-center'>We take pride in our successful plumbing projects, ensuring durability efficiency, and customer satisfaction. Explore our portfolio of residential and commercial plumbing solutions tailored to every need.</p>
                    </div>
                </div>
                <div className='justify-end flex'>
   <button className="w-[50px] h-[32px] rounded-[6px] px-[12px] py-[3px] bg-[#FFC107] text-white text-lg flex items-center justify-center">
   <FaArrowRight size={15} color="white" />
   </button>
                </div>


            </div>
        </div>
        <div className='project w-[1201px] h-[260px] mt-[100px] flex gap-[85px]  '>
        <div class="w-[198px] h-[185px] gap-[15px] mt-10 ml-10 text-[#AAAAAA] flex flex-col">
  <p class="text-center">Residential Plumbing</p>
  <p class="text-center">Commercial Plumbing</p>
  <p class="text-center">Industrial Plumbing</p>
  <p class="text-center">Multi-Unit Housing</p>
</div>

            <div className='w-[918px] your-class-col   your-class-name h-[260px] gap-[24px] flex '>
            <div className="relative w-full  h-full">
    <img src={pro1} alt="Image 1" className="w-full h-full object-cover" />
    <div className='w-[112px] h-[44px] top-[204px] left-[12px] absolute'>
    <p className="absolute left-0 bottom-0 text-white  bg-opacity-50 ">Luxury Home Leak Repairs</p>
    </div>
    
    </div>
    <div className="relative w-full h-full">
    <img src={pro2} alt="Image 1" className="w-full h-full object-cover" />
    <div className='absolute left-0 bottom-0 text-white  bg-opacity-50'>
    <p className="absolute left-0 bottom-0 text-white  bg-opacity-50 p-2">Bathroom & Kitchen Renovation</p>
    </div>
    </div>
    <div className="relative w-full h-full">
    <img src={pro3} alt="Image 1" className="w-full h-full object-cover" />
    <div className='absolute left-0 bottom-0 text-white  p-2 bg-opacity-50 '>
    <p >Smart Water Heater Installation</p>
    </div>
    
    </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Project
