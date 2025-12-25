import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import NavBar from "./components/NavBar";
import Layout from "./components/Layout";

// Module Home Pages
import Dashboard from "./pages/Dashboard";
import Culinary from "./pages/Culinary";
import Service from "./pages/Service";
import Operations from "./pages/Operations";
import BinderHome from "./pages/Binder/BinderHome";

// Culinary Subpages
import Ingredients from "./pages/Culinary/Ingredients";
import Yields from "./pages/Culinary/Yields";
import BatchLogic from "./pages/Culinary/BatchLogic";
import Pricing from "./pages/Culinary/Pricing";
import RecipeFramework from "./pages/Culinary/RecipeFramework";

export default function App() {
  return (
    <Router>
      <div style={styles.appContainer}>
        <Sidebar />

        <div style={styles.mainContent}>
          <NavBar />

          <Layout>
            <Routes>
              {/* Dashboard */}
              <Route path="/" element={<Dashboard />} />

              {/* Module Home Pages */}
              <Route path="/culinary" element={<Culinary />} />
              <Route path="/service" element={<Service />} />
              <Route path="/operations" element={<Operations />} />
              <Route path="/binder" element={<BinderHome />} />

              {/* Culinary Subpages */}
              <Route path="/culinary/ingredients" element={<Ingredients />} />
              <Route path="/culinary/yields" element={<Yields />} />
              <Route path="/culinary/batch-logic" element={<BatchLogic />} />
              <Route path="/culinary/pricing" element={<Pricing />} />
              <Route
                path="/culinary/recipe-framework"
                element={<RecipeFramework />}
              />
            </Routes>
          </Layout>
        </div>
      </div>
    </Router>
  );
}

const styles = {
  appContainer: {
    display: "flex",
    height: "100vh",
    width: "100%",
  },
  mainContent: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    marginLeft: "240px",
  },
};
