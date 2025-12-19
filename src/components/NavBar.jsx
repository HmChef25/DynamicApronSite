import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>
        <Link to="/" style={styles.logoLink}>Dynamic Apron</Link>
      </div>

      <div style={styles.links}>
        <Link to="/culinary" style={styles.link}>Culinary</Link>
        <Link to="/service" style={styles.link}>Service</Link>
        <Link to="/operations" style={styles.link}>Operations</Link>
        <Link to="/binder" style={styles.link}>Binder</Link>
        <Link to="/bundle" style={styles.link}>Bundles</Link>
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
  }
};