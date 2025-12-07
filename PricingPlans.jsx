import React from 'react';
import './PricingPlans.css'; // Optional: for styling

const plans = [
  {
    name: 'Starter',
    price: 49,
    meals: 5,
    perks: ['Single protein choice', 'Basic sides', 'No mocktails'],
    recommended: false,
  },
  {
    name: 'Balanced',
    price: 89,
    meals: 10,
    perks: ['Dual protein rotation', 'Premium sides', '1 mocktail add-on'],
    recommended: true,
  },
  {
    name: 'Premium',
    price: 129,
    meals: 15,
    perks: ['Full protein variety', 'Gourmet sides', '3 mocktail add-ons'],
    recommended: false,
  },
];

const PricingPlans = () => {
  return (
    <section className="pricing-section">
      <h2 className="pricing-title">Choose Your Bundle</h2>
      <div className="pricing-grid">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`pricing-card ${plan.recommended ? 'recommended' : ''}`}
          >
            <h3>{plan.name}</h3>
            <p className="price">${plan.price}</p>
            <p className="meals">{plan.meals} meals/week</p>
            <ul className="perks">
              {plan.perks.map((perk, index) => (
                <li key={index}>{perk}</li>
              ))}
            </ul>
            <button className="select-button">Select Plan</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingPlans;