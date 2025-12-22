import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

// Core Pages
import HomePage from "./pages/HomePage";
import CulinaryPage from "./pages/CulinaryPage";
import ServicePage from "./pages/ServicePage";
import OperationsPage from "./pages/OperationsPage";
import BundlesPage from "./pages/BundlesPage";

// Intelligence Layer Pages
import BinderIndex from "./components/BinderIndex";
import SOPPage from "./components/SOPPage";
import CreateSOPPage from "./components/CreateSOPPage";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>

          {/* Main Pages */}
          <Route path="/" element={<HomePage />} />
          <Route path="/culinary" element={<CulinaryPage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/operations" element={<OperationsPage />} />
          <Route path="/bundle" element={<BundlesPage />} />

          {/* Binder + SOP Intelligence */}
          <Route path="/binder" element={<BinderIndex />} />
          <Route path="/sop/:id" element={<SOPPage />} />
          <Route path="/sop/create" element={<CreateSOPPage />} />

        </Routes>
      </Layout>
    </Router>
  );
}