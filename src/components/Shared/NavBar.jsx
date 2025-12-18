import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav style={{ padding: "1rem", backgroundColor: "#f0f0f0" }}>
      <Link to="/" style={{ marginRight: "1rem" }}>Home</Link>
      <Link to="/culinary" style={{ marginRight: "1rem" }}>Culinary</Link>
      <Link to="/service" style={{ marginRight: "1rem" }}>Service</Link>
      <Link to="/operations" style={{ marginRight: "1rem" }}>Operations</Link>
      <Link to="/bundle">Bundle Builder</Link>
    </nav>
  );
}