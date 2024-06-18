import React from 'react';
import '../App.css';

const speakers = [
  { id: 1, image: '/img/speaker/Frame 14.png'},
  { id: 2, image: '/img/speaker/Frame 15.png'},
  { id: 3, image: '/img/speaker/Frame 16.png'},
];

const panelists = [
  { id: 1, image: '/img/panelist/Frame 14 (2).png'},
  { id: 2, image: '/img/panelist/Frame 15 (1).png'},
  { id: 3, image: '/img/panelist/Frame 16 (1).png'},
  { id: 4, image: '/img/panelist/Frame 17.png'},
  { id: 5, image: '/img/panelist/Frame 18 (2).png'},
];

function SpeakerSection() {
  return (
    <section className="md:py-10 px-8 md:px-32 bg-[#202124] font-google-sans">
      {/* Moving Text */}
      <div className="overflow-hidden">
        <div id="topics" className="moving-text whitespace-nowrap text-[#FFFFFF] py-4 items-center text-2xl font-google-sans">
          <span className="inline-block animate-moveText">Android 15</span>
          <img src="/img/icon/Ellipse 5.png" alt="" className="h-5 px-5" />
          <span className="inline-block animate-moveText">⁠Security & AI</span>
          <img src="/img/icon/Ellipse 5.png" alt="" className="h-5 px-5" />
          <span className="inline-block animate-moveText">⁠Fireside Chat | IO Recap</span>
          <img src="/img/icon/Ellipse 5.png" alt="" className="h-5 px-5" />
          <span className="inline-block animate-moveText">AI for developers with Gemini in Android Studio</span>
        </div>
      </div>
      <div id="speakers" className="">
      {/* Speakers Heading */}
      <div className='space-y-10'>
        <h2 className="md:text-3xl text-xl text-[#FFFFFF] mt-10 text-left ">Speakers</h2>
        <div className="grid md:grid-cols-12 md:max-w-8xl gap-3 md:mx-auto">
          {speakers.map(speaker => (
            <div key={speaker.id} className="col-span-4">
              <img src={speaker.image} alt={`Speaker ${speaker.id}`} className="w-full h-auto rounded-md" />
            </div>
          ))}
        </div>
      </div>

      {/* Panelists Heading */}
      <div className='space-y-8'>
        <h2 className="md:text-3xl text-xl text-left text-[#FFFFFF] mt-20">Panelists</h2>
        <div className="grid md:grid-cols-12 md:max-w-8xl gap-3 md:mx-auto">
          {panelists.map(panelist => (
            <div key={panelist.id} className="col-span-4 mb-5">
              <img src={panelist.image} alt={`Panelist ${panelist.id}`} className="w-full h-auto rounded-md" />
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}

export default SpeakerSection;
