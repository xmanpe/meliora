import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";

// import pages
import HariPelaksanaan from "./pages/HariPelaksanaan/HariPelaksanaan";
import Home from "./pages/home/Home";
import Galeri from "./pages/galeri-meliora/galeri";
import Pemupukan from "./pages/galeri-meliora/Pemupukan";
import Hari1 from "./pages/galeri-meliora/Hari1";
import Hari2 from "./pages/galeri-meliora/Hari2";
import Error from "./pages/error/Error";

// import components
import SayembaraVisual from "./pages/SayembaraVisual";
import BottomNavbar from "./components/bottomnav/BottomNav";
import STS from "./pages/galeri-meliora/STS";

function App() {
  return (
    <div className="omb">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hari-pelaksanaan" element={<HariPelaksanaan />} />
          <Route path="/hari-pelaksanaan/sio" element={<Galeri />} />
          <Route path="/hari-pelaksanaan/hari-pemupukan" element={<Pemupukan />} />
          <Route path="/hari-pelaksanaan/perkembangan-hari-1" element={<Hari1 />} />
          <Route path="/hari-pelaksanaan/perkembangan-hari-2" element={<Hari2 />} />
          <Route path="/hari-pelaksanaan/sidang-terbuka-senat" element={<STS />} />
          <Route path="/sayembara-visual" element={<SayembaraVisual />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <BottomNavbarWithPathCheck />
      </Router>
    </div>
  );
}

const BottomNavbarWithPathCheck = () => {
  const location = useLocation();
  
  return (
    <>
      {location.pathname !== '/' && <BottomNavbar />}
    </>
  );
};

export default App;
