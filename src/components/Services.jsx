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
    <div className="w-full py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className='text-center mb-12'>
          <div className='max-w-2xl mx-auto space-y-4'>
            <div className='flex items-center justify-center gap-2 text-gray-400'>
              <div className='w-8 border-t-2 border-gray-300' />
              <h1 className="font-bold text-lg uppercase tracking-widest">Service</h1>
              <div className='w-8 border-t-2 border-gray-300' />
            </div>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-800'>
              Comprehensive Plumbing Services for Your Home & Business
            </h2>   
            <p className='text-gray-500 md:text-lg max-w-xl mx-auto'>
              We offer a full range of plumbing solutions tailored to your needs
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { img: img1, title: 'Leak Detection & Repair', 
              text: 'Quickly identifying and fixing leaks to prevent water damage and high utility bills', 
              button: true },
            { img: img2, title: 'Water Heater Installation', 
              text: 'Professional installation and repair of tank and tankless water heaters for a steady hot water supply.' },
            { img: img3, title: 'Drain Cleaning & Unclogging', 
              text: 'Efficient removal of clogs and blockages to ensure smooth water flow in sinks, showers, and pipes.' },
            { img: img4, title: 'Toilet & Sink Repair', 
              text: 'Fixing leaks, clogs, and malfunctioning toilets or sinks to maintain optimal functionality' },
            { img: img5, title: 'Emergency Plumbing Services', 
              text: 'Efficient removal of clogs and blockages to ensure smooth water flow in sinks, showers, and pipes.' },
            { img: img6, title: 'Pipe Replacement & Repiping', 
              text: 'Upgrading old or damaged pipes to improve water quality and prevent future leaks', 
              button: true },
          ].map((service, index) => (
            <div 
              key={index}
              className="group relative rounded-xl border border-gray-200 hover:border-blue-100 transition-all hover:shadow-lg overflow-hidden"
            >
              <img 
                src={service.img} 
                alt="" 
                className="w-full h-48 md:h-56 object-cover"
              />
              <div className="p-4 md:p-6 space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  {service.text}
                </p>
                {service.button && (
                  <button className="button-yellow mt-2 px-6 py-2 text-sm md:text-base">
                    Book Now
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;