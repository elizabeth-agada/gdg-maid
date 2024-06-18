import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faYoutube, faFacebookF } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="bg-[#EEEEEE] shadow-md py-4 font-google-sans">
      <div className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <img src="./img/logo/Logo.png" alt="Your Logo" className="h-8 mb-4 md:mb-0" />

          {/* Links */}
          <ul className="flex flex-col md:flex-row md:space-x-8 md:text-left mb-4 md:mb-0 text-left">
          <li>
              <a href="#topics" className="block text-gray-800 py-2 px-4 hover:text-[#428EFF] hover:underline">Topics</a>
            </li>
            <li>
              <a href="#speakers" className="block text-gray-800 py-2 px-4 hover:text-[#428EFF] hover:underline">Speakers</a>
            </li>
            <li>
              <a href="#swag" className="block text-gray-800 py-2 px-4 hover:text-[#428EFF] hover:underline">Swags</a>
            </li>
            <li>
              <a href="#venue" className="block text-gray-800 py-2 px-4 hover:text-[#428EFF] hover:underline">Venue</a>
            </li>
          </ul>

          {/* Social Media Icons */}
          <div className="flex space-x-4 py-2 px-4 border-t md:border-none">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-[#428EFF]">
              <FontAwesomeIcon icon={faXTwitter} size="xs" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-[#428EFF]">
              <FontAwesomeIcon icon={faYoutube} size="xs" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-[#428EFF]">
              <FontAwesomeIcon icon={faFacebookF} size="xs" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
