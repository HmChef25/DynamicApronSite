import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

export default function NavBar({ onToggleSidebar }) {
  const [theme, setTheme] = useState("light");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <nav style={styles.nav}>
      {/* Logo */}
      <div style={styles.logo}>
        <Link to="/" style={styles.logoLink}>Dynamic Apron</Link>
      </div>

      {/* Desktop Links */}
      <div className="nav-desktop" style={styles.links}>
        <Link to="/culinary" style={styles.link}>Culinary</Link>
        <Link to="/service" style={styles.link}>Service</Link>
        <Link to="/operations" style={styles.link}>Operations</Link>
        <Link to="/binder" style={styles.link}>Binder</Link>
        <Link to="/bundle" style={styles.link}>Bundles</Link>
      </div>

      {/* Right-side controls */}
      <div style={styles.rightControls}>

        {/* Theme Toggle */}
        <button onClick={toggleTheme} style={styles.themeButton}>
          {theme === "light" ? "🌙" : "☀️"}
        </button>

        {/* Profile Dropdown */}
        <div style={styles.profileWrapper} ref={dropdownRef}>
          <div
            style={styles.avatar}
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            DA
          </div>

          {dropdownOpen && (
            <div style={styles.dropdown}>
              <Link to="/profile" style={styles.dropdownItem}>Profile</Link>
              <Link to="/settings" style={styles.dropdownItem}>Settings</Link>
              <button style={styles.dropdownItemButton}>Logout</button>
            </div>
          )}
        </div>

      </div>

      {/* Mobile Hamburger */}
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
  rightControls: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  },
  themeButton: {
    background: "transparent",
    border: "none",
    color: "var(--sidebar-text)",
    fontSize: "1.3rem",
    cursor: "pointer",
  },
  profileWrapper: {
    position: "relative",
  },
  avatar: {
    width: "36px",
    height: "36px",
    borderRadius: "50%",
    background: "var(--accent)",
    color: "var(--sidebar-bg)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    cursor: "pointer",
    userSelect: "none",
  },
  dropdown: {
    position: "absolute",
    top: "45px",
    right: 0,
    background: "var(--sidebar-bg)",
    color: "var(--sidebar-text)",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
    padding: "0.5rem 0",
    minWidth: "150px",
    zIndex: 2000,
  },
  dropdownItem: {
    display: "block",
    padding: "0.6rem 1rem",
    color: "var(--sidebar-text)",
    textDecoration: "none",
    fontSize: "0.95rem",
  },
  dropdownItemButton: {
    display: "block",
    width: "100%",
    padding: "0.6rem 1rem",
    background: "transparent",
    border: "none",
    color: "var(--sidebar-text)",
    textAlign: "left",
    fontSize: "0.95rem",
    cursor: "pointer",
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