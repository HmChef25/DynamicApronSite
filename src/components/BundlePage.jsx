import React, { useState } from 'react';
import BundleBuilder from './BundleBuilder';
import bundleItems from '../data/bundleItems'; // Replace with your actual data

export default function BundlePage() {
  const [selectedIds, setSelectedIds] = useState([]);

  const handleSelect = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  const bundleFull = selectedIds.length >= 3;

  const selectedItems = bundleItems.filter((item) => selectedIds.includes(item.id));
  const subtotal = selectedItems.reduce((sum, item) => sum + item.price, 0);
  const discount = selectedItems.length === 3 ? 5 : selectedItems.length === 2 ? 2 : 0;
  const total = subtotal - discount;

  return (
    <div className="bundle-page">
      <BundleBuilder
        items={bundleItems.map((item) => ({
          ...item,
          selected: selectedIds.includes(item.id),
        }))}
        bundleFull={bundleFull}
        handleSelect={handleSelect}
      />

      <div className="bundle-summary">
        <h3>Bundle Summary</h3>
        <p>Selected: {selectedItems.length} / 3</p>
        <p>Subtotal: </p>
        <p>Discount: -</p>
        <h4>Total: </h4>
      </div>
    </div>
  );
}
