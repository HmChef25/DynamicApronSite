import { Link } from "react-router-dom";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav style={styles.nav}>
        {/* Logo */}
        <div style={styles.logo}>Dynamic Apron</div>

        {/* Desktop Navigation */}
        <div className="nav-desktop" style={styles.links}>
          <Link to="/" style={styles.link}>Home</Link>
          <Link to="/culinary" style={styles.link}>Culinary</Link>
          <Link to="/service" style={styles.link}>Service</Link>
          <Link to="/operations" style={styles.link}>Operations</Link>
          <Link to="/bundle" style={styles.link}>Bundle</Link>
        </div>

        {/* Mobile Hamburger */}
        <div
          className="nav-mobile-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          style={styles.hamburger}
        >
          ☰
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
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
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },

  logo: {
    fontSize: "1.4rem",
    fontWeight: 700,
    letterSpacing: "0.5px",
    color: "#F1FAEE",
  },

  links: {
    display: "flex",
    gap: "1.5rem",
  },

  link: {
    color: "#F1FAEE",
    textDecoration: "none",
    fontSize: "1rem",
    fontWeight: 500,
  },

  hamburger: {
    fontSize: "1.8rem",
    color: "#F1FAEE",
    cursor: "pointer",
    display: "none", // CSS media queries will override this
  },
};

export default NavBar;