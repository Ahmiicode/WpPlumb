import React from 'react';
import '../index.scss';
import pro1 from '../assets/pro1.png';
import pro2 from '../assets/pro2.png';
import pro3 from '../assets/pro3.png';
import { FaArrowRight } from 'react-icons/fa';

const Project = () => {
  return (
    <div className='w-full min-h-[643px] bg-gray-100 py-20'>
      <div className='max-w-7xl mx-auto px-4 lg:px-8'>
        {/* Header Section */}
        <div className='mb-16'>
          <div className='flex items-center gap-4 mb-6'>
            <span className='w-8 border-t-2 border-current' />
            <h3 className='text-lg font-semibold uppercase'>PROJECTS</h3>
            <span className='w-8 border-t-2 border-current' />
          </div>

          <div className='flex flex-col lg:flex-row gap-8 mb-8'>
            <div className='lg:w-1/2'>
              <h1 className='text-4xl font-bold text-[#4A4A4A]'>
                Delivering Quality Plumbing Solutions for Homes & Businesses
              </h1>
            </div>
            
            <div className='lg:w-1/2'>
              <p className='text-[#AAAAAA] text-base leading-relaxed'>
                We take pride in our successful plumbing projects, ensuring durability efficiency, and customer satisfaction. Explore our portfolio of residential and commercial plumbing solutions tailored to every need.
              </p>
            </div>
          </div>

          <div className='flex justify-end'>
            <button className="w-[50px] h-[32px] rounded-[6px] px-[12px] py-[3px] bg-[#FFC107] flex items-center justify-center">
              <FaArrowRight size={15} className="text-white" />
            </button>
          </div>
        </div>

        {/* Project Gallery - Preserving LG Layout */}
        <div className='flex flex-col lg:flex-row gap-8'>
          {/* Category List (Hidden on mobile) */}
          <div className='hidden lg:block w-[198px] space-y-4 text-[#AAAAAA] text-center'>
            <p>Residential Plumbing</p>
            <p>Commercial Plumbing</p>
            <p>Industrial Plumbing</p>
            <p>Multi-Unit Housing</p>
          </div>

          {/* Image Grid */}
          <div className='flex-1 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8'>
            <div className='relative group'>
              <img src={pro1} alt="Luxury Home Leak Repairs" className='w-full h-64 object-cover' />
              <div className='absolute bottom-0 left-0 p-4'>
                <p className='text-white text-sm lg:text-base'>Luxury Home Leak Repairs</p>
              </div>
            </div>

            <div className='relative group'>
              <img src={pro2} alt="Bathroom & Kitchen Renovation" className='w-full h-64 object-cover' />
              <div className='absolute bottom-0 left-0 p-4'>
                <p className='text-white text-sm lg:text-base'>Bathroom & Kitchen Renovation</p>
              </div>
            </div>

            <div className='relative group'>
              <img src={pro3} alt="Smart Water Heater Installation" className='w-full h-64 object-cover' />
              <div className='absolute bottom-0 left-0 p-4'>
                <p className='text-white text-sm lg:text-base'>Smart Water Heater Installation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;