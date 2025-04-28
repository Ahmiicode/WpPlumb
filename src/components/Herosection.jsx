import React from 'react';
import heroImage from '../assets/image.png';
import boxImage from '../assets/box.png';
import { FaTools, FaClock, FaThumbsUp, FaPhoneAlt } from 'react-icons/fa';
import '../index.scss';

const Herosection = () => {
  return (
    <div className="min-h-[600px] lg:min-h-[1000px] bg-gray-50 relative overflow-hidden">
      {/* Hero Background Image */}
      <div className="w-full h-[400px] md:h-[600px] relative bg-cover bg-center" 
           style={{ backgroundImage: `url(${heroImage})` }}>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-blue-900/80 to-blue-900" />
        
        {/* Content Container */}
        <div className="absolute top-1/2 -translate-y-1/2 container mx-auto px-4 sm:px-6 lg:px-8 text-white z-10">
          <div className="max-w-2xl xl:max-w-3xl">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Your Trusted Plumbing Experts Fast, Reliable, Affordable!
            </h1>
            <p className="mt-4 md:mt-6 text-lg md:text-xl max-w-[600px]">
              Providing top-notch plumbing and home services for all your needs – anytime, anywhere.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button className="button-yellow px-8 py-3 text-lg w-full sm:w-auto">
                Book Now
              </button>
              <button className="bg-white text font-semibold px-8 py-3 rounded-lg w-full sm:w-auto">
                Contact us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Card */}
   {/* Floating Card */}
<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative -bottom-20 z-20">
  <div className="bg-white lg:mt-[-160px] mt-[-60px] mb-[100px]  md:mt-[-160px] md:mb-[100px] lg:mb-[-200px] rounded-xl p-6 sm:p-8 shadow-xl md:h-auto">
    <div className="flex flex-col lg:flex-row gap-8 xl:gap-12">
      
      {/* Text Content */}
      <div className="flex-1 space-y-6">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            See Our Experts in Action – Quality Plumbing You Can Trust!
          </h2>
          <p className="text-gray-500 text-base md:text-lg">
            Watch how our certified plumbers handle repairs, installations, and emergencies with precision and care.
          </p>
        </div>

        {/* Icons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {[
            { icon: <FaTools />, text: 'Fast & Reliable Service' },
            { icon: <FaClock />, text: 'Advanced Technology' },
            { icon: <FaThumbsUp />, text: 'Certified Professionals' },
            { icon: <FaPhoneAlt />, text: 'Affordable Pricing' },
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-3 text-gray-600">
              <span className="text-yellow-500 text-xl">{item.icon}</span>
              <span className="text-sm md:text-base">{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Image */}
      <div className="flex-1 flex justify-center items-center">
        <img 
          src={boxImage} 
          alt="Service" 
          className="w-full max-w-[550px] h-[240px] object-cover rounded-lg" 
        />
      </div>
      
    </div>
  </div>
</div>

    </div>
  );
};

export default Herosection;




