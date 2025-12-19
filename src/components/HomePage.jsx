import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={styles.hero}>
      <h1 style={styles.title}>Dynamic Apron OS</h1>

      <p style={styles.subtitle}>
        A modular culinary and service operating system built for clarity,
        transparency, and founder‑proof execution.
      </p>

      <div style={styles.buttons}>
        <Link to="/binder">
          <button style={styles.buttonPrimary}>Open Binder</button>
        </Link>

        <Link to="/culinary">
          <button style={styles.buttonSecondary}>Explore Culinary</button>
        </Link>
      </div>

      <div style={styles.sections}>
        <div style={styles.sectionCard}>
          <h2>Culinary Systems</h2>
          <p>
            Batch logic, transparent pricing, yields, ingredients, and recipe
            frameworks.
          </p>
        </div>

        <div style={styles.sectionCard}>
          <h2>Service Systems</h2>
          <p>
            Guest experience workflows and SOPs like The Guilty Fork.
          </p>
        </div>

        <div style={styles.sectionCard}>
          <h2>Operations</h2>
          <p>
            Checklists, admin workflows, and operational structure.
          </p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  hero: {
    textAlign: "center",
    padding: "4rem 2rem",
    maxWidth: "900px",
    margin: "0 auto"
  },
  title: {
    fontSize: "3rem",
    marginBottom: "1rem",
    color: "#1D3557"
  },
  subtitle: {
    fontSize: "1.3rem",
    marginBottom: "2.5rem",
    color: "#111"
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
    marginBottom: "3rem"
  },
  buttonPrimary: {
    background: "#E63946",
    color: "#fff",
    border: "none",
    padding: "0.8rem 1.6rem",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "1rem"
  },
  buttonSecondary: {
    background: "#1D3557",
    color: "#fff",
    border: "none",
    padding: "0.8rem 1.6rem",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "1rem"
  },
  sections: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "1.5rem",
    marginTop: "3rem"
  },
  sectionCard: {
    background: "#fff",
    padding: "1.5rem",
    borderRadius: "6px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    textAlign: "left"
  }
};