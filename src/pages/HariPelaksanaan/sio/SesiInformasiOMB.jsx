import React from "react";
import "../hariHariPelaksanaan.scss";

import SIO2 from "../../../components/gallery/Sio"
import Header from "../../../components/header/Header";
import TopInfo from "../../../components/top-info/TopInfo";
import AksesDrive from "../../../components/aksesDrive/aksesDrive";
import FloatingParticle from "../../../components/particles/FloatingParticle";

import DriveIcon from "../../../images/meliora/icon/download-drive-icon.png";
import MelioraYellow from '../../../images/logo/meliora yellow.svg'


function SesiInformasiOMB() {
  return (
    <div className="main-container">
     <div className="margin_layout">
      <TopInfo />
      </div>
      <div className="galeri">
            <Header
                image={MelioraYellow}
                top='Sesi Informasi OMB'
                bottom='Sesi Informasi Orientasi Mahasiswa Baru yang dilaksanakan oleh divisi Caksana atau <i>Public Relations </i> bertujuan untuk memberikan seluruh informasi agar peserta dapat mempersiapkan kebutuhan rangkaian OMB UMN 2024.'
            />
           <AksesDrive background="linear-gradient(144deg,rgba(224, 172, 86, 1)  0%, rgba(221, 198, 175, 1) 100%)" href="https://www.youtube.com/@OMBUMN" />
          <SIO2 />
          <FloatingParticle />
      </div>
      <div className="white-space"></div>
    </div>
  );
}

export default SesiInformasiOMB;
