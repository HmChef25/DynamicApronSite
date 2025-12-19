import NavBar from "./NavBar";
import Breadcrumbs from "./Breadcrumbs";

export default function Layout({ children }) {
  return (
    <div style={styles.container}>
      <NavBar />

      <main style={styles.main}>
        <div style={styles.inner}>
          <Breadcrumbs />
          <div className="page-fade">{children}</div>
        </div>
      </main>

      <footer style={styles.footer}>
        Dynamic Apron OS © {new Date().getFullYear()}
      </footer>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    background: "#F1FAEE",
  },

  main: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    padding: "2rem 1.5rem",
  },

  inner: {
    width: "100%",
    maxWidth: "1100px",
  },

  footer: {
    padding: "1rem",
    textAlign: "center",
    background: "#1D3557",
    color: "#F1FAEE",
    fontSize: "0.9rem",
    marginTop: "2rem",
  },
};