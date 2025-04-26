import React from 'react';
import { BiPhoneCall } from 'react-icons/bi';
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaYoutube } from 'react-icons/fa6';
import logo from '../assets/Logo Background.png'; // Assuming you have this logo image
import '../index.scss';

const HeaderAndNavbar = () => {
  return (
    <div className="w-[1440px] mx-auto ">
      {/* Topheader Section */}
      <div className="w-full h-[42px] flex items-center justify-between pl-[218px] pr-[218px] pt-[9px] pb-[9px]">
        <div className="w-[1200px] h-[42px] flex items-center justify-between">
          <div className="flex items-center gap-[40px] text-sm text-gray-800">
            {/* Phone */}
            <div className="flex items-center gap-2">
              <div className="icon-bg ">
                <BiPhoneCall size={14} />
              </div>
              <span className="font-semibold">+62 846 6444 222</span>
            </div>

            {/* Email */}
            <div className="flex items-center gap-2">
              <div className="icon-bg ">
                <h1>@</h1>
              </div>
              <span className="font-semibold">info@hiyourdomain.com</span>
            </div>
          </div>

          <div className="flex items-center gap-[40px]">
            {/* Follow Text */}
            <span className="text-sm font-medium text-gray-800">Follow us</span>

            <div className="flex items-center gap-[20px]">
              {/* Facebook Icon */}
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <div className="icon-bg ">
                  <FaFacebookF size={16} />
                </div>
              </a>

              {/* Instagram Icon */}
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <div className="icon-bg ">
                  <FaInstagram size={16} />
                </div>
              </a>

              {/* Youtube Icon */}
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <div className="icon-bg ">
                  <FaYoutube size={16} />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header Section */}
      <div className="w-full h-[100px] bg pt-[14px] pb-[14px] flex justify-center">
        <div className="w-[1200px] h-[48px] flex justify-between items-center">
          {/* Logo and Site Title */}
          <div className="flex items-center">
            <img src={logo} alt="WP-PLUMB Logo" className="w-[36.71px] h-[36.71px] mr-2" />
            <h1 className="text-2xl font-bold">WP-PLUMB</h1>
          </div>

          {/* Navbar and Button Section */}
          <div className="inline-flex items-center gap-[20px]">
            {/* Navbar Links */}
            <div className="w-[500px] h-[48px] gap-[40px] flex items-center">
              <a href="/">Home</a>
              <a href="/">About us</a>
              <a href="/">Service</a>
              <a href="/">Project</a>
              <a href="/">Contact</a>
            </div>

            {/* Book Now Button */}
            <div className="w-[220px] h-[48px]">
              <button className="button-yellow ">Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderAndNavbar;
