// =============================================
// Dynamic Apron OS — Intelligence Layer
// SOPStorage.js
// ---------------------------------------------
// Central access layer for all SOPs:
// - Static SOPs from SOPRegistry
// - Dynamic/custom SOPs saved locally
//
// This is the single source of truth used by:
// - Binder
// - SOP pages
// - SmartSearchEngine
// - Future AI features
// =============================================

import SOPRegistry from "./SOPRegistry";

const STORAGE_KEY = "dynamicapron_sops";

function loadDynamicSOPs() {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    console.error("Failed to load SOPs from storage", e);
    return [];
  }
}

function saveDynamicSOPs(sops) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(sops));
  } catch (e) {
    console.error("Failed to save SOPs to storage", e);
  }
}

const SOPStorage = {
  // All static SOPs (from code)
  getStaticSOPs() {
    return [...SOPRegistry];
  },

  // All dynamic/custom SOPs (from localStorage)
  getDynamicSOPs() {
    return loadDynamicSOPs();
  },

  // Combined view: static + dynamic
  getAllSOPs() {
    const staticSOPs = this.getStaticSOPs();
    const dynamicSOPs = this.getDynamicSOPs();
    return [...staticSOPs, ...dynamicSOPs];
  },

  // Find by ID (searches both static + dynamic)
  findById(id) {
    const all = this.getAllSOPs();
    return all.find((sop) => sop.id === id) || null;
  },

  // Save a new SOP (dynamic only)
  saveNewSOP(sop) {
    const existingDynamic = this.getDynamicSOPs();
    const newSOP = {
      ...sop,
      id: sop.id || `sop-${Date.now()}`,
      createdAt: sop.createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      version: sop.version || 1,
    };
    const updatedList = [...existingDynamic, newSOP];
    saveDynamicSOPs(updatedList);
    return newSOP;
  },

  // Update an existing dynamic SOP by id
  updateSOP(id, updates) {
    const dynamicSOPs = this.getDynamicSOPs();
    const index = dynamicSOPs.findIndex((s) => s.id === id);
    if (index === -1) return null;

    const current = dynamicSOPs[index];
    const updated = {
      ...current,
      ...updates,
      updatedAt: new Date().toISOString(),
      version: (current.version || 1) + 1,
    };

    dynamicSOPs[index] = updated;
    saveDynamicSOPs(dynamicSOPs);
    return updated;
  },

  // Delete a dynamic SOP
  deleteSOP(id) {
    const dynamicSOPs = this.getDynamicSOPs();
    const filtered = dynamicSOPs.filter((s) => s.id !== id);
    saveDynamicSOPs(filtered);
  },
};

export default SOPStorage;