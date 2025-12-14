import React from 'react';
import './ItemModal.css';

export default function ItemModal({ item, onClose }) {
  if (!item) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>×</button>
        <img src={item.image} alt={item.name} className="modal-image" />
        <h2 className="modal-title">{item.name}</h2>
        <p className="modal-description">{item.description}</p>
        <p className="modal-price">${item.price.toFixed(2)}</p>
      </div>
    </div>
  );
}