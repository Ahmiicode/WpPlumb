import React, { useState } from 'react';
import contactimage from '../../assets/conatct.png';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/api/form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      if (data.success) {
        alert('Form submitted successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        alert('Error: ' + data.error);
      }
    } catch (error) {
      console.error('Submission failed:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div className='w-full bg-gray-100 py-16'>
      <div className='max-w-6xl mx-auto flex flex-col md:flex-row gap-8 px-4'>
        {/* Left Section */}
        <div className='md:w-1/2 flex flex-col gap-8'>
          <div className='space-y-4'>
            <h1 className='text-4xl font-bold text-gray-800'>Get in Touch</h1>
            <p className='text-gray-600 text-lg'>
              Have questions or need assistance? Fill out the form below, and our team will get back to you as soon as possible
            </p>
          </div>
          <div className='hidden md:block'>
            <img 
              src={contactimage} 
              className='w-full h-auto rounded-[10px] shadow-lg bg-white' 
              alt="Contact illustration" 
            />
          </div>
        </div>

        {/* Right Section - Form */}
        <div className='md:w-1/2'>
          <div className='rounded-xl shadow-xl p-8'>
            <form className='space-y-6' onSubmit={handleSubmit}>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>Your Name</label>
                <input 
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-amber-400 focus:border-transparent'
                  placeholder='Your Name'
                  required
                />
              </div>

              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>Your Email</label>
                <input 
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-amber-400 focus:border-transparent'
                  placeholder='your@example.com'
                  required
                />
              </div>

              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>Phone Number</label>
                <input 
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-amber-400 focus:border-transparent'
                  placeholder='+92 300 0000000'
                />
              </div>

              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>Subject</label>
                <input 
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-amber-400 focus:border-transparent'
                  placeholder='Consultation'
                />
              </div>

              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>Your Message</label>
                <textarea 
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-amber-400 focus:border-transparent'
                  placeholder='Any special requests or notes...'
                  required
                />
              </div>

              <button
                type="submit"
                className='w-full bg-amber-400 hover:bg-amber-500 text-black font-semibold py-3 px-4 rounded-lg transition-colors duration-200'
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
