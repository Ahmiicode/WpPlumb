import React from 'react';
import '../index.scss';
import logo from '../assets/Logo background.png';
import work1 from '../assets/work1.png';
import work2 from '../assets/work2.png';
import work3 from '../assets/work3.png';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='w-full mt-[-40px] text-white pt-10 pb-20 relative'>
      <div className='flex '>
      <div className='w-full pt-8 bg mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Logo Section */}
        <div className='text-center mb-12'>
          <div className='flex items-center justify-center gap-2 mb-4'>
            <img src={logo} alt="Logo" className='w-12 h-12' />
            <h1 className='text-4xl font-bold'>WP-Plumb</h1>
          </div>
          <p className='text-xl'>
            Flowing Towards a Better <span className='text-[#FFC107] font-bold'>Tomorrow,</span>{' '}
            <span className='text-[#FFC107] font-bold'>Together</span>
          </p>
        </div>

        {/* Footer Columns */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16 xl:gap-24 mb-12'>
          {/* Quick Links */}
          <div>
            <h3 className='text-lg font-semibold mb-4'>Quick Links</h3>
            {['Home', 'About Us', 'Services', 'Projects', 'Contact Us', 'FAQs', 'Testimonials', 'Get a Quote'].map((item, index) => (
              <div key={index} className='flex items-center gap-2 mb-2'>
                <span className='text-[#FFC107]'>&lt;&lt;</span>
                <a href="#" className='text-sm hover:underline'>{item}</a>
              </div>
            ))}
          </div>

          {/* Services */}
          <div>
            <h3 className='text-lg font-semibold mb-4'>Our Services</h3>
            {['Leak Detection', 'Drain Cleaning', 'Pipe Replacement', 'Sewer Line Repair', 
              'Water Heater Installation', 'Emergency Plumbing', 'Bathroom Remodeling', 'Kitchen Remodeling'].map((item, index) => (
              <div key={index} className='flex items-center gap-2 mb-2'>
                <span className='text-[#FFC107]'>&lt;&lt;</span>
                <a href="#" className='text-sm hover:underline'>{item}</a>
              </div>
            ))}
          </div>

          {/* Projects */}
          <div>
            <h3 className='text-lg font-semibold mb-4'>Our Projects</h3>
            {[
              { name: 'AquaLine Solutions', image: work1 },
              { name: 'FlowFix Experts', image: work2 },
              { name: 'PlumbCare Pro', image: work3 },
            ].map((project, index) => (
              <div key={index} className='flex items-center gap-3 mb-4'>
                <img src={project.image} alt={project.name} className='w-16 h-12 object-cover rounded' />
                <div>
                  <h4 className='text-sm font-semibold'>{project.name}</h4>
                  <div className='flex items-center text-[#FFC107] text-sm'>
                    ★★★★☆ <span className='text-white ml-2'>5.0</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h3 className='text-lg font-semibold mb-4'>Contact Us</h3>
            <div className='space-y-3'>
              <div className='flex items-center gap-3'>
                <FiMail className='text-white text bg-white p-1 rounded-full w-6 h-6' />
                <span className='text-sm'>hi@yourdomain.com</span>
              </div>
              <div className='flex items-center gap-3'>
                <FiPhone className='text-white text bg-white p-1 rounded-full w-6 h-6' />
                <span className='text-sm'>+62 864 6444 2222</span>
              </div>
              <div className='flex items-center gap-3'>
                <FiMapPin className='text-white text bg-white p-1 rounded-full w-6 h-6' />
                <span className='text-sm'>123 Plumbing Street, Flow City, CA 12345</span>
              </div>
            </div>

            <div className='mt-6'>
              <div className='flex gap-4'>
                <a href="#" className='p-2 text bg-white rounded-full hover:bg-[#FFC107] transition-colors'>
                  <FaFacebookF className='w-5 h-5' />
                </a>
                <a href="#" className='p-2 text bg-white rounded-full hover:bg-[#FFC107] transition-colors'>
                  <FaInstagram className='w-5 h-5' />
                </a>
                <a href="#" className='p-2 text bg-white rounded-full hover:bg-[#FFC107] transition-colors'>
                  <FaLinkedinIn className='w-5 h-5' />
                </a>
              </div>
            </div>
          </div>
        </div>

       
        
      </div>
      
      </div>
      <div className="w-full mb-[-70px] bg-white text-black py-2">
  <div className="flex justify-center items-center px-4">
    <p className="text-[12px] sm:text-[14px] text-center">
      © 2025 FlowPro. All Rights Reserved.
    </p>
  </div>
</div>

     
    </div>
    
  );
};

export default Footer;