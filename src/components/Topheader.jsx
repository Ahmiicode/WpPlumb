import React, { useState } from 'react';
import { BiPhoneCall } from 'react-icons/bi';
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import logo from '../assets/Logo Background.png';
import '../index.scss';

const HeaderAndNavbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full mx-auto">
      {/* Top Header Section */}
      <div className="w-full bg-white py-3 px-4 md:px-8 lg:px-10">
        <div className="max-w-[1200px] mx-auto flex flex-row md:flex-row items-center justify-between gap-3 md:gap-0">
          
          {/* Contact Info */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-sm text-gray-800">
            <div className="flex items-center gap-2">
              <div className="icon-bg">
                <BiPhoneCall size={14} />
              </div>
              <span className="font-semibold">+62 846 6444 222</span>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="icon-bg">
                <span>@</span>
              </div>
              <span className="font-semibold">info@hiyourdomain.com</span>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex flex-col md:flex-row items-center gap-3 text-sm">
            <span className="font-medium">Follow us</span>
            <div className="flex items-center gap-3">
              {[
                { icon: <FaFacebookF size={16} />, link: 'https://facebook.com' },
                { icon: <FaInstagram size={16} />, link: 'https://instagram.com' },
                { icon: <FaYoutube size={16} />, link: 'https://youtube.com' },
              ].map((social, index) => (
                <a key={index} href={social.link} target="_blank" rel="noopener noreferrer">
                  <div className="icon-bg hover:bg-blue-100 transition-colors">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <nav className="w-full  bg shadow-sm">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 lg:px-10 py-3">
          <div className="flex items-center justify-between">
            
            {/* Logo Section */}
            <div className="flex items-center gap-2">
              <img 
                src={logo} 
                alt="WP-PLUMB Logo" 
                className="w-9 h-9 md:w-10 md:h-10"
              />
              <h1 className="text-xl md:text-2xl font-bold whitespace-nowrap">
                WP-PLUMB
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {['Home', 'About us', 'Service', 'Project', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href="/" 
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Desktop Button */}
            <button className="button-yellow hidden lg:block px-6 py-2">
              Book Now
            </button>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-2xl p-2"
              onClick={() => setOpen(!open)}
            >
              ☰
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`lg:hidden bg-white overflow-hidden transition-all duration-300 ${open ? 'max-h-96' : 'max-h-0'}`}>
        <div className="flex flex-col items-center gap-4 py-4">
          {['Home', 'About us', 'Service', 'Project', 'Contact'].map((item) => (
            <a 
              key={item} 
              href="/" 
              className="text-gray-700 hover:text-blue-600"
              onClick={() => setOpen(false)}
            >
              {item}
            </a>
          ))}
          <button className="button-yellow mt-2 px-6 py-2">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderAndNavbar;
