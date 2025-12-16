import React, { useState } from 'react';
import pricingData, { calculateTotal } from '../components/data/pricingData';

export default function BundleBuilder() {
  const [order, setOrder] = useState([]);
  const [tier, setTier] = useState(null);
  const [isPartner, setIsPartner] = useState(false);

  const addBundle = (bundleName) => {
    setOrder([...order, bundleName]);
  };

  const total = calculateTotal(order, tier, isPartner);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Dynamic Apron Bundle Builder</h1>

      <section>
        <h2>Select Bundles</h2>
        {Object.keys(pricingData.bundles).map((bundle) => (
          <button
            key={bundle}
            onClick={() => addBundle(bundle)}
            style={{ margin: '0.5rem' }}
          >
            {bundle} (${pricingData.bundles[bundle]})
          </button>
        ))}
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>Subscription Tier</h2>
        <select onChange={(e) => setTier(e.target.value)} defaultValue="">
          <option value="">None</option>
          {Object.keys(pricingData.discounts.subscription).map((tierName) => (
            <option key={tierName} value={tierName}>
              {tierName}
            </option>
          ))}
        </select>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>Partner Pricing</h2>
        <label>
          <input
            type="checkbox"
            checked={isPartner}
            onChange={(e) => setIsPartner(e.target.checked)}
          />
          Apply partner discount
        </label>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>Order Summary</h2>
        <p>Bundles selected: {order.join(', ') || 'None yet'}</p>
        <p>Total: ${total}</p>
      </section>
    </div>
  );
}