import React from 'react'
import heroImage from '../../assets/contactbg.png'

const Herosection = () => {
  return (
    
         <div className='w-full relative overflow-hidden'>
      {/* Background Image Section */}
      <div 
        className="w-full h-64 md:h-96 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-blue-900/60" />
        {/* Content Overlay */}
        <div className='absolute inset-0  bg-opacity-40 flex items-center justify-center'>
          <div className='max-w-4xl w-full px-4 text-center'>
            {/* Title Section */}
            <div className='flex items-center justify-center gap-4 mb-4'>
              <span className='w-8 md:w-16 border-t-2 border-gray-300' />
              <h1 className=' text-xl md:text-3xl font-medium text-white'>
                Contact us
              </h1>
              <span className='w-8 md:w-16 border-t-2 border-gray-300' />
            </div>

            {/* Subheading */}
            <h2 className=' text-2xl md:text-5xl font-semibold text-white mb-4'>
              Get in Touch with us
            </h2>

            {/* Description */}
            <p className='text-sm md:text-base text-gray-200 mb-8 mx-auto max-w-2xl leading-relaxed'>
              Whether you have a question, need assistance, or want to request a service, 
              we're here to help. Reach out today!
            </p>

            {/* CTA Button */}
            <button className='px-8 py-3 bg-yellow-500 text-black rounded-lg hover:bg-gray-100 transition-colors duration-200 text-sm md:text-base font-medium'>
              Book now
            </button>
          </div>
        </div>
      </div>
  
    </div>
  )
}

export default Herosection
