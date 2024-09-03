import React, { useState } from "react";
import "./Gallery.scss";

import ImageModal from "../imageModal/ImageModal";

import h1 from "../../images/meliora/foto/HARI1/Perkembangan Hari 1_Allison-1.jpg";
import h2 from "../../images/meliora/foto/HARI1/Perkembangan Hari 1_Allison-9.jpg";
import h3 from "../../images/meliora/foto/HARI1/Perkembangan Hari 1_Allison-13.jpg";
import h4 from "../../images/meliora/foto/HARI1/Perkembangan Hari 1_Allison-17.jpg";
import h5 from "../../images/meliora/foto/HARI1/Perkembangan Hari 1_Allison-55.jpg";
import h6 from "../../images/meliora/foto/HARI1/Perkembangan Hari 1_Andrew Su-57.jpg";
import h7 from "../../images/meliora/foto/HARI1/Perkembangan Hari 1_Andrew Su-73.jpg";
import h8 from "../../images/meliora/foto/HARI1/Perkembangan Hari 1_Delon_53.jpg";
import h9 from "../../images/meliora/foto/HARI1/Perkembangan Hari 1_Diana Angyulia_Foto Terbaik-7.jpg";
import h10 from "../../images/meliora/foto/HARI1/Perkembangan Hari 1_Maria Cahaya-3.jpg";
import h11 from "../../images/meliora/foto/HARI1/Perkembangan Hari 1_Maria Cahaya-5.jpg";
import h12 from "../../images/meliora/foto/HARI1/Perkembangan Hari 1_Maria Cahaya-17.jpg";
import h13 from "../../images/meliora/foto/HARI1/Perkembangan Hari 1_Maria Cahaya-19.jpg";
import h14 from "../../images/meliora/foto/HARI1/Perkembangan Hari 1_Maria Cahaya-34.jpg";
import h15 from "../../images/meliora/foto/HARI1/Perkembangan Hari 1_Rether_1.jpg";
import h16 from "../../images/meliora/foto/HARI1/Perkembangan Hari 1_Rether_31.jpg";
import h17 from "../../images/meliora/foto/HARI1/Perkembangan Hari 1_Steven Hans_174.jpg";
import h18 from "../../images/meliora/foto/HARI1/Perkembangan Hari 1_Valentino-17.jpg";
import h19 from "../../images/meliora/foto/HARI1/Perkembangan Hari 1_Valentino-80.jpg";
import h20 from "../../images/meliora/foto/HARI1/PerkembanganHari1_Ravalen Virginia-31.jpg";
import h21 from "../../images/meliora/foto/HARI1/PerkembanganHari1_Ravalen Virginia-58.jpg";
import h22 from "../../images/meliora/foto/HARI1/Qhedyzya Ricardiane_Perkembangan Hari 1  (13 of 77).jpg";
import h25 from "../../images/meliora/foto/HARI1/Qhedyzya Ricardiane_Perkembangan Hari 1  (32 of 77).jpg";
import h23 from "../../images/meliora/foto/HARI1/Qhedyzya Ricaridiane_Perkembangan hari 1 (1).jpg";
import h24 from "../../images/meliora/foto/HARI1/Perkembangan Hari 1_Allison-65.jpg";
import h26 from "../../images/meliora/foto/HARI1/tall/Perkembangan Hari 1_Delon_19.jpg";

import h27 from '../../images/meliora/foto/HARI1/adds/tambah1.jpeg';
import h28 from '../../images/meliora/foto/HARI1/adds/tambah2.jpeg';
import h29 from '../../images/meliora/foto/HARI1/adds/tambah3.jpeg';
import h30 from '../../images/meliora/foto/HARI1/adds/tambah4.jpeg';
import h31 from '../../images/meliora/foto/HARI1/adds/tambah5.jpeg';
import h32 from '../../images/meliora/foto/HARI1/adds/tambah6.jpeg';
import h33 from '../../images/meliora/foto/HARI1/adds/tambah7.jpeg';
import h34 from '../../images/meliora/foto/HARI1/adds/tambah8.jpeg';
import h35 from '../../images/meliora/foto/HARI1/adds/tambah9.jpeg';
import h36 from '../../images/meliora/foto/HARI1/adds/tambah10.jpeg';
import h37 from '../../images/meliora/foto/HARI1/adds/tambah11.jpeg';
import h38 from '../../images/meliora/foto/HARI1/adds/tambah12.jpeg';
import h39 from '../../images/meliora/foto/HARI1/adds/tambah13.jpeg';
import h40 from '../../images/meliora/foto/HARI1/adds/tambah14.jpeg';
import h41 from '../../images/meliora/foto/HARI1/adds/tambah15.jpeg';
import h42 from '../../images/meliora/foto/HARI1/adds/tambah16.jpeg';
import h43 from '../../images/meliora/foto/HARI1/adds/tambah17.jpeg';
import h44 from '../../images/meliora/foto/HARI1/adds/tambah18.jpeg';
import h45 from '../../images/meliora/foto/HARI1/adds/tambah19.jpeg';
import h46 from '../../images/meliora/foto/HARI1/adds/tambah20.jpeg';
import h47 from '../../images/meliora/foto/HARI1/adds/tambah21.jpeg';
import h48 from '../../images/meliora/foto/HARI1/adds/tambah22.jpeg';
import h49 from '../../images/meliora/foto/HARI1/adds/tambah23.jpeg';
import h50 from '../../images/meliora/foto/HARI1/adds/tambah24.jpeg';
import h51 from '../../images/meliora/foto/HARI1/adds/tambah25.jpeg';
import h52 from '../../images/meliora/foto/HARI1/adds/tambah26.jpeg';
import h53 from '../../images/meliora/foto/HARI1/adds/tambah27.jpeg';
import h54 from '../../images/meliora/foto/HARI1/adds/tambah28.jpeg';
import h55 from '../../images/meliora/foto/HARI1/adds/tambah29.jpeg';
import h56 from '../../images/meliora/foto/HARI1/adds/tambah30.jpeg';


const hari1 = [
  h1, h2, h3, h4, h5, h6, h7, h8, h9, h10, h11, h12, h13, h14, h15, h16, h17, h18, h19, h20,
  h21, h22, h23, h24, h25, h26, h27, h28, h29, h30, h31, h32, h33, h34, h35, h36, h37, h38,
  h39, h40, h41, h42, h43, h44, h45, h46, h47, h48, h49, h50, h51, h52, h53, h54, h55, h56
];

function GalleryHari1() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const openModal = (image) => {
    setCurrentImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentImage(null);
  };

  const nextImage = () => {
    const currentIndex = hari1.indexOf(currentImage);
    if (currentIndex < hari1.length - 1) {
      setCurrentImage(hari1[currentIndex + 1]);
    }
  };

  const prevImage = () => {
    const currentIndex = hari1.indexOf(currentImage);
    if (currentIndex > 0) {
      setCurrentImage(hari1[currentIndex - 1]);
    }
  };

  const selectImage = (image) => {
    setCurrentImage(image);
  };

  return (
    <div className='galeri-main'>
      {hari1.map((image, index) => (
        <div 
          className="each-photo"
          key={index}
          onClick={() => openModal(image)}
          >
          <img
            src={image}
            alt={`Thumbnail ${index + 1}`}
          />
        </div>
      ))}
      <ImageModal
        isOpen={modalOpen}
        onClose={closeModal}
        currentImage={currentImage}
        onPrev={prevImage}
        onNext={nextImage}
        onSelectImage={selectImage}
        images={hari1}
      />
    </div>
  );
}

export default GalleryHari1;