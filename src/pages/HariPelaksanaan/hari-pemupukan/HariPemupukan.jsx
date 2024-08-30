import React from "react";
import "../hariHariPelaksanaan.scss";
import Pemupukan from "../../../components/gallery/PemupukanFoto"
import Header from "../../../components/header/Header";
import TopInfo from "../../../components/top-info/TopInfo";
import AksesDrive from "../../../components/aksesDrive/aksesDrive";
import FloatingParticle from "../../../components/particles/FloatingParticle";

import DriveIcon from "../../../images/meliora/icon/download-drive-icon.png";
import MelioraYellow from '../../../images/logo/meliora yellow.svg'


function HariPemupukanPage() {
  return (
    <div className="main-container">
     <div className="margin_layout">
      <TopInfo />
      </div>
      <div className="galeri">
            <Header
                image={MelioraYellow}
                top='Hari Pemupukan'
                bottom='Pada rangkaian ini, peserta lebih mengenal dan mendapatkan informasi tambahan mengenai OMB UMN 2024 agar lebih siap mengikuti rangkaian secara luring/<i>offline.</i>'
            />
           <AksesDrive background="linear-gradient(144deg,rgba(224, 172, 86, 1)  0%, rgba(221, 198, 175, 1) 100%)" href="https://www.youtube.com/@OMBUMN" />
          <Pemupukan />
          <FloatingParticle />
      </div>
      <div className="white-space"></div>
    </div>
  );
}

export default HariPemupukanPage;
