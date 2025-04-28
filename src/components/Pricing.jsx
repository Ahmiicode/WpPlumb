import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import '../index.scss';

const Pricing = () => {
  return (
    <div className='w-full min-h-screen bg-gray-100 py-20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header Section */}
        <div className='text-center mb-12 lg:mb-16'>
          <div className='flex items-center justify-center gap-3 mb-4'>
            <span className='w-8 border-t-2 border-gray-400' />
            <h1 className="font-bold text-lg lg:text-xl uppercase">PRICING</h1>
            <span className='w-8 border-t-2 border-gray-400' />
          </div>
          <h2 className='text-3xl lg:text-4xl font-bold text-[#4A4A4A] mb-4'>
            Affordable & Transparent Pricing
          </h2>
          <p className='text-[#AAAAAA] text-base lg:text-lg max-w-2xl mx-auto'>
            Quality plumbing services at competitive prices. No hidden fees— just straightforward pricing!
          </p>
        </div>

        {/* Pricing Cards */}
        <div className='flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-8'>
          {/* Card 1 - Basic */}
          <div className="w-full lg:w-[392px] bg-white rounded-xl p-6 shadow-lg">
            <div className="bg-gray-100 px-6 py-2 rounded-full w-fit">
              <h3 className="font-bold text-black">Basic Plan</h3>
            </div>
            <div className="flex items-baseline gap-2 mt-4">
              <h1 className="text-4xl font-bold text-black">$99</h1>
              <span className="text-gray-500 text-lg">/per visit</span>
            </div>
            <div className="flex flex-col gap-3 mt-6">
              {['Leak Detection & Minor Repairs', 'Drain Cleaning (Single Drain)', 
                'Basic Toilet & Sink Fixes', '24/7 Customer Support'].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <FaCheckCircle className="text-yellow-500" />
                  <span className="text-gray-600">{item}</span>
                </div>
              ))}
            </div>
            <hr className="my-6" />
            <button className="w-full bg-[#FFC107] text-black font-bold py-3 rounded-lg hover:bg-yellow-600 transition-colors">
              Get Started
            </button>
          </div>

          {/* Card 2 - Popular */}
          <div className="w-full lg:w-[392px] bg text-white rounded-xl p-6 shadow-lg relative lg:-translate-y-6">
            <div className="absolute top-4 right-4 bg-[#FFC107] text-white px-4 py-1 rounded-full text-sm font-bold">
              Popular
            </div>
            <div className="bg-white text-black px-6 py-2 rounded-full w-fit">
              <h3 className="font-bold text-black">Premium Plan</h3>
            </div>
            <div className="flex items-baseline gap-2 mt-4">
              <h1 className="text-4xl font-bold ">$199</h1>
              <span className="0 text-lg">/per visit</span>
            </div>
            <div className="flex flex-col gap-3 mt-6">
              {['Everything in Standard Plan', 'Emergency Plumbing Services (Immediate Response)', 
                'Water Heater Installation & Major Repairs', 'Free Follow-Up Within 30 Days'].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <FaCheckCircle className="text-yellow-500" />
                  <span className="text-white">{item}</span>
                </div>
              ))}
            </div>
            <hr className="my-6" />
            <button className="w-full bg-[#FFC107] text-black font-bold py-3 rounded-lg hover:bg-yellow-600 transition-colors">
              Get Started
            </button>
          </div>

          {/* Card 3 - Standard */}
          <div className="w-full lg:w-[392px] bg-white rounded-xl p-6 shadow-lg">
            <div className="bg-gray-100 px-6 py-2 rounded-full w-fit">
              <h3 className="font-bold text-black">Standard Plan</h3>
            </div>
            <div className="flex items-baseline gap-2 mt-4">
              <h1 className="text-4xl font-bold text-black">$299</h1>
              <span className="text-gray-500 text-lg">/per visit</span>
            </div>
            <div className="flex flex-col gap-3 mt-6">
              {['Everything in Basic Plan', 'Water Heater Inspection & Minor Repairs', 
                'Unclogging & Pipe Maintenance', 'Priority Scheduling'].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <FaCheckCircle className="text-yellow-500" />
                  <span className="text-gray-600">{item}</span>
                </div>
              ))}
            </div>
            <hr className="my-6" />
            <button className="w-full bg-[#FFC107] text-black font-bold py-3 rounded-lg hover:bg-yellow-600 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing
