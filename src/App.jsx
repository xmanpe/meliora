import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import pages
import HariPelaksanaan from "./pages/HariPelaksanaan/HariPelaksanaan";
import Error from "./pages/error/Error";
import Galeri from "./pages/galeri-meliora/galeri";
import Pemupukan from "./pages/galeri-meliora/Pemupukan";
import Hari1 from "./pages/galeri-meliora/Hari1";
import Hari2 from "./pages/galeri-meliora/Hari2";

// import components
import NavigationBar from "./components/navbar/NavigationBar";
import SayembaraVisual from "./pages/SayembaraVisual";

function App() {
  return (
    <div className="omb">
      <Router>
        <Routes>
          <Route path="/" element={<HariPelaksanaan />} />
          <Route path="*" element={<Error />} />
          <Route path="/SIO" element={<Galeri />} />
          <Route path="/Pemupukan" element={<Pemupukan />} />
          <Route path="/Perkembangan-hari-1" element={<Hari1 />} />
          <Route path="/Perkembangan-hari-2" element={<Hari2 />} />
          <Route path="/sayembara-visual" element={<SayembaraVisual />} />
        </Routes>
        <NavigationBar />
      </Router>
    </div>
  );
}

export default App;
