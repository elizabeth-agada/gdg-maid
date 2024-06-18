import React, { useState } from 'react';
import '../App.css';
import Popup from '../components/Popup';

const swagItems = [
  { id: 1, name: 'Shirt', price: 'N5,000', image: '/img/swag/Frame 15 .png', pic: '/img/swag/Frame 15 (2).png'},
  { id: 2, name: 'Tote Bag', price: 'N3,500', image: '/img/swag/Frame 18 (3).png', pic: '/img/swag/Frame 15 (3).png'},
  { id: 3, name: 'Jotter', price: 'N1,000', image: '/img/swag/Frame 20.png', pic: '/img/swag/Frame 15 (4).png'},
];


function SwagSection() {
  const [selectedSwag, setSelectedSwag] = useState(null);

  const handleSwagClick = (item) => {
    setSelectedSwag(item);
  };

  const closePopup = () => {
    setSelectedSwag(null);
  };

  return (
    <section id="swag" className="py-5 md:py-16 px-8 md:px-32 bg-[#EEEEEE]">
      <div className='space-y-10'>
        <h2 className="md:text-3xl text-xl text-[#202124] mt-10 text-left">Swags</h2>
        <div className="md:flex md:max-w-8xl gap-3 md:mx-auto space-y-5 md:space-y-0">
          {swagItems.map(item => (
            <div 
              key={item.id} 
              className="swag-item group relative overflow-hidden rounded-md" 
              onClick={() => handleSwagClick(item)}
            >
              <a href='#swag'>
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-auto transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:shadow-lg" 
                />
                
              </a>
            </div>
          ))}
        </div>
      </div>
      {selectedSwag && <Popup item={selectedSwag} onClose={closePopup} />}
    </section>
  );
}

export default SwagSection;
