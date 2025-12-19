import { Link } from "react-router-dom";

export default function CulinaryIndex() {
  return (
    <div>
      <h1>Culinary Binder</h1>
      <p>
        This section contains all culinary systems, batch logic, pricing models,
        yield structures, ingredient modules, and recipe frameworks.
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