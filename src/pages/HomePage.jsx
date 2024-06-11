import React from 'react';
import Navbar from '../components/Navbar'; 
import Hero from './Hero';
import Footer from '../components/Footer';

function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}

export default HomePage;
