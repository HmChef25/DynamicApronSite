import { Link } from "react-router-dom";

export default function Service() {
  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <h1 style={styles.title}>Service Module</h1>
        <p style={styles.subtitle}>
          Hospitality systems, guest experience, and service workflows.
        </p>
      </div>

      {/* Card Grid */}
      <div style={styles.grid}>
        <Link to="/service/guilty-fork" className="card" style={styles.card}>
          <h2 style={styles.cardTitle}>The Guilty Fork</h2>
          <p style={styles.cardText}>Service philosophy and guest experience.</p>
        </Link>

        <Link to="/service/dashboard" className="card" style={styles.card}>
          <h2 style={styles.cardTitle}>Service Dashboard</h2>
          <p style={styles.cardText}>Track service systems and workflows.</p>
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
