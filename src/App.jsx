import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";

// import pages
import HariPelaksanaan from "./pages/HariPelaksanaan/HariPelaksanaan";
import FotoDivisi from "./pages/FotoDivisi";
import Home from "./pages/home/Home";
import SesiInformasiOMB from "./pages/HariPelaksanaan/sio/SesiInformasiOMB";
import HariPemupukan from "./pages/HariPelaksanaan/hari-pemupukan/HariPemupukan";
import PerkembanganHari1 from "./pages/HariPelaksanaan/perkembangan-hari-1/PerkembanganHariSatu";
import PerkembanganHari2 from "./pages/HariPelaksanaan/perkembangan-hari-2/PerkembanganHariDua";
import SidangTerbukaSenat from "./pages/HariPelaksanaan/sidang-terbuka-senat/SidangTerbukaSenat";
import Error from "./pages/error/Error";

// import components
import SayembaraVisual from "./pages/SayembaraVisual";
import TopInfo from "./components/top-info/TopInfo";
// import BottomNavbar from "./components/bottomnav/BottomNav";
import NavigationBar from "./components/navbar/NavigationBar";

function App() {
  return (
    <div className="omb">
      <Router>
        <TopInfo />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hari-pelaksanaan" element={<HariPelaksanaan />} />
          <Route path="/hari-pelaksanaan/sio" element={<SesiInformasiOMB/>} />
          <Route path="/hari-pelaksanaan/hari-pemupukan" element={<HariPemupukan />} />
          <Route path="/hari-pelaksanaan/perkembangan-hari-1" element={<PerkembanganHari1 />} />
          <Route path="/hari-pelaksanaan/perkembangan-hari-2" element={<PerkembanganHari2 />} />
          <Route path="/hari-pelaksanaan/sidang-terbuka-senat" element={<SidangTerbukaSenat />} />
          <Route path="/foto-divisi" element={<FotoDivisi />} />
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
      {location.pathname !== '/' && <NavigationBar />}
    </>
  );
};

export default App;
