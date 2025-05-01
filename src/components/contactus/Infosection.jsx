import React from 'react'
import { MdLocationOn, MdPhone, MdEmail, MdAccessTime } from 'react-icons/md'
import "../../index.scss";

// Alternatively using Heroicons:
// import { MapPinIcon, PhoneIcon, EnvelopeIcon, ClockIcon } from '@heroicons/react/24/outline'

const Infosection = () => {
  return (
    <section className='w-full py-16 bg-gray-50'>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14'>
          {/* Address Card */}
          <div className="bg-white mb-10 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className='flex flex-col items-center text-center gap-6'>
              <div className='w-16 h-16 md:w-24 md:h-24 bg  flex items-center justify-center'>
                <MdLocationOn className="w-14 h-14 text-white" />
              </div>
              <p className='text-gray-600 text-sm md:text-base'>
                1234 Business Avenue, Suite 567, New York, NY 10001
              </p>
            </div>
          </div>

          {/* Phone Card */}
          <div className="bg-white p-6 mb-10 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className='flex flex-col items-center text-center gap-6'>
              <div className='w-16 h-16 md:w-24 md:h-24 bg  flex items-center justify-center'>
                <MdPhone className="w-14 h-14 text-white" />
              </div>
              <p className='text-gray-600 text-sm md:text-base'>
                +1 (555) 123-4567
              </p>
            </div>
          </div>

          {/* Email Card */}
          <div className="bg-white mb-10 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className='flex flex-col items-center text-center gap-6'>
              <div className='w-16 h-16 md:w-24 md:h-24 bg  flex items-center justify-center'>
                <MdEmail className="w-14 h-14 text-white" />
              </div>
              <p className='text-gray-600 text-sm md:text-base'>
                support@company.com
              </p>
            </div>
          </div>

          {/* Hours Card */}
          <div className="bg-white mb-10 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className='flex flex-col items-center text-center gap-6'>
              <div className='w-16 h-16 md:w-24 md:h-24 bg  flex items-center justify-center'>
                <MdAccessTime className="w-14 h-14 text-white" />
              </div>
              <p className='text-gray-600 text-sm md:text-base'>
                Monday - Friday: 14:00 AM - 7:00 PM<br />
                Saturday - Sunday: 9:00 AM - 4:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Infosection