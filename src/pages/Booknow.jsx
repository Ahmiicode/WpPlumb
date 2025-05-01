import React, { useState } from 'react';
import heroImage from '../assets/main.png';
import uprImage from '../assets/uper.png';

const Booknow = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    date: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/booknow', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      alert(result.message); // Show success or error message
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='w-full min-h-screen flex flex-col items-center bg-gray-50'>
      {/* Hero Section */}
      <div
        className="w-full h-88  md:h-96 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Booking Container */}
      <div className='w-full max-w-6xl flex flex-col md:flex-row -mt-60 md:-mt-80 px-4'>
        {/* Form Section */}
        <div className='w-full md:w-1/2 bg-white rounded-tl-xl rounded-bl-xl shadow-xl p-8'>
          <h1 className='text-3xl md:text-4xl font-bold mb-8'>
            Schedule Your Appointment
          </h1>
          
          <form className='space-y-6' onSubmit={handleSubmit}>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                Your Name
              </label>
              <input 
                type="text"
                name="name"
                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent'
                placeholder='Yours Name'
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                Your Email
              </label>
              <input 
                type="email"
                name="email"
                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent'
                placeholder='Yours@example.com'
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                Phone Number
              </label>
              <input 
                type="tel"
                name="phone"
                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent'
                placeholder='(555) 123-4567'
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Subject
                </label>
                <input 
                  type="text"
                  name="subject"
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent'
                  placeholder='Consultation'
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Date
                </label>
                <input 
                  type="date"
                  name="date"
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent'
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                Your Message
              </label>
              <textarea 
                name="message"
                rows="4"
                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent'
                placeholder='Any special requests or notes...'
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className='bg-amber-400 hover:bg-amber-500 text-black font-semibold py-3 px-4 rounded-lg transition-colors duration-200'
            >
              Confirm Your Booking
            </button>
          </form>
        </div>

        {/* Image Section */}
        <div className='w-full md:w-1/2 h-96 md:h-auto rounded-tr-xl rounded-br-xl shadow-xl overflow-hidden'>
          <img 
            src={uprImage}
            alt="Appointment"
            className='w-full h-full object-cover object-center'
          />
        </div>
      </div>
    </div>
  );
}

export default Booknow;
