export default function DashboardCard({ icon: Icon, title, description, to }) {
  return (
    <a href={to} className="dashboard-card" style={styles.card}>
      <div style={styles.iconWrapper}>
        <Icon size={28} color="#1D3557" />
      </div>

      <div style={styles.textWrapper}>
        <h3 style={styles.title}>{title}</h3>
        <p style={styles.description}>{description}</p>
      </div>
    </a>
  );
}

const styles = {
  card: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    padding: "1.25rem 1.5rem",
    background: "#FFFFFF",
    borderRadius: "8px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
    textDecoration: "none",
    color: "#1D3557",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  },
  iconWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "32px",
  },
  textWrapper: {
    display: "flex",
    flexDirection: "column",
  },
  title: {
    margin: 0,
    fontSize: "1.1rem",
    fontWeight: 600,
  },
  description: {
    margin: 0,
    fontSize: "0.9rem",
    color: "#457B9D",
  },
};