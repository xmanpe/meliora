import React from "react";
import "./SesiInformasiOMB.scss";

import SIO from '../../../components/gallery/GallerySIO';
import Header from "../../../components/header/Header";
import FloatingParticle from "../../../components/particles/FloatingParticle";
import MelioraYellow from '../../../images/logo/meliora yellow.svg'

const SesiInformasiOMB = () => {
  return (
    <div className="sio">
      <Header 
        image={MelioraYellow}
        top="Sesi Informasi OMB"
        bottom="Sesi Informasi Orientasi Mahasiswa Baru yang dilaksanakan oleh divisi Caksana atau <i>Public Relations </i> bertujuan untuk memberikan seluruh informasi agar peserta dapat mempersiapkan kebutuhan rangkaian OMB UMN 2024."
      />
      <SIO />
      <FloatingParticle />
    </div>
  );
}
 
export default SesiInformasiOMB;
