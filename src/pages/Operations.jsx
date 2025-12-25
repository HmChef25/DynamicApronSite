import { Link } from "react-router-dom";

export default function Operations() {
  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <h1 style={styles.title}>Operations Module</h1>
        <p style={styles.subtitle}>
          Systems, checklists, admin workflows, and operational structure.
        </p>
      </div>

      {/* Card Grid */}
      <div style={styles.grid}>
        <Link to="/operations/admin" className="card" style={styles.card}>
          <h2 style={styles.cardTitle}>Admin</h2>
          <p style={styles.cardText}>Administrative systems and workflows.</p>
        </Link>

        <Link to="/operations/checklists" className="card" style={styles.card}>
          <h2 style={styles.cardTitle}>Checklists</h2>
          <p style={styles.cardText}>Daily, weekly, and monthly checklists.</p>
        </Link>

        <Link to="/operations/systems" className="card" style={styles.card}>
          <h2 style={styles.cardTitle}>Systems</h2>
          <p style={styles.cardText}>Operational frameworks and SOPs.</p>
        </Link>

        <Link to="/operations/dashboard" className="card" style={styles.card}>
          <h2 style={styles.cardTitle}>Operations Dashboard</h2>
          <p style={styles.cardText}>Track operational performance.</p>
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
