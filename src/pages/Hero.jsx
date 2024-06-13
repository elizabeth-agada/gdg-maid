import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 
import '../App.css';

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
    speed: 2000, // Set the speed of the transition
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 0, // Set to 0 for continuous scroll
    cssEase: 'linear', // Use linear easing for smooth scrolling
    centerMode: true,
    centerPadding: '50px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <section className="bg-[#EEEEEE] py-24 px-8 md:px-16 lg:px-32">
        <div className="max-w-3xl mx-auto text-center">
          <img src='/img/Frame 1.png' alt='I/O Extended' className='mx-auto' />
          <h2 className="font-bold text-[#202124] md:text-6xl mb-2 font-google-sans text-2xl stroke-black">
            Exploring AI
          </h2>
          <h1 className="text-xl md:text-3xl text-[#202124] md:mb-8 mb-4 font-google-sans">
            6th July, 2024 | 9:00 AM - 2:00 PM
          </h1>
          <img src='/img/Group 10.png' alt='sketch' className='mx-auto' />
        </div>

        <Slider {...settings}>
          {carouselImages.map((image, index) => (
            <div key={index} className="mt-10">
              <div className="bg-white rounded-lg shadow-md overflow-hidden mx-2">
                <img
                  src={image.image}
                  alt={`Carousel ${index}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </div>
  );
}

export default Hero;
