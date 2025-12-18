import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import Culinary from "./pages/Culinary";
import Service from "./pages/Service";
import Operations from "./pages/Operations";
import Bundle from "./pages/Bundle";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/culinary" element={<Culinary />} />
          <Route path="/service" element={<Service />} />
          <Route path="/operations" element={<Operations />} />
          <Route path="/bundle" element={<Bundle />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;