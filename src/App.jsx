import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import CulinaryPage from "./pages/CulinaryPage";
import ServicePage from "./pages/ServicePage";
import OperationsPage from "./pages/OperationsPage";
import BundlesPage from "./pages/BundlesPage";
import BinderIndex from "./components/BinderIndex";
import SOPPage from "./components/SOPPage";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/culinary" element={<CulinaryPage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/operations" element={<OperationsPage />} />
          <Route path="/binder" element={<BinderIndex />} />
          <Route path="/bundle" element={<BundlesPage />} />
          <Route path="/sop/:id" element={<SOPPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}