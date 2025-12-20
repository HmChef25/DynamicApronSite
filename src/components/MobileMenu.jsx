export default function MobileMenu({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="nav-mobile-menu">
      <a href="/culinary">Culinary</a>
      <a href="/service">Service</a>
      <a href="/operations">Operations</a>
      <a href="/binder">Binder</a>
      <a href="/bundle">Bundles</a>
    </div>
  );
}