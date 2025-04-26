import React from 'react'
import aboutImage from '../assets/about.png'
import '../index.scss';

const Aboutus = () => {
  return (
    <div className='w-[1440px] h-[560px]  bg-gray-100 mx-auto'>
      <div className='w-[1200px] relative h-[400px] top-[80px] left-[121px] grid grid-cols-2  gap-[96px]'>
        <div className='w-[540px] h-[372px] gap-[40px] '>
        <div className=' '>
             <div className='about text-regular-normal w-auto  max-w-[176px] flex h-auto gap-[16px]'>
                <h1>---------</h1>
                <h1>ABOUT US</h1>
             </div>
             <div className='heading '>
              <div className='h1 typography-2 '>
              <h1>Experienced & Reliable Plumbing Services</h1>
              </div>
              <div className='text-regular-normal text-white w-[506px] h-auto gap-[12px]'>
                <p className='mt-4'>With over a decade of experience, our team of certified plumbers is committed to providing top-quality service</p>
                <p className='mt-3'>From small leaks to major installations, we handle every job with professionalism and expertise.</p>
                <button className="button-yellow mt-9">
            Book Now
          </button>
              </div>
             </div>
        </div>
        </div>
        <div>
            <img src={aboutImage} alt="Service"  className=' w-[560px] h-[400px] top=[1263px]' />
        </div>
      </div>
    </div>
  )
}

export default Aboutus
