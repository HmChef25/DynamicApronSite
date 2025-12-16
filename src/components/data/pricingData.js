const pricingData = {
  bundles: {
    standard: 29.99,
    premium: 49.99,
    family: 89.99
  },
  addOns: {
    mocktail: 5.99,
    dessert: 7.99
  },
  discounts: {
    batch5: 0.9,
    partner: 0.85,
    subscription: {
      basic: 1.0,
      premium: 0.95,
      family: 0.9
    }
  }
};

export function calculateTotal(order, tier = null, isPartner = false) {
  let subtotal = order.reduce((sum, item) => sum + pricingData.bundles[item], 0);

  if (order.length >= 5) subtotal *= pricingData.discounts.batch5;
  if (isPartner) subtotal *= pricingData.discounts.partner;
  if (tier && pricingData.discounts.subscription[tier]) {
    subtotal *= pricingData.discounts.subscription[tier];
  }

  return subtotal.toFixed(2);
}

export default pricingData;