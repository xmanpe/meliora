import React, { useEffect } from "react";
import "./PerkembanganHariSatu.scss";

import PerkembanganHari1 from "../../../components/gallery/GalleryHari1";
import Header from "../../../components/header/Header";
import FloatingParticle from "../../../components/particles/FloatingParticle";

import MelioraYellow from '../../../images/logo/meliora yellow.svg'

const PerkembanganHariSatu = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="perkembangan-hari-1">
      <Header 
        image={MelioraYellow}
        top="Perkembangan Hari 1"
        bottom="Setelah mendapatkan informasi pada Sesi Informasi OMB dan Hari Pemupukan, peserta akan mengikuti Perkembangan Hari 1 untuk lebih mengenal lingkungan kampus."
      />
      <PerkembanganHari1 />
      <FloatingParticle />
    </div>
  );
}

export default PerkembanganHariSatu;