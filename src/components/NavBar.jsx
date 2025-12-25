export default function NavBar({ onToggleSidebar }) {
  // Theme toggle handler
  const toggleTheme = () => {
    const current = document.documentElement.getAttribute("data-theme");
    document.documentElement.setAttribute(
      "data-theme",
      current === "dark" ? "light" : "dark"
    );
  };

  return (
    <header style={styles.navbar}>
      {/* Mobile Sidebar Toggle */}
      <button
        style={styles.menuButton}
        className="nav-mobile-toggle"
        onClick={onToggleSidebar}
      >
        ☰
      </button>

      {/* Brand */}
      <div style={styles.brand}>Dynamic Apron OS</div>

      {/* Right Controls */}
      <div style={styles.right}>
        {/* Theme Toggle */}
        <button style={styles.iconButton} onClick={toggleTheme}>
          🌗
        </button>

        {/* Avatar */}
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
    color: "var(--sidebar-text)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 1rem",
    borderBottom: "1px solid rgba(0,0,0,0.1)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },

  menuButton: {
    fontSize: "1.4rem",
    background: "none",
    border: "none",
    cursor: "pointer",
    color: "var(--sidebar-text)",
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
    color: "var(--sidebar-text)",
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
};
