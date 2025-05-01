import React from 'react';
import '../index.scss';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import card1 from '../assets/card1.png';
import card2 from '../assets/card2.png';
import card3 from '../assets/card3.png';

const Testimonials = () => {
  return (
    <div className='w-full min-h-[593px] bg-gray-100 py-20'>
      <div className='container max-w-[1200px] mx-auto px-4 lg:px-0'>
        {/* Header Section */}
        <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 lg:mb-12'>
          <div className='mb-6 lg:mb-0'>
            <div className='flex items-center gap-3 mb-4'>
              <span className='w-8 border-t-2 border-gray-400' />
              <h1 className="font-bold text-lg lg:text-xl uppercase">TESTIMONIAL</h1>
            </div>
            <h2 className='text-3xl lg:text-4xl font-bold text-[#4A4A4A]'>
              What Our Customers Are Saying
            </h2>
          </div>

          {/* Arrows - Hidden on mobile */}
          <div className='hidden lg:flex gap-3'>
            <button className="w-12 h-12 rounded bg-[#FFC107] flex items-center justify-center">
              <FaArrowLeft className="text-white text-lg" />
            </button>
            <button className="w-12 h-12 rounded bg-[#FFC107] flex items-center justify-center">
              <FaArrowRight className="text-white text-lg" />
            </button>
          </div>
        </div>

        {/* Cards Container */}
        <div className='relative w-full overflow-hidden'>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8'>
            {/* Card 1 */}
            <div className="bg-white rounded-xl p-6 h-[220px] lg:h-[250px] relative">
              <div className="flex items-center gap-4 mb-4">
                <img src={card1} alt="Profile" className="w-12 h-12 rounded-full object-top object-cover" />
                <div>
                  <h2 className="text-lg font-semibold">John Doe</h2>
                  <p className="text-gray-500 text-sm">Los Angeles, CA</p>
                  <div className="flex mt-1 text-yellow-400">
                    ⭐⭐⭐⭐☆
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm absolute bottom-6 left-6 right-6">
                Incredible service! They arrived on time, diagnosed the issue quickly...
              </p>
            </div>

            {/* Center Card (Large on Desktop) */}
            <div className="bg-white rounded-xl p-6 h-[250px] lg:scale-110 lg:z-10 relative">
              <div className="flex items-center gap-4 mb-4">
                <img src={card2} alt="Profile" className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h2 className="text-lg font-semibold">Emma R.</h2>
                  <p className="text-gray-500 text-sm">Chicago, IL</p>
                  <div className="flex mt-1 text-yellow-400">
                    ⭐⭐⭐⭐⭐
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm absolute bottom-6 left-6 right-6">
                My basement flooded due to a pipe burst, and their emergency response...
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl p-6 h-[220px] lg:h-[250px] relative">
              <div className="flex items-center gap-4 mb-4">
                <img src={card3} alt="Profile" className="w-12 h-12 rounded-full object-top object-cover" />
                <div>
                  <h2 className="text-lg font-semibold">Michael S.</h2>
                  <p className="text-gray-500 text-sm">New York, NY</p>
                  <div className="flex mt-1 text-yellow-400">
                    ⭐⭐⭐⭐☆
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm absolute bottom-6 left-6 right-6">
                I needed a water heater replacement, and they handled everything...
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Arrows & Dots */}
        <div className='lg:hidden flex justify-center items-center gap-4 mt-8'>
          <button className="w-12 h-12 rounded bg-[#FFC107] flex items-center justify-center">
            <FaArrowLeft className="text-white text-lg" />
          </button>
          <div className='flex gap-2'>
            {[1, 2, 3].map((_, i) => (
              <div key={i} className='w-3 h-3 rounded-full bg-gray-300' />
            ))}
          </div>
          <button className="w-12 h-12 rounded bg-[#FFC107] flex items-center justify-center">
            <FaArrowRight className="text-white text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
