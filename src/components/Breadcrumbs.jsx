import { Link, useLocation } from "react-router-dom";

export default function Breadcrumbs() {
  const location = useLocation();
  const pathParts = location.pathname.split("/").filter(Boolean);

  const crumbs = pathParts.map((part, index) => {
    const to = "/" + pathParts.slice(0, index + 1).join("/");
    const label = part.charAt(0).toUpperCase() + part.slice(1);

    return { label, to };
  });

  return (
    <div style={styles.container}>
      <Link to="/" style={styles.home}>Home</Link>
      {crumbs.map((crumb, i) => (
        <span key={crumb.to} style={styles.segment}>
          <span style={styles.separator}>/</span>
          <Link to={crumb.to} style={styles.link}>{crumb.label}</Link>
        </span>
      ))}
    </div>
  );
}

const styles = {
  container: {
    marginBottom: "1rem",
    fontSize: "0.9rem",
    color: "#555",
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap"
  },
  home: {
    color: "#1D3557",
    textDecoration: "none",
    fontWeight: 600
  },
  segment: {
    display: "flex",
    alignItems: "center"
  },
  separator: {
    margin: "0 0.5rem",
    color: "#999"
  },
  link: {
    color: "#1D3557",
    textDecoration: "none"
  }
};