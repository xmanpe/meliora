import React, { useEffect } from "react";
import './HariPelaksanaan/perkembangan-hari-1/PerkembanganHariSatu.scss';

import GalleryDK from "../components/gallery/GalleryDK";
import Header from "../components/header/Header";
import FloatingParticle from "../components/particles/FloatingParticle";

const DiBalikKepanitiaan = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="perkembangan-hari-1">
      <Header 
        top="Dibalik Kepanitiaan"
      />
      <GalleryDK />
      <FloatingParticle />
    </div>
  );
}

export default DiBalikKepanitiaan;