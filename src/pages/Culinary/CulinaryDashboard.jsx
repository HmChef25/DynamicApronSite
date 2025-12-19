import { Link } from "react-router-dom";

export default function CulinaryDashboard() {
  return (
    <div>
      <h1>Culinary Module</h1>
      <p>
        This dashboard provides access to Dynamic Apron’s core culinary systems,
        including batch logic, transparent pricing, yield structures, ingredient
        modules, and recipe frameworks.
      </p>

      <ul>
        <li><Link to="/culinary/batch">Batch Logic</Link></li>
        <li><Link to="/culinary/pricing">Transparent Pricing</Link></li>
        <li><Link to="/culinary/yields">Yield Tables</Link></li>
        <li><Link to="/culinary/ingredients">Ingredient Modules</Link></li>
        <li><Link to="/culinary/framework">Recipe Framework</Link></li>
      </ul>
    </div>
  );
}