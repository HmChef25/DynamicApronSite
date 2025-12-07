// pack-builder.js
import packOptions from "./pack-options.js";

document.addEventListener("DOMContentLoaded", () => {
  const selectEl    = document.getElementById("pack-item-select");
  const cartItemsEl = document.getElementById("cart-items");
  const cartTotalEl = document.getElementById("cart-total");

  // 1. Load or initialize cartItems
  let cartItems = [];
  const saved = sessionStorage.getItem("cartItems");
  if (saved) {
    try {
      cartItems = JSON.parse(saved);
    } catch {
      cartItems = [];
    }
  }

  // Populate dropdown
  packOptions.forEach(opt => {
    const o = document.createElement("option");
    o.value        = opt.name;
    o.textContent  = `${opt.label} — $${opt.price.toFixed(2)}`;
    o.dataset.price = opt.price;
    selectEl.append(o);
  });

  // Renders list + total, then saves to sessionStorage
  function renderCart() {
    // Clear current list
    cartItemsEl.innerHTML = "";

    // Build list items
    cartItems.forEach((item, idx) => {
      const li = document.createElement("li");
      li.className = "cart-item";
      li.innerHTML = `
        ${item.label} — $${item.price.toFixed(2)}
        <button class="remove-btn" data-index="${idx}">×</button>
      `;
      cartItemsEl.append(li);
    });

    // Update total
    const total = cartItems.reduce((sum, i) => sum + i.price, 0);
    cartTotalEl.textContent = `$${total.toFixed(2)}`;

    // Persist to sessionStorage
    sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
  }

  // Initial render (in case there were saved items)
  renderCart();

  // Add item on dropdown change
  selectEl.addEventListener("change", e => {
    const name = e.target.value;
    const selected = packOptions.find(i => i.name === name);
    if (!selected) return;

    cartItems.push(selected);
    renderCart();
  });

  // Remove item on “×” click
  cartItemsEl.addEventListener("click", e => {
    if (!e.target.matches(".remove-btn")) return;
    const idx = Number(e.target.dataset.index);
    cartItems.splice(idx, 1);
    renderCart();
  });
});