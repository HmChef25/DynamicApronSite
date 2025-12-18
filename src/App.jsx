// src/App.jsx
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Culinary from "./pages/Culinary";
import Service from "./pages/Service";
import Operations from "./pages/Operations";
import BundleBuilder from "./pages/BundleBuilder";
import NavBar from "./components/Shared/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/culinary" element={<Culinary />} />
        <Route path="/service" element={<Service />} />
        <Route path="/operations" element={<Operations />} />
        <Route path="/bundle" element={<BundleBuilder />} />
      </Routes>
    </Router>
  );
}

export default App;