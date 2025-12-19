import { useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>
        <Link to="/" style={styles.logoLink}>Dynamic Apron</Link>
      </div>

      {/* Desktop Links */}
      <div style={styles.links} className="nav-desktop">
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
        onClick={() => setOpen(!open)}
      >
        <div style={styles.bar}></div>
        <div style={styles.bar}></div>
        <div style={styles.bar}></div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="nav-mobile-menu" style={styles.mobileMenu}>
          <Link to="/culinary" style={styles.mobileLink} onClick={() => setOpen(false)}>Culinary</Link>
          <Link to="/service" style={styles.mobileLink} onClick={() => setOpen(false)}>Service</Link>
          <Link to="/operations" style={styles.mobileLink} onClick={() => setOpen(false)}>Operations</Link>
          <Link to="/binder" style={styles.mobileLink} onClick={() => setOpen(false)}>Binder</Link>
          <Link to="/bundle" style={styles.mobileLink} onClick={() => setOpen(false)}>Bundles</Link>
        </div>
      )}
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
    zIndex: 1000
  },
  logo: {
    fontSize: "1.4rem",
    fontWeight: "bold"
  },
  logoLink: {
    color: "#F1FAEE",
    textDecoration: "none"
  },
  links: {
    display: "flex",
    gap: "1.5rem"
  },
  link: {
    color: "#A8DADC",
    textDecoration: "none",
    fontSize: "1rem",
    fontWeight: 500
  },
  hamburger: {
    display: "none",
    flexDirection: "column",
    gap: "5px",
    cursor: "pointer"
  },
  bar: {
    width: "25px",
    height: "3px",
    background: "#F1FAEE"
  },
  mobileMenu: {
    position: "absolute",
    top: "70px",
    right: "0",
    background: "#1D3557",
    width: "100%",
    padding: "1rem 0",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    textAlign: "center",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
  },
  mobileLink: {
    color: "#A8DADC",
    textDecoration: "none",
    fontSize: "1.2rem",
    padding: "0.5rem 0"
  }
};