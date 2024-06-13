import React from 'react';

const partners = [
  { id: 1, image: '/img/Frame 15 (2).png'},
  { id: 2, image: '/img/Frame 16 (2).png'},
  
];

function PartnerSection() {
  return (
    <section id="partners" className="py-5 md:py-16 px-8 md:px-32 bg-[#202124]">
      <div className='space-y-8'>
        <h2 className="text-3xl text-[#FFFFFF] mt-10 text-left">Partners</h2>
        <div className="grid md:grid-cols-12 md:max-w-8xl gap-3 md:mx-auto">
          {partners.map(partner => (
            <div key={partner.id} className="col-span-6">
              <a href='#partners'>
              <img src={partner.image} alt={partner.name} className="w-full h-auto rounded-md" />
              </a>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

export default PartnerSection;
