import { useParams } from "react-router-dom";
import SOPRegistry from "../intelligence/SOPRegistry";

export default function SOPPage() {
  const { id } = useParams();
  const sop = SOPRegistry.find((item) => item.id === id);

  if (!sop) {
    return (
      <div>
        <h1 style={styles.title}>SOP Not Found</h1>
        <p style={styles.subtitle}>
          We couldn’t find an SOP with ID: <code>{id}</code>
        </p>
      </div>
    );
  }

  return (
    <div>
      <h1 style={styles.title}>{sop.title}</h1>
      <p style={styles.subtitle}>
        Category: <strong>{capitalize(sop.category)}</strong> •{" "}
        {sop.difficulty} • {sop.time}
      </p>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Summary</h2>
        <p style={styles.body}>{sop.summary}</p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Tags</h2>
        <div style={styles.tagRow}>
          {sop.tags.map((tag) => (
            <span key={tag} style={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Prerequisites</h2>
        {sop.prerequisites.length === 0 ? (
          <p style={styles.body}>None. This SOP can be used standalone.</p>
        ) : (
          <ul style={styles.list}>
            {sop.prerequisites.map((pid) => {
              const pre = SOPRegistry.find((item) => item.id === pid);
              return (
                <li key={pid} style={styles.listItem}>
                  {pre ? pre.title : pid}
                </li>
              );
            })}
          </ul>
        )}
      </section>
    </div>
  );
}

function capitalize(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const styles = {
  title: {
    fontSize: "2rem",
    marginBottom: "0.5rem",
    color: "var(--text)",
  },
  subtitle: {
    fontSize: "1rem",
    marginBottom: "1.5rem",
    color: "var(--text)",
    opacity: 0.8,
  },
  section: {
    marginBottom: "1.5rem",
  },
  sectionTitle: {
    fontSize: "1.2rem",
    marginBottom: "0.5rem",
  },
  body: {
    fontSize: "0.98rem",
    lineHeight: 1.6,
  },
  tagRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.4rem",
  },
  tag: {
    fontSize: "0.85rem",
    padding: "0.2rem 0.5rem",
    borderRadius: "999px",
    background: "rgba(0,0,0,0.06)",
  },
  list: {
    paddingLeft: "1.2rem",
  },
  listItem: {
    marginBottom: "0.25rem",
  },
};