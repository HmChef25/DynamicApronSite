import { useLocation, Link } from "react-router-dom";

export default function Breadcrumbs() {
  const location = useLocation();
  const parts = location.pathname.split("/").filter(Boolean);

  const crumbs = parts.map((part, index) => {
    const path = "/" + parts.slice(0, index + 1).join("/");
    const label = part.charAt(0).toUpperCase() + part.slice(1);

    return (
      <span key={path} style={styles.crumb}>
        <Link to={path} style={styles.link}>{label}</Link>
        {index < parts.length - 1 && <span style={styles.separator}>/</span>}
      </span>
    );
  });

  return (
    <div style={styles.container}>
      <Link to="/" style={styles.link}>Home</Link>
      {parts.length > 0 && <span style={styles.separator}>/</span>}
      {crumbs}
    </div>
  );
}

const styles = {
  container: {
    opacity: 0.8,
    fontSize: "0.9rem",
    marginBottom: "0.5rem",
  },
  crumb: {
    display: "inline-flex",
    alignItems: "center",
  },
  link: {
    color: "var(--accent)",
    textDecoration: "none",
  },
  separator: {
    margin: "0 0.35rem",
  },
};
