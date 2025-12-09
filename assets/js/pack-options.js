const packOptions = [
  { 
    name: "Mediterranean Lentil Stew",  
    yield: 8, 
    price: 5.40,  
    label: "🍲 Lentil Stew (12 oz)", 
    category: "vegetarian",
    totalCost: (8 * 5.40).toFixed(2) 
  },
  { 
    name: "Dijon Kale Chicken Bowl",    
    yield: 4, 
    price: 6.71,  
    label: "🥗 Dijon Kale Bowl",    
    category: "protein",
    totalCost: (4 * 6.71).toFixed(2) 
  },
  { 
    name: "Lemon-Herb Quinoa Veg Bowl", 
    yield: 4, 
    price: 5.89,  
    label: "🌿 Quinoa Roasted Veg Bowl", 
    category: "vegetarian",
    totalCost: (4 * 5.89).toFixed(2) 
  },
  { 
    name: "Berry Power Smoothie",       
    yield: 2, 
    price: 12.76, 
    label: "🍓 Berry Power Smoothie", 
    category: "smoothie",
    totalCost: (2 * 12.76).toFixed(2) 
  }
];

export default packOptions;