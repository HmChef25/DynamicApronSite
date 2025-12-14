import React from 'react';
import './BundleItemCard.css';

export default function BundleItemCard({ item, onSelect, onPreview, disabled }) {
  const { id, name, description, price, image, tags = [], selected } = item;

  return (
    <div
      className={`bundle-card ${selected ? 'selected' : ''} ${disabled ? 'disabled' : ''}`}
      style={{
        backgroundColor: '#fff',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
        overflow: 'hidden',
        maxWidth: '280px',
        transition: 'transform 0.3s ease',
        cursor: 'pointer',
        textAlign: 'left',
      }}
    >
      <img
        src={image}
        alt={name}
        style={{
          width: '100%',
          height: '220px',
          objectFit: 'cover',
          display: 'block',
        }}
      />

      <div style={{ padding: '1rem' }}>
        <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#2e7d32' }}>{name}</h4>
        <p style={{ fontSize: '0.9rem', color: '#555', marginBottom: '0.5rem' }}>{description}</p>
        <p style={{ fontSize: '0.85rem', color: '#444', fontWeight: '600', marginBottom: '0.5rem' }}>
          ${price.toFixed(2)}
        </p>

        {/* Tags */}
        {tags.length > 0 && (
          <div style={{ marginBottom: '0.5rem' }}>
            {tags.map((tag) => (
              <span
                key={tag}
                style={{
                  display: 'inline-block',
                  backgroundColor: '#e0f2f1',
                  color: '#00796b',
                  fontSize: '0.75rem',
                  padding: '4px 10px',
                  borderRadius: '20px',
                  marginRight: '6px',
                  marginBottom: '4px',
                  fontWeight: '500',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button
            onClick={() => onSelect(id)}
            disabled={disabled}
            style={{
              padding: '6px 12px',
              backgroundColor: selected ? '#b71c1c' : '#2c3e50',
              color: '#fff',
              border: 'none',
              borderRadius: '6px',
              fontSize: '0.85rem',
              cursor: disabled ? 'not-allowed' : 'pointer',
              flex: '1',
            }}
          >
            {selected ? 'Remove' : 'Add to Bundle'}
          </button>

          <button
            onClick={onPreview}
            style={{
              padding: '6px 12px',
              backgroundColor: '#4caf50',
              color: '#fff',
              border: 'none',
              borderRadius: '6px',
              fontSize: '0.85rem',
              cursor: 'pointer',
              flex: '1',
            }}
          >
            Preview
          </button>
        </div>
      </div>
    </div>
  );
}