import React from 'react'
import '../index.scss';
import logo from '../assets/Logo background.png'
import work1 from '../assets/work1.png'
import work2 from '../assets/work2.png'
import work3 from '../assets/work3.png'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-[1440px] bg h-[490px] relative mx-auto'>
      <div className='w-[1125px] h-[341.12px] absolute top-[40px]   left-[168px]  gap-[60px]'>
        <div className='w-[496px] h-[86.12px] justify-center mx-auto gap-3'>
          <div className='justify-center flex mx-auto'>
            <h1 className='text-4xl font-bold flex'> <img src={logo} className='mr-2' alt="" />WP-PLumb</h1>
          </div>
          <div className='justify-center flex mt-3 mx-auto'>
            <p className='font-roboto font-normal text-xl leading-[140%] tracking-[0%]'>Flowing Towards a Better <span className='text-[#FFC107] font-bold'>Tomorrow,</span> <span className='text-[#FFC107] font-bold'>Togetherspan.</span></p>
          </div>
        </div>
        <div className='w-[1125px] mt-15 h-[195px] gap-[130px]'>
        <div className="max-w-[1125px] mx-auto flex flex-wrap gap-[140px] h-[196px]">

{/* Column 1: 8 Quick Links with yellow arrow */}
<div className="flex flex-col gap-1">
  <h3 className="text-sm font-semibold mb-2">Quick Links</h3>
  {['Home', 'About Us', 'Services', 'Projects', 'Contact Us', 'FAQs', 'Testimonials', 'Get a Quote'].map((item, index) => (
    <div key={index} className="flex items-center gap-1 text-xs">
      <span className="text-yellow-400">&lt;&lt;</span>
      <a href="#" className="hover:underline">{item}</a>
    </div>
  ))}
</div>

{/* Column 2: 8 Service Links WITH yellow arrows */}
<div className="flex flex-col gap-1">
  <h3 className="text-sm font-semibold mb-2">Our Services</h3>
  {['Leak Detection', 'Drain Cleaning', 'Pipe Replacement', 'Sewer Line Repair', 'Water Heater Installation', 'Emergency Plumbing', 'Bathroom Remodeling', 'Kitchen Remodeling'].map((item, index) => (
    <div key={index} className="flex items-center gap-1 text-xs">
      <span className="text-yellow-400">&lt;&lt;</span>
      <a href="#" className="hover:underline">{item}</a>
    </div>
  ))}
</div>

{/* Column 3: 3 Project Cards */}
<div className="flex flex-col gap-2">
  <h3 className="text-sm font-semibold mb-2">Our Projects</h3>
  {[
    { name: 'AquaLine Solutions', image: work1 },
    { name: 'FlowFix Experts', image: work2 },
    { name: 'PlumbCare Pro', image: work3 },
  ].map((project, index) => (
    <div key={index} className="flex items-start gap-2">
      <img src={project.image} alt={project.name} className="rounded-sm w-15 h-10" />
      <div>
        <h4 className="font-semibold text-xs">{project.name}</h4>
        <div className="flex items-center text-yellow-400 text-xs">
          ★★★★☆ <span className='text-white ml-2'>5.0</span>
        </div>
      </div>
    </div>
  ))}
</div>



{/* Column 4: Contact Information */}

<div className="flex flex-col gap-2">
  <h3 className="text-sm font-semibold mb-2">Contact Us</h3>

  <div className="flex items-center gap-2 text-xs">
    <FiMail className="text bg-white rounded-full p-1 w-5 h-5" />
    hi@yourdomain.com
  </div>

  <div className="flex items-center gap-2 text-xs">
    <FiPhone className="text bg-white rounded-full p-1 w-5 h-5" />
    +62 864 6444 2222
  </div>

  <div className="flex items-center gap-2 text-xs">
    <FiMapPin className="text bg-white rounded-full p-1 w-5 h-5" />
    123 Plumbing Street, Flow City, CA 12345
  </div>
  <div className='mt-4 '>
    <p className='text-sm'>Social Media icons</p>
  </div>

  <div className="flex gap-3 mt-1 ">
    <a href="#"><FaFacebookF className="text bg-white rounded-full p-2 w-8 h-8" /></a>
    <a href="#"><FaInstagram className="text bg-white rounded-full p-2 w-8 h-8" /></a>
    <a href="#"><FaLinkedinIn className="text bg-white rounded-full p-2 w-8 h-8" /></a>
  </div>
</div>
</div>
        </div>
      </div>
      <div className='absolute text-black  bg-white w-[1440px] h-[40px] top-[450px]'>
        <div className='justify-center mx-auto flex mt-2'>
          <p className='text-[14px]'>© 2025 FlowPro. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
