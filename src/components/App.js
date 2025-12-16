import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import BundleBuilder from './pages/BundleBuilder';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bundle" element={<BundleBuilder />} />
      </Routes>
    </Router>
  );
}