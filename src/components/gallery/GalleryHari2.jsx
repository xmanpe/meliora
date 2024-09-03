import React, { useState } from "react";
import "./Gallery.scss";

import ImageModal from "../imageModal/ImageModal";

import h1 from "../../images/meliora/foto/hari2/Perkembangan Hari 2_Allison-86.jpg";
import h2 from "../../images/meliora/foto/hari2/Perkembangan Hari 2_Allison-130.jpg";
import h3 from "../../images/meliora/foto/hari2/Perkembangan Hari 2_Andrew Su-7.jpg";
import h4 from "../../images/meliora/foto/hari2/Perkembangan Hari 2_Andrew Su-67.jpg";
import h5 from "../../images/meliora/foto/hari2/Perkembangan Hari 2_Andrew Su-166.jpg";
import h6 from "../../images/meliora/foto/hari2/Perkembangan Hari 2_Andrew Su-151.jpg";
import h7 from "../../images/meliora/foto/hari2/Perkembangan Hari 2_Andrew Su-134.jpg";
import h8 from "../../images/meliora/foto/hari2/Perkembangan Hari 2_Andrew Su-109.jpg";
import h9 from "../../images/meliora/foto/hari2/Perkembangan Hari 2_Maria Cahaya-8.jpg";
import h10 from "../../images/meliora/foto/hari2/Perkembangan Hari 2_Maria Cahaya-45.jpg";
import h11 from "../../images/meliora/foto/hari2/Perkembangan Hari 2_Rether_10.jpg";
import h12 from "../../images/meliora/foto/hari2/Perkembangan Hari 2_Rether_11.jpg";
import h13 from "../../images/meliora/foto/hari2/Perkembangan Hari 2_Rether_16.jpg";
import h14 from "../../images/meliora/foto/hari2/Perkembangan Hari 2_Rether_30.jpg";
import h15 from "../../images/meliora/foto/hari2/Perkembangan Hari 2_Rether_62.jpg";
import h16 from "../../images/meliora/foto/hari2/Perkembangan Hari 2_Rether_9.jpg";
import h17 from "../../images/meliora/foto/hari2/Perkembangan Hari 2_Steven Hans_130.jpg";
import h18 from "../../images/meliora/foto/hari2/Perkembangan Hari 2_Steven Hans_201.jpg";
import h19 from "../../images/meliora/foto/hari2/Perkembangan Hari 2_Steven Hans_221.jpg";
import h20 from "../../images/meliora/foto/hari2/Perkembangan Hari 2_Steven Hans_24.jpg";
import h21 from "../../images/meliora/foto/hari2/Perkembangan Hari 2_Steven Hans_268.jpg";
import h22 from "../../images/meliora/foto/hari2/Perkembangan Hari 2_Steven Hans_280.jpg";
import h23 from "../../images/meliora/foto/hari2/Perkembangan Hari 2_Steven Hans_300.jpg";
import h24 from "../../images/meliora/foto/hari2/Perkembangan Hari 2_Steven Hans_310.jpg";
import h25 from "../../images/meliora/foto/hari2/Perkembangan Hari 2_Steven Hans_60.jpg";
import h26 from "../../images/meliora/foto/hari2/Perkembangan Hari 2_Andrew Su-91.jpg";

import h27 from '../../images/meliora/foto/hari2/adds/tambah1.jpeg';
import h28 from '../../images/meliora/foto/hari2/adds/tambah2.jpeg';
import h29 from '../../images/meliora/foto/hari2/adds/tambah3.jpeg';
import h30 from '../../images/meliora/foto/hari2/adds/tambah4.jpeg';
import h31 from '../../images/meliora/foto/hari2/adds/tambah5.jpeg';
import h32 from '../../images/meliora/foto/hari2/adds/tambah6.jpeg';
import h33 from '../../images/meliora/foto/hari2/adds/tambah7.jpeg';
import h34 from '../../images/meliora/foto/hari2/adds/tambah8.jpeg';
import h35 from '../../images/meliora/foto/hari2/adds/tambah9.jpeg';
import h36 from '../../images/meliora/foto/hari2/adds/tambah10.jpeg';
import h37 from '../../images/meliora/foto/hari2/adds/tambah11.jpeg';
import h38 from '../../images/meliora/foto/hari2/adds/tambah12.jpeg';
import h39 from '../../images/meliora/foto/hari2/adds/tambah13.jpeg';
import h40 from '../../images/meliora/foto/hari2/adds/tambah14.jpeg';
import h41 from '../../images/meliora/foto/hari2/adds/tambah15.jpeg';
import h42 from '../../images/meliora/foto/hari2/adds/tambah16.jpeg';
import h43 from '../../images/meliora/foto/hari2/adds/tambah17.jpeg';
import h44 from '../../images/meliora/foto/hari2/adds/tambah18.jpeg';
import h45 from '../../images/meliora/foto/hari2/adds/tambah19.jpeg';
import h46 from '../../images/meliora/foto/hari2/adds/tambah20.jpeg';
import h47 from '../../images/meliora/foto/hari2/adds/tambah21.jpeg';
import h48 from '../../images/meliora/foto/hari2/adds/tambah22.jpeg';
import h49 from '../../images/meliora/foto/hari2/adds/tambah23.jpeg';
import h50 from '../../images/meliora/foto/hari2/adds/tambah24.jpeg';
import h51 from '../../images/meliora/foto/hari2/adds/tambah25.jpeg';
import h52 from '../../images/meliora/foto/hari2/adds/tambah26.jpeg';
import h53 from '../../images/meliora/foto/hari2/adds/tambah27.jpeg';
import h54 from '../../images/meliora/foto/hari2/adds/tambah28.jpeg';
import h55 from '../../images/meliora/foto/hari2/adds/tambah29.jpeg';
import h56 from '../../images/meliora/foto/hari2/adds/tambah30.jpeg';
import h57 from '../../images/meliora/foto/hari2/adds/tambah31.jpeg';
import h58 from '../../images/meliora/foto/hari2/adds/tambah32.jpeg';
import h59 from '../../images/meliora/foto/hari2/adds/tambah33.jpeg';
import h60 from '../../images/meliora/foto/hari2/adds/tambah34.jpeg';
import h61 from '../../images/meliora/foto/hari2/adds/tambah35.jpeg';
import h62 from '../../images/meliora/foto/hari2/adds/tambah36.jpeg';
import h63 from '../../images/meliora/foto/hari2/adds/tambah37.jpeg';
import h64 from '../../images/meliora/foto/hari2/adds/tambah38.jpeg';
import h65 from '../../images/meliora/foto/hari2/adds/tambah39.jpeg';
import h66 from '../../images/meliora/foto/hari2/adds/tambah40.jpeg';
import h67 from '../../images/meliora/foto/hari2/adds/tambah41.jpeg';
import h68 from '../../images/meliora/foto/hari2/adds/tambah42.jpeg';
import h69 from '../../images/meliora/foto/hari2/adds/tambah43.jpeg';
import h70 from '../../images/meliora/foto/hari2/adds/tambah44.jpeg';
import h71 from '../../images/meliora/foto/hari2/adds/tambah45.jpeg';
import h72 from '../../images/meliora/foto/hari2/adds/tambah46.jpeg';
import h73 from '../../images/meliora/foto/hari2/adds/tambah47.jpeg';


const hari2 = [
  h1, h2, h3, h4, h5, h6, h7, h8, h9, h10, h11, h12, h13, h14, h15, h16, h17, h18, h19, h20,
  h21, h22, h23, h24, h25, h26, h27, h28, h29, h30, h31, h32, h33, h34, h35, h36, h37, h38,
  h39, h40, h41, h42, h43, h44, h45, h46, h47, h48, h49, h50, h51, h52, h53, h54, h55, h56,
  h57, h58, h59, h60, h61, h62, h63, h64, h65, h66, h67, h68, h69, h70, h71, h72, h73
];



function GalleryHari2() {
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
    const currentIndex = hari2.indexOf(currentImage);
    if (currentIndex < hari2.length - 1) {
      setCurrentImage(hari2[currentIndex + 1]);
    }
  };

  const prevImage = () => {
    const currentIndex = hari2.indexOf(currentImage);
    if (currentIndex > 0) {
      setCurrentImage(hari2[currentIndex - 1]);
    }
  };

  const selectImage = (image) => {
    setCurrentImage(image);
  };

  return (
    <div className='galeri-main'>
      {hari2.map((image, index) => (
        <div 
          key={index}
          className="each-photo"
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
        images={hari2}
      />
    </div>
  );
}

export default GalleryHari2;