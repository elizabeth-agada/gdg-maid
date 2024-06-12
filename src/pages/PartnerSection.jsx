import React from 'react';

const partners = [
  { id: 1, image: '/img/Frame 15 (2).png'},
  { id: 2, image: '/img/Frame 16 (2).png'},
  
];

function PartnerSection() {
  return (
    <section id="partners" className="py-16 px-8 md:px-16 lg:px-32 bg-[#202124]">
     

      {/* Partners Heading */}
      <div>
        <h2 className="text-3xl  text-[#FFFFFF] mt-10 text-left px-8">Partners</h2>
        <div className="md:flex m-4 md:max-w-7xl gap-3 md:mx-auto">
          {partners.map(partner => (
            <div key={partner.id} className="m-4">
              <a href='#partners'>
              <img src={partner.image} alt={partner.name} className="w-full h-auto rounded-md" />
              <h3 className="text-xl font-semibold text-center mt-4">{partner.name}</h3>
              </a>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

export default PartnerSection;
