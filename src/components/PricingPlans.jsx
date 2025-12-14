import React from 'react';
import './PricingPlans.css';

const plans = [
  {
    title: 'Starter',
    price: '$29',
    features: ['3 meals/week', 'Standard ingredients', 'Email support'],
    highlight: false,
  },
  {
    title: 'Premium',
    price: '$49',
    features: ['5 meals/week', 'Premium ingredients', 'Priority support'],
    highlight: true,
  },
  {
    title: 'Chef’s Choice',
    price: '$79',
    features: ['7 meals/week', 'Custom mocktails', '1-on-1 consultation'],
    highlight: false,
  },
];

const PricingPlans = () => {
  return (
    <div className="pricing-container">
      <h2 className="pricing-title">Choose Your Plan</h2>
      <div className="pricing-grid">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`pricing-card ${plan.highlight ? 'highlight' : ''}`}
          >
            <h3>{plan.title}</h3>
            <p className="price">{plan.price}/month</p>
            <ul>
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <button>Select Plan</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;