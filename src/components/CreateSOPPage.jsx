import { useState } from "react";
import SOPTemplateRegistry from "../intelligence/SOPTemplateRegistry";
import SOPTemplateEngine from "../intelligence/SOPTemplateEngine";

export default function CreateSOPPage() {
  const [templateId, setTemplateId] = useState("template-basic");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("culinary");
  const [summary, setSummary] = useState("");

  const template = SOPTemplateRegistry.find((t) => t.id === templateId);

  const handleGenerate = () => {
    const sop = SOPTemplateEngine.generateFromTemplate(templateId, {
      title,
      category,
      summary,
    });

    console.log("Generated SOP:", sop);
    alert("SOP generated! Check console for output.");
  };

  return (
    <div>
      <h1 style={styles.title}>Create SOP</h1>

      <label style={styles.label}>Template</label>
      <select
        value={templateId}
        onChange={(e) => setTemplateId(e.target.value)}
        style={styles.input}
      >
        {SOPTemplateRegistry.map((t) => (
          <option key={t.id} value={t.id}>
            {t.name}
          </option>
        ))}
      </select>

      <label style={styles.label}>Title</label>
      <input
        style={styles.input}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label style={styles.label}>Category</label>
      <select
        style={styles.input}
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="culinary">Culinary</option>
        <option value="service">Service</option>
        <option value="operations">Operations</option>
      </select>

      <label style={styles.label}>Summary</label>
      <textarea
        style={styles.textarea}
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
      />

      <button style={styles.button} onClick={handleGenerate}>
        Generate SOP
      </button>
    </div>
  );
}

const styles = {
  title: {
    fontSize: "2rem",
    marginBottom: "1rem",
    color: "var(--text)",
  },
  label: {
    marginTop: "1rem",
    marginBottom: "0.25rem",
    display: "block",
    color: "var(--text)",
  },
  input: {
    width: "100%",
    padding: "0.5rem",
    borderRadius: "6px",
    border: "1px solid var(--accent)",
    background: "var(--bg)",
    color: "var(--text)",
  },
  textarea: {
    width: "100%",
    height: "100px",
    padding: "0.5rem",
    borderRadius: "6px",
    border: "1px solid var(--accent)",
    background: "var(--bg)",
    color: "var(--text)",
  },
  button: {
    marginTop: "1.5rem",
    padding: "0.75rem 1.25rem",
    background: "var(--accent)",
    color: "var(--sidebar-bg)",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};