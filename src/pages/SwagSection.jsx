import React from 'react';

const swagItems = [
  { id: 1, image: '/img/Frame 15 (3).png'},
  { id: 2, image: '/img/Frame 18 (1).png'},
  { id: 3, image: '/img/Frame 20.png'},
 
];

function SwagSection() {
  return (
    <section id="swag" className="py-16 px-8 md:px-16 lg:px-32  bg-[#EEEEEE]">
      

      {/* Swag Heading */}
      <div className=''>
        
        <h2 className="text-3xl text-[#202124] mt-10 text-left px-8">Swags</h2>
        <div className="md:flex m-4 md:max-w-7xl gap-3 md:mx-auto">
          {swagItems.map(item => (
            <div key={item.id} className="">
              <a href='#swag'>
              <img src={item.image} alt={item.name} className="w-full h-auto rounded-md" />
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
