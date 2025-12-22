import { useParams, Link } from "react-router-dom";
import SOPStorage from "../intelligence/SOPStorage";

export default function ModulePage() {
  const { id } = useParams();

  const moduleLabels = {
    culinary: "Culinary",
    service: "Service",
    operations: "Operations",
  };

  const moduleIcons = {
    culinary: "🍳",
    service: "🧾",
    operations: "⚙️",
  };

  const moduleDescriptions = {
    culinary:
      "Culinary SOPs cover prep, cooking, sanitation, batch logic, and kitchen workflow. These SOPs ensure consistency, safety, and efficiency in all back‑of‑house operations.",
    service:
      "Service SOPs define guest interactions, table flow, order handling, and hospitality standards. These SOPs ensure a consistent, high‑quality guest experience.",
    operations:
      "Operations SOPs cover scheduling, inventory, ordering, safety, and business systems. These SOPs ensure smooth, scalable, and predictable daily operations.",
  };

  const label = moduleLabels[id];
  const icon = moduleIcons[id];
  const description = moduleDescriptions[id];

  const allSOPs = SOPStorage.getAllSOPs();
  const moduleSOPs = allSOPs.filter((s) => s.category === id);

  if (!label) {
    return (
      <div style={styles.container}>
        <h1 style={styles.title}>Module Not Found</h1>
        <p style={styles.subtitle}>Unknown module: {id}</p>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.headerRow}>
        <div style={styles.icon}>{icon}</div>
        <h1 style={styles.title}>{label} Module</h1>
      </div>

      <p style={styles.description}>{description}</p>

      {/* SOP List */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Standard Operating Procedures</h2>

        {moduleSOPs.length === 0 ? (
          <p style={styles.empty}>No SOPs in this module yet.</p>
        ) : (
          <ul style={styles.list}>
            {moduleSOPs.map((sop) => (
              <li key={sop.id} style={styles.listItem}>
                <Link to={`/sop/${sop.id}`} style={styles.link}>
                  <span style={styles.sopTitle}>{sop.title}</span>
                  <span style={styles.meta}>
                    {sop.difficulty} • {sop.time}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}

        <Link to="/sop/create" style={styles.addButton}>
          + Add SOP
        </Link>
      </section>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "1rem",
  },
  headerRow: {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    marginBottom: "0.5rem",
  },
  icon: {
    fontSize: "2rem",
  },
  title: {
    fontSize: "2rem",
    margin: 0,
    color: "var(--text)",
  },
  description: {
    fontSize: "1rem",
    opacity: 0.85,
    marginBottom: "1.75rem",
    lineHeight: 1.6,
  },
  section: {
    marginBottom: "2rem",
  },
  sectionTitle: {
    fontSize: "1.3rem",
    marginBottom: "0.75rem",
    color: "var(--text)",
  },
  empty: {
    opacity: 0.7,
    marginBottom: "1rem",
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: "0 0 1rem 0",
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  },
  listItem: {},
  link: {
    textDecoration: "none",
    color: "var(--text)",
    background: "rgba(0,0,0,0.03)",
    padding: "0.6rem 0.75rem",
    borderRadius: "8px",
    display: "flex",
    flexDirection: "column",
    gap: "0.15rem",
    transition: "background 0.15s ease",
  },
  sopTitle: {
    fontSize: "1rem",
    fontWeight: "500",
  },
  meta: {
    fontSize: "0.85rem",
    opacity: 0.7,
  },
  addButton: {
    display: "inline-block",
    padding: "0.5rem 0.75rem",
    background: "var(--accent)",
    color: "var(--sidebar-bg)",
    borderRadius: "6px",
    textDecoration: "none",
    fontWeight: "bold",
  },
};