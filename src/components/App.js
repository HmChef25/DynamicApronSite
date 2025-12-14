import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import BundleBuilder from './pages/BundleBuilder';
import Mocktails from './pages/Mocktails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/bundle" element={<BundleBuilder />} />
        <Route path="/mocktails" element={<Mocktails />} />
      </Routes>
    </Router>
  );
}

export default App;