// =============================================
// Dynamic Apron OS — Intelligence Layer
// SOPTemplateRegistry.js
// ---------------------------------------------
// Reusable templates for generating new SOPs.
// These are the "blueprints" AI will fill in.
// =============================================

const SOPTemplateRegistry = [
  {
    id: "template-basic",
    name: "Basic SOP Template",
    fields: {
      title: "",
      category: "",
      summary: "",
      steps: [],
      tags: [],
      difficulty: "Beginner",
      time: "",
      prerequisites: [],
    },
  },
  {
    id: "template-service-flow",
    name: "Service Flow Template",
    fields: {
      title: "",
      category: "service",
      summary: "This SOP outlines the standard service flow.",
      steps: [
        "Greet the guest",
        "Present menus",
        "Take drink orders",
        "Take food orders",
        "Check back after delivery",
        "Process payment",
      ],
      tags: ["service", "workflow"],
      difficulty: "Beginner",
      time: "5–10 minutes",
      prerequisites: [],
    },
  },
  {
    id: "template-culinary-prep",
    name: "Culinary Prep Template",
    fields: {
      title: "",
      category: "culinary",
      summary: "This SOP outlines a standard prep workflow.",
      steps: [
        "Gather ingredients",
        "Sanitize station",
        "Prepare tools",
        "Execute prep tasks",
        "Label and store",
      ],
      tags: ["prep", "culinary"],
      difficulty: "Intermediate",
      time: "10–20 minutes",
      prerequisites: [],
    },
  },
];

export default SOPTemplateRegistry;