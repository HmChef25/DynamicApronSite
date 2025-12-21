import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function NavBar({ onToggleSidebar }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>
        <Link to="/" style={styles.logoLink}>Dynamic Apron</Link>
      </div>

      <div className="nav-desktop" style={styles.links}>
        <Link to="/culinary" style={styles.link}>Culinary</Link>
        <Link to="/service" style={styles.link}>Service</Link>
        <Link to="/operations" style={styles.link}>Operations</Link>
        <Link to="/binder" style={styles.link}>Binder</Link>
        <Link to="/bundle" style={styles.link}>Bundles</Link>
      </div>

      <button onClick={toggleTheme} style={styles.themeButton}>
        {theme === "light" ? "🌙" : "☀️"}
      </button>

      <div
        className="nav-mobile-toggle"
        style={styles.hamburger}
        onClick={onToggleSidebar}
      >
        <div style={styles.bar}></div>
        <div style={styles.bar}></div>
        <div style={styles.bar}></div>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    background: "var(--sidebar-bg)",
    color: "var(--sidebar-text)",
    boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },
  logo: {
    fontSize: "1.4rem",
    fontWeight: "bold",
  },
  logoLink: {
    color: "var(--sidebar-text)",
    textDecoration: "none",
  },
  links: {
    display: "flex",
    gap: "1.5rem",
  },
  link: {
    color: "var(--accent)",
    textDecoration: "none",
    fontSize: "1rem",
    fontWeight: 500,
  },
  themeButton: {
    background: "transparent",
    border: "none",
    color: "var(--sidebar-text)",
    fontSize: "1.3rem",
    cursor: "pointer",
    marginRight: "1rem",
  },
  hamburger: {
    display: "none",
    flexDirection: "column",
    gap: "5px",
    cursor: "pointer",
  },
  bar: {
    width: "25px",
    height: "3px",
    background: "var(--sidebar-text)",
  },
};