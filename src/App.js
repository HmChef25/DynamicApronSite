import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PromoBanner from "./components/PromoBanner";
import MocktailGallery from "./components/MocktailGallery";
import BundleBuilder from "./components/BundleBuilder";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <PromoBanner />
      <MocktailGallery />
      <BundleBuilder />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;