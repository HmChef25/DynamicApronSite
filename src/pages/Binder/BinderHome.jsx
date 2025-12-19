import { Link } from "react-router-dom";

export default function BinderHome() {
  return (
    <div>
      <h1>Dynamic Apron Binder System</h1>
      <p>
        This digital binder mirrors the physical Dynamic Apron binder, providing
        structured access to Culinary, Service, and Operations modules.
      </p>

      <ul>
        <li><Link to="/binder/culinary">Culinary Binder</Link></li>
        <li><Link to="/binder/service">Service Binder</Link></li>
        <li><Link to="/binder/operations">Operations Binder</Link></li>
      </ul>
    </div>
  );
}