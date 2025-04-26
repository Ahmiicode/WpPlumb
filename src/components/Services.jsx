import React from 'react';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';
import img5 from '../assets/img5.png';
import img6 from '../assets/img6.png';
import '../index.scss';

const Services = () => {
  return (
    <div className="w-full py-20 bg-white flex justify-center">
      <div className="w-[1212px]">
        {/* Header Section */}
        <div className='justify-center flex'>
          <div className='header w-[631px] h-[172px] flex flex-col  gap-[12px] justify-center items-center'>
            <div className='flex justify-center items-center text-regular-normal'>
              <h1>---------</h1>
              <h1 className="text-center font-roboto font-bold text-[20px] leading-[140%] tracking-[0%]">Service</h1>
              <h1>---------</h1>
            </div>
            <div className='typography'>
              <h2 className='font-roboto font-bold text-[#4A4A4A] text-[40px] leading-[120%] tracking-[0%] text-center'>
                Comprehensive Plumbing Services for Your Home & Business
              </h2>
            </div>   
            <div>
              <p className='text-[#AAAAAA] font-roboto font-normal text-[16px] leading-[150%] tracking-[0%] text-center'>
                We offer a full range of plumbing solutions tailored to your needs
              </p>
            </div>
          </div>
        </div>


        {/* Services Grid */}
         {/* Top row: Box1 (476), Box2 (348), Box3 (476) */}
      <div className="flex paragraph-text service-h gap-[8px] mt-[32px] mb-[8px]">
        {/* Box 1 */}
        <div className="w-[492px] h-[336px] rounded-[10px] border border-[#EEEEEE] p-[9px] flex flex-col">
          <img src={img1} alt="" className="w-full h-[200px] rounded-[10px] mb-2"/>
          <div className="flex justify-between items-center flex-1">
            <div>
              <h3 >Leak Detection & Repair</h3>
              <p >
              Quickly identifying and fixing leaks to prevent water damage and high utility bills
              </p>
            </div>
            <div className='button'>
            <button className="w-[121px] h-[40px]  ">
              Book Now
            </button>
            </div>
            
          </div>
        </div>

        {/* Box 2 */}
        <div className="w-[348px] h-[336px] rounded-[10px] border border-[#EEEEEE] p-[9px] flex flex-col">
          <img src={img2} alt="" className="w-full h-[200px] rounded-[10px] mb-2"/>
          <h3 >Water Heater Installation</h3>
          <p >
          Professional installation and repair of tank and tankless water heaters for a steady hot water supply.
          </p>
        </div>

        {/* Box 3 */}
        <div className="w-[348px] h-[336px] rounded-[10px] border border-[#EEEEEE] p-[9px] flex flex-col">
          <img src={img3} alt="" className="w-full h-[200px] rounded-[10px] mb-2"/>
          <h3 >Drain Cleaning & Unclogging</h3>
          <p >
          Efficient removal of clogs and blockages to ensure smooth water flow in sinks, showers, and pipes.
          </p>
        </div>
      </div>

      {/* Bottom row: Box4 (348), Box5 (348), Box6 (476) */}
      <div className="flex paragraph-text service-h gap-[8px]">
        {/* Box 4 */}
        <div className="w-[348px] h-[336px] rounded-[10px] border border-[#EEEEEE] p-[9px]">
          <img src={img4} alt="" className="w-full h-[200px] rounded-[10px] mb-2"/>
          <h3 >Toilet & Sink Repair</h3>
          <p >
          Fixing leaks, clogs, and malfunctioning toilets or sinks to maintain optimal functionality
          </p>
        </div>

        {/* Box 5 */}
        <div className="w-[348px] h-[336px] rounded-[10px] border border-[#EEEEEE] p-[9px]">
          <img src={img5} alt="" className="w-full h-[200px] rounded-[10px] mb-2"/>
          <h3 >Emergency Plumbing Serv..</h3>
          <p >
          Efficient removal of clogs and blockages to ensure smooth water flow in sinks, showers, and pipes.
          </p>
        </div>

        {/* Box 6 */}
        <div className="w-[492px] h-[336px] rounded-[10px] border border-[#EEEEEE] p-[9px] flex flex-col">
          <img src={img6} alt="" className="w-full h-[200px] rounded-[10px] mb-2"/>
          <div className="flex justify-between items-center flex-1">
            <div>
              <h3 >Pipe Replacement & Repiping</h3>
              <p >
              Upgrading old or damaged pipes to improve water quality and prevent future leaks
              </p>
            </div>
            <div className='button'>
            <button className="w-[121px] h-[40px]  ">
              Book Now
            </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Services;
