import React from "react";
import "../HariPelaksanaan.scss";
import PerkembanganHari1 from "../../../components/gallery/hari1Galeri";
import Header from "../../../components/header/Header";
import TopInfo from "../../../components/top-info/TopInfo";
import AksesDrive from "../../../components/aksesDrive/aksesDrive";
import FloatingParticle from "../../../components/particles/FloatingParticle";

import DriveIcon from "../../../images/meliora/icon/download-drive-icon.png";
import MelioraYellow from '../../../images/logo/meliora yellow.svg'


function PerkembanganHari1Page() {
  return (
    <div className="main-container">
      <TopInfo />
      <div className="galeri">
            <Header
                image={MelioraYellow}
                top='Perkembangan Hari 1'
                bottom='Setelah mendapatkan informasi pada Sesi Informasi OMB dan Hari Pemupukan, peserta akan mengikuti Perkembangan Hari 1 untuk lebih mengenal lingkungan kampus.'
            />
           <AksesDrive background="linear-gradient(144deg,rgba(224, 172, 86, 1)  0%, rgba(221, 198, 175, 1) 100%)" href="https://www.youtube.com/@OMBUMN" />
          <PerkembanganHari1 />
          <FloatingParticle />
      </div>
      <div className="white-space"></div>
    </div>
  );
}

export default PerkembanganHari1Page;
