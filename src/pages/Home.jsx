import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>Welcome to Dynamic Apron</h1>
      <p>
        Your Mediterranean-inspired meal prep experience starts here. Explore our
        bundles and discover fresh, modular options for every lifestyle.
      </p>
      <Link to="/bundle" style={{ color: "#007acc", textDecoration: "none" }}>
        Go to Bundle Builder →
      </Link>
    </main>
  );
}