import { Link } from "react-router-dom";

export default function Culinary() {
  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <h1 style={styles.title}>Culinary Module</h1>
        <p style={styles.subtitle}>
          Recipes, yields, batch logic, pricing, and ingredient systems.
        </p>
      </div>

      {/* Card Grid */}
      <div style={styles.grid}>
        <Link to="/culinary/ingredients" className="card" style={styles.card}>
          <h2 style={styles.cardTitle}>Ingredients</h2>
          <p style={styles.cardText}>Manage ingredient lists and specs.</p>
        </Link>

        <Link to="/culinary/yields" className="card" style={styles.card}>
          <h2 style={styles.cardTitle}>Yields</h2>
          <p style={styles.cardText}>Track yield percentages and conversions.</p>
        </Link>

        <Link to="/culinary/batch-logic" className="card" style={styles.card}>
          <h2 style={styles.cardTitle}>Batch Logic</h2>
          <p style={styles.cardText}>Scale recipes with founder‑proof math.</p>
        </Link>

        <Link to="/culinary/pricing" className="card" style={styles.card}>
          <h2 style={styles.cardTitle}>Pricing</h2>
          <p style={styles.cardText}>Costing, margins, and transparent pricing.</p>
        </Link>

        <Link to="/culinary/recipe-framework" className="card" style={styles.card}>
          <h2 style={styles.cardTitle}>Recipe Framework</h2>
          <p style={styles.cardText}>Standardized recipe templates.</p>
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
