import { NavLink } from "react-router-dom";

export default function Sidebar() {
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
    <aside style={styles.sidebar}>
      <div style={styles.logoBox}>
        <span style={styles.logoIcon}>🧠</span>
        <span style={styles.logoText}>Dynamic Apron OS</span>
      </div>

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
    color: "var(--text)",
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    borderRight: "1px solid rgba(0,0,0,0.1)",
  },
  logoBox: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    marginBottom: "1rem",
  },
  logoIcon: {
    fontSize: "1.6rem",
  },
  logoText: {
    fontSize: "1.1rem",
    fontWeight: "bold",
  },
  nav: {
    display: "flex",
    flexDirection: "column",
    gap: "0.25rem",
  },
  link: {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    padding: "0.6rem 0.75rem",
    borderRadius: "8px",
    textDecoration: "none",
    color: "var(--text)",
    transition: "background 0.15s ease, transform 0.15s ease",
  },
  activeLink: {
    background: "var(--accent)",
    color: "var(--sidebar-bg)",
    fontWeight: "bold",
  },
  icon: {
    fontSize: "1.2rem",
  },
};