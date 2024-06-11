import React, { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#EEEEEE] shadow-md fixed top-0 left-0 right-0 px-8 py-4 z-10">
      <div className="flex justify-between items-center">

        {/* Logo (Left) */}
        <img src="./img/Logo.png" alt="Your Logo" className="h-8" />

        <ul className="md:flex md:space-x-8 hidden">
            <li className="border-t md:border-none">
              <a href="#speakers" className="block text-gray-800 py-2 px-4 hover:text-[#428EFF] hover:underline">Speakers</a>
            </li>
            <li className="border-t md:border-none">
              <a href="#swags" className="block text-gray-800 py-2 px-4 hover:text-[#428EFF] hover:underline">Swags</a>
            </li>
            <li className="border-t md:border-none">
              <a href="#venue" className="block text-gray-800 py-2 px-4 hover:text-[#428EFF] hover:underline">Venue</a>
            </li>
          </ul>


        {/* Mobile Menu Button */}
        <button
          className="text-gray-800 md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>

        {/* Menu Items (Center - Hidden on Mobile) */}
        <div className={`absolute top-16 left-0 w-full bg-[#EEEEEE] md:relative md:top-0 md:left-auto md:w-auto md:flex md:justify-center md:items-center ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
        <ul className="block md:space-x-8 md:hidden">
            <li className="border-t md:border-none">
              <a href="#speakers" className="block text-gray-800 py-2 px-4 hover:text-[#428EFF]">Speakers</a>
            </li>
            <li className="border-t md:border-none">
              <a href="#swags" className="block text-gray-800 py-2 px-4 hover:text-[#428EFF]">Swags</a>
            </li>
            <li className="border-t md:border-none">
              <a href="#venue" className="block text-gray-800 py-2 px-4 hover:text-[#428EFF]">Venue</a>
            </li>
          </ul>

          
          {/* Button (Right) */}
          <div className="py-2 px-4 border-t md:border-none md:p-0 md:ml-8">
            <button className="bg-[#428EFF] text-white px-4 py-2 rounded-full hover:bg-blue-600 w-full md:w-auto">
              Reserve a seat
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
