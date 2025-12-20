import { Link } from "react-router-dom";

export default function NavBar({ onToggleSidebar }) {
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
    background: "#1D3557",
    color: "#F1FAEE",
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
    color: "#F1FAEE",
    textDecoration: "none",
  },
  links: {
    display: "flex",
    gap: "1.5rem",
  },
  link: {
    color: "#A8DADC",
    textDecoration: "none",
    fontSize: "1rem",
    fontWeight: 500,
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
    background: "#F1FAEE",
  },
};