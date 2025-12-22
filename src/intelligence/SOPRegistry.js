// =============================================
// Dynamic Apron OS — Intelligence Layer
// SOPRegistry.js
// ---------------------------------------------
// Central registry for all SOP metadata.
// This powers:
// - Smart search
// - Binder auto-generation
// - Module linking
// - Future AI-assisted SOP creation
// =============================================

const SOPRegistry = [
  {
    id: "culinary-knife-skills",
    title: "Knife Skills",
    category: "culinary",
    tags: ["knife", "cutting", "prep", "safety"],
    difficulty: "Beginner",
    time: "10–15 minutes",
    summary: "Foundational knife handling, grip, motion, and safety principles.",
    prerequisites: [],
  },
  {
    id: "culinary-sauces",
    title: "Sauce Foundations",
    category: "culinary",
    tags: ["sauce", "mother sauces", "prep"],
    difficulty: "Intermediate",
    time: "20–30 minutes",
    summary: "Overview of the five mother sauces and their derivatives.",
    prerequisites: ["culinary-knife-skills"],
  },
  {
    id: "culinary-batch",
    title: "Batch Cooking",
    category: "culinary",
    tags: ["batch", "prep", "efficiency"],
    difficulty: "Intermediate",
    time: "30–45 minutes",
    summary: "Batch preparation workflow for proteins, vegetables, and sauces.",
    prerequisites: ["culinary-knife-skills"],
  },
  {
    id: "service-greeting",
    title: "Guest Greeting",
    category: "service",
    tags: ["service", "guest", "hospitality"],
    difficulty: "Beginner",
    time: "5 minutes",
    summary: "Standardized guest greeting and table introduction flow.",
    prerequisites: [],
  },
  {
    id: "service-order-flow",
    title: "Order Flow",
    category: "service",
    tags: ["service", "order", "workflow"],
    difficulty: "Intermediate",
    time: "10 minutes",
    summary: "Structured order-taking process for accuracy and speed.",
    prerequisites: ["service-greeting"],
  },
  {
    id: "service-reset",
    title: "Table Reset",
    category: "service",
    tags: ["cleaning", "reset", "service"],
    difficulty: "Beginner",
    time: "5 minutes",
    summary: "Efficient table clearing and resetting procedure.",
    prerequisites: [],
  },
  {
    id: "ops-inventory",
    title: "Inventory Management",
    category: "operations",
    tags: ["inventory", "ops", "tracking"],
    difficulty: "Intermediate",
    time: "20 minutes",
    summary: "Inventory counting, logging, and restocking workflow.",
    prerequisites: [],
  },
  {
    id: "ops-scheduling",
    title: "Scheduling",
    category: "operations",
    tags: ["scheduling", "ops", "staff"],
    difficulty: "Intermediate",
    time: "15 minutes",
    summary: "Staff scheduling logic and shift planning.",
    prerequisites: [],
  },
  {
    id: "ops-cleaning",
    title: "Cleaning Routines",
    category: "operations",
    tags: ["cleaning", "ops", "sanitation"],
    difficulty: "Beginner",
    time: "10 minutes",
    summary: "Daily, weekly, and monthly cleaning routines.",
    prerequisites: [],
  },
];

export default SOPRegistry;