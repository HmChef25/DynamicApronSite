import React from 'react';
import './ItemModal.css';

export default function ItemModal({ item, onClose }) {
  if (!item) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={item.image} alt={item.name} />
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <p><strong>\</strong></p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
