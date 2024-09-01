import React, { useEffect } from "react";
import "./SidangTerbukaSenat.scss";

import BackButton from "../../../components/backButton/BackButton";

import SidangTerbukaSenat from "../../../components/gallery/GallerySTS";
import Header from "../../../components/header/Header";
import FloatingParticle from "../../../components/particles/FloatingParticle";

import MelioraYellow from '../../../images/logo/meliora yellow.svg'

const HariSTS = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="hari-sts">
      <BackButton />
      <Header 
        image={MelioraYellow}
        top="Sidang Terbuka Senat"
        bottom="Sidang Terbuka Senat menandai langkah awal bagi mahasiswa baru Universitas Multimedia Nusantara angkatan 2024. Rektor UMN, Dr. Ninok Leksono, secara resmi meresmikan status para Pejuang Lotus Biru sebagai mahasiswa."
      />
      <SidangTerbukaSenat />
      <FloatingParticle />
    </div>
  );
}
 
export default HariSTS;
