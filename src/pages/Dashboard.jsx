export default function Dashboard() {
  return (
    <div className="page-fade" style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <h1 style={styles.title}>Welcome back, Daniel</h1>
        <p style={styles.subtitle}>
          Your Dynamic Apron OS command center
        </p>
      </div>

      {/* Quick Actions */}
      <div style={styles.quickActions}>
        <button className="accent-btn">New SOP</button>
        <button className="accent-btn">New Module</button>
        <button className="accent-btn">Open Binder</button>
      </div>

      {/* Sections */}
      <div style={styles.sections}>
        {/* Recent SOPs */}
        <div className="card" style={styles.card}>
          <h2 style={styles.cardTitle}>Recent SOPs</h2>
          <ul style={styles.list}>
            <li>• Knife Safety & Handling</li>
            <li>• Batch Cooking Workflow</li>
            <li>• Service Reset Checklist</li>
          </ul>
        </div>

        {/* Modules */}
        <div className="card" style={styles.card}>
          <h2 style={styles.cardTitle}>Modules</h2>
          <ul style={styles.list}>
            <li>• Culinary</li>
            <li>• Service</li>
            <li>• Operations</li>
          </ul>
        </div>

        {/* Binder */}
        <div className="card" style={styles.card}>
          <h2 style={styles.cardTitle}>Binder</h2>
          <p style={styles.cardText}>
            Access your full SOP library, modules, and bundles.
          </p>
        </div>
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

  quickActions: {
    display: "flex",
    gap: "1rem",
    flexWrap: "wrap",
  },

  sections: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "1.5rem",
  },

  card: {
    padding: "1.5rem",
  },

  cardTitle: {
    marginBottom: "0.75rem",
    fontSize: "1.25rem",
    fontWeight: "600",
  },

  list: {
    display: "flex",
    flexDirection: "column",
    gap: "0.35rem",
    opacity: 0.9,
  },

  cardText: {
    opacity: 0.9,
  },
};
