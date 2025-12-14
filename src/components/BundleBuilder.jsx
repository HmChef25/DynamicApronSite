import React, { useState } from 'react';
import BundleItemCard from './BundleItemCard';
import ItemModal from './ItemModal';

export default function BundleBuilder({ items, bundleFull, handleSelect }) {
  const [previewItem, setPreviewItem] = useState(null);

  const handlePreview = (item) => {
    setPreviewItem(item);
  };

  const closePreview = () => {
    setPreviewItem(null);
  };

  return (
    <div className="bundle-builder">
      <h2>Select Your Items</h2>
      
      <div className="item-grid">
        {items.map((item) => (
          <BundleItemCard
            key={item.id}
            item={item}
            onSelect={handleSelect}
            onPreview={() => handlePreview(item)}
            disabled={bundleFull}
          />
        ))}
      </div>

      {/* Modal display */}
      {previewItem && (
        <ItemModal item={previewItem} onClose={closePreview} />
      )}
    </div>
  );
}