import React, { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#EEEEEE] shadow-md fixed top-0 left-0 right-0 px-2 md:px-8 py-4 z-10">
      <div className="flex justify-between items-center">

        {/* Logo (Left) */}
        <img src="./img/logo/Logo.png" alt="Your Logo" className="h-4 md:h-8" />

        {/* Desktop Menu Items */}
        <ul className="md:flex md:space-x-8 hidden">
          <li className="border-t md:border-none">
            <a href="#speakers" className="block text-gray-800 py-2 px-4 hover:text-[#428EFF] hover:underline">Speakers</a>
          </li>
          <li className="border-t md:border-none">
            <a href="#swag" className="block text-gray-800 py-2 px-4 hover:text-[#428EFF] hover:underline">Swags</a>
          </li>
          <li className="border-t md:border-none">
            <a href="#venue" className="block text-gray-800 py-2 px-4 hover:text-[#428EFF] hover:underline">Venue</a>
          </li>
        </ul>

        {/* Button */}
      <div className="md:py-2 md:px-4 border-t md:border-none md:p-0 md:ml-8 mt-4 md:mt-0 text-center hidden md:block">
        <a href='https://gdg.community.dev/e/mwea6d/' className="bg-[#428EFF] text-white md:px-4 px-2 py-2 rounded-full hover:bg-blue-600 w-full md:w-auto">
          Reserve a seat
        </a>
      </div>

        {/* Mobile Menu Button */}
        <button
          className="text-gray-800 md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu Items */}
      <div className={`absolute top-14 left-0 w-full bg-[#EEEEEE] md:relative md:top-0 md:left-auto md:w-auto ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
        <ul className="block md:space-x-8 md:hidden">
          <li className="border-t md:border-none">
            <a href="#speakers" className="block text-gray-800 py-2 px-4 hover:text-[#428EFF]">Speakers</a>
          </li>
          <li className="border-t md:border-none">
            <a href="#swag" className="block text-gray-800 py-2 px-4 hover:text-[#428EFF]">Swags</a>
          </li>
          <li className="border-t md:border-none">
            <a href="#venue" className="block text-gray-800 py-2 px-4 hover:text-[#428EFF]">Venue</a>
          </li>
        </ul>
        <div className="md:py-2 md:px-4 border-t md:border-none md:p-0 md:ml-8 mt-4 md:mt-0 text-center mb-5 px-10 md:hidden">
        <a href='https://gdg.community.dev/e/mwea6d/' className="bg-[#428EFF] text-white md:px-4 px-2 py-2 rounded-full hover:bg-blue-600 w-full md:w-auto">
          Reserve a seat
        </a>
      </div>
      </div>

    </nav>
  );
}

export default Navbar;
