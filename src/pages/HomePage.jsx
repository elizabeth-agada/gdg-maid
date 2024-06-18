import React from 'react';
import Navbar from '../components/Navbar'; 
import Hero from './Hero';
import Footer from '../components/Footer';
import SpeakerSection from './SpeakerSection';
import SwagSection from './SwagSection';
import PartnerSection from './PartnerSection';
import VenueSection from './VenueSection';
import '../App.css';

function HomePage() {
  return (
    <div className=''>
      <Navbar />
      <Hero />
      <SpeakerSection />
      <SwagSection />
      <PartnerSection />
      <VenueSection />
      <Footer />
    </div>
  );
}

export default HomePage;
