import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import Culinary from "./pages/Culinary";
import Service from "./pages/Service";
import Bundle from "./pages/Bundle";

// Culinary Subpages
import BatchLogic from "./pages/Culinary/BatchLogic";
import Pricing from "./pages/Culinary/Pricing";
import Yields from "./pages/Culinary/Yields";
import Ingredients from "./pages/Culinary/Ingredients";
import RecipeFramework from "./pages/Culinary/RecipeFramework";

// Service Subpages
import GuiltyFork from "./pages/Service/GuiltyFork";

// Binder System
import BinderHome from "./pages/Binder/BinderHome";
import CulinaryIndex from "./pages/Binder/CulinaryIndex";
import ServiceIndex from "./pages/Binder/ServiceIndex";
import OperationsIndex from "./pages/Binder/OperationsIndex";

// Operations Module
import OperationsDashboard from "./pages/Operations/OperationsDashboard";
import Checklists from "./pages/Operations/Checklists";
import Admin from "./pages/Operations/Admin";
import Systems from "./pages/Operations/Systems";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>

          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* Culinary Module */}
          <Route path="/culinary" element={<Culinary />} />
          <Route path="/culinary/batch" element={<BatchLogic />} />
          <Route path="/culinary/pricing" element={<Pricing />} />
          <Route path="/culinary/yields" element={<Yields />} />
          <Route path="/culinary/ingredients" element={<Ingredients />} />
          <Route path="/culinary/framework" element={<RecipeFramework />} />

          {/* Service Module */}
          <Route path="/service" element={<Service />} />
          <Route path="/service/guiltyfork" element={<GuiltyFork />} />

          {/* Binder System */}
          <Route path="/binder" element={<BinderHome />} />
          <Route path="/binder/culinary" element={<CulinaryIndex />} />
          <Route path="/binder/service" element={<ServiceIndex />} />
          <Route path="/binder/operations" element={<OperationsIndex />} />

          {/* Operations Module */}
          <Route path="/operations" element={<OperationsDashboard />} />
          <Route path="/operations/checklists" element={<Checklists />} />
          <Route path="/operations/admin" element={<Admin />} />
          <Route path="/operations/systems" element={<Systems />} />

          {/* Bundle Builder */}
          <Route path="/bundle" element={<Bundle />} />

        </Routes>
      </Layout>
    </Router>
  );
}

export default App;