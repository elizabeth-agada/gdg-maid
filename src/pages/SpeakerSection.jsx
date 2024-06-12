import React from 'react';
import '../App.css';

const speakers = [
  { id: 1, image: '/img/Frame 14.png'},
  { id: 2, image: '/img/Frame 15.png'},
  { id: 3, image: '/img/Frame 16.png'},
];

const panelists = [
  { id: 1, image: '/img/Frame 14 (1).png'},
  { id: 2, image: '/img/Frame 15 (1).png'},
  { id: 3, image: '/img/Frame 16 (1).png'},
  { id: 4, image: '/img/Frame 17.png'},
  { id: 5, image: '/img/Frame 18.png'},
];

function SpeakerSection() {
  return (
    <section id="speakers" className="py-16 px-8 md:px-16 lg:px-32 bg-[#202124]">
      {/* Moving Text */}
      <div className="overflow-hidden">
        <div className="moving-text whitespace-nowrap text-[#FFFFFF] py-4 items-center text-2xl">
          <span className="inline-block animate-moveText">Android 15</span>
          <img src="/img/Ellipse 5.png" alt="" className="h-5 px-5" />
          <span className="inline-block animate-moveText">⁠Security & AI</span>
          <img src="/img/Ellipse 5.png" alt="" className="h-5 px-5" />
          <span className="inline-block animate-moveText">⁠Fireside Chat | IO Recap</span>
          <img src="/img/Ellipse 5.png" alt="" className="h-5 px-5" />
          <span className="inline-block animate-moveText">AI for developers with Gemini in Android Studio</span>
        
        </div>
      </div>

      {/* Speakers Heading */}
      <div>
        <h2 className="text-3xl text-[#FFFFFF] mt-10 text-left px-8">Speakers</h2>
        <div className="mt-8 flex flex-wrap">
          {speakers.map(speaker => (
            <div key={speaker.id} className="m-4 max-w-xs">
              <img src={speaker.image} alt={speaker.name} className="w-full h-auto rounded-md" />
              <h3 className="text-xl font-semibold text-center mt-4">{speaker.name}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Panelists Heading */}
      <div>
        <h2 className="text-3xl text-left text-[#FFFFFF] mt-10 px-6">Panelists</h2>
        <div className="flex flex-wrap mt-8">
          {panelists.map(panelist => (
            <div key={panelist.id} className="m-4 max-w-xs">
              <img src={panelist.image} alt={panelist.name} className="w-full h-auto rounded-md" />
              <h3 className="text-xl font-semibold text-center mt-4">{panelist.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SpeakerSection;
