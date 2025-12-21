import { Link, useLocation } from "react-router-dom";
import ChefHatIcon from "../icons/ChefHatIcon";
import ServiceTrayIcon from "../icons/ServiceTrayIcon";
import GearIcon from "../icons/GearIcon";
import BookIcon from "../icons/BookIcon";
import LayersIcon from "../icons/LayersIcon";

/* Tooltip Component */
function Tooltip({ label, collapsed }) {
  return (
    <div
      className="sidebar-tooltip"
      style={{
        opacity: collapsed ? 1 : 0,
        pointerEvents: "none",
      }}
    >
      {label}
    </div>
  );
}

export default function Sidebar({ isOpen, collapsed, onToggleCollapse }) {
  const location = useLocation();

  const activeColor = "#A8DADC";
  const inactiveColor = "#F1FAEE";

  /* Hover-expand logic */
  const handleMouseEnter = () => {
    if (collapsed) onToggleCollapse();
  };

  const handleMouseLeave = () => {
    if (!collapsed) onToggleCollapse();
  };

  return (
    <aside
      className={`sidebar ${isOpen ? "open" : ""} ${collapsed ? "collapsed" : ""}`}
      style={{
        ...styles.sidebar,
        ...(collapsed ? styles.collapsed : {}),
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Collapse Toggle */}
      <button onClick={onToggleCollapse} style={styles.collapseButton}>
        {collapsed ? "›" : "‹"}
      </button>

      <div style={styles.section}>

        {/* HOME */}
        <div className="tooltip-wrapper">
          <Link
            to="/"
            style={{
              ...styles.link,
              ...(location.pathname === "/" ? styles.activeLink : {}),
            }}
          >
            <span style={styles.icon}>
              <BookIcon size={22} color={location.pathname === "/" ? activeColor : inactiveColor} />
            </span>
            {!collapsed && <span>Home</span>}
          </Link>
          <Tooltip label="Home" collapsed={collapsed} />
        </div>

        {/* CULINARY */}
        <div className="tooltip-wrapper">
          <Link
            to="/culinary"
            style={{
              ...styles.link,
              ...(location.pathname === "/culinary" ? styles.activeLink : {}),
            }}
          >
            <span style={styles.icon}>
              <ChefHatIcon size={22} color={location.pathname === "/culinary" ? activeColor : inactiveColor} />
            </span>
            {!collapsed && <span>Culinary</span>}
          </Link>
          <Tooltip label="Culinary" collapsed={collapsed} />
        </div>

        {/* SERVICE */}
        <div className="tooltip-wrapper">
          <Link
            to="/service"
            style={{
              ...styles.link,
              ...(location.pathname === "/service" ? styles.activeLink : {}),
            }}
          >
            <span style={styles.icon}>
              <ServiceTrayIcon size={22} color={location.pathname === "/service" ? activeColor : inactiveColor} />
            </span>
            {!collapsed && <span>Service</span>}
          </Link>
          <Tooltip label="Service" collapsed={collapsed} />
        </div>

        {/* OPERATIONS */}
        <div className="tooltip-wrapper">
          <Link
            to="/operations"
            style={{
              ...styles.link,
              ...(location.pathname === "/operations" ? styles.activeLink : {}),
            }}
          >
            <span style={styles.icon}>
              <GearIcon size={22} color={location.pathname === "/operations" ? activeColor : inactiveColor} />
            </span>
            {!collapsed && <span>Operations</span>}
          </Link>
          <Tooltip label="Operations" collapsed={collapsed} />
        </div>

        {/* BINDER */}
        <div className="tooltip-wrapper">
          <Link
            to="/binder"
            style={{
              ...styles.link,
              ...(location.pathname === "/binder" ? styles.activeLink : {}),
            }}
          >
            <span style={styles.icon}>
              <BookIcon size={22} color={location.pathname === "/binder" ? activeColor : inactiveColor} />
            </span>
            {!collapsed && <span>Binder</span>}
          </Link>
          <Tooltip label="Binder" collapsed={collapsed} />
        </div>

        {/* BUNDLES */}
        <div className="tooltip-wrapper">
          <Link
            to="/bundle"
            style={{
              ...styles.link,
              ...(location.pathname === "/bundle" ? styles.activeLink : {}),
            }}
          >
            <span style={styles.icon}>
              <LayersIcon size={22} color={location.pathname === "/bundle" ? activeColor : inactiveColor} />
            </span>
            {!collapsed && <span>Bundles</span>}
          </Link>
          <Tooltip label="Bundles" collapsed={collapsed} />
        </div>

      </div>
    </aside>
  );
}

const styles = {
  sidebar: {
    width: "230px",
    background: "#1D3557",
    color: "#F1FAEE",
    padding: "1.5rem 1rem",
    height: "100vh",
    position: "fixed",
    top: 0,
    left: 0,
    overflowY: "auto",
    transition: "width 0.25s ease-out, transform 0.25s ease-out",
    zIndex: 999,
    display: "flex",
    flexDirection: "column",
  },

  collapsed: {
    width: "70px",
  },

  collapseButton: {
    background: "transparent",
    border: "none",
    color: "#F1FAEE",
    cursor: "pointer",
    fontSize: "1.2rem",
    marginBottom: "1.5rem",
    alignSelf: "flex-end",
  },

  section: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },

  link: {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    color: "#F1FAEE",
    textDecoration: "none",
    fontSize: "1.05rem",
    padding: "0.5rem 0.25rem",
    borderRadius: "6px",
    transition: "background 0.2s ease",
  },

  activeLink: {
    background: "rgba(255, 255, 255, 0.15)",
    borderRadius: "6px",
    padding: "0.5rem 0.5rem",
    fontWeight: "600",
  },

  icon: {
    width: "28px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "color 0.2s ease",
  },
};