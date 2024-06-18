import React, { useEffect } from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faPhone, faCopy } from '@fortawesome/free-solid-svg-icons';

function Popup({ item, onClose }) {

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert('Copied to clipboard!');
    }, (err) => {
      console.error('Could not copy text: ', err);
    });
  };

  const handleContactAction = (phoneNumber) => {
   
    alert(`Calling ${phoneNumber}...`);
   
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
    <div className="popup-overlay overflow-y-scroll">
      <div className="popup">
        <button className="popup-close" onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <h2 className="popup-title">Want to be part of the IO extended experience? Get a ioExtended {item.name} for just {item.price}.</h2>
        <img src={item.pic} alt={item.name} className="popup-image h-full"/>
        <div className="popup-info space-y-4">
          <div className='flex justify-between bg-[#202124] text-[#FFFFFF] rounded-lg p-5'>
            <div>
              <h3 className='text-2xl font-bold'>Contact</h3>
              <p className='text-sm'>Phone Number</p>
              <p className='text-lg'>09027736020</p>
            </div>
            <button onClick={() => handleContactAction('09027736020')} className="copy-button">
              <FontAwesomeIcon icon={faPhone} />
            </button>
          </div>
          <div className='flex justify-between bg-[#202124] text-[#FFFFFF] rounded-lg p-5'>
            <div>
              <h3 className='text-xl font-bold'>Bank Transfer</h3>
              <p className='text-sm'>Bank Name</p>
              <p className="">Opay</p>
              <p className='text-sm'>Bank Account</p>
              <p className="">902773602</p>
              <p className='text-sm'>Account Name</p>
              <p className="">Fatima Ibrahim Muhammad</p>
            </div>
            <button onClick={() => copyToClipboard('902773602')} className="copy-button">
              <FontAwesomeIcon icon={faCopy} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;
