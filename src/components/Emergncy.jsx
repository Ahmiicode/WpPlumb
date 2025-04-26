import React from 'react';
import '../index.scss';

const Emergncy = () => {
  return (
    <div className="w-full max-w-[1440px] h-[555px] mx-auto relative">
      <div className="w-full h-[389px] emergncy-bck absolute top-[80px]">
        <div className="w-[733px] h-[190px] absolute top-[110px] left-[120px]">
          <div className="w-full h-[108px] gap-[12px] text-white">
            <h3 className="font-roboto font-semibold text-[35px] leading-[120%] mb-3 tracking-[0%]">
              Fast, Reliable, and Always Ready to Help
            </h3>
            <p className="font-roboto font-light text-[15px] leading-[150%] tracking-[0%]">
              Plumbing <span className="font-medium">emergencies</span> can happen anytime, and quick action is crucial to prevent damage. Our expert team is available 24/7 to handle urgent repairs and restore your plumbing system efficiently.
            </p>
          </div>

          {/* Hotline + Button */}
          <div className="w-[508px] h-[50px] mt-8 flex gap-6 items-center">
            {/* Hotline Box */}
            <div className="flex items-center bg-white w-[340px] h-[50px] gap-[10px] rounded-[4px] px-[7px]">
              <div className="bg w-[210px] h-[40px] rounded-[2px] px-[20px] py-[4px]">
                <h1 className="mt-1">Emergency Hotline</h1>
              </div>
              <span className="font-roboto font-semibold text-[22px] ml-4 leading-[140%]">784392</span>
            </div>

            {/* Call Now Button */}
            <div className="bg-[#FFC107] w-[144px] h-[48px] rounded-[4px] flex items-center justify-center">
              <button className="w-full h-full text-black font-bold">Call Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Emergncy;

