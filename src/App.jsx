import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import pages
import HariPelaksanaan from "./pages/HariPelaksanaan/HariPelaksanaan";
import Error from "./pages/error/Error";
import Galeri from "./pages/galeri-meliora/galeri"

// import components
import NavigationBar from "./components/navbar/NavigationBar";
import SayembaraVisual from "./pages/SayembaraVisual";

function App() {
  return (
    <div className="omb">
      <Router>
        <Routes>
          <Route path="/" element={<HariPelaksanaan />} />
          <Route path="/galeri" element={<Galeri />} />
          <Route path="/sayembara-visual" element={<SayembaraVisual />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <NavigationBar />
      </Router>
    </div>
  );
}

export default App;
