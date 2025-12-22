// =============================================
// Dynamic Apron OS — Intelligence Layer
// SOPTemplateEngine.js
// ---------------------------------------------
// Turns templates into full SOP objects.
// Future AI hooks will plug into this engine.
// =============================================

import SOPTemplateRegistry from "./SOPTemplateRegistry";

const SOPTemplateEngine = {
  getTemplate(id) {
    return SOPTemplateRegistry.find((t) => t.id === id) || null;
  },

  generateFromTemplate(templateId, overrides = {}) {
    const template = this.getTemplate(templateId);
    if (!template) return null;

    return {
      ...template.fields,
      ...overrides,
      id: overrides.id || `sop-${Date.now()}`,
    };
  },
};

export default SOPTemplateEngine;