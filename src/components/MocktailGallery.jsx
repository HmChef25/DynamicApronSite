import React, { useState } from 'react';
import './MocktailGallery.css'; // Optional: for styling

const mocktails = [
  { name: 'Lemon Thyme Spark', price: 12, image: 'images/lemon-thyme-spark.jpg', description: 'Bright lemon zest meets earthy thyme with a touch of honey.' },
  { name: 'Fig Basil Boost', price: 14, image: 'images/fig-basil-boost.jpg', description: 'Deep fig notes layered with basil and a hint of balsamic.' },
  { name: 'Blueberry Sage Drift', price: 13, image: 'images/blueberry-sage-drift.jpg', description: 'Gentle blueberry meets aromatic sage, lightly sweetened with agave.' },
  { name: 'Strawberry Rose Lift', price: 13, image: 'images/strawberry-rose-lift.jpg', description: 'Juicy strawberries with a touch of rose water for a fragrant lift.' },
  { name: 'Cucumber Mint Clarity', price: 13, image: 'images/cucumber-mint-clarity.jpg', description: 'Cool cucumber and vibrant mint, lightly sweetened with honey.' },
  { name: 'Pineapple Sage Spritz', price: 13, image: 'images/pineapple-sage-spritz.jpg', description: 'Tropical pineapple and aromatic sage in a crisp fusion.' }
];

export default function MocktailGallery() {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelect = (item) => {
    setSelectedItems((prev) => {
      if (prev.includes(item)) {
        return prev.filter((i) => i !== item);
      } else {
        return [...prev, item];
      }
    });
  };

  const totalPrice = selectedItems.reduce((sum, item) => sum + item.price, 0);

  let discount = 0;
  if (selectedItems.length >= 5) {
    discount = 0.15;
  } else if (selectedItems.length >= 3) {
    discount = 0.10;
  }

  const discountedTotal = totalPrice * (1 - discount);

  return (
    <div className="mocktail-gallery">
      <h2>Mocktail Add-On Gallery</h2>
      <div className="card-grid">
        {mocktails.map((item, index) => (
          <div
            className={`card ${selectedItems.includes(item) ? 'selected' : ''}`}
            key={index}
            onClick={() => handleSelect(item)}
          >
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p className="price">${item.price}</p>
            <button>
              {selectedItems.includes(item) ? 'Remove from Bundle' : 'Add to Bundle'}
            </button>
          </div>
        ))}
      </div>

      <div className="bundle-summary-box">
        <h3>Bundle Summary</h3>
        <p>Items Selected: {selectedItems.length}</p>
        <p>Total Price: ${totalPrice.toFixed(2)}</p>
        <p>Discount: {discount * 100}%</p>
        <p><strong>Final Price: ${discountedTotal.toFixed(2)}</strong></p>
      </div>
    </div>
  );
}