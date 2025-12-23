export default function NavBar({ onToggleSidebar }) {
  return (
    <header style={styles.navbar}>
      {/* Mobile Sidebar Toggle */}
      <button style={styles.menuButton} onClick={onToggleSidebar}>
        ☰
      </button>

      {/* Brand / Page Title Placeholder */}
      <div style={styles.brand}>Dynamic Apron OS</div>

      {/* Right Side Controls */}
      <div style={styles.right}>
        {/* Theme Toggle Placeholder */}
        <button style={styles.iconButton}>🌗</button>

        {/* Profile Placeholder */}
        <div style={styles.avatar}>DA</div>
      </div>
    </header>
  );
}

const styles = {
  navbar: {
    width: "100%",
    height: "60px",
    background: "var(--sidebar-bg)",
    color: "var(--text)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 1rem",
    borderBottom: "1px solid rgba(0,0,0,0.1)",
    position: "sticky",
    top: 0,
    zIndex: 10,
  },
  menuButton: {
    fontSize: "1.4rem",
    background: "none",
    border: "none",
    cursor: "pointer",
    display: "none", // hidden on desktop
  },
  brand: {
    fontSize: "1.2rem",
    fontWeight: "600",
  },
  right: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  },
  iconButton: {
    fontSize: "1.2rem",
    background: "none",
    border: "none",
    cursor: "pointer",
  },
  avatar: {
    width: "34px",
    height: "34px",
    borderRadius: "50%",
    background: "var(--accent)",
    color: "var(--sidebar-bg)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    cursor: "pointer",
  },

  // Mobile styles (inlined for simplicity)
  "@media (max-width: 768px)": {
    menuButton: {
      display: "block",
    },
  },
};