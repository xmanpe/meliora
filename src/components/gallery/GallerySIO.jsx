import React, { useState } from "react";
import './Gallery.scss';

import ImageModal from "../imageModal/ImageModal";

//sio
import sio1 from "../../images/meliora/foto/SIO/Sesi Informasi OMB_Allison_Edited_2.jpg"
import sio2 from "../../images/meliora/foto/SIO/Sesi Informasi OMB_Salman_6.jpg"
import sio3 from "../../images/meliora/foto/SIO/Sesi Informasi OMB_Salman_9.jpg"
import sio4 from "../../images/meliora/foto/SIO/SIO_Andrew Su_ 8.jpg"
import sio5 from "../../images/meliora/foto/SIO/SIO_Baskara_Rether_5.jpg"
import sio6 from "../../images/meliora/foto/SIO/SIO_Diana Angyulia_7.jpg"
import sio7 from "../../images/meliora/foto/SIO/SIO_Kristian Delon_2.jpg"
import sio8 from "../../images/meliora/foto/SIO/SIO_Kristian Delon_9.jpg"
import sio9 from "../../images/meliora/foto/SIO/SIO_Maria Cahaya_2.jpg"
import sio10 from "../../images/meliora/foto/SIO/SIO_Qhedy_2.jpg"
import sio11 from "../../images/meliora/foto/SIO/SIO_Ravalen Virginia_3.jpg"
import sio12 from "../../images/meliora/foto/SIO/SIO_Steven Hans_5.jpg"
import sio13 from "../../images/meliora/foto/SIO/SIO_Steven Hans_8.jpg"
import sio14 from "../../images/meliora/foto/SIO/SIO_Valentino Kriswahyudi_5.jpg"
import sio15 from "../../images/meliora/foto/SIO/SIO_Diana Angyulia_3.jpg"
import sio16 from "../../images/meliora/foto/SIO/SIO_Diana Angyulia_5.jpg"
import sio17 from "../../images/meliora/foto/SIO/SIO_Diana Angyulia_8.jpg"
import sio18 from "../../images/meliora/foto/SIO/SIO_Baskara_Rether_3.jpg"
import sio19 from "../../images/meliora/foto/SIO/SIO_Ravalen Virginia_1.jpg"
import sio20 from "../../images/meliora/foto/SIO/SIO_Kristian Delon_5.jpg"
import sio21 from "../../images/meliora/foto/SIO/SIO_Qhedy_1.jpg"
import sio22 from "../../images/meliora/foto/SIO/SIO_Qhedy_5.jpg"
import sio23 from "../../images/meliora/foto/SIO/SIO_Valentino Kriswahyudi_3.jpg"
import sio24 from "../../images/meliora/foto/SIO/SIO_Valentino Kriswahyudi_8.jpg"
import sio25 from "../../images/meliora/foto/SIO/SIO_Ravalen Virginia_10.jpg"
import sio26 from "../../images/meliora/foto/SIO/SIO_Steven Hans_1.jpg"

import sio27 from '../../images/meliora/foto/SIO/adds/tambah1.jpeg';
import sio28 from '../../images/meliora/foto/SIO/adds/tambah2.jpeg';
import sio29 from '../../images/meliora/foto/SIO/adds/tambah3.jpeg';
import sio31 from '../../images/meliora/foto/SIO/adds/tambah5.jpeg';
import sio32 from '../../images/meliora/foto/SIO/adds/tambah6.jpeg';
import sio33 from '../../images/meliora/foto/SIO/adds/tambah7.jpeg';
import sio34 from '../../images/meliora/foto/SIO/adds/tambah8.jpeg';
import sio35 from '../../images/meliora/foto/SIO/adds/tambah9.jpeg';

const sioImages = [sio1, sio2, sio3, sio4, sio5, sio6, sio7, sio8, sio9, sio10, sio11, sio12, sio13, sio14, sio15, sio16, sio17, sio18, sio19, sio20, sio21, sio22, sio23, sio24, sio25, sio26, sio27, sio28, sio29, sio31, sio32, sio33, sio34, sio35];

function GallerySIO() {
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
    const currentIndex = sioImages.indexOf(currentImage);
    if (currentIndex < sioImages.length - 1) {
      setCurrentImage(sioImages[currentIndex + 1]);
    }
  };

  const prevImage = () => {
    const currentIndex = sioImages.indexOf(currentImage);
    if (currentIndex > 0) {
      setCurrentImage(sioImages[currentIndex - 1]);
    }
  };

  const selectImage = (image) => {
    setCurrentImage(image);
  };

  return (
    <div className="galeri-main">
      {sioImages.map((image, index) => (
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
        images={sioImages}
      />
    </div>
  );
}

export default GallerySIO;
