import React from 'react';
import '../index.scss';
import heroImage from '../assets/map.png';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Crc = () => {
  return (
    <div className='w-[1440px] h-[782px]  mx-auto pt-[200px]'>
      {/* MAP */}
      <div className=''>

   
      <div className='flex justify-center '>
        <div className='w-[1200px] h-[270px] rounded-[20px] border bg-cover bg-center' style={{ backgroundImage: `url(${heroImage})` }}></div>
      </div>

      {/* CONTACT SECTION */}
      <div className='w-full h-[320px] bg mt-[40px] flex  items-center px-[120px]'>
        <div className='w-[1200px] flex justify-between gap-[160px]'>
          {/* LEFT SIDE */}
          <div className='w-[540px] space-y-4'>
            <h1 className='text-white text-3xl font-md'>--------Contact</h1>
            <h2 className=' typography text-white'>Get In Touch</h2>
            <p className='text-white'>We’re here to assist you with all your plumbing needs. Reach out today!</p>
          </div>

          {/* RIGHT SIDE */}
          <div className='w-[500px] space-y-6 text-white'>
            <div className='flex items-center gap-2'>
              <FaEnvelope className='text-white text-3xl mr-2 mb-2' />
              <div>
                <h3 className='font-semibold'>Email</h3>
                <p >info@plumbingservices.com</p>
              </div>
            </div>

            <div className='flex items-center gap-2'>
              <FaPhoneAlt className='text-white text-3xl mr-2 mb-2' />
              <div>
                <h3 className='font-bold'>Phone</h3>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>

            <div className='flex items-center gap-2'>
              <FaMapMarkerAlt className='text-white text-3xl mr-2 mb-2' />
              <div>
                <h3 className='font-semibold'>Office</h3>
                <p>456 Plumbing Ave, Springfield, IL 62701, USA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
         </div>
    </div>
  );
};

export default Crc;

