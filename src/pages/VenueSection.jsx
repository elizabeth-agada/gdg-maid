import React from 'react';
import '../App.css';

function VenueSection() {
  return (
    <section id="venue" className="py-16 px-8 md:px-16 lg:px-32 bg-[#202124]">
      

      {/* Venue Heading */}
      <div className='font-google-sans'>
        <div className="flex justify-center items-center">
        <img src="/img/map-pin-range-line.png" alt="" className="h-8" />
        <h2 className="text-3xl text-center text-[#FFFFFF]">Venue</h2>
        </div>
        <div className="mt-8 flex flex-col items-center text-center max-w-xl text-[#FFFFFF] mx-auto">
          <h2 className="">Abdul Samad Rabiu International Center for Innovation and Entrepreneurship, University of Maiduguri</h2>
          <h2 className="">6th July, 2024 | 9:00 AM - 2:00 PM</h2>
        </div>
      </div>
    </section>
  );
}

export default VenueSection;
