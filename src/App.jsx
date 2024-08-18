import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import pages
import HariPelaksanaan from "./pages/HariPelaksanaan/HariPelaksanaan";
import Error from "./pages/error/Error";
import Galeri from "./pages/galeri-meliora/galeri"

// import components
import NavigationBar from "./components/navbar/NavigationBar";

function App() {
  return (
    <div className="omb">
      <Router>
        <Routes>
          <Route path="/" element={<HariPelaksanaan />} />
          <Route path="*" element={<Error />} />
          <Route path="/galeri" element={<Galeri />} />
        </Routes>
        <NavigationBar />
      </Router>
    </div>
  );
}

export default App;
