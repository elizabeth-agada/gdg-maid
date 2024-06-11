import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; // Import Slick CSS files
import SpeakerSection from './SpeakerSection';

function Hero() {
  const carouselImages = [
    {
      image: "/img/Frame 9.png",
    },

    {
      image: "/img/Frame 11.png",
    },

    {
      image: "/img/Frame 12.png",
    },
    {
      image: "/img/Frame 10.png",
    }
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,    // Enable center mode
    centerPadding: '50px', // Adjust padding as needed
    responsive: [ // Add responsive settings
    
      {
        breakpoint: 1024, // Adjust breakpoint for smaller screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640, // Adjust breakpoint for mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  return (
    <div className="min-h-screen">
  
      {/* Hero Section */}
      <section className="bg-[#EEEEEE] py-24 px-8 md:px-16 lg:px-32">
        <div className="max-w-3xl mx-auto text-center">
          <img src='/img/Frame 1.png' alt='I/O Extended' className='mx-auto' />
          <p className="text-lg font-medium text-[#202124] md:text-xl mb-10">
            Exploring AI
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-[#202124] mb-8">
            6th July, 2024 | 9:00 AM - 2:00 PM
          </h1>
          <img src='/img/Group 10.png' alt='sketch' className='mx-auto' />
        </div>

        <Slider {...settings}>
          {carouselImages.map((initiative, index) => (
            <div key={index} className="">
              <a href={initiative.link} className="block"> {/* Wrap the entire card content in an anchor tag */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden mx-2">
                  <img
                    src={initiative.image}
                    alt={initiative.title}
                    className="w-full h-12 md:h-48 object-cover"
                  />
                  <div className="text-left">
                    <h3 className="md:text-xl font-bold mb-2">{initiative.title}</h3>
                    
                  </div>
                </div>
              </a>
            </div>
          ))}
        </Slider>
      </section>
      <SpeakerSection />
      </div>

      

   
     

    
  );
}

export default Hero;
