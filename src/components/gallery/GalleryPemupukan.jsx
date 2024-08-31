import React, { useState } from "react";
import './Gallery.scss';

import ImageModal from "../imageModal/ImageModal";

// Import images
import mupuk1 from "../../images/meliora/foto/pemupukan/Andrew Su_Hari Pemupukan (1).jpg";
import mupuk2 from "../../images/meliora/foto/pemupukan/Andrew Su_Hari Pemupukan (7).jpg";
import mupuk3 from "../../images/meliora/foto/pemupukan/Andrew Su_Hari Pemupukan (8).jpg";
import mupuk4 from "../../images/meliora/foto/pemupukan/Hari Pemupukan_Allison_Edited_1.jpg";
import mupuk5 from "../../images/meliora/foto/pemupukan/Hari Pemupukan_Allison_Edited_2.jpg";
import mupuk6 from "../../images/meliora/foto/pemupukan/Hari Pemupukan_Allison_Edited_3.jpg";
import mupuk7 from "../../images/meliora/foto/pemupukan/Hari Pemupukan_Allison_Edited_4.jpg";
import mupuk8 from "../../images/meliora/foto/pemupukan/Hari Pemupukan_Allison_Edited_5.jpg";
import mupuk9 from "../../images/meliora/foto/pemupukan/Hari Pemupukan_Allison_Edited_6.jpg";
import mupuk10 from "../../images/meliora/foto/pemupukan/Hari Pemupukan_Allison_Edited_7.jpg";
import mupuk11 from "../../images/meliora/foto/pemupukan/Hari Pemupukan_Cahaya_4.jpg";
import mupuk12 from "../../images/meliora/foto/pemupukan/Hari Pemupukan_Cahaya_6.jpg";
import mupuk13 from "../../images/meliora/foto/pemupukan/Hari Pemupukan_Delon_3.jpg";
import mupuk14 from "../../images/meliora/foto/pemupukan/Hari Pemupukan_Delon_4.jpg";
import mupuk15 from "../../images/meliora/foto/pemupukan/Hari Pemupukan_Diana Angyulia_7.jpg";
import mupuk16 from "../../images/meliora/foto/pemupukan/Hari Pemupukan_Diana Angyulia_9.jpg";
import mupuk17 from "../../images/meliora/foto/pemupukan/Hari Pemupukan_Oxa_1.jpg";
import mupuk18 from "../../images/meliora/foto/pemupukan/Hari Pemupukan_Oxa_2.jpg";
import mupuk19 from "../../images/meliora/foto/pemupukan/Hari Pemupukan_Oxa_4.jpg";
import mupuk20 from "../../images/meliora/foto/pemupukan/Hari Pemupukan_Oxa_9.jpg";
import mupuk21 from "../../images/meliora/foto/pemupukan/Hari Pemupukan_Salman_5.jpg";
import mupuk22 from "../../images/meliora/foto/pemupukan/Hari Pemupukan_Salman_6.jpg";
import mupuk23 from "../../images/meliora/foto/pemupukan/Hari Pemupukan_Salman_7.jpg";
import mupuk24 from "../../images/meliora/foto/pemupukan/Hari Pemupukan_Steven Hans_6.jpg";
import mupuk25 from "../../images/meliora/foto/pemupukan/Hari Pemupukan_Valentino_1.jpg";
import mupuk26 from "../../images/meliora/foto/pemupukan/Qhedyzya Ricardiane_Hari Pemukupan_5.jpg";

const Pemupukan = [
  mupuk1, mupuk2, mupuk3, mupuk4, mupuk5, mupuk6, mupuk7, mupuk8, mupuk9, mupuk10, 
  mupuk11, mupuk12, mupuk13, mupuk14, mupuk15, mupuk16, mupuk17, mupuk18, mupuk19, 
  mupuk20, mupuk21, mupuk22, mupuk23, mupuk24, mupuk25, mupuk26
];

function GalleryPemupukan() {
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
    const currentIndex = Pemupukan.indexOf(currentImage);
    if (currentIndex < Pemupukan.length - 1) {
      setCurrentImage(Pemupukan[currentIndex + 1]);
    }
  };

  const prevImage = () => {
    const currentIndex = Pemupukan.indexOf(currentImage);
    if (currentIndex > 0) {
      setCurrentImage(Pemupukan[currentIndex - 1]);
    }
  };

  const selectImage = (image) => {
    setCurrentImage(image);
  };

  return (
    <div className="galeri-main">
      {Pemupukan.map((image, index) => (
        <div
          key={index}
          className="each-photo"
          onClick={() => openModal(image)}
        >
          <img src={image} alt={`Thumbnail ${index + 1}`} />
        </div>
      ))}
      <ImageModal
        isOpen={modalOpen}
        onClose={closeModal}
        currentImage={currentImage}
        onPrev={prevImage}
        onNext={nextImage}
        onSelectImage={selectImage}
        images={Pemupukan}
      />
    </div>
  );
}

export default GalleryPemupukan;
