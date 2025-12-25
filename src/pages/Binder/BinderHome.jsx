import { Link } from "react-router-dom";

export default function BinderHome() {
  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <h1 style={styles.title}>Dynamic Apron Binder</h1>
        <p style={styles.subtitle}>
          Your complete SOP library — Culinary, Service, and Operations.
        </p>
      </div>

      {/* Card Grid */}
      <div style={styles.grid}>
        <Link to="/culinary" className="card" style={styles.card}>
          <h2 style={styles.cardTitle}>Culinary Binder</h2>
          <p style={styles.cardText}>
            Recipes, yields, batch logic, costing, and kitchen systems.
          </p>
        </Link>

        <Link to="/service" className="card" style={styles.card}>
          <h2 style={styles.cardTitle}>Service Binder</h2>
          <p style={styles.cardText}>
            Hospitality, guest experience, and service workflows.
          </p>
        </Link>

        <Link to="/operations" className="card" style={styles.card}>
          <h2 style={styles.cardTitle}>Operations Binder</h2>
          <p style={styles.cardText}>
            Admin systems, checklists, and operational frameworks.
          </p>
        </Link>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
  },
  header: {
    marginBottom: "0.5rem",
  },
  title: {
    fontSize: "2rem",
    fontWeight: "700",
    marginBottom: "0.25rem",
  },
  subtitle: {
    opacity: 0.8,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "1.5rem",
  },
  card: {
    padding: "1.5rem",
    textDecoration: "none",
    color: "inherit",
  },
  cardTitle: {
    marginBottom: "0.75rem",
    fontSize: "1.25rem",
    fontWeight: "600",
  },
  cardText: {
    opacity: 0.9,
  },
};
