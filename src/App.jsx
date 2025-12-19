import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import Culinary from "./pages/Culinary";
import Service from "./pages/Service";
import Operations from "./pages/Operations";
import Bundle from "./pages/Bundle";

import BatchLogic from "./pages/Culinary/BatchLogic";
import Pricing from "./pages/Culinary/Pricing";
import Yields from "./pages/Culinary/Yields";
import Ingredients from "./pages/Culinary/Ingredients";
import RecipeFramework from "./pages/Culinary/RecipeFramework";

import ServiceDashboard from "./pages/Service/ServiceDashboard";
import GuiltyFork from "./pages/Service/GuiltyFork";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
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

          {/* Other Pages */}
          <Route path="/operations" element={<Operations />} />
          <Route path="/bundle" element={<Bundle />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;