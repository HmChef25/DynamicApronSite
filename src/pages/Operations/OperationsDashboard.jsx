import { Link } from "react-router-dom";

export default function OperationsDashboard() {
  return (
    <div>
      <h1>Operations Module</h1>
      <p>
        This dashboard provides access to Dynamic Apron’s operational systems,
        checklists, admin workflows, and structural processes.
      </p>

      <ul>
        <li><Link to="/operations/checklists">Checklists</Link></li>
        <li><Link to="/operations/admin">Admin Workflows</Link></li>
        <li><Link to="/operations/systems">Operational Systems</Link></li>
      </ul>
    </div>
  );
}