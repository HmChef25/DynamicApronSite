export default function Ingredients() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Ingredients</h1>
      <p style={styles.subtitle}>
        Manage ingredient specs, categories, and core data for your recipes.
      </p>

      <div style={styles.card}>
        <h2 style={styles.cardTitle}>Coming Soon</h2>
        <p style={styles.cardText}>
          Ingredient categories, yield percentages, cost inputs, and more.
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },
  title: {
    fontSize: "2rem",
    fontWeight: "700",
  },
  subtitle: {
    opacity: 0.8,
  },
  card: {
    padding: "1.5rem",
    borderRadius: "var(--radius)",
    background: "var(--card-bg)",
    border: "1px solid var(--card-border)",
    boxShadow: "0 4px 10px var(--shadow)",
  },
  cardTitle: {
    fontSize: "1.25rem",
    fontWeight: "600",
    marginBottom: "0.5rem",
  },
  cardText: {
    opacity: 0.9,
  },
};
