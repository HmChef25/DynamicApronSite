import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import NavBar from "./components/NavBar";
import Dashboard from "./pages/Dashboard";
import Culinary from "./pages/Culinary";
import Service from "./pages/Service";
import Operations from "./pages/Operations";
import BinderHome from "./pages/Binder/BinderHome";

export default function App() {
  return (
    <Router>
      <div style={styles.appContainer}>
        <Sidebar />

        <div style={styles.mainContent}>
          <NavBar />

          <div style={styles.pageWrapper}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/culinary" element={<Culinary />} />
              <Route path="/service" element={<Service />} />
              <Route path="/operations" element={<Operations />} />
              <Route path="/binder" element={<BinderHome />} />
            </Routes>
          </div>
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
    marginLeft: "240px", // matches your sidebar width
  },
  pageWrapper: {
    padding: "2rem",
  },
};
