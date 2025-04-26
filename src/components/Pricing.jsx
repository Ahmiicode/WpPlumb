import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import '../index.scss';

const Pricing = () => {
  return (
    <div className='w-[1440px] h-[830px] mx-auto bg-gray-100 relative'>
      <div className='h-[708px] mx-auto justify-center '>
        <div className='flex justify-center'>
          <div className='header w-[631px] h-[148px] flex gap-[12px] '>
            <div className='justify-center flex'>
              <div className='header w-[631px] h-[172px] flex flex-col gap-[12px] justify-center items-center'>
                <div className='flex justify-center items-center text-regular-normal'>
                  <h1>---------</h1>
                  <h1 className="text-center font-roboto font-bold text-[20px] leading-[140%] tracking-[0%]">PRICING</h1>
                  <h1>---------</h1>
                </div>
                <div className='typography'>
                  <h2 className='font-roboto font-bold text-[#4A4A4A] text-[40px] leading-[120%] tracking-[0%] text-center'>
                    Affordable & Transparent Pricing
                  </h2>
                </div>   
                <div className='w-[631px] h-[108px] gap-[12px]'>
                  <p className='text-[#AAAAAA] font-roboto font-normal text-[16px] leading-[110%] tracking-[2%] text-center'>
                    Quality plumbing services at competitive prices. No hidden fees— just straightforward pricing!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div  className='flex justify-center mt-12'>
        <div className="underpics w-[1200px] h-[500px] flex gap-[12px] ">
          {/* Card 1 */}
          <div className="card1 w-[392px] h-[486px] bg-white rounded-lg flex flex-col justify-between p-6">
            {/* Oval Name */}
            <div className="outline px-6 py-2 rounded-full text-black font-bold w-fit">
              Basic Plan
            </div>

            {/* Price and per visit */}
            <div className="flex items-center gap-2 mt-4">
              <h1 className="text-[40px] font-bold text-black">$99</h1>
              <span className="text-black mb-7 text-lg mt-3">/per visit</span>
            </div>

            {/* Features */}
            <div className="flex flex-col gap-2 mt-4">
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-yellow-500" />
                <span>Leak Detection & Minor Repairs</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-yellow-500" />
                <span>Drain Cleaning (Single Drain)</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-yellow-500" />
                <span>Basic Toilet & Sink Fixes</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-yellow-500" />
                <span>24/7 Customer Support</span>
              </div>
            </div>
            <hr />
            {/* Button */}
            <div className="flex justify-center mt-6">
              <button className="get-started-button">Get Started</button>
            </div>
          </div>

          {/* Card 2 (Popular) */}
          <div className="card2 bg w-[392px] h-[512px] mt-[-12px] bg-white rounded-lg flex flex-col justify-between p-6 relative">
            {/* Oval Name */}
            <div className="outline-2 px-6 py-2 rounded-full text-gray-300 font-bold w-fit">
              Premium Plan
            </div>

            {/* Popular Badge (Top-Right) */}
            <div className="absolute top-6 right-6 bg-yellow-500 text-black px-4 py-1.5 rounded-full text-sm font-semibold">
              Popular
            </div>

            {/* Price and per visit */}
            <div className="flex items-center gap-2 mt-4">
              <h1 className="text-[40px] font-bold text-white">$199</h1>
              <span className="text-gray-200 mb-7 text-lg mt-3">/per visit</span>
            </div>

            {/* Features */}
            <div className="flex flex-col gap-2 mt-4">
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-yellow-500" />
                <span>Everything in Standard Plan</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-yellow-500" />
                <span>Emergency Plumbing Services (Immediate Response)</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-yellow-500" />
                <span>Water Heater Installation & Major Repairs</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-yellow-500" />
                <span>Free Follow-Up Within 30 Days</span>
              </div>
            </div>
            <div>
                
            </div>
            <hr />
            {/* Button */}
            <div className="flex justify-center mt-6">
              <button className="get-started-button">Get Started</button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card3 w-[392px] h-[486px] bg-white rounded-lg flex flex-col justify-between p-6">
            {/* Oval Name */}
            <div className="outline px-6 py-2 rounded-full text-black font-bold w-fit">
              Standard Plan
            </div>

            {/* Price and per visit */}
            <div className="flex items-center gap-2 mt-4">
              <h1 className="text-[40px] font-bold text-black">$299</h1>
              <span className="text-gray-500 mb-7 text-lg mt-3">/per visit</span>
            </div>

            {/* Features */}
            <div className="flex flex-col gap-2 mt-4">
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-yellow-500" />
                <span>Everything in Basic Plan</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-yellow-500" />
                <span>Water Heater Inspection & Minor Repairs</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-yellow-500" />
                <span>Unclogging & Pipe Maintenance</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-yellow-500" />
                <span>Priority Scheduling</span>
              </div>
            </div>
            <hr />
            {/* Button */}
            <div className="flex justify-center mt-6">
              <button className="get-started-button">Get Started</button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing
