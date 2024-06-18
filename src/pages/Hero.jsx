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
    speed: 2000,
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
          <img src='/img/icon/Frame 1.png' alt='I/O Extended' className='mx-auto' />
          <h2 className="font-bold text-[#202124] md:text-6xl mb-2 font-google-sans text-2xl stroke-black">
            Exploring AI
          </h2>
          <h1 className="text-lg md:text-3xl text-[#202124] md:mb-8 mb-4 font-google-sans">
            6th July, 2024 | 9:00 AM - 2:00 PM
          </h1>
          <img src='/img/icon/Group 10.png' alt='sketch' className='mx-auto mt-10 mb-0 h-full' />
        </div>

        <Slider {...settings}>
          {carouselImages.map((image, index) => (
            <div key={index} className="mt-10">
              <div className="bg-white shadow-md overflow-hidden mx-2">
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
      <div className="text-center p-5 md:p-12 px-10 md:px-0 bg-[#FFFFFF]">
          <h2 className="md:text-4xl mb-3 md:mb-5 font-google-sans text-2xl">Register today to attend</h2>
          <a href='https://gdg.community.dev/e/mwea6d/' className="bg-[#428EFF] text-white md:px-4 py-2 px-2 rounded-full hover:bg-blue-600 w-full md:w-auto">
          Reserve a seat
        </a>
        </div>
    </div>
  );
}

export default Hero;
