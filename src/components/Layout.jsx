import { useState } from "react";
import NavBar from "./NavBar";
import Sidebar from "./Sidebar";
import Breadcrumbs from "./Breadcrumbs";

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const isMobile = window.innerWidth <= 768;

  return (
    <div style={styles.container}>
      <Sidebar
        isOpen={sidebarOpen}
        collapsed={sidebarCollapsed}
        onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
      />

      <NavBar onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

      <main
        style={{
          ...styles.main,
          marginLeft: isMobile
            ? "0px"
            : sidebarCollapsed
            ? "70px"
            : "230px",
        }}
      >
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
    background: "var(--bg)",
  },
  main: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    padding: "2rem 1.5rem",
    transition: "margin-left 0.25s ease-out",
  },
  inner: {
    width: "100%",
    maxWidth: "1100px",
  },
  footer: {
    padding: "1rem",
    textAlign: "center",
    background: "var(--sidebar-bg)",
    color: "var(--sidebar-text)",
    fontSize: "0.9rem",
    marginTop: "2rem",
  },
};