import { Link, useLocation } from "react-router-dom";

export default function NavBar({ onToggleSidebar }) {
  const location = useLocation();

  return (
    <nav style={styles.nav}>
      {/* Logo */}
      <div style={styles.logo}>
        <Link to="/" style={styles.logoLink}>Dynamic Apron</Link>
      </div>

      {/* Desktop Links */}
      <div className="nav-desktop" style={styles.links}>
        <Link
          to="/culinary"
          style={{
            ...styles.link,
            ...(location.pathname === "/culinary" ? styles.activeLink : {})
          }}
        >
          Culinary
        </Link>

        <Link
          to="/service"
          style={{
            ...styles.link,
            ...(location.pathname === "/service" ? styles.activeLink : {})
          }}
        >
          Service
        </Link>

        <Link
          to="/operations"
          style={{
            ...styles.link,
            ...(location.pathname === "/operations" ? styles.activeLink : {})
          }}
        >
          Operations
        </Link>

        <Link
          to="/binder"
          style={{
            ...styles.link,
            ...(location.pathname === "/binder" ? styles.activeLink : {})
          }}
        >
          Binder
        </Link>

        <Link
          to="/bundle"
          style={{
            ...styles.link,
            ...(location.pathname === "/bundle" ? styles.activeLink : {})
          }}
        >
          Bundles
        </Link>
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
    padding: "0.25rem 0.5rem",
    borderRadius: "4px",
    transition: "background 0.2s ease",
  },
  activeLink: {
    background: "rgba(255, 255, 255, 0.15)",
    color: "#F1FAEE",
    fontWeight: "600",
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