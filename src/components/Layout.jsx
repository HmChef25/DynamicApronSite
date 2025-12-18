import NavBar from "./NavBar";

function Layout({ children }) {
  return (
    <div style={styles.container}>
      <NavBar />
      <main style={styles.main}>{children}</main>
      <footer style={styles.footer}>
        Dynamic Apron © {new Date().getFullYear()}
      </footer>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column"
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
    background: "#111",
    color: "#fff",
    marginTop: "2rem"
  }
};

export default Layout;