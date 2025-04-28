import React from 'react';
import '../index.scss';

const Emergncy = () => {
  return (
    <div className="w-full min-h-[555px] relative">
      {/* Background Section */}
      <div className="w-full h-full lg:h-[389px] emergncy-bck absolute lg:top-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="w-full lg:w-[733px] pt-20 lg:pt-[110px] lg:left-[120px] relative">
            {/* Text Content */}
            <div className="text-white mb-8 lg:mb-12">
              <h3 className="text-2xl lg:text-[35px] font-semibold leading-tight mb-4">
                Fast, Reliable, and Always Ready to Help
              </h3>
              <p className="text-sm lg:text-[15px] leading-relaxed">
                Plumbing <span className="font-medium">emergencies</span> can happen anytime, and quick action is crucial to prevent damage. Our expert team is available 24/7 to handle urgent repairs and restore your plumbing system efficiently.
              </p>
            </div>

            {/* Hotline + Button */}
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-start lg:items-center">
              {/* Hotline Box */}
              <div className="w-full lg:w-[340px] bg-white h-12 lg:h-[50px] rounded flex items-center p-1">
                <div className="bg h-full flex items-center px-4 lg:px-5 rounded-sm">
                  <span className="text-sm lg:text-base">Emergency Hotline</span>
                </div>
                <span className="text-xl text lg:text-[22px] font-semibold ml-14 lg:ml-12">784392</span>
              </div>

              {/* Call Now Button */}
              <button className="w-full lg:w-[144px] h-12 lg:h-[48px] bg-[#FFC107] rounded-sm text-black font-bold ">
                Call Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Emergncy;
