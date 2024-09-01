import React, { useEffect } from "react";
import "./PerkembanganHariDua.scss";

import BackButton from "../../../components/backButton/BackButton";

import PerkembanganHari2 from "../../../components/gallery/GalleryHari2";
import Header from "../../../components/header/Header";
import FloatingParticle from "../../../components/particles/FloatingParticle";

import MelioraYellow from '../../../images/logo/meliora yellow.svg'

const PerkembanganHariDua = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="perkembangan-hari-1">
      <BackButton />
      <Header 
        image={MelioraYellow}
        top="Perkembangan Hari 2"
        bottom="Bibit yang telah disemai kini kokoh, siap mewujudkan impian. Setiap tahapan memastikan peserta menjadi individu percaya diri yang berbekal semangat sesuai dengan konsep ‘Tidak Ada Tentang Kita, Tanpa Kita’."
      />
      <PerkembanganHari2 />
      <FloatingParticle />
    </div>
  );
}

export default PerkembanganHariDua;