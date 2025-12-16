import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Welcome to Dynamic Apron</h1>
      <p>Your Mediterranean-inspired meal prep experience starts here.</p>
      <Link to="/bundle">Go to Bundle Builder</Link>
    </div>
  );
}