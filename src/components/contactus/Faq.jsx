import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const questions = [
    {
      question: "What types of plumbing services do you offer?",
      answer: "We provide a full range of plumbing services, including leak detection, drain cleaning, water heater repair, pipe replacement, and emergency plumbing."
    },
    {
      question: "Do you offer 24/7 emergency plumbing services?",
      answer: "Yes, we offer 24/7 emergency plumbing services to address urgent issues promptly."
    },
    {
      question: "How quickly can you respond to an emergency call?",
      answer: "Our team aims to respond within 60 minutes of your call for emergency services."
    },
    {
      question: "Are your plumbers licensed and insured?",
      answer: "All our plumbers are fully licensed and insured for your protection and peace of mind."
    }
  ];

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='w-full flex justify-center py-8 md:py-16 bg-gray-50 px-4 sm:px-8'>
      <div className='w-full max-w-screen-xl flex flex-col gap-8 md:gap-12'>
        {/* Title Section */}
        <div className='py-8 md:py-12 rounded-xl'>
          <div className='text-center max-w-2xl mx-auto'>
            <div className='flex items-center justify-center gap-4 mb-4'>
              <span className='w-8 md:w-16 border-t-2 border-gray-300' />
              <h1 className='text-2xl font-bold text-gray-300 mb-4'>FAQs</h1>
              <span className='w-8 md:w-16 border-t-2 border-gray-300' />
            </div>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-semibold text-[#4a4a4a]'>
              Answers to Your Plumbing Questions
            </h2>
          </div>
        </div>

        {/* FAQ Content */}
        <div className='flex flex-col md:flex-row gap-4 md:gap-8'>
          {/* Categories Sidebar */}
          <div className='w-full md:w-1/4 space-y-4 flex md:block overflow-x-auto pb-4'>
            <div className='flex md:flex-col gap-4 md:gap-0'>
              {["General Questions", "Emergency Services", "Pricing & Payments", "Repairs & Maintenance", "Installations & Upgrades"].map((category, i) => (
                <p key={i} className='font-semibold text-[#838383] cursor-pointer hover:text-black whitespace-nowrap'>
                  {category}
                </p>
              ))}
            </div>
          </div>

          {/* Questions Column */}
          <div className='w-full md:w-3/4 space-y-4'>
            {questions.map((q, index) => (
              <div key={index} className='border-b border-gray-200 pb-4'>
                <button 
                  className='flex justify-between items-center w-full text-left group'
                  onClick={() => toggleQuestion(index)}
                >
                  <h1 className='text-xl md:text-2xl font-semibold text-[#666666] group-hover:text-[#4a4a4a] transition-colors pr-4'>
                    {q.question}
                  </h1>
                  {activeIndex === index ? (
                    <FaMinus className='text-gray-500 ml-4 flex-shrink-0' />
                  ) : (
                    <FaPlus className='text-gray-500 ml-4 flex-shrink-0' />
                  )}
                </button>
                {activeIndex === index && (
                  <p className='mt-4 text-[#838383] animate-fade-in text-base md:text-lg'>
                    {q.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;