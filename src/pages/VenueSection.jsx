import React from 'react';
import '../App.css';

function VenueSection() {
  return (
    <section id="venue" className="py-16 px-8 md:px-16 lg:px-32 bg-[#202124] pb-20 relative">
      
      {/* Venue Heading */}
      <div className='font-google-sans'>
        <div className="flex justify-center items-center">
          <img src="/img/icon/map-pin-range-line.png" alt="Venue Icon" className="h-8" />
          <h2 className="md:text-3xl text-center text-[#FFFFFF]">Venue</h2>
        </div>
        <div className="flex flex-col items-center text-center md:max-w-xl text-[#FFFFFF] mx-auto text-sm md:text-xl mt-4">
          <h2>Abdul Samad Rabiu International Center for Innovation and Entrepreneurship, University of Maiduguri</h2>
          <h2>6th July, 2024 | 9:00 AM - 2:00 PM</h2>
        </div>
        {/* Venue Image */}
      <img src='/img/icon/Group 0.png' alt='sketch' className='mx-auto mt-10 mb-0 h-full stretch-img md:max-w-3xl' />

      </div>
      
      
    </section>
  );
}

export default VenueSection;
