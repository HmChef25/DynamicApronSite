import { useParams, useNavigate } from "react-router-dom";
import SOPStorage from "../intelligence/SOPStorage";

export default function SOPPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const sop = SOPStorage.findById(id);

  if (!sop) {
    return (
      <div style={styles.container}>
        <h1 style={styles.title}>SOP Not Found</h1>
        <p style={styles.subtitle}>
          We couldn’t find an SOP with ID: <code>{id}</code>
        </p>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.headerRow}>
        <h1 style={styles.title}>{sop.title}</h1>

        <button
          style={styles.editButton}
          onClick={() => navigate(`/sop/${id}/edit`)}
        >
          Edit SOP
        </button>
      </div>

      {/* Metadata */}
      <div style={styles.metaBox}>
        <span style={styles.metaItem}>
          <strong>Category:</strong> {capitalize(sop.category)}
        </span>
        <span style={styles.metaDivider}>•</span>
        <span style={styles.metaItem}>
          <strong>Difficulty:</strong> {sop.difficulty || "Unspecified"}
        </span>
        <span style={styles.metaDivider}>•</span>
        <span style={styles.metaItem}>
          <strong>Time:</strong> {sop.time || "No time listed"}
        </span>
      </div>

      {/* Versioning */}
      {(sop.createdAt || sop.updatedAt) && (
        <p style={styles.versionInfo}>
          {sop.createdAt && (
            <>Created: {new Date(sop.createdAt).toLocaleString()} • </>
          )}
          {sop.updatedAt && (
            <>Updated: {new Date(sop.updatedAt).toLocaleString()} • </>
          )}
          Version {sop.version || 1}
        </p>
      )}

      {/* Summary */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Summary</h2>
        <p style={styles.body}>{sop.summary || "No summary provided."}</p>
      </section>

      {/* Steps */}
      {sop.steps && sop.steps.length > 0 && (
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Steps</h2>
          <ol style={styles.stepList}>
            {sop.steps.map((step, idx) => (
              <li key={idx} style={styles.stepItem}>
                <div style={styles.stepNumber}>{idx + 1}</div>
                <div style={styles.stepText}>{step}</div>
              </li>
            ))}
          </ol>
        </section>
      )}

      {/* Tags */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Tags</h2>
        <div style={styles.tagRow}>
          {(sop.tags || []).length > 0 ? (
            sop.tags.map((tag) => (
              <span key={tag} style={styles.tag}>
                {tag}
              </span>
            ))
          ) : (
            <p style={styles.body}>No tags assigned.</p>
          )}
        </div>
      </section>

      {/* Prerequisites */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Prerequisites</h2>
        {sop.prerequisites && sop.prerequisites.length > 0 ? (
          <ul style={styles.list}>
            {sop.prerequisites.map((pid) => {
              const pre = SOPStorage.findById(pid);
              return (
                <li key={pid} style={styles.listItem}>
                  {pre ? pre.title : pid}
                </li>
              );
            })}
          </ul>
        ) : (
          <p style={styles.body}>None. This SOP can be used standalone.</p>
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
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "1rem",
  },
  headerRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "0.5rem",
  },
  title: {
    fontSize: "2rem",
    color: "var(--text)",
    margin: 0,
  },
  editButton: {
    padding: "0.5rem 1rem",
    background: "var(--accent)",
    color: "var(--sidebar-bg)",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  metaBox: {
    display: "flex",
    gap: "0.5rem",
    alignItems: "center",
    marginBottom: "0.5rem",
    flexWrap: "wrap",
  },
  metaItem: {
    fontSize: "0.95rem",
    color: "var(--text)",
  },
  metaDivider: {
    opacity: 0.5,
  },
  versionInfo: {
    fontSize: "0.85rem",
    color: "var(--text)",
    opacity: 0.6,
    marginBottom: "1.5rem",
  },
  section: {
    marginBottom: "1.75rem",
  },
  sectionTitle: {
    fontSize: "1.25rem",
    marginBottom: "0.5rem",
    color: "var(--text)",
  },
  body: {
    fontSize: "1rem",
    lineHeight: 1.6,
    color: "var(--text)",
  },
  stepList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  stepItem: {
    display: "flex",
    gap: "0.75rem",
    marginBottom: "0.75rem",
    alignItems: "flex-start",
  },
  stepNumber: {
    width: "28px",
    height: "28px",
    borderRadius: "50%",
    background: "var(--accent)",
    color: "var(--sidebar-bg)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
  },
  stepText: {
    flex: 1,
    fontSize: "1rem",
    lineHeight: 1.5,
  },
  tagRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.5rem",
  },
  tag: {
    padding: "0.25rem 0.75rem",
    background: "rgba(0,0,0,0.06)",
    borderRadius: "999px",
    fontSize: "0.85rem",
  },
  list: {
    paddingLeft: "1.2rem",
  },
  listItem: {
    marginBottom: "0.25rem",
  },
};