import React, { useEffect } from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faPhone, faCopy } from '@fortawesome/free-solid-svg-icons';

function Popup({ item, onClose }) {

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      console.log('Copied to clipboard!');
    }, (err) => {
      console.error('Could not copy text: ', err);
    });
  };

  const handleContactAction = (phoneNumber) => {
    // Direct user to phone app with the number pre-filled
    window.location.href = `tel:${phoneNumber}`;
  };

  useEffect(() => {
    // Prevent background scrolling
    document.body.style.overflow = 'hidden';
    return () => {
      // Re-enable background scrolling when the popup is closed
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="popup-overlay overflow-y-scroll font-google-sans">
      <div className="popup">
        <button className="popup-close py-5 popup-section" onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <h2 className="popup-title font-google-sans">Want to be part of the IO extended experience? Get a ioExtended {item.name} for just {item.price}.</h2>
        <img src={item.pic} alt={item.name} className="popup-image h-full"/>
        <div className="popup-info space-y-4">
          <div className='flex justify-between bg-[#202124] text-[#FFFFFF] rounded-lg p-5'>
            <div className='font-google-sans'>
              <h3 className='text-2xl font-bold'>Contact</h3>
              <p className='text-sm'>Phone Number</p>
              <p className='text-lg'>09027736020</p>
            </div>
            <button onClick={() => handleContactAction('09027736020')} className="copy-button">
              <FontAwesomeIcon icon={faPhone} />
            </button>
          </div>
          <div className='flex justify-between bg-[#202124] text-[#FFFFFF] rounded-lg p-5'>
            <div className='font-google-sans'>
              <h3 className='text-xl font-bold'>Bank Transfer</h3>
              <p className='text-sm'>Bank Name</p>
              <p className="">Opay</p>
              <p className='text-sm'>Bank Account</p>
              <p className="">902773602</p>
              <p className='text-sm'>Account Name</p>
              <p className="">Fatima Ibrahim Muhammad</p>
            </div>
            <button onClick={() => copyToClipboard('Bank:Opay', 'Account No.:902773602', 'Account Name:Fatima Ibrahim Muhammad')} className="copy-button">
              <FontAwesomeIcon icon={faCopy} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;
