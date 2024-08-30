import React from "react";
import "../hariHariPelaksanaan.scss";
import SidangTerbukaSenat from "../../../components/gallery/stsGaleri";
import Header from "../../../components/header/Header";
import TopInfo from "../../../components/top-info/TopInfo";
import AksesDrive from "../../../components/aksesDrive/aksesDrive";
import FloatingParticle from "../../../components/particles/FloatingParticle";

import DriveIcon from "../../../images/meliora/icon/download-drive-icon.png";
import MelioraYellow from '../../../images/logo/meliora yellow.svg'


function SidangTerbukaSenatPage() {
  return (
    <div className="main-container">
      <TopInfo />
      <div className="galeri">
            <Header
                image={MelioraYellow}
                top='Sidang Terbuka Senat'
                bottom='Sidang Terbuka Senat menandai langkah awal bagi mahasiswa baru Universitas Multimedia Nusantara angkatan 2024. Rektor UMN, Dr. Ninok Leksono, secara resmi meresmikan status para Pejuang Lotus Biru sebagai mahasiswa. '
            />
           <AksesDrive background="linear-gradient(144deg,rgba(224, 172, 86, 1)  0%, rgba(221, 198, 175, 1) 100%)" href="https://www.youtube.com/@OMBUMN" />
          <SidangTerbukaSenat />
          <FloatingParticle />
      </div>
      <div className="white-space"></div>
    </div>
  );
}

export default SidangTerbukaSenatPage;
