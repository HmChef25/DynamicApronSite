import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import SOPStorage from "../intelligence/SOPStorage";
import AIHooks from "../intelligence/AIHooks";

export default function EditSOPPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const original = SOPStorage.findById(id);

  const [title, setTitle] = useState(original?.title || "");
  const [category, setCategory] = useState(original?.category || "culinary");
  const [summary, setSummary] = useState(original?.summary || "");
  const [difficulty, setDifficulty] = useState(original?.difficulty || "Beginner");
  const [time, setTime] = useState(original?.time || "");
  const [tags, setTags] = useState(original?.tags || []);
  const [steps, setSteps] = useState(original?.steps || []);
  const [prerequisites, setPrerequisites] = useState(original?.prerequisites || []);
  const [related, setRelated] = useState([]);

  const [isSuggestingTags, setIsSuggestingTags] = useState(false);
  const [isSummarizing, setIsSummarizing] = useState(false);

  useEffect(() => {
    if (!original) return;
    (async () => {
      const relatedIds = await AIHooks.suggestRelatedSOPs(original);
      setRelated(relatedIds);
    })();
  }, [id]);

  if (!original) {
    return (
      <div>
        <h1 style={styles.title}>SOP Not Found</h1>
        <p style={styles.subtitle}>ID: {id}</p>
      </div>
    );
  }

  const addStep = () => setSteps([...steps, ""]);
  const updateStep = (index, value) => {
    const updated = [...steps];
    updated[index] = value;
    setSteps(updated);
  };
  const removeStep = (index) => {
    const updated = steps.filter((_, i) => i !== index);
    setSteps(updated);
  };

  const addTag = (tag) => {
    if (tag && !tags.includes(tag)) setTags([...tags, tag]);
  };
  const removeTag = (tag) => setTags(tags.filter((t) => t !== tag));

  const togglePrerequisite = (pid) => {
    if (prerequisites.includes(pid)) {
      setPrerequisites(prerequisites.filter((p) => p !== pid));
    } else {
      setPrerequisites([...prerequisites, pid]);
    }
  };

  const handleSave = () => {
    const updated = {
      title,
      category,
      summary,
      difficulty,
      time,
      tags,
      steps,
      prerequisites,
    };

    SOPStorage.updateSOP(id, updated);
    navigate(`/sop/${id}`);
  };

  const handleSuggestTags = async () => {
    setIsSuggestingTags(true);
    try {
      const sopLike = { title, summary, steps, category, tags };
      const suggested = await AIHooks.suggestTagsFromSOP(sopLike);
      const merged = Array.from(new Set([...(tags || []), ...suggested]));
      setTags(merged);
    } finally {
      setIsSuggestingTags(false);
    }
  };

  const handleSummarize = async () => {
    setIsSummarizing(true);
    try {
      const sopLike = { title, summary, steps, category };
      const newSummary = await AIHooks.summarizeSOP(sopLike);
      setSummary(newSummary);
    } finally {
      setIsSummarizing(false);
    }
  };

  const allSOPs = SOPStorage.getAllSOPs().filter((s) => s.id !== id);

  return (
    <div>
      <h1 style={styles.title}>Edit SOP</h1>

      <label style={styles.label}>Title</label>
      <input style={styles.input} value={title} onChange={(e) => setTitle(e.target.value)} />

      <label style={styles.label}>Category</label>
      <select style={styles.input} value={category} onChange={(e) => setCategory(e.target.value)}>
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
      <button style={styles.smallButton} onClick={handleSummarize} disabled={isSummarizing}>
        {isSummarizing ? "Summarizing..." : "Suggest Summary"}
      </button>

      <label style={styles.label}>Difficulty</label>
      <select style={styles.input} value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
        <option>Beginner</option>
        <option>Intermediate</option>
        <option>Advanced</option>
      </select>

      <label style={styles.label}>Estimated Time</label>
      <input style={styles.input} value={time} onChange={(e) => setTime(e.target.value)} />

      <label style={styles.label}>Tags</label>
      <div style={styles.tagRow}>
        {tags.map((tag) => (
          <span key={tag} style={styles.tag} onClick={() => removeTag(tag)}>
            {tag} ✕
          </span>
        ))}
      </div>
      <input
        style={styles.input}
        placeholder="Add tag and press Enter"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addTag(e.target.value.trim());
            e.target.value = "";
          }
        }}
      />
      <button
        style={styles.smallButton}
        onClick={handleSuggestTags}
        disabled={isSuggestingTags}
      >
        {isSuggestingTags ? "Suggesting..." : "Suggest Tags"}
      </button>

      <label style={styles.label}>Steps</label>
      {steps.map((step, index) => (
        <div key={index} style={styles.stepRow}>
          <textarea
            style={styles.stepInput}
            value={step}
            onChange={(e) => updateStep(index, e.target.value)}
          />
          <button style={styles.removeButton} onClick={() => removeStep(index)}>
            ✕
          </button>
        </div>
      ))}
      <button style={styles.addButton} onClick={addStep}>
        + Add Step
      </button>

      <label style={styles.label}>Prerequisites</label>
      <div style={styles.prereqList}>
        {allSOPs.map((s) => (
          <label key={s.id} style={styles.prereqItem}>
            <input
              type="checkbox"
              checked={prerequisites.includes(s.id)}
              onChange={() => togglePrerequisite(s.id)}
            />
            {s.title}
          </label>
        ))}
      </div>

      {/* Related SOPs (AI-suggested) */}
      {related.length > 0 && (
        <div style={styles.relatedBox}>
          <h3 style={styles.sectionTitle}>Suggested Related SOPs</h3>
          <ul style={styles.list}>
            {related.map((rid) => {
              const rs = SOPStorage.findById(rid);
              if (!rs) return null;
              return (
                <li key={rid} style={styles.listItem}>
                  {rs.title}
                </li>
              );
            })}
          </ul>
        </div>
      )}

      <button style={styles.saveButton} onClick={handleSave}>
        Save Changes
      </button>
    </div>
  );
}

const styles = {
  title: { fontSize: "2rem", marginBottom: "1rem", color: "var(--text)" },
  label: { marginTop: "1rem", marginBottom: "0.25rem", display: "block", color: "var(--text)" },
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
    minHeight: "100px",
    padding: "0.5rem",
    borderRadius: "6px",
    border: "1px solid var(--accent)",
    background: "var(--bg)",
    color: "var(--text)",
  },
  tagRow: { display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "0.5rem" },
  tag: {
    padding: "0.25rem 0.5rem",
    background: "rgba(0,0,0,0.1)",
    borderRadius: "6px",
    cursor: "pointer",
  },
  stepRow: { display: "flex", gap: "0.5rem", marginBottom: "0.5rem" },
  stepInput: {
    flex: 1,
    padding: "0.5rem",
    borderRadius: "6px",
    border: "1px solid var(--accent)",
    background: "var(--bg)",
    color: "var(--text)",
  },
  removeButton: {
    background: "red",
    color: "white",
    border: "none",
    borderRadius: "6px",
    padding: "0.5rem",
    cursor: "pointer",
  },
  addButton: {
    marginTop: "0.5rem",
    padding: "0.5rem 1rem",
    background: "var(--accent)",
    color: "var(--sidebar-bg)",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  prereqList: { display: "flex", flexDirection: "column", gap: "0.25rem" },
  prereqItem: { display: "flex", alignItems: "center", gap: "0.5rem" },
  smallButton: {
    marginTop: "0.5rem",
    padding: "0.35rem 0.75rem",
    background: "var(--accent)",
    color: "var(--sidebar-bg)",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "0.85rem",
  },
  relatedBox: {
    marginTop: "1.5rem",
    padding: "0.75rem",
    borderRadius: "8px",
    background: "rgba(0,0,0,0.03)",
  },
  sectionTitle: {
    fontSize: "1.1rem",
    marginBottom: "0.5rem",
  },
  list: {
    paddingLeft: "1.2rem",
  },
  listItem: {
    marginBottom: "0.25rem",
  },
  saveButton: {
    marginTop: "2rem",
    padding: "0.75rem 1.25rem",
    background: "var(--accent)",
    color: "var(--sidebar-bg)",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};