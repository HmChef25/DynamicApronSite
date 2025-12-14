import React from 'react';
import PromoBanner from './PromoBanner';
import Navbar from './Navbar';
import Hero from './Hero';
import MocktailGallery from './MocktailGallery';
import BundleBuilder from './BundleBuilder';
import ContactForm from './ContactForm';
import Footer from './Footer';

function HomePage() {
  return (
    <div className="App">
      <PromoBanner />
      <Navbar />
      <Hero />
      <MocktailGallery />
      <BundleBuilder />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default HomePage;