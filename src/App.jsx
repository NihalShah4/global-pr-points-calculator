import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import CanadaPR from "./pages/CanadaPR.jsx";
import AustraliaPR from "./pages/AustraliaPR.jsx";
import NewZealandPR from "./pages/NewZealandPR.jsx";
import UKPR from "./pages/UKPR.jsx";
import GermanyPR from "./pages/GermanyPR.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <Router>
      <div
        style={{
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          background: "#020617",
          color: "#e5e7eb",
        }}
      >
        <Navbar />

        <div style={{ flex: 1, width: "100%" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/canada" element={<CanadaPR />} />
            <Route path="/australia" element={<AustraliaPR />} />
            <Route path="/new-zealand" element={<NewZealandPR />} />
            <Route path="/uk" element={<UKPR />} />
            <Route path="/germany" element={<GermanyPR />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
