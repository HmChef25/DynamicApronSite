// MocktailGallery.jsx
import React, { useState } from 'react';
import './MocktailGallery.css';

const mocktails = [
  "berry-citrus", "blueberry-sage", "citrus-bloom", "coconut-mojito",
  "cucumber-mint", "fig-basil", "ginger-pomegranate", "herbal-haze",
  "lemon-thyme", "melon-ginger", "orange-rosemary", "peach-lavender",
  "pineapple-sage", "sunset-saffron"
];

export default function MocktailGallery({ onSelect }) {
  const [selected, setSelected] = useState(null);

  return (
    <div className="mocktail-gallery">
      {mocktails.map(name => (
        <div key={name} className="mocktail-card" onClick={() => setSelected(name)}>
          <img src={`/images/mocktails/${name}.jpg`} alt={name} />
          <p>{name.replace(/-/g, ' ')}</p>
        </div>
      ))}

      {selected && (
        <div className="mocktail-modal" onClick={() => setSelected(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <img src={`/images/mocktails/${selected}.jpg`} alt={selected} />
            <h2>{selected.replace(/-/g, ' ')}</h2>
            <button onClick={() => { onSelect(selected); setSelected(null); }}>
              Add to Bundle
            </button>
          </div>
        </div>
      )}
    </div>
  );
}