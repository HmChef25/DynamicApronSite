import { NavLink } from "react-router-dom";

export default function Sidebar({ isOpen }) {
  const links = [
    { to: "/", label: "Home", icon: "🏠" },
    { to: "/binder", label: "Binder", icon: "📚" },

    // Modules
    { to: "/module/culinary", label: "Culinary", icon: "🍳" },
    { to: "/module/service", label: "Service", icon: "🧾" },
    { to: "/module/operations", label: "Operations", icon: "⚙️" },

    // Bundles
    { to: "/bundle", label: "Bundles", icon: "🗂️" },
  ];

  return (
    <aside
      className={`sidebar ${isOpen ? "open" : ""}`}
      style={styles.sidebar}
    >
      {/* Logo */}
      <div style={styles.logoBox}>
        <span style={styles.logoIcon}>🧠</span>
        <span style={styles.logoText}>Dynamic Apron OS</span>
      </div>

      {/* Navigation */}
      <nav style={styles.nav}>
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            style={({ isActive }) =>
              isActive
                ? { ...styles.link, ...styles.activeLink }
                : styles.link
            }
          >
            <span style={styles.icon}>{link.icon}</span>
            <span>{link.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

const styles = {
  sidebar: {
    width: "240px",
    background: "var(--sidebar-bg)",
    color: "var(--sidebar-text)",
    padding: "1.25rem 1rem",
    display: "flex",
    flexDirection: "column",
    gap: "1.25rem",
    borderRight: "1px solid rgba(0,0,0,0.1)",
    height: "100vh",
    position: "fixed",
    top: 0,
    left: 0,
    overflowY: "auto",
    transition: "transform var(--motion-duration) var(--motion-ease)",
    zIndex: 999,
  },

  logoBox: {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    marginBottom: "0.5rem",
  },

  logoIcon: {
    fontSize: "1.8rem",
  },

  logoText: {
    fontSize: "1.15rem",
    fontWeight: "bold",
  },

  nav: {
    display: "flex",
    flexDirection: "column",
    gap: "0.35rem",
  },

  link: {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    padding: "0.65rem 0.85rem",
    borderRadius: "var(--radius-sm)",
    textDecoration: "none",
    color: "var(--sidebar-text)",
    transition:
      "background var(--motion-duration) var(--motion-ease), transform var(--motion-duration) var(--motion-ease)",
  },

  activeLink: {
    background: "var(--accent)",
    color: "var(--sidebar-bg)",
    fontWeight: "600",
  },

  icon: {
    fontSize: "1.25rem",
  },
};
