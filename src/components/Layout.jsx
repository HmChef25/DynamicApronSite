import { useState } from "react";
import NavBar from "./NavBar";
import Sidebar from "./Sidebar";
import Breadcrumbs from "./Breadcrumbs";

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);      // mobile slide-in
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false); // desktop collapse

  // Detect mobile width (simple + effective)
  const isMobile = window.innerWidth <= 768;

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
          marginLeft: isMobile
            ? "0px" // mobile: no margin
            : sidebarCollapsed
            ? "70px" // desktop collapsed
            : "230px", // desktop full
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
    transition: "margin-left 0.25s ease-out",
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