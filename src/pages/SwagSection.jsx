import React from 'react';
import '../App.css';

const swagItems = [
  { id: 1, image: '/img/Frame 15 (3).png'},
  { id: 2, image: '/img/Frame 18 (1).png'},
  { id: 3, image: '/img/Frame 20.png'},
];

function SwagSection() {
  return (
    <section id="swag" className="py-5 md:py-16 px-8 md:px-32 bg-[#EEEEEE]">
      <div className='space-y-8'>
        <h2 className="text-3xl text-[#202124] mt-10 text-left">Swags</h2>
        <div className="md:flex md:max-w-8xl gap-3 md:mx-auto">
          {swagItems.map(item => (
            <div key={item.id} className="swag-item group relative overflow-hidden rounded-md">
              <a href='#swag'>
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-auto transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:shadow-lg" 
                />
                <h3 className="text-xl font-semibold text-center mt-4">{item.name}</h3>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SwagSection;
