import React from 'react';
import heroImage from '../assets/image.png';  // Replace with your image path
import boxImage from '../assets/box.png';  // Replace this with your image path
import { FaTools, FaClock, FaThumbsUp, FaPhoneAlt } from 'react-icons/fa';

const Herosection = () => {
  return (
    <div className="w-[1440px] h-[1121px] t-[140px] bg-gray-50 relative mx-auto">
      {/* Hero Background Image */}
      <div className="w-full relative h-[775.06px] bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }}>
  {/* Left-side Gradient Overlay */}
  <div className="absolute inset-0" style={{
    background: 'linear-gradient(to left, rgba(0, 86, 166, 0) 0%, rgba(0, 86, 166, 0) 45%, rgba(0, 86, 166, 1) 100%)'
  }} />
        {/* Left Side Content on Image */}
        <div className=' h-[1121px]'>
        <div className="absolute top-[200px] left-[120px] text-white max-w-[500px] z-10">
          <h1 className="typography w-[680px] h-[116px]">Your Trusted Plumbing Experts Fast, Reliable, Affordable!</h1>
          <p className="">Providing top-notch plumbing and home services for all your needs – anytime, anywhere.</p>
          <div className='flex gap-3 mt-3'>
          <button className="button-yellow">
            Book Now
          </button>
          <button className="bg-white text-black font-medium px-9 rounded-md py-3">
            Contact us
          </button>
          </div>
          
        </div>
      </div>
     
      {/* White Container Overlapping the Bottom of the Image */}
      <div className="absolute bottom-[-160px] left-1/2 transform -translate-x-1/2 w-[1200px] bg-white rounded-[10px] px-[24px] py-[20px] shadow-lg z-20">
        {/* Inner Div with Specific Dimensions and Gap */}
        <div className="w-[1147px] h-[280px] flex items-center justify-between gap-[100px] mx-auto">
          
          {/* Left Side: Text + Icons */}
          <div className="flex flex-col gap-6 w-1/2">
            {/* Top Text Section */}
            <div >
              <h2 className="text-2xl font-bold  text-[#4A4A4A]">See Our Experts in Action – Quality Plumbing You Can Trust!</h2>
              <p className="text-[#AAAAAA]  mt-2">
              Watch how our certified plumbers handle repairs, installations, and emergencies with precision and care. We ensure quick, reliable, and affordable services for your home or business.
              </p>
            </div>

            {/* Bottom Icons Section */}
            <div className="grid grid-cols-2 gap-4 text-[#AAAAAA]">
              <div className="flex items-center gap-3">
                <FaTools className="text-[#FFC107]" />
                <span>Fast & Reliable Service</span>
              </div>
              <div className="flex items-center gap-3">
                <FaClock className="text-[#FFC107]" />
                <span>Advanced Technology</span>
              </div>
              <div className="flex items-center gap-3">
                <FaThumbsUp className="text-[#FFC107]" />
                <span>TCertified Professionals</span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#FFC107]" />
                <span>Affordable Pricing</span>
              </div>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className=" ">
            <img src={boxImage} alt="Service"  className=' w-[471px] h-[280px] rounded-xl' />
          </div>

        </div>
        </div>
      </div>
    </div>
   
  );
};

export default Herosection;



