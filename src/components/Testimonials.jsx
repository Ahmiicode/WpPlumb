import React from 'react'
import '../index.scss';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import card1 from '../assets/card1.png'
import card2 from '../assets/card2.png'
import card3 from '../assets/card3.png'

const Testimonials = () => {
  return (
    <div className='w-[1440px] h-[593px]  bg-gray-100 relative mx-auto'>
      <div className='w-[1200px] h-[433px] top-[80px] left-[120px]  gap-[53px] absolute '>
        <div className='w-[1200px] h-[370px] gap-[32px] '>
            <div className='flex w-[1200px] h-[88px] justify-between'>
                <div className='  w-[578px] h-[88px] gap-[12px]'>
                <div className='flex  text-regular-normal'>
              <h1>--------------</h1>
              <h1 className="text-center font-roboto font-bold text-[20px] leading-[140%] tracking-[0%]">TESTEMINIAL</h1>
            
            </div>
            <div className='typography'>
              <h2 className='font-roboto font-bold text-[#4A4A4A] text-[40px] leading-[120%] tracking-[0%] text-center'>
              What Our Customers Are Saying
              </h2>
            </div> 
                </div>
                <div className='justify-end items-end flex gap-[10px]'>
                <button className="w-[50px] h-[32px] rounded-[6px] px-[12px] py-[3px] bg-[#FFC107] text-white text-lg flex items-center justify-center">
                <FaArrowLeft size={15} color="white" />
</button>
<button className="w-[50px] h-[32px] rounded-[6px] px-[12px] py-[3px] bg-[#FFC107] text-white text-lg flex items-center justify-center">
<FaArrowRight size={15} color="white" />
</button>
                </div>
            </div>
            <div className="w-[1198px] h-[250px] mt-15  relative">
  {/* Cards */}
  <div className="absolute top-[0px] left-[0px] space-x-5 flex justify-between w-full px-5">
    
    {/* Card 1 */}
    <div className="card1 w-[378px] h-[220px]  bg-white rounded-lg p-4 flex flex-col relative">
      {/* Image + Name + City */}
      <div className="flex items-center gap-4">
        <img
          src={card1}
          alt="Profile"
          className="w-[46px] h-[46px] rounded-full  object-cover object-top"
        />
        <div>
          <h2 className="text-lg font-semibold text-black">John Doe</h2>
          <p className="text-sm text-gray">Los Angeles, CA</p>
          {/* Stars under city */}
          <div className="flex mt-1 gap-1 text-yellow-400">
            ⭐⭐⭐⭐☆
          </div>
        </div>
      </div>
      {/* Paragraph at bottom */}
      <p className="text-sm text-gray-700 absolute bottom-4 left-4 right-4">
      Incredible service! They arrived on time, diagnosed the issue quickly, and fixed my leaking kitchen pipe in no time. Professional and efficient
      </p>
    </div>

    {/* Card 2 (Center Card) */}
    <div className="card2 w-[400px] h-[250px] top-[-13px] bg-white rounded-lg p-4 flex flex-col relative">
      {/* Image + Name + City */}
      <div className="flex items-center gap-4">
        <img
          src={card2}
          alt="Profile"
          className="w-[48px] h-[48px] rounded-full object-cover"
        />
        <div>
          <h2 className="text-lg font-semibold text-white">Emma R.</h2>
          <p className="text-sm text-gray">Chicago,IL</p>
          {/* Stars under city */}
          <div className="flex mt-1 gap-1 text-yellow-300">
            ⭐⭐⭐⭐⭐
          </div>
        </div>
      </div>
      {/* Paragraph at bottom */}
      <p className="text-sm text-gray-700 absolute bottom-8 left-4 right-4">
      My basement flooded due to a pipe burst, and their emergency response team was at my house within 30 minutes. Truly lifesaving service!
      </p>
    </div>

    {/* Card 3 */}
    <div className="card3 w-[378px] h-[220px] bg-white rounded-lg p-4 flex flex-col relative">
      {/* Image + Name + City */}
      <div className="flex items-center gap-4">
        <img
          src={card3}
          alt="Profile"
          className="w-[46px] h-[46px] rounded-full object-cover object-top"
        />
        <div>
          <h2 className="text-lg font-semibold text-black">Michael S.</h2>
          <p className="text-sm text-gray">New York, NY</p>
          {/* Stars under city */}
          <div className="flex mt-1 gap-1 text-yellow-400">
            ⭐⭐⭐⭐☆
          </div>
        </div>
      </div>
      {/* Paragraph at bottom */}
      <p className="text-sm text-gray-700 absolute bottom-4 left-4 right-4">
      I needed a water heater replacement, and they handled everything seamlessly. The technician explained everything clearly. Highly recommend!
      </p>
    </div>

  </div>
</div>
     <div className=' dot..... mx-auto flex justify-center '>
      .....
     </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
