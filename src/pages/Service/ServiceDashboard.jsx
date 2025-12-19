import { Link } from "react-router-dom";

export default function ServiceDashboard() {
  return (
    <div>
      <h1>Service Module</h1>
      <p>
        This dashboard provides access to Dynamic Apron’s service systems,
        including SOPs, guest experience workflows, and service standards.
      </p>

      <ul>
        <li><Link to="/service/guiltyfork">The Guilty Fork SOP</Link></li>
      </ul>
    </div>
  );
}