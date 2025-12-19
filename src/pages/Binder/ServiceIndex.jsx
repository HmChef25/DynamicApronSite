import { Link } from "react-router-dom";

export default function ServiceIndex() {
  return (
    <div>
      <h1>Service Binder</h1>
      <p>
        This section contains all service SOPs, guest experience workflows, and
        service standards for Dynamic Apron.
      </p>

      <ul>
        <li><Link to="/service/guiltyfork">The Guilty Fork SOP</Link></li>
      </ul>
    </div>
  );
}