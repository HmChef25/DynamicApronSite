import { useState } from "react";
import NavBar from "./NavBar";
import Sidebar from "./Sidebar";
import Breadcrumbs from "./Breadcrumbs";

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);      // mobile slide-in
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false); // desktop collapse

  return (
    <div style={styles.container}>
      {/* Sidebar */}
      <Sidebar
        isOpen={sidebarOpen}
        collapsed={sidebarCollapsed}
        onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
      />

      {/* NavBar with sidebar toggle */}
      <NavBar onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

      {/* Main Content */}
      <main
        style={{
          ...styles.main,
          marginLeft: sidebarCollapsed ? "70px" : "230px", // responsive to collapse
        }}
      >
        <div style={styles.inner}>
          <Breadcrumbs />
          <div className="page-fade">{children}</div>
        </div>
      </main>

      {/* Footer */}
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