import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>Dynamic Apron</div>
      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/culinary" style={styles.link}>Culinary</Link>
        <Link to="/service" style={styles.link}>Service</Link>
        <Link to="/operations" style={styles.link}>Operations</Link>
        <Link to="/bundle" style={styles.link}>Bundle</Link>
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
    background: "#111",
    color: "#fff",
  },
  logo: {
    fontSize: "1.25rem",
    fontWeight: "600",
  },
  links: {
    display: "flex",
    gap: "1.5rem",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "1rem",
  },
};

export default NavBar;