// =============================================
// Dynamic Apron OS — Intelligence Layer
// KnowledgeIndex.jsx
// ---------------------------------------------
// Central registry for:
// - Pages
// - Modules
// - SOPs
// - Bundles
// - Future metadata
// =============================================

const KnowledgeIndex = {
  pages: [
    { label: "Home", path: "/" },
    { label: "Culinary", path: "/culinary" },
    { label: "Service", path: "/service" },
    { label: "Operations", path: "/operations" },
    { label: "Binder", path: "/binder" },
    { label: "Bundles", path: "/bundle" },
  ],

  modules: {
    culinary: [
      { label: "Knife Skills", id: "culinary-knife-skills" },
      { label: "Sauce Foundations", id: "culinary-sauces" },
      { label: "Batch Cooking", id: "culinary-batch" },
    ],
    service: [
      { label: "Guest Greeting", id: "service-greeting" },
      { label: "Order Flow", id: "service-order-flow" },
      { label: "Table Reset", id: "service-reset" },
    ],
    operations: [
      { label: "Inventory", id: "ops-inventory" },
      { label: "Scheduling", id: "ops-scheduling" },
      { label: "Cleaning Routines", id: "ops-cleaning" },
    ],
  },

  binder: {
    culinary: [],
    service: [],
    operations: [],
  },

  bundles: [
    { label: "Starter Bundle", id: "bundle-starter" },
    { label: "Training Bundle", id: "bundle-training" },
  ],
};

export default KnowledgeIndex;