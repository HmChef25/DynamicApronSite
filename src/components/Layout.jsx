import NavBar from "./NavBar";

export default function Layout({ children }) {
  return (
    <div style={styles.container}>
      <NavBar />
      <main style={styles.main}>{children}</main>
      <footer style={styles.footer}>Dynamic Apron OS © {new Date().getFullYear()}</footer>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    background: "#F1FAEE"
  },
  main: {
    flex: 1,
    padding: "2rem",
    maxWidth: "900px",
    margin: "0 auto"
  },
  footer: {
    padding: "1rem",
    textAlign: "center",
    background: "#1D3557",
    color: "#F1FAEE",
    marginTop: "2rem"
  }
};