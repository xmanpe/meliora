import React, { useEffect } from "react";
import "./HariPemupukan.scss";

import HariPemupukan from '../../../components/gallery/GalleryPemupukan';
import Header from "../../../components/header/Header";
import FloatingParticle from "../../../components/particles/FloatingParticle";

import MelioraYellow from '../../../images/logo/meliora yellow.svg'

import BackButton from "../../../components/backButton/BackButton";

const HariPemupukanPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="hari-pemupukan">
      <BackButton />
      <Header 
        image={MelioraYellow}
        top="Hari Pemupukan"
        bottom="Pada rangkaian ini, peserta lebih mengenal dan mendapatkan informasi tambahan mengenai OMB UMN 2024 agar lebih siap mengikuti rangkaian secara luring/offline."
      />
      <HariPemupukan />
      <FloatingParticle />
    </div>
  );
}
 
export default HariPemupukanPage;