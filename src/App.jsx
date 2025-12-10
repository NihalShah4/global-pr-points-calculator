import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CanadaPR from "./pages/CanadaPR";
import AustraliaPR from "./pages/AustraliaPR";
import NewZealandPR from "./pages/NewZealandPR";
import UKPR from "./pages/UKPR";
import GermanyPR from "./pages/GermanyPR";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/canada" element={<CanadaPR />} />
        <Route path="/australia" element={<AustraliaPR />} />
        <Route path="/new-zealand" element={<NewZealandPR />} />
        <Route path="/uk" element={<UKPR />} />
        <Route path="/germany" element={<GermanyPR />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
